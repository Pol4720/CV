"use client"

import { Reveal } from "./reveal"

interface SectionHeadingProps {
  index?: string
  eyebrow: string
  title: string
  description?: string
  align?: "left" | "center"
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center"
  return (
    <Reveal className={isCenter ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? "justify-center" : ""}`}>
        {index && <span className="section-index">{index}</span>}
        <span className="eyebrow text-sage-deep">{eyebrow}</span>
        <span className="h-px w-10 bg-gradient-to-r from-sage/60 to-transparent" />
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold text-ink leading-[1.05] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-ink-soft text-base md:text-lg leading-relaxed">{description}</p>
      )}
    </Reveal>
  )
}
