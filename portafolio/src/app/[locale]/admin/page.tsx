"use client"

import { useEffect, useState, useCallback } from "react"
import { useLocale, useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { docCategories, type DocItem, type DocCategory } from "@/data/documents"
import {
  Lock, LogOut, Upload, Trash2, FileText, Image as ImageIcon,
  ShieldAlert, Loader2, CheckCircle2, AlertCircle, ArrowLeft,
} from "lucide-react"

interface Status {
  adminConfigured: boolean
  blobConfigured: boolean
  authenticated: boolean
}

export default function AdminPage() {
  const t = useTranslations("admin")
  const locale = useLocale() as "es" | "en"

  const [status, setStatus] = useState<Status | null>(null)
  const [password, setPassword] = useState("")
  const [loginError, setLoginError] = useState("")
  const [loggingIn, setLoggingIn] = useState(false)
  const [docs, setDocs] = useState<DocItem[]>([])

  const refreshStatus = useCallback(async () => {
    try {
      const r = await fetch("/api/admin/status", { cache: "no-store" })
      setStatus(await r.json())
    } catch {
      setStatus({ adminConfigured: false, blobConfigured: false, authenticated: false })
    }
  }, [])

  const refreshDocs = useCallback(async () => {
    try {
      const r = await fetch("/api/documents", { cache: "no-store" })
      const d = await r.json()
      setDocs(d.documents ?? [])
    } catch {
      setDocs([])
    }
  }, [])

  useEffect(() => {
    refreshStatus()
    refreshDocs()
  }, [refreshStatus, refreshDocs])

  const login = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoggingIn(true)
    setLoginError("")
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    })
    setLoggingIn(false)
    if (r.ok) {
      setPassword("")
      await refreshStatus()
    } else {
      setLoginError(t("wrongPassword"))
    }
  }

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    await refreshStatus()
  }

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> {t("backHome")}
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-sage-deep text-white flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </span>
          <div>
            <h1 className="font-display text-3xl text-ink">{t("title")}</h1>
            <p className="text-ink-soft text-sm">{t("subtitle")}</p>
          </div>
        </div>

        {!status && (
          <div className="card p-8 mt-8 flex items-center justify-center text-ink-soft">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
        )}

        {status && !status.adminConfigured && (
          <NotConfigured title={t("notConfiguredTitle")} body={t("notConfigured")} />
        )}

        {status && status.adminConfigured && !status.authenticated && (
          <form onSubmit={login} className="card p-8 mt-8 max-w-md mx-auto">
            <label className="text-sm font-medium text-ink mb-2 block">{t("passwordLabel")}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("passwordPlaceholder")}
              className="w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-ink focus:border-sage focus:bg-paper outline-none transition-colors"
              autoFocus
            />
            {loginError && (
              <p className="mt-3 text-sm text-terracotta-deep flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> {loginError}
              </p>
            )}
            <Button type="submit" className="w-full mt-4" disabled={loggingIn}>
              {loggingIn ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
              {t("login")}
            </Button>
          </form>
        )}

        {status && status.authenticated && (
          <div className="mt-8 space-y-8">
            <div className="flex justify-end">
              <Button variant="secondary" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4" /> {t("logout")}
              </Button>
            </div>

            {!status.blobConfigured && (
              <NotConfigured title={t("notConfiguredTitle")} body={t("notConfigured")} />
            )}

            <UploadForm
              disabled={!status.blobConfigured}
              onUploaded={refreshDocs}
              locale={locale}
            />

            <ManageDocs docs={docs} locale={locale} onDeleted={refreshDocs} />
          </div>
        )}
      </div>
    </div>
  )
}

