"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const CONTAINER = { maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(2rem, 6vw, 7rem)" } as const;
const SP = "clamp(5rem, 10vw, 8rem)";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

function TableSection({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) {
  return (
    <FadeIn>
      <div style={{ marginBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>{title}</p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(26,26,46,0.15)" }}>
                {headers.map((h) => (
                  <th key={h} style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9B8E82", padding: "0 0 1rem 0", textAlign: "left", fontWeight: 400, paddingRight: "2rem" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(26,26,46,0.06)" }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ fontFamily: j === 0 ? "var(--font-cormorant)" : "var(--font-inter)", fontSize: j === 0 ? "1rem" : "0.78rem", color: j === 0 ? "#1A1A2E" : "#6B5B4E", padding: "1rem 2rem 1rem 0", fontWeight: j === 0 ? 500 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FadeIn>
  );
}

export default function SizingPage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          Customer Care
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          Sizing Guide
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
          All John Collins bedding is sized to UK standards. Below you&apos;ll find dimensions for every size we offer, plus guidance on how our sizes map to the beds most commonly found across Nigeria.
        </motion.p>
      </section>

      {/* ── Tables ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>

          <TableSection
            title="Mattress &amp; Fitted Sheet Dimensions (UK Standard)"
            headers={["Size", "Width", "Length", "Also known as"]}
            rows={[
              ["Single", "90 cm", "190 cm", "3ft / Twin"],
              ["Small Double", "120 cm", "190 cm", "4ft / Full"],
              ["Double", "135 cm", "190 cm", "4ft 6in"],
              ["King", "150 cm", "200 cm", "5ft"],
              ["Super King", "180 cm", "200 cm", "6ft"],
            ]}
          />

          <TableSection
            title="Duvet Cover &amp; Flat Sheet Dimensions"
            headers={["Size", "Width", "Length", "Covers mattress size"]}
            rows={[
              ["Single", "135 cm", "200 cm", "Single"],
              ["Double", "200 cm", "200 cm", "Small Double / Double"],
              ["King", "230 cm", "220 cm", "King"],
              ["Super King", "260 cm", "220 cm", "Super King"],
            ]}
          />

          <TableSection
            title="Pillowcase Dimensions"
            headers={["Type", "Width", "Length", "Notes"]}
            rows={[
              ["Standard", "50 cm", "75 cm", "Fits most UK & Nigerian pillows"],
              ["Oxford", "50 cm", "75 cm", "+5 cm flange border on all sides"],
              ["Continental / Square", "65 cm", "65 cm", "For Euro-square pillows & cushions"],
            ]}
          />

          <FadeIn>
            <div style={{ padding: "clamp(2rem, 3.5vw, 3rem)", border: "1px solid rgba(201,169,110,0.3)", backgroundColor: "rgba(201,169,110,0.06)", marginBottom: "clamp(3.5rem, 6vw, 5rem)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>A note on Nigerian bed sizes</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                Nigerian furniture makers and importers frequently use US naming conventions — a Nigerian "King" is often 160 × 200 cm, wider than the UK King (150 cm). We recommend measuring your mattress before ordering a fitted sheet. For all other pieces — flat sheets, duvet covers, pillowcases — our sizes offer generous overhang and will fit Nigerian beds comfortably.
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "#6B5B4E", lineHeight: 1.9, marginTop: "1rem" }}>
                If you&apos;re unsure, our team is happy to help you select the right size — <Link href="/contact" style={{ color: "#C9A96E", textDecoration: "underline" }}>get in touch</Link>.
              </p>
            </div>
          </FadeIn>

          <TableSection
            title="Duvet &amp; Pillow Insert Sizing"
            headers={["Item", "Dimensions", "Fill weight / tog", "Season"]}
            rows={[
              ["Double Duvet", "200 × 200 cm", "4.5 tog", "All-year Nigerian climate"],
              ["King Duvet", "230 × 220 cm", "4.5 tog", "All-year Nigerian climate"],
              ["Super King Duvet", "260 × 220 cm", "4.5 tog", "All-year Nigerian climate"],
              ["Standard Pillow", "50 × 75 cm", "800 fill power goose down", "All-year"],
              ["Continental Pillow", "65 × 65 cm", "800 fill power goose down", "All-year"],
            ]}
          />

        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", textAlign: "center" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Need personalised guidance?</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1A1A2E", marginBottom: "2rem" }}>Our team will size your bed.</h2>
            <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>Contact our team</Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
