# Richard A. Matos Arderí — Portafolio Profesional / Professional Portfolio

**🌐 [pol4720.github.io/CV](https://pol4720.github.io/CV/)**

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer%20Motion-12-ff69b4?style=for-the-badge&logo=framer" alt="Framer Motion">
  <img src="https://img.shields.io/badge/GitHub%20Pages-deployed-2ea44f?style=for-the-badge&logo=github" alt="GitHub Pages">
</div>

Portafolio moderno (paleta pastel/beige, editorial) con contenido bilingüe (ES/EN):
premios, proyectos públicos y profesionales con **página de detalle propia y galería
de capturas**, investigación, documentos descargables y un **panel de administración**
para subir documentos e imágenes sin tocar el código.

Se publica como sitio **estático en GitHub Pages** — sin servidor, sin coste y sin
requisitos de verificación telefónica.

---

## 📁 Estructura

```
CV/
├── portafolio/                    # Aplicación Next.js 16 (App Router)
│   ├── content/                   # Contenido editado desde el panel admin
│   │   ├── documents.json         #   índice de documentos subidos
│   │   └── projects.json          #   galerías de proyectos añadidas
│   ├── messages/                  # Traducciones es.json / en.json
│   ├── public/
│   │   ├── documents/             #   CVs, diplomas, cartas
│   │   └── projects/<slug>/       #   capturas de cada proyecto
│   ├── scripts/gh-pages-build.mjs # Build estático para Pages
│   └── src/
│       ├── app/[locale]/
│       │   ├── page.tsx                 # Portada
│       │   ├── projects/[slug]/page.tsx # Detalle de cada proyecto
│       │   └── admin/page.tsx           # Panel de administración
│       ├── components/            # UI + secciones
│       ├── data/                  # Contenido (personal, proyectos, premios…)
│       └── lib/github-cms.ts      # Subidas vía GitHub Contents API
├── .github/workflows/deploy-pages.yml
├── cv-pdf/                        # PDFs fuente del CV
└── README.md
```

---

## 🚀 Desarrollo local

```bash
cd portafolio
npm install
npm run dev
```

Abre <http://localhost:3000> — redirige a `/es` o `/en` según el idioma del navegador.

Para probar exactamente lo que se publica (export estático con `basePath` `/CV`):

```bash
npm run build:pages
```

---

## ✏️ Actualizar contenido

| Qué | Dónde |
|---|---|
| Datos personales, stats, redes | `portafolio/src/data/personal.ts` |
| Proyectos (descripciones largas, stack, features, equipo) | `portafolio/src/data/projects.ts` |
| Premios, experiencia, investigación, skills, educación | `portafolio/src/data/*.ts` |
| CV en PDF | reemplaza `portafolio/public/documents/cv/cv-es.pdf` y `cv-en.pdf` |
| Foto de perfil | `portafolio/public/images/avatar.jpg` |
| Traducciones de interfaz | `portafolio/messages/es.json` y `en.json` |
| **Documentos y capturas nuevas** | **panel de administración** (ver abajo) |

Cada `git push` a `main` que toque `portafolio/**` reconstruye y republica el sitio
automáticamente en 1–2 minutos.

---

## 🔐 Panel de administración

Ruta: [`/es/admin`](https://pol4720.github.io/CV/es/admin/) · [`/en/admin`](https://pol4720.github.io/CV/en/admin/)

Funciona **directamente sobre el sitio publicado**, sin servidor. Permite:

- **Documentos** — subir diplomas, certificados, cartas y avales (PDF o imagen, ≤20 MB).
  Aparecen automáticamente en la sección *Documentos*.
- **Imágenes de proyectos** — añadir capturas de interfaces a cualquier proyecto,
  especialmente los privados, que son los que nadie puede verificar en GitHub.

### Cómo funciona

GitHub Pages solo sirve ficheros estáticos, así que el panel escribe directamente en
este repositorio mediante la **GitHub Contents API**. El push dispara el workflow de
Pages, que reconstruye y republica el sitio.

La autenticación es un **fine-grained personal access token** de GitHub que se
introduce una sola vez en el navegador:

1. Abre <https://github.com/settings/personal-access-tokens/new>
2. **Repository access** → *Only select repositories* → `Pol4720/CV`
3. **Permissions → Repository permissions**:
   - `Contents`: **Read and write**
   - `Workflows`: *Read* (para ver el estado de publicación en el panel)
4. Genera el token, cópialo y pégalo en `/es/admin`.

> El token se guarda solo en `sessionStorage` (o `localStorage` si marcas «Recordar en
> este dispositivo») y se envía únicamente a `api.github.com`. Ponle fecha de
> expiración; si se filtra, revócalo desde esa misma página.

---

## ☁️ Despliegue

Automático mediante GitHub Actions
([`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)):
cada push a `main` que modifique `portafolio/**` construye el export estático y lo
publica en GitHub Pages.

Configuración única ya aplicada: **Settings → Pages → Source: GitHub Actions**.

---

## 👤 Autor

**Richard A. Matos Arderí** — Científico de la Computación · Ciencia de Datos, ML e IA

- 📍 La Habana, Cuba · Especialista Consultor, Instituto Finlay de Vacunas (BioCubaFarma)
- [GitHub @Pol4720](https://github.com/Pol4720) · [LinkedIn](https://www.linkedin.com/in/richard-matos-arderí-8912643ba) · [WhatsApp](https://wa.me/5358258556) · [Telegram](https://t.me/Pol4720)

## 📜 Licencia

MIT — ver [LICENSE](LICENSE).
