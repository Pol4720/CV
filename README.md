# Richard A. Matos Arderí — Portafolio Profesional / Professional Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Pol4720/CV&root-directory=portafolio)

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer%20Motion-12-ff69b4?style=for-the-badge&logo=framer" alt="Framer Motion">
</div>

Portafolio moderno (paleta pastel/beige, editorial) con contenido bilingüe (ES/EN),
secciones de premios, proyectos públicos y profesionales, investigación, documentos
descargables y un **panel de administración con contraseña** para subir documentos
sin tocar el código.

---

## 📁 Estructura

```
CV/
├── portafolio/                 # Aplicación Next.js 16 (App Router)
│   ├── messages/               # Traducciones es.json / en.json
│   ├── public/documents/       # CVs, diplomas, cartas (visibles en el sitio)
│   ├── src/
│   │   ├── app/                # Páginas, layout e /api (admin + documentos)
│   │   ├── app/[locale]/admin/ # Panel de administración
│   │   ├── components/         # UI + secciones
│   │   ├── data/               # Contenido (personal, proyectos, premios, etc.)
│   │   └── lib/admin.ts        # Autenticación + almacenamiento (Vercel Blob)
│   └── .env.example
├── cv-pdf/                     # PDFs fuente del CV
└── README.md
```

---

## 🚀 Desarrollo local

```bash
cd portafolio
npm install
cp .env.example .env.local   # opcional: define ADMIN_PASSWORD para probar el admin
npm run dev                  # http://localhost:3000  → redirige a /es
```

## ✏️ Actualizar contenido

- **Textos y datos**: `portafolio/src/data/` (`personal.ts`, `projects.ts`, `awards.ts`,
  `experience.ts`, `research.ts`, `skills.ts`, `education.ts`, `documents.ts`).
- **CV en PDF**: reemplaza `portafolio/public/documents/cv/cv-es.pdf` y `cv-en.pdf`
  (mismos nombres) y el botón de descarga se actualiza solo.
- **Foto de perfil (opcional)**: `portafolio/public/images/avatar.jpg`.
- **Traducciones**: `portafolio/messages/es.json` y `en.json`.

---

## 🔐 Panel de administración (subir documentos sin código)

Ruta: `/es/admin` (o `/en/admin`). Permite subir diplomas, certificados, cartas e
imágenes que se muestran automáticamente en la sección **Documentos** del sitio.

Requiere dos variables de entorno en tu despliegue:

| Variable | Descripción |
|---|---|
| `ADMIN_PASSWORD` | Contraseña para entrar al panel. |
| `BLOB_READ_WRITE_TOKEN` | Token de **Vercel Blob** (se crea automáticamente al añadir un Blob store). |

Sin estas variables, el sitio funciona igual y el panel muestra un aviso de
"almacenamiento no configurado". Los documentos base incluidos en `public/documents/`
siempre se muestran.

---

## ☁️ Despliegue gratuito en Vercel (recomendado)

1. Sube este repositorio a GitHub (rama `main`).
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa `Pol4720/CV`.
3. **Root Directory**: selecciona `portafolio`.
4. Framework: Next.js (autodetectado). Deploy.
5. Para habilitar el admin:
   - **Storage → Create → Blob** (añade `BLOB_READ_WRITE_TOKEN` automáticamente).
   - **Settings → Environment Variables → añade `ADMIN_PASSWORD`**.
   - Redeploy.

El sitio queda publicado en `https://<tu-proyecto>.vercel.app`.

---

## 👤 Autor

**Richard A. Matos Arderí** — Científico de la Computación · Ciencia de Datos, ML e IA

- 📍 La Habana, Cuba · Especialista Consultor, Instituto Finlay de Vacunas (BioCubaFarma)
- [GitHub @Pol4720](https://github.com/Pol4720) · [LinkedIn](https://www.linkedin.com/in/richard-matos-arderí) · [Telegram](https://t.me/Pol4720)

## 📜 Licencia

MIT — ver [LICENSE](LICENSE).
