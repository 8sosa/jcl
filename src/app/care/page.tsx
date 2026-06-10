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

const CARE_MATERIALS = [
  {
    material: "Egyptian Cotton",
    tagline: "Long-staple cotton. The foundation of every collection.",
    steps: [
      { icon: "⟲", label: "Wash", text: "Machine wash at 40°C on a gentle or cotton cycle. Wash separately for first use to set the colour." },
      { icon: "◎", label: "Dry", text: "Tumble dry on low, or line dry in shade. Remove promptly to prevent creasing." },
      { icon: "▽", label: "Iron", text: "Iron on medium-high while slightly damp. This is when Egyptian cotton looks its finest." },
      { icon: "◈", label: "Store", text: "Store folded in a cool, dry place. Avoid compressed storage — the fibres need room to breathe." },
    ],
    avoid: ["Bleach or optical brighteners — they break down the fibre", "High-heat drying — it shrinks and weakens the weave", "Direct sunlight storage — it fades the colour"],
  },
  {
    material: "Belgian Linen",
    tagline: "Natural flax. Gets softer and more beautiful with every wash.",
    steps: [
      { icon: "⟲", label: "Wash", text: "Machine wash at 40°C or cool. Linen becomes softer over time — frequent washing is encouraged." },
      { icon: "◎", label: "Dry", text: "Tumble dry on low or air dry flat. Linen dries quickly and naturally relaxes as it does." },
      { icon: "▽", label: "Iron", text: "Iron damp on medium heat. Or embrace the natural linen texture — it is part of its character." },
      { icon: "◈", label: "Store", text: "Store loosely folded. Linen is sturdy; no special storage required beyond keeping it dry." },
    ],
    avoid: ["Fabric softener — it clogs the fibres and reduces breathability", "Over-drying — it makes linen brittle", "Sharp folds stored in same position for extended periods"],
  },
  {
    material: "Mulberry Silk",
    tagline: "Grade 6A silk. Handle with the care it deserves.",
    steps: [
      { icon: "⟲", label: "Wash", text: "Hand wash in cool water with a gentle silk detergent. Or machine wash on a dedicated silk or delicate cycle in a mesh bag." },
      { icon: "◎", label: "Dry", text: "Do not wring. Roll in a clean towel to remove moisture, then lay flat or hang to dry in shade." },
      { icon: "▽", label: "Iron", text: "Iron on the lowest setting, inside out, while slightly damp. Use a pressing cloth between the iron and the silk." },
      { icon: "◈", label: "Store", text: "Store flat or loosely rolled, away from direct light. Silk is sensitive to prolonged UV exposure." },
    ],
    avoid: ["Bleach or enzyme-based detergents", "Tumble drying — the heat damages the protein fibre", "Hanging storage long-term — gravity stretches silk"],
  },
];

export default function CarePage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          Customer Care
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          Care Instructions
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
          With the right care, a John Collins piece improves with age. Each material has its own character — here&apos;s how to honour it.
        </motion.p>
      </section>

      {/* ── Material care sections ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5rem, 10vw, 8rem)" }}>
            {CARE_MATERIALS.map((mat, idx) => (
              <FadeIn key={mat.material} delay={0}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>

                  {/* Label */}
                  <div>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(0.65rem, 1vw, 0.75rem)", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>0{idx + 1}</p>
                    <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.1, marginBottom: "1rem" }}>{mat.material}</h2>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#9B8E82", lineHeight: 1.6, fontStyle: "italic", marginBottom: "2.5rem" }}>{mat.tagline}</p>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C1623F", marginBottom: "1rem" }}>Avoid</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                        {mat.avoid.map((a) => (
                          <div key={a} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                            <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#C1623F", flexShrink: 0, marginTop: "2px" }}>×</span>
                            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6B5B4E", lineHeight: 1.5 }}>{a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Steps */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {mat.steps.map((step, si) => (
                      <div key={step.label} style={{ display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "1rem", padding: "1.5rem 0", borderBottom: si < mat.steps.length - 1 ? "1px solid rgba(26,26,46,0.06)" : "none", alignItems: "start" }}>
                        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", color: "#C9A96E", lineHeight: 1, marginTop: "2px" }}>{step.icon}</p>
                        <div>
                          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A1A2E", fontWeight: 600, marginBottom: "0.5rem" }}>{step.label}</p>
                          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.7 }}>{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── General tips ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", backgroundColor: "rgba(26,26,46,0.02)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", marginBottom: "2rem" }}>General care tips</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Wash new bedding before first use to remove any finishing agents from the production process.",
                  "Rotate between two sets of bedding to extend the life of each set — we recommend washing every 10–14 days.",
                  "In Nigeria&apos;s humid climate, ensure bedding is thoroughly dry before storage to prevent mildew.",
                  "High-quality bedding improves with washing. The more you wash it correctly, the softer it becomes.",
                  "When in doubt, wash cooler and dry slower. Heat is the enemy of fine textiles.",
                ].map((tip, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C9A96E", flexShrink: 0, marginTop: "8px" }} />
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "#6B5B4E", lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: tip }} />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", textAlign: "center" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Questions about your specific piece?</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1A1A2E", marginBottom: "2rem" }}>We&apos;re always happy to advise.</h2>
            <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>Contact our team</Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
