"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS, PRODUCTS, formatPrice } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function CollectionsPage() {
  const { currency } = useCart();

  const featuredProducts = PRODUCTS.filter((p) => p.category === "Bed Set").slice(0, 4);

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>
      {/* Hero */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{ borderBottom: "1px solid rgba(26,26,46,0.1)", minHeight: "400px", padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 7rem)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}
        >
          Four Collections. One Standard.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.1, marginBottom: "1.25rem" }}
        >
          Global materials.{" "}
          <span style={{ fontStyle: "italic" }}>Nigerian soul.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "500px" }}
        >
          From 400-thread-count Egyptian cotton to Grade 6A Mulberry silk — every John Collins collection is built to be experienced, not merely seen.
        </motion.p>
      </div>

      {/* Collections grid */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 7rem)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "clamp(5rem, 10vw, 8rem)" }}>
          {COLLECTIONS.map((col, i) => (
            <FadeIn key={col.id} delay={i * 0.08}>
              <Link href={`/collections/${col.slug}`} className="group block" style={{ textDecoration: "none" }}>
                <div className="grid grid-cols-5 gap-0 overflow-hidden" style={{ border: "1px solid rgba(26,26,46,0.1)" }}>
                  {/* Visual panel */}
                  <div className={`col-span-2 relative overflow-hidden ${col.bgClass}`} style={{ minHeight: "320px" }}>
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ background: "inherit" }}
                    />
                    {/* Tier label */}
                    <div
                      className="absolute top-4 left-4"
                      style={{ fontFamily: "var(--font-inter)", fontSize: "0.5rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(26,26,46,0.6)", backgroundColor: "rgba(245,240,232,0.85)", padding: "3px 8px" }}
                    >
                      {col.tier}
                    </div>
                  </div>

                  {/* Text panel */}
                  <div
                    className="col-span-3 flex flex-col justify-between"
                    style={{ padding: "clamp(1.75rem, 3vw, 2.5rem)", backgroundColor: "#F5F0E8" }}
                  >
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>
                        {col.subtitle}
                      </p>
                      <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)", fontWeight: 500, color: "#1A1A2E", lineHeight: 1.15, marginBottom: "1rem", transition: "color 0.2s" }} className="group-hover:text-terracotta">
                        {col.name}
                      </h2>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#6B5B4E", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                        {col.tagline}
                      </p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "#9B8E82", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                        {col.material}
                      </p>
                      {/* Colorways */}
                      <div className="flex gap-2 flex-wrap mb-6">
                        {col.colorways.map((c) => (
                          <span key={c} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "#9B8E82", border: "1px solid rgba(26,26,46,0.15)", padding: "2px 8px" }}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.35rem", fontWeight: 500, color: "#1A1A2E" }}>
                        From {formatPrice(col.fromPrice, currency)}
                      </p>
                      <div className="flex items-center gap-2 transition-colors group-hover:text-terracotta" style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C1623F" }}>
                        Explore <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Featured products section */}
        <div>
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>Complete Sets</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.1 }}>
                  Best value.<span style={{ fontStyle: "italic" }}> Complete beds.</span>
                </h2>
              </div>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "clamp(1.25rem, 2.5vw, 2rem)" }}>
            {featuredProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard
                  href={`/products/${product.slug}`}
                  name={product.name}
                  category={product.collection}
                  price={Math.min(...Object.values(product.prices))}
                  currency={currency}
                  badge={product.badge}
                  bgClass={product.bgClass}
                  aspectRatio="1/1"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Materials band */}
      <div style={{ backgroundColor: "#1A1A2E", borderTop: "1px solid rgba(245,240,232,0.05)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "clamp(5rem, 10vw, 8rem) clamp(2rem, 6vw, 7rem)", textAlign: "center" }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Our Materials</p>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "#F5F0E8", marginBottom: "2rem" }}>
              Sourced from the world&apos;s finest mills.
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { material: "Egyptian Cotton", origin: "Nile Delta, Egypt", collections: "Lagos · Abuja" },
                { material: "Belgian Flax Linen", origin: "Flemish Fields, Belgium", collections: "Ile Collection" },
                { material: "Mulberry Silk", origin: "Grade 6A, Asia", collections: "Aso Collection" },
                { material: "Supima Cotton", origin: "California, USA", collections: "Aso Collection" },
              ].map((m) => (
                <div key={m.material} className="text-center" style={{ padding: "1.5rem", border: "1px solid rgba(245,240,232,0.1)" }}>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 500, color: "#F5F0E8", marginBottom: "0.5rem" }}>{m.material}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "rgba(245,240,232,0.5)", letterSpacing: "0.05em", marginBottom: "0.4rem" }}>{m.origin}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#C9A96E", letterSpacing: "0.1em" }}>{m.collections}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
