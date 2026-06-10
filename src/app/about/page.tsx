"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CONTAINER = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "0 clamp(2rem, 6vw, 7rem)",
} as const;

const SP = "clamp(5rem, 10vw, 8rem)";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          textAlign: "center",
          borderBottom: "1px solid rgba(26,26,46,0.08)",
          padding: `${SP} clamp(2rem, 6vw, 7rem)`,
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}
        >
          The Brand Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}
        >
          Born of London.
          <br />
          <span style={{ fontStyle: "italic" }}>Built for Nigeria.</span>
        </motion.h1>
      </section>

      {/* ── Origin story ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(2.5rem, 6vw, 5rem)",
            }}
          >
            <FadeIn>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "1.75rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  The Observation
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  Nigeria&apos;s most accomplished professionals — people who fly business class, holiday in Dubai, and stay in five-star hotels around the world — come home to bedding that doesn&apos;t match their standards.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "1.75rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  The Answer
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  The name John Collins carries the authority of British heritage — the confidence of a London address, the precision of Savile Row, and the trust that comes from a name that stands behind its craft. In Nigeria, that provenance means something.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Pull quote ── */}
      <section style={{ backgroundColor: "#1A1A2E" }}>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: `${SP} clamp(2rem, 6vw, 7rem)`,
            textAlign: "center",
          }}
        >
          <FadeIn>
            <div style={{ width: "1px", height: "60px", backgroundColor: "#C9A96E", margin: "0 auto 2.5rem" }} />
            <blockquote
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 300, fontStyle: "italic", color: "#F5F0E8", lineHeight: 1.35, marginBottom: "2.5rem" }}
            >
              &ldquo;To be Africa&apos;s most trusted British bedding brand — bringing the art of the perfect night&apos;s sleep to every discerning Nigerian home, and beyond, without compromise.&rdquo;
            </blockquote>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E" }}>
              Our Vision
            </p>
            <div style={{ width: "1px", height: "60px", backgroundColor: "#C9A96E", margin: "2.5rem auto 0" }} />
          </FadeIn>
        </div>
      </section>

      {/* ── The making ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>The Making</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1A1A2E" }}>
                Designed in Lagos. <span style={{ fontStyle: "italic" }}>Finished in Portugal.</span>
              </h2>
            </div>
          </FadeIn>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            {[
              {
                step: "01",
                place: "Lagos & Abuja",
                title: "Design",
                body: "Every collection begins in our Lagos studio. Informed by Nigeria's extraordinary palette of colour, culture, and texture — from harmattan dust to Eko Atlantic at dusk.",
                bg: "bg-terracotta",
              },
              {
                step: "02",
                place: "Egypt · Belgium",
                title: "Sourcing",
                body: "Long-staple cotton from the Nile Delta. Belgian flax linen from Flemish fields. Grade 6A Mulberry silk. Each material selected for its exceptional hand-feel and longevity.",
                bg: "bg-abuja",
              },
              {
                step: "03",
                place: "Portugal · Italy",
                title: "Craftsmanship",
                body: "Finished in OEKO-TEX certified mills in Portugal and Italy. Every product undergoes rigorous quality control before it earns the John Collins name.",
                bg: "bg-aso",
              },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div style={{ border: "1px solid rgba(26,26,46,0.1)", overflow: "hidden" }}>
                  <div className={s.bg} style={{ height: "200px", position: "relative" }}>
                    <div style={{ position: "absolute", bottom: "1rem", left: "1rem", fontFamily: "var(--font-cormorant)", fontSize: "4rem", fontWeight: 300, color: "rgba(245,240,232,0.3)", lineHeight: 1 }}>
                      {s.step}
                    </div>
                  </div>
                  <div style={{ padding: "clamp(1.5rem, 3vw, 2rem)" }}>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.6rem" }}>{s.place}</p>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 500, color: "#1A1A2E", marginBottom: "0.85rem" }}>{s.title}</h3>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.8 }}>{s.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", borderBottom: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>What Our Customers Say</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1A1A2E" }}>
                In their own words.
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            {[
              {
                quote: "The quality is immediately apparent. I've stayed at The Lanesborough in London, The Aman in Tokyo. John Collins holds its own against both. That's not marketing — that's fact.",
                name: "Chisom A.",
                detail: "Senior Partner · Victoria Island, Lagos",
                collection: "The Aso Collection",
              },
              {
                quote: "I sent a Complete Bed Set to my parents in Abuja for their housewarming. My mother called me three times to say thank you. She said it was the best gift anyone had ever given her.",
                name: "Emeka O.",
                detail: "Investment Banker · Canary Wharf, London",
                collection: "The Abuja Collection",
              },
              {
                quote: "Finally a brand that doesn't ask me to choose between Nigerian and world-class. The silk is extraordinary. My guests always ask about it. Every time.",
                name: "Adaeze N.",
                detail: "Director · Maitama, Abuja",
                collection: "The Aso Collection",
              },
            ].map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div style={{ padding: "clamp(2rem, 3vw, 2.75rem)", border: "1px solid rgba(26,26,46,0.1)", height: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
                  {/* Decorative opening quote */}
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "4.5rem", color: "#C9A96E", lineHeight: 0.6, marginBottom: "1.5rem", opacity: 0.8 }}>&ldquo;</div>
                  {/* Quote text */}
                  <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.75, flex: 1, marginBottom: "2rem" }}>
                    {t.quote}
                  </p>
                  {/* Author */}
                  <div style={{ borderTop: "1px solid rgba(26,26,46,0.08)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "3px" }}>{t.name}</p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#9B8E82", letterSpacing: "0.02em" }}>{t.detail}</p>
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#C9A96E", textAlign: "right" }}>{t.collection}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sustainability ── */}
      <section style={{ backgroundColor: "#1A1A2E" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(3rem, 6vw, 6rem)",
              alignItems: "center",
            }}
          >
            <FadeIn>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>Conscious Craftsmanship</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.75rem" }}>
                  Heirlooms in waiting.
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.9 }}>
                  We reject the disposability that plagues the mid-market. Carbon-aware logistics, plastic-free packaging, and a 5-year craftsmanship guarantee. Every John Collins product is designed to last — and to look even better with time.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(1rem, 2vw, 1.5rem)",
                }}
              >
                {[
                  { metric: "OEKO-TEX", label: "Standard 100 Certified" },
                  { metric: "5 Years", label: "Craftsmanship Guarantee" },
                  { metric: "0", label: "Plastic in our packaging" },
                  { metric: "100%", label: "Ethically sourced materials" },
                ].map((m) => (
                  <div key={m.metric} style={{ padding: "clamp(1.25rem, 2.5vw, 1.75rem)", border: "1px solid rgba(245,240,232,0.1)", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 400, color: "#C9A96E", marginBottom: "0.5rem" }}>{m.metric}</div>
                    <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "rgba(245,240,232,0.5)", letterSpacing: "0.05em", lineHeight: 1.5 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderBottom: "1px solid rgba(26,26,46,0.08)" }}>
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            padding: `${SP} clamp(2rem, 6vw, 7rem)`,
            textAlign: "center",
          }}
        >
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.1, marginBottom: "2.5rem" }}>
              Ready to sleep better?
            </h2>
            <Link href="/collections" className="btn-primary" style={{ fontSize: "0.75rem" }}>
              Shop All Collections <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
