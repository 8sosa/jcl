"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

const TIERS = [
  {
    name: "Signature",
    forWho: "Independent boutique hotels, guesthouses",
    desc: "Our standard luxury collection, available at volume pricing. Includes housekeeping consultation and initial setup support.",
    items: ["Fitted sheets & duvet covers", "Pillowcases & shams", "Bath & pool towels (upon request)", "Branded presentation on delivery"],
    moq: "10 rooms minimum",
  },
  {
    name: "Reserve",
    forWho: "Five-star hotels and resorts",
    desc: "Bespoke collections developed for your property — custom colourways, embroidered monograms, and dedicated account management.",
    items: ["Everything in Signature", "Custom colourways & embroidery", "Co-branded packaging", "Seasonal replenishment programme", "Dedicated account manager"],
    moq: "25 rooms minimum",
  },
  {
    name: "Estate",
    forWho: "Private residences, villas, private members clubs",
    desc: "For properties where the bedding is as considered as the architecture. Fully bespoke design service, white-glove installation, and an ongoing concierge relationship.",
    items: ["Fully bespoke design", "Interior designer liaison", "White-glove installation", "Concierge replenishment", "Private viewing appointments"],
    moq: "By consultation",
  },
];

export default function HospitalityPage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          The Brand
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          Hotel Partnerships
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto" }}>
          The sleep quality of your property is felt before a word is said. John Collins partners with Nigeria&apos;s most distinguished hotels, resorts, and private residences to deliver the sleep their guests deserve.
        </motion.p>
      </section>

      {/* ── Why section ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  Why it matters to your guests
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  Research consistently shows that sleep quality is the number one driver of hotel review scores. Guests remember the bed. A John Collins partnership signals that your property is serious about the details that matter — the kind of detail a discerning Nigerian traveller notices and remembers.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { stat: "#1", text: "Sleep quality is the top driver of hotel review scores among luxury guests." },
                  { stat: "78%", text: "of guests say the quality of bedding directly influences their likelihood to return." },
                  { stat: "3×", text: "more brand mentions when guests photograph the bedroom and share on social." },
                ].map((item) => (
                  <div key={item.stat} style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", padding: "1.5rem", border: "1px solid rgba(26,26,46,0.1)" }}>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1, flexShrink: 0 }}>{item.stat}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.6, marginTop: "4px" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Partnership tiers ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Partnership tiers</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E" }}>Choose your level of partnership</h2>
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(1.25rem, 3vw, 2rem)" }}>
            {TIERS.map((tier, i) => (
              <FadeIn key={tier.name} delay={i * 0.1}>
                <div style={{ padding: "clamp(2rem, 3.5vw, 2.75rem)", border: "1px solid rgba(26,26,46,0.1)", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>{tier.name}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#9B8E82", marginBottom: "1.25rem", fontStyle: "italic" }}>{tier.forWho}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.7, marginBottom: "1.75rem" }}>{tier.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", flex: 1, marginBottom: "2rem" }}>
                    {tier.items.map((item) => (
                      <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C9A96E", flexShrink: 0, marginTop: "7px" }} />
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#6B5B4E", lineHeight: 1.5 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ borderTop: "1px solid rgba(26,26,46,0.08)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#9B8E82" }}>{tier.moq}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enquiry ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", backgroundColor: "#1A1A2E" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP, textAlign: "center" }}>
          <FadeIn>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 0.8 }} style={{ width: "80px", height: "1px", backgroundColor: "#C9A96E", margin: "0 auto 2.5rem" }} />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>Let&apos;s discuss your property</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#F5F0E8", marginBottom: "1.5rem" }}>
              Begin a partnership enquiry
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.8, maxWidth: "460px", margin: "0 auto 2.5rem" }}>
              Send us a message with your property details and we&apos;ll arrange a consultation at your convenience. No obligation.
            </p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F5F0E8", border: "1px solid rgba(245,240,232,0.3)", padding: "1rem 2rem", transition: "all 0.3s" }}>
              Enquire now <ArrowRight size={12} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
