"use client"

import { useCallback, useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"
import type { GalleryImage } from "@/data/projects"

/**
 * Screenshot gallery with a keyboard-navigable lightbox.
 * Images are plain <img> tags: the static export runs with
 * `images.unoptimized`, so next/image would add no benefit here.
 */
export function Gallery({ images, locale }: { images: GalleryImage[]; locale: "es" | "en" }) {
  const [open, setOpen] = useState<number | null>(null)

  const close = useCallback(() => setOpen(null), [])
  const go = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? null : (i + dir + images.length) % images.length)),
    [images.length]
  )

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") go(1)
      if (e.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close, go])

  if (!images.length) return null

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((im, i) => (
          <motion.button
            key={im.src}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-line bg-paper text-left hover:border-sage transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={im.src}
                alt={im.caption[locale]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3 flex items-start gap-2">
              <p className="text-xs text-ink-soft leading-snug flex-1">{im.caption[locale]}</p>
              <Maximize2 className="w-3.5 h-3.5 text-ink-faint shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-paper/90 border border-line flex items-center justify-center text-ink hover:bg-paper transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); go(-1) }}
                  aria-label="Anterior"
                  className="absolute left-2 sm:left-6 w-11 h-11 rounded-full bg-paper/90 border border-line flex items-center justify-center text-ink hover:bg-paper transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(1) }}
                  aria-label="Siguiente"
                  className="absolute right-2 sm:right-6 w-11 h-11 rounded-full bg-paper/90 border border-line flex items-center justify-center text-ink hover:bg-paper transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={images[open].src}
                alt={images[open].caption[locale]}
                className="w-full max-h-[75vh] object-contain rounded-2xl bg-paper"
              />
              <figcaption className="mt-3 text-center text-sm text-cream/90">
                {images[open].caption[locale]}
                <span className="ml-2 text-cream/50 font-mono text-xs">
                  {open + 1}/{images.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