function NotConfigured({ title, body }: { title: string; body: string }) {
  return (
    <div className="card p-6 mt-8 border-gold/40 bg-gold-soft/20">
      <div className="flex items-start gap-3">
        <ShieldAlert className="w-6 h-6 text-[#94741f] shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-ink">{title}</p>
          <p className="text-sm text-ink-soft mt-1 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  )
}

function UploadForm({
  disabled, onUploaded, locale,
}: { disabled: boolean; onUploaded: () => void; locale: "es" | "en" }) {
  const t = useTranslations("admin")
  const [uploading, setUploading] = useState(false)
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [category, setCategory] = useState<DocCategory>("certificate")

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (disabled) return
    const form = new FormData(e.currentTarget)
    form.set("category", category)
    setUploading(true)
    setMsg(null)
    const r = await fetch("/api/admin/upload", { method: "POST", body: form })
    setUploading(false)
    if (r.ok) {
      setMsg({ type: "ok", text: t("uploadSuccess") })
      ;(e.target as HTMLFormElement).reset()
      onUploaded()
    } else {
      setMsg({ type: "err", text: t("uploadError") })
    }
  }

  const categoryOptions = docCategories.filter((c) => c.key !== "all")

  return (
    <div className="card p-7">
      <div className="flex items-center gap-2.5 mb-5">
        <Upload className="w-5 h-5 text-sage-deep" />
        <h2 className="font-display text-xl text-ink">{t("uploadTitle")}</h2>
      </div>
      <form onSubmit={submit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label={t("docTitleEs")}><input name="titleEs" className={inputCls} /></Field>
          <Field label={t("docTitleEn")}><input name="titleEn" className={inputCls} /></Field>
          <Field label={t("issuerEs")}><input name="issuerEs" className={inputCls} /></Field>
          <Field label={t("issuerEn")}><input name="issuerEn" className={inputCls} /></Field>
          <Field label={t("category")}>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as DocCategory)}
              className={inputCls}
            >
              {categoryOptions.map((c) => (
                <option key={c.key} value={c.key}>{c.label[locale]}</option>
              ))}
            </select>
          </Field>
          <Field label={t("date")}><input name="date" placeholder="2025" className={inputCls} /></Field>
        </div>
        <Field label={t("file")}>
          <input
            name="file"
            type="file"
            accept="application/pdf,image/*"
            required
            className="block w-full text-sm text-ink-soft file:mr-4 file:py-2.5 file:px-4 file:rounded-full file:border-0 file:bg-sage-deep file:text-white file:font-medium hover:file:bg-[#4a7255] file:cursor-pointer cursor-pointer"
          />
        </Field>

        {msg && (
          <p className={`text-sm flex items-center gap-1.5 ${msg.type === "ok" ? "text-sage-deep" : "text-terracotta-deep"}`}>
            {msg.type === "ok" ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {msg.text}
          </p>
        )}

        <Button type="submit" disabled={disabled || uploading} className="w-full">
          {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          {uploading ? t("uploading") : t("upload")}
        </Button>
      </form>
    </div>
  )
}

function ManageDocs({
  docs, locale, onDeleted,
}: { docs: DocItem[]; locale: "es" | "en"; onDeleted: () => void }) {
  const t = useTranslations("admin")
  const [deleting, setDeleting] = useState<string | null>(null)

  const remove = async (id: string) => {
    if (!confirm(t("confirmDelete"))) return
    setDeleting(id)
    await fetch("/api/admin/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
    setDeleting(null)
    onDeleted()
  }

  return (
    <div className="card p-7">
      <h2 className="font-display text-xl text-ink mb-5">{t("manageTitle")}</h2>
      {docs.length === 0 ? (
        <p className="text-sm text-ink-soft">{t("noUploads")}</p>
      ) : (
        <div className="space-y-3">
          {docs.map((doc) => (
            <div key={doc.id} className="flex items-center gap-3 rounded-2xl border border-line bg-sand/40 p-4">
              <span className="w-10 h-10 rounded-xl bg-paper border border-line flex items-center justify-center shrink-0">
                {doc.type === "image"
                  ? <ImageIcon className="w-5 h-5 text-terracotta-deep" />
                  : <FileText className="w-5 h-5 text-sage-deep" />}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-ink truncate">{doc.title[locale]}</p>
                <a href={doc.file} target="_blank" rel="noopener noreferrer" className="text-xs text-ink-soft hover:text-sage-deep truncate block">
                  {doc.file}
                </a>
              </div>
              <button
                onClick={() => remove(doc.id)}
                disabled={deleting === doc.id}
                className="p-2.5 rounded-full text-terracotta-deep hover:bg-terracotta-soft/50 transition-colors shrink-0"
                aria-label="delete"
              >
                {deleting === doc.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const inputCls =
  "w-full rounded-xl border border-line bg-sand/40 px-4 py-2.5 text-ink text-sm focus:border-sage focus:bg-paper outline-none transition-colors"

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-ink-soft mb-1.5 block">{label}</span>
      {children}
    </label>
  )
}
