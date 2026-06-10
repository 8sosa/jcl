"use client";

import { use, useRef } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { COLLECTIONS, PRODUCTS, formatPrice } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

export default function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { currency } = useCart();

  const collection = COLLECTIONS.find((c) => c.slug === slug);
  if (!collection) notFound();

  const products = PRODUCTS.filter((p) => p.collectionSlug === slug);

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 6vw, 7rem) 0" }}>
        <nav style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#9B8E82" }}>
          <Link href="/" style={{ color: "#9B8E82", textDecoration: "none" }} className="hover:text-midnight">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/collections" style={{ color: "#9B8E82", textDecoration: "none" }} className="hover:text-midnight">Collections</Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#1A1A2E" }}>{collection.name}</span>
        </nav>
      </div>

      {/* Collection hero */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(4rem, 8vw, 6rem) clamp(2rem, 6vw, 7rem)" }}>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Visual */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className={`relative ${collection.bgClass}`} style={{ aspectRatio: "4/5" }}>
              {/* Corner decorations */}
              <div style={{ position: "absolute", top: "-12px", right: "-12px", width: "60px", height: "60px", borderTop: "1px solid #C9A96E", borderRight: "1px solid #C9A96E" }} />
              <div style={{ position: "absolute", bottom: "-12px", left: "-12px", width: "60px", height: "60px", borderBottom: "1px solid #C9A96E", borderLeft: "1px solid #C9A96E" }} />
              {/* Tier badge */}
              <div className="absolute top-5 left-5" style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "rgba(245,240,232,0.9)", color: "rgba(26,26,46,0.7)", padding: "4px 10px" }}>
                {collection.tier}
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>
              {collection.subtitle}
            </p>
            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5vw, 3.75rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1rem" }}>
              {collection.name}
            </h1>
            <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontStyle: "italic", color: "#6B5B4E", lineHeight: 1.5, marginBottom: "2rem" }}>
              {collection.tagline}
            </p>
            <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              {collection.description}
            </p>

            {/* Material */}
            <div className="mb-8" style={{ padding: "1.25rem 1.5rem", border: "1px solid rgba(26,26,46,0.1)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.5rem" }}>Material</p>
              <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", color: "#1A1A2E" }}>{collection.material}</p>
            </div>

            {/* Details checklist */}
            <div className="mb-8">
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", marginBottom: "1rem" }}>Collection Details</p>
              <div className="space-y-3">
                {collection.details.map((d) => (
                  <div key={d} className="flex items-start gap-3">
                    <Check size={12} style={{ color: "#C9A96E", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.6 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Colorways */}
            <div className="mb-10">
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", marginBottom: "1rem" }}>Available Colourways</p>
              <div className="flex gap-2.5 flex-wrap">
                {collection.colorways.map((c) => (
                  <span key={c} style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.08em", border: "1px solid rgba(26,26,46,0.2)", padding: "6px 14px", color: "#6B5B4E" }}>{c}</span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#9B8E82" }}>
                Starting from{" "}
                <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", color: "#1A1A2E", fontWeight: 500 }}>
                  {formatPrice(collection.fromPrice, currency)}
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Products grid */}
      <div style={{ borderTop: "1px solid rgba(26,26,46,0.08)", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(2rem, 6vw, 7rem)" }}>
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.75rem" }}>Shop the Collection</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E" }}>
                  {collection.name}
                </h2>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "clamp(1.75rem, 3vw, 2.75rem)" }}>
            {products.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard
                  href={`/products/${product.slug}`}
                  name={product.name}
                  category={product.category}
                  price={Math.min(...Object.values(product.prices))}
                  currency={currency}
                  badge={product.badge}
                  bgClass={product.bgClass}
                  aspectRatio="4/3"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Other collections */}
      <div style={{ backgroundColor: "#1A1A2E", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(2rem, 6vw, 7rem)" }}>
          <FadeIn>
            <div className="flex items-center justify-between mb-8">
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 400, color: "#F5F0E8" }}>
                Explore other collections
              </h3>
              <Link href="/collections" className="flex items-center gap-2" style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E", textDecoration: "none" }}>
                All Collections <ArrowRight size={12} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "clamp(1rem, 2vw, 1.75rem)" }}>
            {COLLECTIONS.filter((c) => c.slug !== slug).slice(0, 3).map((col, i) => (
              <FadeIn key={col.id} delay={i * 0.08}>
                <Link href={`/collections/${col.slug}`} className="group block" style={{ textDecoration: "none" }}>
                  <div className={`relative overflow-hidden ${col.bgClass}`} style={{ aspectRatio: "3/2" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4" style={{ background: "linear-gradient(0deg, rgba(26,26,46,0.7) 0%, transparent 60%)" }}>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#F5F0E8" }}>Explore →</span>
                    </div>
                  </div>
                  <div className="pt-3">
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "3px" }}>{col.subtitle}</p>
                    <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem", fontWeight: 500, color: "#F5F0E8", transition: "color 0.2s" }} className="group-hover:text-gold">{col.name}</h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
