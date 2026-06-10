"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

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

export default function PromisePage() {
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{ display: "inline-block", marginBottom: "2.5rem", padding: "0.65rem 1.75rem", border: "1px solid #C9A96E" }}
        >
          <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "3rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1.2, display: "block" }}>30</span>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E" }}>Night Trial</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.1, marginBottom: "1.75rem" }}
        >
          &ldquo;The finest bedding you have ever owned,<br />or your money back.&rdquo;
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}
        >
          Our unconditional 30-night sleep trial. No questions asked. No hoops to jump through.
        </motion.p>
      </section>

      {/* ── Promise detail ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(3rem, 7vw, 6rem)",
            }}
          >
            <FadeIn>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "1.75rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.75rem" }}>
                  How the trial works
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { step: "01", text: "Order any John Collins product at johncollins.ng" },
                    { step: "02", text: "Sleep on it for up to 30 nights. Really use it. Wash it. Live with it." },
                    { step: "03", text: "If you're not completely satisfied, contact us at any point during the 30 days." },
                    { step: "04", text: "We'll arrange a free collection from your door in Lagos or Abuja." },
                    { step: "05", text: "You receive a full refund within 5 business days. No deductions." },
                  ].map((s) => (
                    <div key={s.step} style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                      <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1, flexShrink: 0, minWidth: "2.5rem" }}>{s.step}</span>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.75, paddingTop: "0.15rem" }}>{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "1.75rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.75rem" }}>
                  Why we offer this
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.9, marginBottom: "1.75rem" }}>
                  The biggest barrier to buying premium bedding online is simple: you can&apos;t feel the fabric through a screen. A photograph cannot communicate the cool weight of 400-thread-count Egyptian cotton percale or the silken slip of Grade 6A Mulberry silk.
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  Our 30-night trial is our answer to that barrier. We are so confident in the quality of every John Collins product that we will let you sleep on it for a month before you decide. That is not a marketing promise. That is an operational commitment backed by our return rate target of under 4%.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Guarantees grid ── */}
      <section style={{ backgroundColor: "#1A1A2E" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>Our Full Commitment</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#F5F0E8" }}>
                Every John Collins guarantee.
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(1.25rem, 2.5vw, 2rem)",
            }}
          >
            {[
              { title: "30-Night Sleep Trial", body: "Return any product within 30 nights for a full refund. No questions asked. Collection from your door." },
              { title: "5-Year Craftsmanship Guarantee", body: "Every product guaranteed against manufacturing defects for 5 years. We stand behind our work." },
              { title: "OEKO-TEX Certified", body: "Every material certified under OEKO-TEX Standard 100. Safe for skin. Free of harmful substances." },
              { title: "Free Returns", body: "Free return collection in Lagos and Abuja. International return shipping covered for trial returns." },
              { title: "Plastic-Free Packaging", body: "Every John Collins shipment arrives plastic-free. Recycled cardboard, tissue paper, satin ribbon." },
              { title: "Complimentary Shipping", body: "Complimentary delivery on all orders over ₦150,000. Lagos and Abuja within 48 hours. International via DHL Express." },
            ].map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.06}>
                <div
                  style={{
                    padding: "clamp(1.5rem, 3vw, 2.25rem)",
                    border: "1px solid rgba(245,240,232,0.1)",
                    height: "100%",
                    boxSizing: "border-box",
                  }}
                >
                  <Check size={16} style={{ color: "#C9A96E", marginBottom: "1.25rem" }} />
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 500, color: "#F5F0E8", marginBottom: "0.85rem" }}>{g.title}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.8 }}>{g.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section>
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            padding: `${SP} clamp(2rem, 6vw, 7rem)`,
            textAlign: "center",
          }}
        >
          <FadeIn>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.1, marginBottom: "1rem" }}>
              Ready to begin your 30 nights?
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#9B8E82", lineHeight: 1.7, marginBottom: "2.75rem" }}>
              Every collection comes with our unconditional trial promise.
            </p>
            <Link href="/collections" className="btn-primary" style={{ fontSize: "0.75rem" }}>
              Shop All Collections <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
