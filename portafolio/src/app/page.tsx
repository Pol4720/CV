"use client";

import { useEffect } from "react";

/**
 * Static-host-safe root redirect (works on GitHub Pages / any static host,
 * where there is no server to issue an HTTP redirect or run middleware).
 * Uses a relative target so it works regardless of a basePath sub-directory.
 */
export default function RootPage() {
  useEffect(() => {
    const preferred = navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
    window.location.replace(`./${preferred}/`);
  }, []);

  return (
    <>
      <meta httpEquiv="refresh" content="1; url=./es/" />
      <noscript>
        <p style={{ textAlign: "center", marginTop: "4rem", fontFamily: "sans-serif" }}>
          <a href="./es/">Español</a> · <a href="./en/">English</a>
        </p>
      </noscript>
    </>
  );
}
