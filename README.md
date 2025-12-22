# Richard Matos - Portafolio Profesional / Professional Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Pol4720/CV)

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwindcss" alt="Tailwind">
  <img src="https://img.shields.io/badge/Framer%20Motion-11-ff69b4?style=for-the-badge&logo=framer" alt="Framer Motion">
</div>

---

## 📁 Estructura del Repositorio / Repository Structure

```
CV/
├── portafolio/            # 🌐 Aplicación web del portafolio
│   ├── messages/          # Traducciones (es.json, en.json)
│   ├── public/
│   │   ├── documents/     # CVs vinculados para descarga
│   │   └── images/        # Fotos y certificados
│   ├── src/
│   │   ├── app/           # Páginas Next.js
│   │   ├── components/    # Componentes React
│   │   ├── data/          # Datos del portafolio
│   │   └── i18n/          # Internacionalización
│   └── package.json
│
├── cv-pdf/                # 📄 CVs en formato PDF
│   ├── cv-es.pdf          # CV en español
│   └── cv-en.pdf          # CV en inglés
│
├── README.md
└── LICENSE
```

---

## 🇪🇸 Español

### 📋 Descripción

Repositorio completo para mi perfil profesional que incluye:
- **Portafolio Web Interactivo** - Aplicación moderna con Next.js
- **CV en PDF** - Versiones tradicionales en español e inglés

### ✨ Características del Portafolio Web

- 🌐 **Bilingüe**: Soporte completo para español e inglés
- 🎨 **Diseño Moderno**: UI/UX con glassmorphism, gradientes y animaciones
- 📱 **Responsive**: Optimizado para todos los dispositivos
- ⚡ **Rendimiento**: Optimizado con Next.js App Router
- 🎭 **Animaciones**: Transiciones suaves con Framer Motion
- 📄 **CV Descargable**: Vinculado desde la carpeta cv-pdf
- 🔗 **Integración GitHub**: Proyectos vinculados directamente

### 🚀 Inicio Rápido

```bash
# Clonar repositorio
git clone https://github.com/Pol4720/CV.git
cd CV/portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000
```

### 📝 Personalización

#### Portafolio Web
Los archivos de datos están en `portafolio/src/data/`:
- `personal.ts` - Información personal
- `projects.ts` - Proyectos
- `skills.ts` - Habilidades
- `education.ts` - Educación y certificaciones

#### CV en PDF
Coloca tus CVs en la carpeta `cv-pdf/`:
- `cv-es.pdf` - Versión en español
- `cv-en.pdf` - Versión en inglés

**Importante**: Copia también los PDFs a `portafolio/public/documents/` para que sean descargables desde la web.

---

## 🇬🇧 English

### 📋 Description

Complete repository for my professional profile including:
- **Interactive Web Portfolio** - Modern Next.js application
- **PDF CV** - Traditional versions in Spanish and English

### 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/Pol4720/CV.git
cd CV/portafolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### 📝 Customization

#### Web Portfolio
Data files are in `portafolio/src/data/`:
- `personal.ts` - Personal information
- `projects.ts` - Projects
- `skills.ts` - Skills
- `education.ts` - Education and certifications

#### PDF CV
Place your CVs in the `cv-pdf/` folder:
- `cv-es.pdf` - Spanish version
- `cv-en.pdf` - English version

**Important**: Also copy PDFs to `portafolio/public/documents/` for web download.

---

## 📄 Archivos Pendientes / Pending Files

### Documentos Requeridos / Required Documents
- [ ] `cv-pdf/cv-es.pdf` - CV en español
- [ ] `cv-pdf/cv-en.pdf` - CV in English
- [ ] `portafolio/public/images/avatar.jpg` - Foto de perfil

---

## 👤 Autor / Author

**Richard Matos** - [@Pol4720](https://github.com/Pol4720)

- 📍 La Habana, Cuba
- 🎓 Estudiante de Ciencia de la Computación - MATCOM, UH
- 📱 [Telegram](https://t.me/Pol4720)

---

## 📜 Licencia / License

MIT License - ver [LICENSE](LICENSE)
