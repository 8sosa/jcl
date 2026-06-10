"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PRODUCTS, formatPrice } from "@/lib/data";
import { useCart } from "@/context/CartContext";

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

const OCCASIONS = [
  { label: "Weddings", description: "The most personal luxury gift for the couple who has everything. Presented in our signature ribbon-tied box with a handwritten card.", budget: "From ₦85,000", bg: "bg-aso" },
  { label: "Housewarmings", description: "The gift that transforms a house into a home. Nothing says you care about someone's comfort like the finest bedding on the continent.", budget: "From ₦85,000", bg: "bg-lagos" },
  { label: "Sallah & Christmas", description: "Our most commercially significant gifting season. Pre-order to guarantee delivery in Nigeria's peak gifting weeks.", budget: "From ₦85,000", bg: "bg-ile" },
  { label: "Corporate Hospitality", description: "Custom monogramming, co-branded packaging, and bulk pricing from 20% below retail for orders of 10+.", budget: "Bulk pricing available", bg: "bg-abuja" },
];

export default function GiftingPage() {
  const { currency } = useCart();
  const giftProducts = PRODUCTS.filter((p) => p.category === "Gift Set" || p.category === "Bed Set").slice(0, 4);

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
          Nigeria&apos;s Gift Culture Is Our Edge
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.1, marginBottom: "1.5rem" }}
        >
          The gift of the<br /><span style={{ fontStyle: "italic" }}>perfect night&apos;s sleep.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}
        >
          Weddings, housewarmings, Sallah, Christmas, corporate hospitality — a luxury John Collins set is the gift that says everything.
        </motion.p>
      </section>

      {/* ── Gift occasions ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>For Every Occasion</p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1A1A2E" }}>
                The right gift.<span style={{ fontStyle: "italic" }}> Every time.</span>
              </h2>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "clamp(1.25rem, 3vw, 2rem)",
            }}
          >
            {OCCASIONS.map((occ, i) => (
              <FadeIn key={occ.label} delay={i * 0.08}>
                <div
                  className="group"
                  style={{ border: "1px solid rgba(26,26,46,0.1)", overflow: "hidden", height: "100%" }}
                >
                  <div className={`${occ.bg} relative`} style={{ height: "200px" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(26,26,46,0.25)" }} />
                  </div>
                  <div style={{ padding: "clamp(1.5rem, 3vw, 2rem)" }}>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem", fontWeight: 500, color: "#1A1A2E", marginBottom: "0.85rem" }}>{occ.label}</h3>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.8, marginBottom: "1.25rem" }}>{occ.description}</p>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#C9A96E" }}>{occ.budget}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gift products ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>Shop Gift Sets</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E" }}>
                  Ready to gift.<span style={{ fontStyle: "italic" }}> Beautifully presented.</span>
                </h2>
              </div>
            </div>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          >
            {giftProducts.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.08}>
                <Link href={`/products/${p.slug}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className={`relative overflow-hidden ${p.bgClass}`} style={{ aspectRatio: "1/1" }}>
                    {p.badge && (
                      <div className="absolute top-3 left-3" style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", backgroundColor: "#C1623F", color: "#F5F0E8", padding: "3px 8px" }}>{p.badge}</div>
                    )}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ background: "linear-gradient(0deg, rgba(26,26,46,0.7) 0%, transparent 60%)" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F5F0E8" }}>View →</span>
                    </div>
                  </div>
                  <div style={{ paddingTop: "1.25rem" }}>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "4px" }}>{p.collection}</p>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 500, color: "#1A1A2E", transition: "color 0.2s", marginBottom: "4px" }} className="group-hover:text-terracotta">{p.name}</h3>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#9B8E82" }}>From {formatPrice(Math.min(...Object.values(p.prices)), currency)}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate gifting ── */}
      <section style={{ backgroundColor: "#1A1A2E" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "clamp(3rem, 7vw, 7rem)",
              alignItems: "start",
            }}
          >
            <FadeIn>
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>Corporate Programme</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#F5F0E8", lineHeight: 1.1, marginBottom: "1.75rem" }}>
                  A gifting programme<br /><span style={{ fontStyle: "italic" }}>worthy of your brand.</span>
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.85, marginBottom: "2.5rem" }}>
                  For Lagos finance firms, legal partnerships, real estate developers, and hospitality groups — a dedicated corporate gifting portal with bespoke options that make your brand look exceptional.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>
                  {[
                    "Custom monogramming with your company initials",
                    "Co-branded outer packaging available",
                    "20% bulk discount on orders of 10+",
                    "Dedicated account manager",
                    "Delivery across Lagos and Abuja within 48 hours",
                    "International delivery available for diaspora gifting",
                  ].map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                      <Check size={13} style={{ color: "#C9A96E", marginTop: "3px", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="mailto:corporate@johncollins.ng" className="btn-terracotta">
                  Enquire About Corporate Gifting <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div style={{ padding: "clamp(2rem, 4vw, 3rem)", border: "1px solid rgba(245,240,232,0.1)" }}>
                <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 400, color: "#F5F0E8", marginBottom: "0.65rem" }}>Request a Catalogue</h3>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(245,240,232,0.6)", marginBottom: "2.5rem", lineHeight: 1.7 }}>
                  Our corporate gifting team will prepare a bespoke proposal within 24 hours.
                </p>
                <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} onSubmit={(e) => e.preventDefault()}>
                  {[
                    { id: "name", placeholder: "Your Full Name" },
                    { id: "company", placeholder: "Company Name" },
                    { id: "email", placeholder: "Email Address" },
                    { id: "phone", placeholder: "Phone Number (Lagos / Abuja)" },
                  ].map((f) => (
                    <input
                      key={f.id}
                      type="text"
                      placeholder={f.placeholder}
                      className="input-luxury-dark"
                      style={{ display: "block", width: "100%", boxSizing: "border-box" }}
                    />
                  ))}
                  <textarea
                    placeholder="Brief description of your gifting needs"
                    rows={3}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(245,240,232,0.3)",
                      padding: "0.75rem 0",
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.875rem",
                      color: "#F5F0E8",
                      outline: "none",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ marginTop: "0.5rem", fontSize: "0.7rem", width: "100%", justifyContent: "center" }}
                  >
                    Submit Enquiry <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Packaging ── */}
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
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.85rem" }}>The Packaging</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 400, color: "#1A1A2E", marginBottom: "1.5rem" }}>
              Every order arrives as a gift.
            </h2>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.8, marginBottom: "3rem" }}>
              Signature ivory box. Satin ribbon. Tissue paper. Handwritten note card. Plastic-free throughout. Whether it&apos;s for yourself or someone you love — the John Collins unboxing experience is part of the gift.
            </p>
            <Link href="/collections" className="btn-primary">
              Shop All Collections <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
