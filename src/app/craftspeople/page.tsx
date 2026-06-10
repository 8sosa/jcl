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

const PARTNERS = [
  {
    country: "Egypt",
    region: "Nile Delta",
    role: "Long-staple cotton weaving",
    description: "Our Egyptian cotton is grown in the fertile Nile Delta where the climate produces the world's longest, most lustrous fibres. Our mill partners have been weaving here for three generations, maintaining the hand-finishing traditions that no industrial process can replicate.",
    stat: "500 thread count",
    statLabel: "minimum weave",
  },
  {
    country: "Belgium",
    region: "West Flanders",
    role: "Heritage linen spinning",
    description: "Belgian flax — grown in the same coastal strip that has produced Europe's finest linen for centuries — is spun at a family mill that has operated since 1889. The cool, wet Flemish climate is integral: it softens the retting process and produces a fibre of incomparable quality.",
    stat: "Since 1889",
    statLabel: "continuous operation",
  },
  {
    country: "China",
    region: "Jiangsu Province",
    role: "Grade 6A Mulberry silk",
    description: "Our Mulberry silk is produced at a sixth-generation sericulture farm that controls every stage from mulberry cultivation to final reeling. Grade 6A — the highest classification — represents less than 1% of global silk production. Only unbroken filaments of perfect luster qualify.",
    stat: "Grade 6A",
    statLabel: "top 1% globally",
  },
  {
    country: "Portugal",
    region: "Guimarães",
    role: "Cotton and linen finishing",
    description: "Our cotton and linen pieces are finished in Guimarães — Portugal's textile capital — where the combination of soft Atlantic water and centuries of craft knowledge produces the perfect hand-feel. Each piece is Sanforised to prevent shrinkage and mercerised for exceptional colour depth.",
    stat: "Zero shrinkage",
    statLabel: "Sanforised guarantee",
  },
  {
    country: "Italy",
    region: "Como",
    role: "Silk printing and finishing",
    description: "Silk finishing is completed in Como — the global capital of silk craftsmanship, where the masters have worked with the finest houses in the world for 200 years. The pigments used in our silk collections are certified non-toxic and fixed using a steam-setting process that ensures decades of colour stability.",
    stat: "200 years",
    statLabel: "Como silk tradition",
  },
];

export default function CraftspeoplePage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          The Brand
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          The Craftspeople
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "540px", margin: "0 auto" }}>
          John Collins bedding is made by five partner families across four countries — each the finest producer of their material in the world. This is who makes what you sleep on.
        </motion.p>
      </section>

      {/* ── Philosophy intro ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "center" }}>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  Why provenance matters
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  In luxury, the origin of a material is inseparable from its quality. The same cotton seed grown in different soil, in a different climate, harvested by different hands, produces a fundamentally different textile. We work with the world&apos;s best because their soil, their water, their generational knowledge cannot be replicated elsewhere.
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                {[
                  { num: "5", label: "Partner families" },
                  { num: "4", label: "Countries" },
                  { num: "1889", label: "Oldest mill founded" },
                  { num: "0", label: "Factories used" },
                ].map((stat) => (
                  <div key={stat.label} style={{ padding: "1.75rem", border: "1px solid rgba(26,26,46,0.1)", textAlign: "center" }}>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1, marginBottom: "0.5rem" }}>{stat.num}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#9B8E82" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Partner profiles ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {PARTNERS.map((p, i) => (
              <FadeIn key={p.country} delay={0}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(2.5rem, 5vw, 5rem)", padding: `clamp(3rem, 6vw, 5rem) 0`, borderBottom: i < PARTNERS.length - 1 ? "1px solid rgba(26,26,46,0.08)" : "none", alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.6rem" }}>{p.country} · {p.region}</p>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "0.75rem" }}>{p.role}</h3>
                    <div style={{ width: "24px", height: "1px", backgroundColor: "#C9A96E", margin: "1.5rem 0" }} />
                    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <div style={{ textAlign: "center" }}>
                        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1 }}>{p.stat}</p>
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "#9B8E82", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{p.statLabel}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.9 }}>{p.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promise callout ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", textAlign: "center" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Our commitment</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1A1A2E", marginBottom: "1.5rem" }}>
              Every decision in service of one thing.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 2.5rem" }}>
              The world&apos;s finest sleep, made available to Nigeria — without compromise, without shortcuts, without apology.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/promise" className="btn-primary" style={{ display: "inline-flex" }}>Our promise</Link>
              <Link href="/about" className="btn-secondary" style={{ display: "inline-flex" }}>Our story</Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
