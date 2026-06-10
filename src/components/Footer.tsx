"use client";

import Link from "next/link";

const CONTAINER = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "0 clamp(2rem, 6vw, 7rem)",
} as const;

const FOOTER_LINKS = {
  Collections: [
    { label: "The Lagos Collection", href: "/collections/lagos" },
    { label: "The Abuja Collection", href: "/collections/abuja" },
    { label: "The Ile Collection", href: "/collections/ile" },
    { label: "The Aso Collection", href: "/collections/aso" },
    { label: "Gift Sets", href: "/gifting" },
  ],
  "Customer Care": [
    { label: "The 30-Night Promise", href: "/promise" },
    { label: "Sizing Guide", href: "/sizing" },
    { label: "Care Instructions", href: "/care" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Contact Us", href: "/contact" },
  ],
  "The Brand": [
    { label: "Our Story", href: "/about" },
    { label: "The Craftspeople", href: "/craftspeople" },
    { label: "Hotel Partnerships", href: "/hospitality" },
    { label: "Corporate Gifting", href: "/gifting" },
    { label: "Press", href: "/press" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A1A2E", color: "#F5F0E8" }}>

      {/* Newsletter */}
      <div style={{ borderBottom: "1px solid rgba(245,240,232,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: "clamp(4rem, 8vw, 6rem)", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>
              The Linen Letter
            </p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3vw, 2.35rem)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.25, marginBottom: "1rem", color: "#F5F0E8" }}>
              Sleep science, Nigerian craft heritage, and the stories behind our collections.
            </h3>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(245,240,232,0.5)", marginBottom: "2.25rem", lineHeight: 1.6 }}>
              Monthly. Beautifully designed. Never promotional in tone.
            </p>
            <form style={{ display: "flex", gap: 0 }} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="input-luxury-dark"
                style={{ flex: 1, minWidth: 0 }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#C1623F",
                  color: "#F5F0E8",
                  padding: "0.85rem 1.75rem",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  border: "1px solid #C1623F",
                  cursor: "pointer",
                  flexShrink: 0,
                  transition: "opacity 0.2s",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div style={{ ...CONTAINER, paddingTop: "clamp(4rem, 8vw, 6rem)", paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(2.5rem, 5vw, 4rem)" }}>

          {/* Brand column */}
          <div>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", lineHeight: 1, marginBottom: "5px" }}>
                John Collins
              </div>
              <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.52rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E" }}>
                Est. London
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,240,232,0.5)", lineHeight: 1.8, marginBottom: "2rem" }}>
              The finest British bedding in Africa — globally sourced, Nigerian in spirit, built for a continent ready to sleep better.
            </p>
            <div style={{ display: "flex", gap: "1.25rem" }}>
              <a href="#" style={{ color: "rgba(245,240,232,0.45)", transition: "color 0.2s" }} aria-label="Instagram"
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" style={{ color: "rgba(245,240,232,0.45)", transition: "color 0.2s" }} aria-label="Facebook"
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" style={{ color: "rgba(245,240,232,0.45)", transition: "color 0.2s" }} aria-label="TikTok"
                onMouseEnter={e => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.33 6.33 0 00-6.34 6.33 6.33 6.33 0 006.34 6.33 6.33 6.33 0 006.33-6.33V8.88a8.27 8.27 0 004.83 1.54V7.03a4.85 4.85 0 01-1.06-.34z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.75rem" }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,240,232,0.5)", textDecoration: "none", transition: "color 0.2s", lineHeight: 1 }}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.9)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.5)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(245,240,232,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: "1.75rem", paddingBottom: "1.75rem" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between" style={{ gap: "1rem" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "rgba(245,240,232,0.3)", letterSpacing: "0.04em" }}>
              © 2025 John Collins Nigeria. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: "1.75rem" }}>
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "rgba(245,240,232,0.3)", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.3)")}>
                  {item}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["OEKO-TEX", "5yr Guarantee", "30-Night Trial"].map((b) => (
                <span key={b} style={{ fontFamily: "var(--font-inter)", fontSize: "0.52rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.25)", border: "1px solid rgba(245,240,232,0.12)", padding: "3px 9px" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
