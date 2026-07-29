"use client"

import { useEffect, useRef, useState } from "react"
import { useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { allProjects } from "@/data/projects"
import { docCategories, type DocCategory } from "@/data/documents"
import {
  verifyToken, setToken, clearToken,
  readJson, writeJson, uploadBinary, deleteFile, latestDeploy, safeFileName,
  DOCUMENTS_INDEX, PROJECTS_INDEX, DOCUMENTS_DIR, PROJECT_IMAGES_DIR,
  type DeployRun,
} from "@/lib/github-cms"
import {
  KeyRound, LogOut, Upload, Trash2, FileText, Images, ArrowLeft,
  CheckCircle2, AlertCircle, Loader2, ExternalLink, ShieldCheck, Rocket,
} from "lucide-react"

/* ------------------------------------------------------------ types */

interface StoredDoc {
  id: string
  title: { es: string; en: string }
  issuer?: { es: string; en: string }
  category: DocCategory
  type: "pdf" | "image"
  file: string
  date?: string
}

interface StoredImage {
  src: string
  caption: { es: string; en: string }
}

type Overrides = Record<string, { gallery?: StoredImage[] }>

type Status = { kind: "idle" | "busy" | "ok" | "err"; message?: string }

const MAX_MB = 20

/* ------------------------------------------------------------- page */

export default function AdminPage() {
  const locale = useLocale() as "es" | "en"
  const [authed, setAuthed] = useState<boolean | null>(null)
  const [login, setLogin] = useState<string>()
  const [tab, setTab] = useState<"docs" | "projects">("docs")
  const [deploy, setDeploy] = useState<DeployRun | null>(null)
  // Bumped after a successful sign-in to re-run the auth check.
  const [authAttempt, setAuthAttempt] = useState(0)

  useEffect(() => {
    let alive = true
    ;(async () => {
      // verifyToken() resolves (never throws) even with no token stored,
      // so the first state update always happens after an await.
      const r = await verifyToken()
      if (!alive) return
      setAuthed(r.ok)
      setLogin(r.login)
      if (!r.ok) return
      const d = await latestDeploy()
      if (alive) setDeploy(d)
    })()
    return () => { alive = false }
  }, [authAttempt])

  if (authed === null) {
    return (
      <div className="min-h-screen grid place-items-center">
        <Loader2 className="w-6 h-6 animate-spin text-sage-deep" />
      </div>
    )
  }

  if (!authed) return <LoginPanel onDone={() => setAuthAttempt((n) => n + 1)} />

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-sage-deep transition-colors">
              <ArrowLeft className="w-4 h-4" /> {locale === "es" ? "Volver al portafolio" : "Back to portfolio"}
            </Link>
            <h1 className="mt-3 font-display text-3xl sm:text-4xl text-ink">
              {locale === "es" ? "Panel de administración" : "Admin panel"}
            </h1>
            <p className="mt-1.5 text-sm text-ink-soft inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sage-deep" />
              {locale === "es" ? "Conectado como" : "Signed in as"} <strong className="text-ink">{login}</strong>
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => { clearToken(); setAuthed(false) }}
            className="shrink-0"
          >
            <LogOut className="w-4 h-4" /> {locale === "es" ? "Cerrar sesión" : "Sign out"}
          </Button>
        </div>

        <DeployBanner deploy={deploy} locale={locale} />

        <div className="mt-8 inline-flex p-1.5 rounded-full bg-sand border border-line">
          {(["docs", "projects"] as const).map((k) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 ${
                tab === k ? "bg-sage-deep text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              {k === "docs" ? <FileText className="w-4 h-4" /> : <Images className="w-4 h-4" />}
              {k === "docs"
                ? locale === "es" ? "Documentos" : "Documents"
                : locale === "es" ? "Imágenes de proyectos" : "Project images"}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {tab === "docs" ? <DocumentsTab locale={locale} /> : <ProjectImagesTab locale={locale} />}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------ login */

function LoginPanel({ onDone }: { onDone: () => void }) {
  const locale = useLocale() as "es" | "en"
  const [value, setValue] = useState("")
  const [remember, setRemember] = useState(false)
  const [status, setStatus] = useState<Status>({ kind: "idle" })

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ kind: "busy" })
    setToken(value.trim(), remember)
    const r = await verifyToken()
    if (r.ok) { onDone(); return }
    clearToken()
    const msgs: Record<string, string> = {
      INVALID_TOKEN: locale === "es" ? "El token no es válido o ha expirado." : "The token is invalid or expired.",
      NO_REPO_ACCESS: locale === "es" ? "El token no tiene acceso al repositorio Pol4720/CV." : "The token cannot access Pol4720/CV.",
      NO_WRITE_SCOPE: locale === "es" ? "El token no tiene permiso de escritura (Contents: Read and write)." : "The token lacks write permission (Contents: Read and write).",
    }
    setStatus({ kind: "err", message: msgs[r.error ?? ""] ?? (locale === "es" ? "No se pudo verificar el token." : "Could not verify the token.") })
  }

  return (
    <div className="min-h-screen grid place-items-center px-4 py-24">
      <div className="w-full max-w-lg">
        <div className="card p-8">
          <div className="w-12 h-12 rounded-2xl bg-sage-soft grid place-items-center">
            <KeyRound className="w-5 h-5 text-sage-deep" />
          </div>
          <h1 className="mt-5 font-display text-2xl text-ink">
            {locale === "es" ? "Acceso de administrador" : "Admin access"}
          </h1>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            {locale === "es"
              ? "Este sitio se publica como estático en GitHub Pages, así que las subidas se hacen mediante un token de acceso personal de GitHub. El token se guarda solo en este navegador y nunca se envía a otro servidor."
              : "This site is published statically on GitHub Pages, so uploads go through a GitHub personal access token. The token is stored only in this browser and never sent to any other server."}
          </p>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="tok" className="block text-xs eyebrow text-ink-faint mb-2">
                {locale === "es" ? "Token de acceso personal" : "Personal access token"}
              </label>
              <input
                id="tok"
                type="password"
                autoComplete="off"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="github_pat_..."
                className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm font-mono text-ink placeholder:text-ink-faint focus:outline-none focus:border-sage"
                required
              />
            </div>

            <label className="flex items-center gap-2.5 text-sm text-ink-soft cursor-pointer">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="w-4 h-4 rounded border-line accent-[#7d8f6e]"
              />
              {locale === "es" ? "Recordar en este dispositivo" : "Remember on this device"}
            </label>

            {status.kind === "err" && (
              <p className="text-sm text-terracotta-deep inline-flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" /> {status.message}
              </p>
            )}

            <Button type="submit" className="w-full" disabled={status.kind === "busy"}>
              {status.kind === "busy" && <Loader2 className="w-4 h-4 animate-spin" />}
              {locale === "es" ? "Entrar" : "Sign in"}
            </Button>
          </form>
        </div>

        <details className="mt-4 card p-5 text-sm">
          <summary className="cursor-pointer font-medium text-ink">
            {locale === "es" ? "¿Cómo creo el token? (una sola vez)" : "How do I create the token? (one time only)"}
          </summary>
          <ol className="mt-4 space-y-2.5 text-ink-soft list-decimal list-inside leading-relaxed">
            <li>
              {locale === "es" ? "Abre " : "Open "}
              <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener noreferrer" className="text-sage-deep underline inline-flex items-center gap-1">
                github.com/settings/personal-access-tokens/new <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>{locale === "es" ? "En «Repository access» elige Only select repositories → Pol4720/CV" : "Under “Repository access” choose Only select repositories → Pol4720/CV"}</li>
            <li>{locale === "es" ? "En «Permissions» → Repository permissions → Contents: Read and write" : "Under “Permissions” → Repository permissions → Contents: Read and write"}</li>
            <li>{locale === "es" ? "Añade también Workflows: Read (para ver el estado de publicación)" : "Also add Workflows: Read (to see publish status)"}</li>
            <li>{locale === "es" ? "Genera el token, cópialo y pégalo arriba." : "Generate the token, copy it and paste it above."}</li>
          </ol>
          <p className="mt-4 text-xs text-ink-faint leading-relaxed">
            {locale === "es"
              ? "Consejo: ponle fecha de expiración. Si el token se filtra, revócalo desde la misma página y genera otro."
              : "Tip: set an expiration date. If the token leaks, revoke it from the same page and generate another."}
          </p>
        </details>
      </div>
    </div>
  )
}

/* ----------------------------------------------------- deploy banner */

function DeployBanner({ deploy, locale }: { deploy: DeployRun | null; locale: "es" | "en" }) {
  if (!deploy) return null
  const running = deploy.status !== "completed"
  const failed = deploy.conclusion === "failure"

  return (
    <div className={`mt-6 rounded-2xl border px-5 py-3.5 flex items-center gap-3 text-sm ${
      failed ? "border-terracotta/30 bg-terracotta-soft/30 text-terracotta-deep"
      : running ? "border-gold/30 bg-gold-soft/30 text-[#94741f]"
      : "border-sage/25 bg-sage-soft/30 text-sage-deep"
    }`}>
      {running ? <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        : failed ? <AlertCircle className="w-4 h-4 shrink-0" />
        : <CheckCircle2 className="w-4 h-4 shrink-0" />}
      <span className="flex-1">
        {running
          ? locale === "es" ? "Publicando cambios en el sitio…" : "Publishing changes to the site…"
          : failed
          ? locale === "es" ? "La última publicación falló." : "The last publish failed."
          : locale === "es" ? "Sitio publicado y actualizado." : "Site published and up to date."}
      </span>
      <a href={deploy.url} target="_blank" rel="noopener noreferrer" className="underline inline-flex items-center gap-1 shrink-0">
        {locale === "es" ? "Ver" : "View"} <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  )
}

/* ------------------------------------------------------- shared bits */

function StatusLine({ status }: { status: Status }) {
  if (status.kind === "idle") return null
  const Icon = status.kind === "busy" ? Loader2 : status.kind === "ok" ? CheckCircle2 : AlertCircle
  const tone = status.kind === "err" ? "text-terracotta-deep" : status.kind === "ok" ? "text-sage-deep" : "text-ink-soft"
  return (
    <p className={`text-sm inline-flex items-start gap-2 ${tone}`}>
      <Icon className={`w-4 h-4 shrink-0 mt-0.5 ${status.kind === "busy" ? "animate-spin" : ""}`} />
      {status.message}
    </p>
  )
}

const field = "w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none focus:border-sage"

/* ---------------------------------------------------- documents tab */

function DocumentsTab({ locale }: { locale: "es" | "en" }) {
  const [docs, setDocs] = useState<StoredDoc[]>([])
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const [loading, setLoading] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const { data } = await readJson<{ documents: StoredDoc[] }>(DOCUMENTS_INDEX, { documents: [] })
        if (alive) setDocs(data.documents ?? [])
      } catch (e) {
        if (alive) setStatus({ kind: "err", message: e instanceof Error ? e.message : "Error" })
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [])

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const file = fd.get("file") as File
    if (!file || !file.size) return

    if (file.size > MAX_MB * 1024 * 1024) {
      setStatus({ kind: "err", message: locale === "es" ? `El fichero supera ${MAX_MB} MB.` : `File exceeds ${MAX_MB} MB.` })
      return
    }
    const isPdf = file.type === "application/pdf"
    const isImg = file.type.startsWith("image/")
    if (!isPdf && !isImg) {
      setStatus({ kind: "err", message: locale === "es" ? "Solo se admiten PDF o imágenes." : "Only PDF or images are allowed." })
      return
    }

    const category = fd.get("category") as DocCategory
    const name = safeFileName(file.name)
    const repoPath = `${DOCUMENTS_DIR}/${category}/${name}`
    const publicPath = `/documents/${category}/${name}`

    try {
      setStatus({ kind: "busy", message: locale === "es" ? "Subiendo fichero…" : "Uploading file…" })
      await uploadBinary(repoPath, file, `docs: add ${name}`)

      setStatus({ kind: "busy", message: locale === "es" ? "Actualizando índice…" : "Updating index…" })
      const fresh = await readJson<{ documents: StoredDoc[] }>(DOCUMENTS_INDEX, { documents: [] })
      const entry: StoredDoc = {
        id: `doc-${Date.now().toString(36)}`,
        title: { es: String(fd.get("titleEs")), en: String(fd.get("titleEn") || fd.get("titleEs")) },
        issuer: fd.get("issuerEs")
          ? { es: String(fd.get("issuerEs")), en: String(fd.get("issuerEn") || fd.get("issuerEs")) }
          : undefined,
        category,
        type: isPdf ? "pdf" : "image",
        file: publicPath,
        date: String(fd.get("date") || "") || undefined,
      }
      const next = [...(fresh.data.documents ?? []), entry]
      await writeJson(DOCUMENTS_INDEX, { documents: next }, `docs: index ${entry.title.es}`, fresh.sha)

      setDocs(next)
      formRef.current?.reset()
      setStatus({
        kind: "ok",
        message: locale === "es"
          ? "Documento subido. Estará visible en el sitio en 1–2 minutos."
          : "Document uploaded. It will be live on the site in 1–2 minutes.",
      })
    } catch (err) {
      setStatus({ kind: "err", message: err instanceof Error ? err.message : "Error" })
    }
  }

  const remove = async (doc: StoredDoc) => {
    if (!confirm(locale === "es" ? `¿Eliminar «${doc.title.es}»?` : `Delete “${doc.title.en}”?`)) return
    try {
      setStatus({ kind: "busy", message: locale === "es" ? "Eliminando…" : "Deleting…" })
      await deleteFile(`${DOCUMENTS_DIR}/${doc.category}/${doc.file.split("/").pop()}`, `docs: remove ${doc.title.es}`)
      const fresh = await readJson<{ documents: StoredDoc[] }>(DOCUMENTS_INDEX, { documents: [] })
      const next = (fresh.data.documents ?? []).filter((d) => d.id !== doc.id)
      await writeJson(DOCUMENTS_INDEX, { documents: next }, `docs: unindex ${doc.title.es}`, fresh.sha)
      setDocs(next)
      setStatus({ kind: "ok", message: locale === "es" ? "Eliminado." : "Deleted." })
    } catch (err) {
      setStatus({ kind: "err", message: err instanceof Error ? err.message : "Error" })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="card p-6">
        <h2 className="font-display text-xl text-ink">
          {locale === "es" ? "Subir documento" : "Upload document"}
        </h2>
        <p className="mt-1.5 text-sm text-ink-soft">
          {locale === "es"
            ? "Diplomas, certificados, cartas y avales. PDF o imagen, hasta 20 MB."
            : "Diplomas, certificates, letters and endorsements. PDF or image, up to 20 MB."}
        </p>

        <form ref={formRef} onSubmit={submit} className="mt-5 space-y-4">
          <div className="grid sm:grid-cols-2 gap-3">
            <input name="titleEs" required placeholder={locale === "es" ? "Título (español) *" : "Title (Spanish) *"} className={field} />
            <input name="titleEn" placeholder={locale === "es" ? "Título (inglés)" : "Title (English)"} className={field} />
            <input name="issuerEs" placeholder={locale === "es" ? "Emisor (español)" : "Issuer (Spanish)"} className={field} />
            <input name="issuerEn" placeholder={locale === "es" ? "Emisor (inglés)" : "Issuer (English)"} className={field} />
            <select name="category" className={field} defaultValue="certificate">
              {docCategories.filter((c) => c.key !== "all").map((c) => (
                <option key={c.key} value={c.key}>{c.label[locale]}</option>
              ))}
            </select>
            <input name="date" placeholder={locale === "es" ? "Año (ej. 2025)" : "Year (e.g. 2025)"} className={field} />
          </div>

          <input
            name="file"
            type="file"
            accept="application/pdf,image/*"
            required
            className="w-full text-sm text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-sage-soft file:px-4 file:py-2 file:text-sm file:font-medium file:text-sage-deep hover:file:bg-sage-soft/70 cursor-pointer"
          />

          <StatusLine status={status} />

          <Button type="submit" className="w-full" disabled={status.kind === "busy"}>
            {status.kind === "busy" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
            {locale === "es" ? "Subir y publicar" : "Upload and publish"}
          </Button>
        </form>
      </div>

      <div className="card p-6">
        <h2 className="font-display text-xl text-ink">
          {locale === "es" ? "Documentos subidos" : "Uploaded documents"}
          <span className="ml-2 text-sm font-sans text-ink-faint">{docs.length}</span>
        </h2>
        <p className="mt-1.5 text-sm text-ink-soft">
          {locale === "es"
            ? "Los documentos originales del sitio no se listan aquí; están fijos en el código."
            : "The site's original documents are not listed here; they are fixed in the code."}
        </p>

        <div className="mt-5 space-y-2.5 max-h-[28rem] overflow-y-auto">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-sage-deep" />
          ) : docs.length === 0 ? (
            <p className="text-sm text-ink-faint py-8 text-center">
              {locale === "es" ? "Aún no has subido documentos." : "No documents uploaded yet."}
            </p>
          ) : (
            docs.map((d) => (
              <div key={d.id} className="flex items-start gap-3 rounded-xl border border-line bg-sand/40 p-3.5">
                <FileText className="w-4 h-4 text-sage-deep shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-ink font-medium truncate">{d.title[locale]}</p>
                  <p className="text-xs text-ink-faint truncate">
                    {d.issuer?.[locale]}{d.issuer && d.date ? " · " : ""}{d.date}
                  </p>
                </div>
                <button
                  onClick={() => remove(d)}
                  aria-label="Eliminar"
                  className="text-ink-faint hover:text-terracotta-deep transition-colors shrink-0"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

/* ----------------------------------------------- project images tab */

function ProjectImagesTab({ locale }: { locale: "es" | "en" }) {
  const [overrides, setOverrides] = useState<Overrides>({})
  const [slug, setSlug] = useState(allProjects[0]?.slug ?? "")
  const [status, setStatus] = useState<Status>({ kind: "idle" })
  const [loading, setLoading] = useState(true)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    let alive = true
    ;(async () => {
      try {
        const { data } = await readJson<{ overrides: Overrides }>(PROJECTS_INDEX, { overrides: {} })
        if (alive) setOverrides(data.overrides ?? {})
      } catch (e) {
        if (alive) setStatus({ kind: "err", message: e instanceof Error ? e.message : "Error" })
      } finally {
        if (alive) setLoading(false)
      }
    })()
    return () => { alive = false }
  }, [])

  const current = allProjects.find((p) => p.slug === slug)
  const uploaded = overrides[slug]?.gallery ?? []

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const files = fd.getAll("images").filter((f): f is File => f instanceof File && f.size > 0)
    if (!files.length) return

    const oversized = files.find((f) => f.size > MAX_MB * 1024 * 1024)
    if (oversized) {
      setStatus({ kind: "err", message: locale === "es" ? `«${oversized.name}» supera ${MAX_MB} MB.` : `“${oversized.name}” exceeds ${MAX_MB} MB.` })
      return
    }
    if (files.some((f) => !f.type.startsWith("image/"))) {
      setStatus({ kind: "err", message: locale === "es" ? "Solo se admiten imágenes." : "Only images are allowed." })
      return
    }

    const captionEs = String(fd.get("captionEs") || "")
    const captionEn = String(fd.get("captionEn") || captionEs)

    try {
      const added: StoredImage[] = []
      for (const [i, file] of files.entries()) {
        setStatus({ kind: "busy", message: locale === "es" ? `Subiendo ${i + 1}/${files.length}…` : `Uploading ${i + 1}/${files.length}…` })
        const name = safeFileName(file.name)
        await uploadBinary(`${PROJECT_IMAGES_DIR}/${slug}/${name}`, file, `projects(${slug}): add ${name}`)
        const fallback = file.name.replace(/\.[^.]+$/, "")
        added.push({
          src: `/projects/${slug}/${name}`,
          caption: { es: captionEs || fallback, en: captionEn || fallback },
        })
      }

      setStatus({ kind: "busy", message: locale === "es" ? "Actualizando contenido…" : "Updating content…" })
      const fresh = await readJson<{ overrides: Overrides }>(PROJECTS_INDEX, { overrides: {} })
      const base = fresh.data.overrides ?? {}
      const next: Overrides = {
        ...base,
        [slug]: { ...base[slug], gallery: [...(base[slug]?.gallery ?? []), ...added] },
      }
      await writeJson(PROJECTS_INDEX, { overrides: next }, `projects(${slug}): ${added.length} image(s)`, fresh.sha)

      setOverrides(next)
      formRef.current?.reset()
      setStatus({
        kind: "ok",
        message: locale === "es"
          ? `${added.length} imagen(es) subida(s). Visibles en el sitio en 1–2 minutos.`
          : `${added.length} image(s) uploaded. Live on the site in 1–2 minutes.`,
      })
    } catch (err) {
      setStatus({ kind: "err", message: err instanceof Error ? err.message : "Error" })
    }
  }

  const removeImage = async (im: StoredImage) => {
    if (!confirm(locale === "es" ? "¿Eliminar esta imagen?" : "Delete this image?")) return
    try {
      setStatus({ kind: "busy", message: locale === "es" ? "Eliminando…" : "Deleting…" })
      await deleteFile(`${PROJECT_IMAGES_DIR}/${slug}/${im.src.split("/").pop()}`, `projects(${slug}): remove image`)
      const fresh = await readJson<{ overrides: Overrides }>(PROJECTS_INDEX, { overrides: {} })
      const base = fresh.data.overrides ?? {}
      const next: Overrides = {
        ...base,
        [slug]: { ...base[slug], gallery: (base[slug]?.gallery ?? []).filter((g) => g.src !== im.src) },
      }
      await writeJson(PROJECTS_INDEX, { overrides: next }, `projects(${slug}): remove image`, fresh.sha)
      setOverrides(next)
      setStatus({ kind: "ok", message: locale === "es" ? "Eliminada." : "Deleted." })
    } catch (err) {
      setStatus({ kind: "err", message: err instanceof Error ? err.message : "Error" })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="card p-6">
        <h2 className="font-display text-xl text-ink">
          {locale === "es" ? "Añadir capturas a un proyecto" : "Add screenshots to a project"}
        </h2>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">
          {locale === "es"
            ? "Especialmente útil para los proyectos privados: son los que nadie puede verificar en GitHub, así que las capturas de las interfaces son la única prueba visual de lo que construiste."
            : "Especially useful for private projects: nobody can verify them on GitHub, so interface screenshots are the only visual proof of what you built."}
        </p>

        <form ref={formRef} onSubmit={submit} className="mt-5 space-y-4">
          <div>
            <label htmlFor="slug" className="block text-xs eyebrow text-ink-faint mb-2">
              {locale === "es" ? "Proyecto" : "Project"}
            </label>
            <select id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} className={field}>
              <optgroup label={locale === "es" ? "Privados / profesionales" : "Private / professional"}>
                {allProjects.filter((p) => p.visibility === "private").map((p) => (
                  <option key={p.slug} value={p.slug}>{p.title[locale]}</option>
                ))}
              </optgroup>
              <optgroup label={locale === "es" ? "Públicos" : "Public"}>
                {allProjects.filter((p) => p.visibility === "public").map((p) => (
                  <option key={p.slug} value={p.slug}>{p.title[locale]}</option>
                ))}
              </optgroup>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <input name="captionEs" placeholder={locale === "es" ? "Descripción (español)" : "Caption (Spanish)"} className={field} />
            <input name="captionEn" placeholder={locale === "es" ? "Descripción (inglés)" : "Caption (English)"} className={field} />
          </div>

          <input
            name="images"
            type="file"
            accept="image/*"
            multiple
            required
            className="w-full text-sm text-ink-soft file:mr-3 file:rounded-full file:border-0 file:bg-sage-soft file:px-4 file:py-2 file:text-sm file:font-medium file:text-sage-deep hover:file:bg-sage-soft/70 cursor-pointer"
          />
          <p className="text-xs text-ink-faint">
            {locale === "es"
              ? "Puedes seleccionar varias a la vez. Se añaden después de las capturas ya existentes."
              : "You can select several at once. They are appended after existing screenshots."}
          </p>

          <StatusLine status={status} />

          <Button type="submit" className="w-full" disabled={status.kind === "busy"}>
            {status.kind === "busy" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Rocket className="w-4 h-4" />}
            {locale === "es" ? "Subir y publicar" : "Upload and publish"}
          </Button>
        </form>
      </div>

      <div className="card p-6">
        <h2 className="font-display text-xl text-ink">{current?.title[locale] ?? "—"}</h2>
        <p className="mt-1.5 text-sm text-ink-soft">
          {locale === "es"
            ? `${current?.gallery?.length ?? 0} imagen(es) en el sitio · ${uploaded.length} subida(s) por ti`
            : `${current?.gallery?.length ?? 0} image(s) on the site · ${uploaded.length} uploaded by you`}
        </p>

        <div className="mt-5">
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin text-sage-deep" />
          ) : uploaded.length === 0 ? (
            <p className="text-sm text-ink-faint py-8 text-center">
              {locale === "es" ? "No has subido imágenes a este proyecto." : "You haven't uploaded images to this project."}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              {uploaded.map((im) => (
                <div key={im.src} className="relative group rounded-xl overflow-hidden border border-line bg-sand">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={im.src} alt={im.caption[locale]} className="w-full aspect-[4/3] object-cover" />
                  <button
                    onClick={() => removeImage(im)}
                    aria-label="Eliminar"
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-paper/90 border border-line grid place-items-center text-ink-faint hover:text-terracotta-deep opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                  <p className="p-2 text-xs text-ink-soft truncate">{im.caption[locale]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
