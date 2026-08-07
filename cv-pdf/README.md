# CV en PDF / PDF Resume

Esta carpeta contiene los Curriculum Vitae en formato PDF:

- `CV_Richard_Matos.pdf` — versión en inglés
- `CV-Richard Matos.pdf` — versión en español

Se generan con **texto real y seleccionable** (no curvas/outlines), en 2 páginas,
mediante el generador en [`generator/`](generator/) — así el contenido es
100% copiable (Ctrl+C/Ctrl+V) y pasa correctamente por parsers de ATS y LinkedIn.
Las mismas copias se publican en `portafolio/public/documents/cv/cv-en.pdf` y
`cv-es.pdf`, desde donde las sirve el sitio (GitHub Pages).

## Actualizar el contenido del CV

1. Edita los datos en [`generator/content.mjs`](generator/content.mjs) (EN/ES).
2. Ajusta el diseño si hace falta en [`generator/template.mjs`](generator/template.mjs).
3. Regenera los 4 PDFs:
   ```bash
   cd cv-pdf/generator
   npm install
   npm run generate
   ```
4. Revisa visualmente el resultado y haz commit de los PDFs actualizados.

## Archivos

- `cv-es.pdf` - Curriculum Vitae en español
- `cv-en.pdf` - Curriculum Vitae in English

## Instrucciones

1. Crea tu CV en el formato que prefieras (Word, Google Docs, LaTeX, Canva, etc.)
2. Expórtalo a PDF
3. Guárdalo aquí con los nombres correspondientes
4. El portafolio web los vinculará automáticamente desde `portafolio/public/documents/`

## Recomendaciones para el CV

### Estructura sugerida:
1. **Datos personales** - Nombre, contacto, ubicación
2. **Perfil profesional** - Breve resumen (2-3 líneas)
3. **Educación** - Universidad, carrera, fechas
4. **Habilidades técnicas** - Lenguajes, frameworks, herramientas
5. **Proyectos destacados** - 3-4 proyectos principales con descripción breve
6. **Idiomas** - Niveles de competencia
7. **Certificaciones** - Si las tienes
8. **Enlaces** - GitHub, LinkedIn, portafolio web

### Formato:
- Máximo 1-2 páginas
- Diseño limpio y profesional
- Fuentes legibles (Arial, Calibri, Helvetica)
- Incluir QR code al portafolio web (opcional)

---

# English

This folder contains the Curriculum Vitae in PDF format.

## Files

- `cv-es.pdf` - Curriculum Vitae in Spanish  
- `cv-en.pdf` - Curriculum Vitae in English

## Instructions

1. Create your CV in your preferred format (Word, Google Docs, LaTeX, Canva, etc.)
2. Export to PDF
3. Save here with the corresponding names
4. The web portfolio will automatically link them from `portafolio/public/documents/`
