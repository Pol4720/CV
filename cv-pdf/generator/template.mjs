const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Official LinkedIn "in" badge mark (simple-icons path), used as a real vector logo.
const LINKEDIN_SVG = `<svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true"><path fill="#ffffff" d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zm-1.5-10.25A1.75 1.75 0 1 1 8.3 7a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-2.26-1.7-2.26a1.85 1.85 0 0 0-1.73 1.24 1.73 1.73 0 0 0-.09.62V19h-3v-9h3v1.4a3.11 3.11 0 0 1 2.79-1.53c2 0 3.71 1.28 3.71 4.09z"/></svg>`;

function skillGrid(groups) {
  const half = Math.ceil(groups.length / 2);
  const col = (arr) =>
    arr
      .map(
        (g) => `<div class="skill-row"><h4>${esc(g.h)}</h4><p>${esc(g.v)}</p></div>`
      )
      .join("");
  return `<div class="skills-grid"><div>${col(groups.slice(0, half))}</div><div>${col(
    groups.slice(half)
  )}</div></div>`;
}

export function renderHTML(c) {
  const isEs = c.locale === "es";
  const contactLine = [
    esc(c.location),
    esc(c.phone),
    esc(c.email),
    esc(c.github),
  ].join(" &nbsp;·&nbsp; ");

  return `<!doctype html>
<html lang="${c.locale}">
<head>
<meta charset="utf-8" />
<title>${esc(c.name)} — CV</title>
<style>
  @page { size: Letter; margin: 0; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    font-family: "Liberation Sans", Arial, Helvetica, sans-serif;
    color: #232b30;
    font-size: 8.6pt;
    line-height: 1.38;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 8.5in; height: 11in;
    padding: 0.5in 0.56in;
    position: relative;
    page-break-after: always;
  }
  .page:last-child { page-break-after: auto; }

  h1, h2, h3, h4, p, ul, li { margin: 0; padding: 0; }

  /* ---------- Header ---------- */
  .name {
    font-family: "Liberation Serif", Georgia, "Times New Roman", serif;
    font-size: 24pt;
    font-weight: 700;
    color: #16333f;
    letter-spacing: 0.2px;
  }
  .headline {
    margin-top: 3pt;
    font-size: 9.3pt;
    font-weight: 700;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    color: #2f6373;
  }
  .contact-row {
    margin-top: 7pt;
    font-size: 8.6pt;
    color: #4b555c;
  }
  .contact-row a { color: #4b555c; text-decoration: none; }
  .li-badge {
    display: inline-flex;
    align-items: center;
    gap: 4pt;
    text-decoration: none;
    color: #16333f;
    font-weight: 700;
    vertical-align: middle;
  }
  .li-badge .mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 13pt; height: 13pt;
    border-radius: 3pt;
    background: #0a66c2;
  }
  .hr {
    margin-top: 10pt;
    border: none;
    border-top: 1.6pt solid #16333f;
  }

  /* ---------- Section headings ---------- */
  .h-sec {
    font-size: 8.6pt;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #16333f;
    border-bottom: 0.8pt solid #cfc9ba;
    padding-bottom: 3pt;
    margin-bottom: 6pt;
  }
  section + section { margin-top: 10.5pt; }

  /* ---------- Page 1 layout ---------- */
  .body1 {
    margin-top: 12pt;
    display: grid;
    grid-template-columns: 2.05in 1fr;
    column-gap: 0.32in;
  }
  .side > section:first-child { margin-top: 0; }
  .main1 > section:first-child { margin-top: 0; }

  .profile-text { color: #3c454b; text-align: justify; }

  .lang-row { margin-bottom: 6pt; }
  .lang-row:last-child { margin-bottom: 0; }
  .lang-top { display: flex; justify-content: space-between; font-size: 8.4pt; margin-bottom: 2.5pt; }
  .lang-top b { color: #232b30; font-weight: 700; }
  .lang-top span { color: #6a7278; }
  .lang-bar { height: 3pt; border-radius: 2pt; background: #e4e0d3; overflow: hidden; }
  .lang-bar i { display: block; height: 100%; background: #2f6373; border-radius: 2pt; }

  .honor { margin-bottom: 7pt; padding-left: 10pt; position: relative; }
  .honor:last-child { margin-bottom: 0; }
  .honor::before {
    content: "◆"; position: absolute; left: 0; top: 0.5pt;
    color: #b9852f; font-size: 6.5pt;
  }
  .honor b { display: block; font-size: 8.3pt; color: #232b30; font-weight: 700; line-height: 1.28; }
  .honor span { display: block; font-size: 7.7pt; color: #737b81; margin-top: 1pt; }

  .tags { display: flex; flex-wrap: wrap; gap: 4pt; }
  .tag {
    font-size: 7.6pt; color: #3c454b; background: #eeeadd;
    border-radius: 8pt; padding: 3pt 7pt; line-height: 1.2;
  }

  .skills-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 0.26in; }
  .skill-row { margin-bottom: 6.5pt; }
  .skill-row:last-child { margin-bottom: 0; }
  .skill-row h4 { font-size: 8.2pt; font-weight: 700; color: #232b30; margin-bottom: 1.5pt; }
  .skill-row p { font-size: 7.9pt; color: #55606a; line-height: 1.34; }

  .exp-item, .edu-item { margin-bottom: 7pt; }
  .exp-item:last-child, .edu-item:last-child { margin-bottom: 0; }
  .item-top { display: flex; justify-content: space-between; align-items: baseline; gap: 8pt; }
  .item-top b { font-size: 8.9pt; color: #232b30; font-weight: 700; }
  .item-top .dates { font-size: 7.8pt; color: #7d858a; white-space: nowrap; }
  .item-org { font-size: 8pt; color: #2f6373; font-weight: 700; margin-top: 0.5pt; }
  .item-detail { font-size: 7.9pt; color: #55606a; margin-top: 2pt; line-height: 1.34; text-align: justify; }

  /* ---------- Page 2 ---------- */
  .projects-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 0.3in; row-gap: 7pt; }
  .proj { break-inside: avoid; }
  .proj-top { display: flex; justify-content: space-between; align-items: baseline; gap: 6pt; }
  .proj-top b { font-size: 8.5pt; color: #232b30; font-weight: 700; }
  .proj-top span { font-size: 7.1pt; color: #2f6373; font-weight: 700; white-space: nowrap; }
  .proj p { font-size: 7.8pt; color: #55606a; margin-top: 1.5pt; line-height: 1.33; text-align: justify; }

  .conf-list, .rp-list { }
  .conf-item { display: flex; gap: 7pt; margin-bottom: 5.5pt; }
  .conf-item:last-child { margin-bottom: 0; }
  .conf-num { font-size: 8pt; font-weight: 700; color: #c1652f; width: 11pt; flex: none; }
  .conf-title { font-size: 8pt; color: #232b30; font-weight: 700; line-height: 1.3; }
  .conf-venue { font-size: 7.6pt; color: #7d858a; margin-top: 1pt; }

  .rp-item { margin-bottom: 5.5pt; }
  .rp-item:last-child { margin-bottom: 0; }
  .rp-item b { font-size: 8pt; color: #232b30; font-weight: 700; line-height: 1.3; }
  .rp-item span { display: block; font-size: 7.6pt; color: #7d858a; margin-top: 1pt; }

  .two-col { display: grid; grid-template-columns: 1fr 1fr; column-gap: 0.32in; }

  /* ---------- Page 1 gets a touch more room to breathe ---------- */
  .page--1 .body1 { margin-top: 16pt; }
  .page--1 section + section { margin-top: 15pt; }
  .page--1 .h-sec { font-size: 9.1pt; margin-bottom: 7.5pt; }
  .page--1 .contact-row { font-size: 9pt; }
  .page--1 .profile-text { font-size: 9.4pt; line-height: 1.62; }
  .page--1 .skill-row { margin-bottom: 9pt; }
  .page--1 .skill-row h4 { font-size: 8.8pt; margin-bottom: 2.5pt; }
  .page--1 .skill-row p { font-size: 8.5pt; line-height: 1.48; }
  .page--1 .lang-row { margin-bottom: 9pt; }
  .page--1 .lang-top { font-size: 8.9pt; margin-bottom: 3.5pt; }
  .page--1 .lang-bar { height: 3.4pt; }
  .page--1 .honor { margin-bottom: 10pt; }
  .page--1 .honor b { font-size: 8.9pt; }
  .page--1 .honor span { font-size: 8.3pt; margin-top: 2pt; }
  .page--1 .tags { gap: 5.5pt; }
  .page--1 .tag { font-size: 8.2pt; padding: 4pt 8.5pt; }

  .stat-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8pt; margin-top: 12pt; }
  .stat-tile { background: #f4f1e6; border-radius: 7pt; padding: 8pt 6pt; text-align: center; }
  .stat-tile b { display: block; font-family: "Liberation Serif", Georgia, serif; font-size: 14pt; color: #16333f; font-weight: 700; }
  .stat-tile span { display: block; font-size: 7pt; color: #6a7278; margin-top: 2pt; line-height: 1.25; }
</style>
</head>
<body>

  <!-- PAGE 1 -->
  <div class="page page--1">
    <div class="name">${esc(c.name)}</div>
    <div class="headline">${esc(c.title)}</div>
    <div class="contact-row">
      ${contactLine}
      &nbsp;&nbsp;<a class="li-badge" href="${c.linkedinUrl}">
        <span class="mark">${LINKEDIN_SVG}</span>${esc(c.linkedinLabel)}
      </a>
    </div>
    <hr class="hr" />

    <div class="body1">
      <div class="side">
        <section>
          <div class="h-sec">${esc(c.labels.languages)}</div>
          ${c.languages
            .map(
              (l) => `<div class="lang-row">
                <div class="lang-top"><b>${esc(l.name)}</b><span>${esc(l.level)}</span></div>
                <div class="lang-bar"><i style="width:${l.pct}%"></i></div>
              </div>`
            )
            .join("")}
        </section>

        <section>
          <div class="h-sec">${esc(c.labels.honors)}</div>
          ${c.honors
            .map(
              (h) => `<div class="honor"><b>${esc(h.title)}</b><span>${esc(h.sub)}</span></div>`
            )
            .join("")}
        </section>

        <section>
          <div class="h-sec">${esc(c.labels.interests)}</div>
          <div class="tags">
            ${c.researchInterests.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}
          </div>
        </section>
      </div>

      <div class="main1">
        <section>
          <div class="h-sec">${esc(c.labels.profile)}</div>
          <p class="profile-text">${esc(c.profile)}</p>
          <div class="stat-strip">
            ${c.stats
              .map((s) => `<div class="stat-tile"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`)
              .join("")}
          </div>
        </section>

        <section>
          <div class="h-sec">${esc(c.labels.skills)}</div>
          ${skillGrid(c.skillGroups)}
        </section>
      </div>
    </div>
  </div>

  <!-- PAGE 2 -->
  <div class="page">
    <section class="two-col">
      <div>
        <div class="h-sec">${esc(c.labels.experience)}</div>
        ${c.experience
          .map(
            (e) => `<div class="exp-item">
              <div class="item-top"><b>${esc(e.role)}</b><span class="dates">${esc(e.dates)}</span></div>
              <div class="item-org">${esc(e.org)}</div>
              <div class="item-detail">${esc(e.desc)}</div>
            </div>`
          )
          .join("")}
      </div>
      <div>
        <div class="h-sec">${esc(c.labels.education)}</div>
        ${c.education
          .map(
            (e) => `<div class="edu-item">
              <div class="item-top"><b>${esc(e.degree)}</b><span class="dates">${esc(e.dates)}</span></div>
              <div class="item-org">${esc(e.org)}</div>
              <div class="item-detail">${esc(e.detail)}</div>
            </div>`
          )
          .join("")}
      </div>
    </section>

    <section style="margin-top:13pt;">
      <div class="h-sec">${esc(c.projectsHeading)}</div>
      <div class="projects-grid">
        ${c.projects
          .map(
            (p) => `<div class="proj">
              <div class="proj-top"><b>${esc(p.name)}</b><span>${esc(p.tags)}</span></div>
              <p>${esc(p.desc)}</p>
            </div>`
          )
          .join("")}
      </div>
    </section>

    <section class="two-col" style="margin-top:13pt;">
      <div>
        <div class="h-sec">${esc(c.conferenceHeading)}</div>
        <div class="conf-list">
          ${c.conference
            .map(
              (item, i) => `<div class="conf-item">
                <div class="conf-num">${i + 1}.</div>
                <div>
                  <div class="conf-title">${esc(item.title)}</div>
                  <div class="conf-venue">${esc(item.venue)}</div>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>
      <div>
        <div class="h-sec">${esc(c.researchProjectsHeading)}</div>
        <div class="rp-list">
          ${c.researchProjects
            .map(
              (r) => `<div class="rp-item"><b>${esc(r.title)}</b><span>${esc(r.org)}</span></div>`
            )
            .join("")}
        </div>
      </div>
    </section>
  </div>

</body>
</html>`;
}
