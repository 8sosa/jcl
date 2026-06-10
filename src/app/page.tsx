"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, type UseInViewOptions, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { COLLECTIONS, formatPrice } from "@/lib/data";
import { useCart } from "@/context/CartContext";

/* ─── shared layout token ──────────────────────────────────────────────── */
const CONTAINER = {
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "0 clamp(2rem, 6vw, 7rem)",
} as const;

const SECTION_PAD = "clamp(5.5rem, 10vw, 9rem)";

/* ─── animation helpers ────────────────────────────────────────────────── */
function useReveal(opts?: { margin?: UseInViewOptions["margin"] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: opts?.margin ?? "-80px" });
  return { ref, inView };
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE } },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: 0.1 } },
});

function Reveal({
  children,
  variants = slideUp,
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, inView } = useReveal();
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ delay }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function StaggerGrid({
  children,
  staggerDelay,
  style,
  className,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const { ref, inView } = useReveal({ margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger(staggerDelay)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── page ──────────────────────────────────────────────────────────────── */
export default function HomePage() {
  const { currency } = useCart();

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="hero-texture relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "calc(100vh - 96px)", padding: `clamp(5rem, 12vw, 9rem) clamp(2rem, 6vw, 7rem)` }}
      >
        {[80, 58, 36].map((s) => (
          <div key={s} className="absolute pointer-events-none" aria-hidden style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: `${s}vmax`, height: `${s}vmax`, borderRadius: "50%", border: `1px solid rgba(201,169,110,${0.08 + (80 - s) * 0.002})` }} />
        ))}

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: "easeOut" }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E 40%, #C9A96E 60%, transparent)", transformOrigin: "left" }} />

        <div className="relative z-10" style={{ maxWidth: "800px" }}>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "2rem" }}>
            Est. London · Designed for Nigeria
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 300, fontStyle: "italic", color: "#1A1A2E", lineHeight: 1, marginBottom: "0.3rem" }}>
            Sleep Like
          </motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(4rem, 10vw, 8rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1, marginBottom: "2.5rem" }}>
            You&apos;ve Arrived.
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, delay: 0.85 }} style={{ width: "60px", height: "1px", backgroundColor: "#C9A96E", margin: "0 auto 2rem", transformOrigin: "center" }} />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1 }} style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(0.8rem, 1.5vw, 0.95rem)", color: "#6B5B4E", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 3rem" }}>
            The finest British bedding in Africa — long-staple Egyptian cotton, Belgian flax linen, and Mulberry silk, finished in certified mills in Portugal and Italy.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.15 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/collections" className="btn-primary">Explore Collections <ArrowRight size={14} /></Link>
            <Link href="/about" className="btn-secondary" style={{ color: "#1A1A2E", borderColor: "rgba(26,26,46,0.3)" }}>Our Story</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.4 }} className="flex items-center justify-center flex-wrap" style={{ gap: "2rem", marginTop: "3.5rem" }}>
            {["OEKO-TEX Certified", "30-Night Trial", "5-Year Guarantee", "Free Returns"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C9A96E" }} />
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#9B8E82" }}>{b}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.5rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#9B8E82" }}>Scroll</span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={16} style={{ color: "#C9A96E" }} />
          </motion.div>
        </motion.div>
      </section>

      {/* ── COLLECTIONS ──────────────────────────────────────────── */}
      <section style={{ padding: `${SECTION_PAD} 0` }}>
        <div style={CONTAINER}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3.5rem" }}>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>Four Collections. One Standard.</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.1 }}>
                  Global materials.<span style={{ fontStyle: "italic" }}> Nigerian soul.</span>
                </h2>
              </div>
              <Link href="/collections" className="hidden md:flex items-center gap-2" style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#C1623F", textDecoration: "none", flexShrink: 0 }}>
                View All <ArrowRight size={12} />
              </Link>
            </div>
          </Reveal>

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(1rem, 2vw, 1.75rem)" }}>
            {COLLECTIONS.map((col, i) => (
              <motion.div key={col.id} variants={slideUp}>
                <CollectionCard col={col} currency={currency} />
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── BRAND STORY ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1A1A2E", padding: `${SECTION_PAD} 0` }}>
        <div style={CONTAINER}>
          <div className="grid lg:grid-cols-2" style={{ gap: "clamp(3rem, 6vw, 7rem)", alignItems: "center" }}>
            <Reveal variants={slideLeft}>
              <div style={{ position: "relative" }}>
                <div className="bg-aso" style={{ aspectRatio: "4/5", maxWidth: "500px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "-18px", left: "-18px", width: "90px", height: "90px", borderTop: "1px solid rgba(201,169,110,0.6)", borderLeft: "1px solid rgba(201,169,110,0.6)" }} />
                  <div style={{ position: "absolute", bottom: "-18px", right: "-18px", width: "90px", height: "90px", borderBottom: "1px solid rgba(201,169,110,0.6)", borderRight: "1px solid rgba(201,169,110,0.6)" }} />
                  <div className="absolute bottom-0 left-0 right-0" style={{ padding: "2.5rem", background: "linear-gradient(0deg, rgba(26,26,46,0.9) 0%, transparent 100%)" }}>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(245,240,232,0.9)", lineHeight: 1.5 }}>
                      &ldquo;Not a local brand straining to look international. A global brand that has chosen Nigeria.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <Reveal variants={slideRight} delay={0.1}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>The Brand Story</p>
              </Reveal>
              <Reveal variants={slideRight} delay={0.2}>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 400, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "2rem" }}>
                  Born of London.<br /><span style={{ fontStyle: "italic" }}>Built for Nigeria.</span>
                </h2>
              </Reveal>
              <Reveal variants={slideRight} delay={0.3}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.9, marginBottom: "1.5rem" }}>
                  John Collins was conceived with a simple observation: Nigeria&apos;s most accomplished professionals — people who fly business class, holiday in Dubai, and stay in five-star hotels — come home to bedding that doesn&apos;t match their standards.
                </p>
              </Reveal>
              <Reveal variants={slideRight} delay={0.4}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.9, marginBottom: "3rem" }}>
                  Every collection is designed in Lagos, informed by Nigeria&apos;s extraordinary palette of colour, culture, and texture — crafted from the world&apos;s finest materials, finished in certified mills in Portugal and Italy.
                </p>
              </Reveal>
              <Reveal variants={slideRight} delay={0.5}>
                <Link href="/about" className="btn-secondary">Read Our Story <ArrowRight size={14} /></Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────────────── */}
      <section style={{ padding: `${SECTION_PAD} 0` }}>
        <div style={CONTAINER}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>Why John Collins</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 400, color: "#1A1A2E" }}>
                Four principles. <span style={{ fontStyle: "italic" }}>No exceptions.</span>
              </h2>
            </div>
          </Reveal>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(1rem, 2vw, 1.5rem)" }}>
            {[
              { n: "01", t: "Uncompromising Quality", b: "Only the finest long-staple Egyptian and Supima cottons, ethically sourced Belgian linen, and premium Mulberry silk. Every product OEKO-TEX certified." },
              { n: "02", t: "Nigerian Design Authority", b: "Every collection draws from Nigeria's visual heritage. Colour is our signature — from harmattan chalk to laterite red, Lagos to Abuja." },
              { n: "03", t: "Conscious Craftsmanship", b: "Carbon-aware logistics, plastic-free packaging, and a 5-year craftsmanship guarantee. Our products are heirlooms in waiting." },
              { n: "04", t: "African Ambition", b: "Nigeria is not a consolation prize. It is the launchpad — a rapidly growing affluent class with a deep culture of quality gifting." },
            ].map((p) => (
              <motion.div key={p.n} variants={slideUp}>
                <div style={{ padding: "clamp(1.75rem, 3vw, 2.25rem)", border: "1px solid rgba(26,26,46,0.1)", height: "100%", position: "relative" }}>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "3.5rem", fontWeight: 300, color: "rgba(201,169,110,0.15)", lineHeight: 1, position: "absolute", top: "1.5rem", right: "1.75rem" }}>{p.n}</div>
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "32px" }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} style={{ height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "1rem", lineHeight: 1.25 }}>{p.t}</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.8 }}>{p.b}</p>
                </div>
              </motion.div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── THE PROMISE ──────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SECTION_PAD} clamp(2rem, 6vw, 7rem)` }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ display: "inline-block", padding: "0.75rem 2rem", border: "1px solid #C9A96E", marginBottom: "2.5rem" }}>
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.75rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1.1, display: "block" }}>30</span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.52rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E" }}>Night Trial</span>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 400, fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.25, marginBottom: "2rem" }}>
              &ldquo;Sleep on it for 30 nights. If it isn&apos;t the finest bedding you have ever owned, return it without question.&rdquo;
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.8, marginBottom: "3rem" }}>
              The biggest barrier to buying premium bedding online is simple: you can&apos;t feel the fabric. Our 30-night trial eliminates that objection entirely.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center" style={{ gap: "2.25rem" }}>
              {["30-Night Trial", "OEKO-TEX Certified", "5-Year Guarantee", "Free Returns", "Plastic-Free Packaging"].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <span style={{ color: "#C9A96E", fontSize: "0.5rem" }}>✦</span>
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B5B4E" }}>{b}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GIFTING ──────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "#1A1A2E", padding: `${SECTION_PAD} 0` }}>
        <div style={CONTAINER}>
          <div className="grid lg:grid-cols-2" style={{ gap: "clamp(3rem, 6vw, 7rem)", alignItems: "center" }}>
            <div>
              <Reveal variants={slideLeft}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>Corporate Gifting</p>
              </Reveal>
              <Reveal variants={slideLeft} delay={0.1}>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.25rem, 4vw, 3.5rem)", fontWeight: 400, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "2rem" }}>
                  Nigeria&apos;s gift culture<br /><span style={{ fontStyle: "italic" }}>is our edge.</span>
                </h2>
              </Reveal>
              <Reveal variants={slideLeft} delay={0.2}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.9, marginBottom: "2.75rem" }}>
                  Weddings, housewarmings, Sallah, Christmas, corporate hospitality — a luxury duvet set from John Collins is not just a personal purchase. It is a statement. Custom monogramming, co-branded packaging, and bulk pricing available.
                </p>
              </Reveal>
              <Reveal variants={slideLeft} delay={0.3}>
                <div className="flex flex-col sm:flex-row" style={{ gap: "1rem" }}>
                  <Link href="/gifting" className="btn-terracotta">Corporate Gifting <ArrowRight size={14} /></Link>
                  <Link href="/gifting" className="btn-secondary" style={{ fontSize: "0.7rem" }}>Shop Gift Sets</Link>
                </div>
              </Reveal>
            </div>

            <Reveal variants={slideRight}>
              <div className="grid grid-cols-2" style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}>
                {[
                  { label: "Wedding", bg: "bg-aso", price: "From ₦280,000" },
                  { label: "Housewarming", bg: "bg-abuja", price: "From ₦120,000" },
                  { label: "Corporate", bg: "bg-ile", price: "From ₦150,000" },
                  { label: "Sallah / Christmas", bg: "bg-lagos", price: "From ₦85,000" },
                ].map((g) => (
                  <motion.div key={g.label} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} style={{ position: "relative", overflow: "hidden", cursor: "pointer" }}>
                    <div className={`${g.bg}`} style={{ aspectRatio: "1/1" }} />
                    <div className="absolute inset-0 flex flex-col justify-end" style={{ padding: "clamp(0.75rem, 2vw, 1.25rem)", background: "linear-gradient(0deg, rgba(26,26,46,0.85) 0%, transparent 55%)" }}>
                      <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)", fontWeight: 500, color: "#F5F0E8", lineHeight: 1.2 }}>{g.label}</p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "#C9A96E", marginTop: "3px" }}>{g.price}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOTEL PARTNERS ───────────────────────────────────────── */}
      <section style={{ padding: `${SECTION_PAD} 0` }}>
        <div style={CONTAINER}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>As Seen In</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E" }}>
                Nigeria&apos;s finest rooms. <span style={{ fontStyle: "italic" }}>Our best advertisement.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center justify-center" style={{ gap: "3rem", opacity: 0.4 }}>
              {["Eko Hotels & Suites", "The Wheatbaker", "Transcorp Hilton", "Sheraton Abuja"].map((h) => (
                <span key={h} style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontWeight: 500, color: "#1A1A2E", letterSpacing: "0.05em" }}>{h}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.1)", padding: `${SECTION_PAD} clamp(2rem, 6vw, 7rem)`, textAlign: "center" }}>
        <Reveal>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>Begin Your Collection</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.75rem, 7vw, 5.5rem)", fontWeight: 300, fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.1, marginBottom: "2.75rem" }}>
            The world&apos;s finest sleep,<br />designed for Nigeria.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Link href="/collections" className="btn-primary">
            Shop All Collections <ArrowRight size={14} />
          </Link>
        </Reveal>
      </section>

    </div>
  );
}

/* ─── CollectionCard ────────────────────────────────────────────────────── */
function CollectionCard({ col, currency }: { col: (typeof COLLECTIONS)[number]; currency: string }) {
  return (
    <Link href={`/collections/${col.slug}`} className="group block" style={{ textDecoration: "none" }}>
      {/* Image */}
      <div className={`relative overflow-hidden ${col.bgClass}`} style={{ aspectRatio: "3/4" }}>
        {/* Scale on hover */}
        <div
          className={`${col.bgClass} absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105`}
          style={{ transformOrigin: "center" }}
        />
        {/* Fabric texture */}
        <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.025) 3px, rgba(255,255,255,0.025) 6px)" }} />
        {/* Tier badge */}
        <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 10, fontFamily: "var(--font-inter)", fontSize: "0.5rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(26,26,46,0.65)", backgroundColor: "rgba(245,240,232,0.85)", padding: "3px 9px" }}>
          {col.tier}
        </div>
        {/* Corner accents */}
        <div style={{ position: "absolute", top: 12, right: 12, width: 24, height: 24, borderTop: "1px solid rgba(201,169,110,0.5)", borderRight: "1px solid rgba(201,169,110,0.5)", zIndex: 3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 12, left: 12, width: 24, height: 24, borderBottom: "1px solid rgba(201,169,110,0.5)", borderLeft: "1px solid rgba(201,169,110,0.5)", zIndex: 3, pointerEvents: "none" }} />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{ background: "rgba(26,26,46,0.42)", zIndex: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#F5F0E8", border: "1px solid rgba(245,240,232,0.65)", padding: "0.75rem 1.6rem" }}
          >
            Explore Collection →
          </motion.div>
        </motion.div>
      </div>

      {/* Gold separator */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.15) 100%)" }} />

      {/* Info */}
      <div style={{ paddingTop: "1.35rem" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.52rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.6rem" }}>
          {col.subtitle}
        </p>
        <h3
          className="group-hover:text-terracotta"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "0.65rem", transition: "color 0.25s" }}
        >
          {col.name}
        </h3>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "18px", height: "1px", backgroundColor: "rgba(26,26,46,0.18)", flexShrink: 0 }} />
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#9B8E82", letterSpacing: "0.04em" }}>
            From {formatPrice(col.fromPrice, currency)}
          </p>
        </div>
      </div>
    </Link>
  );
}
