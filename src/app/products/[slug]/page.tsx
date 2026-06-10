"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShoppingBag, ArrowRight } from "lucide-react";
import { PRODUCTS, COLLECTIONS, formatPrice } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const COLORWAY_SWATCHES: Record<string, string> = {
  "Blush": "#E8B4A8",
  "Forest Green": "#4A7C59",
  "Deep Pewter": "#72737E",
  "Midnight Slate": "#2E3D50",
  "Ivory": "#F0EBE0",
  "Champagne": "#D4B48C",
  "Pearl": "#E5E0D6",
  "Sand": "#C8B49A",
  "Stone": "#8C8278",
  "Ecru": "#EDE8DC",
  "Dusk": "#7B6E8A",
  "Sage": "#8A9E85",
  "Clay": "#C47A5A",
  "Warm White": "#F5F0E8",
  "Charcoal": "#3D3D4A",
  "Terracotta": "#C1623F",
};

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { addItem, currency } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const collection = COLLECTIONS.find((c) => c.slug === product.collectionSlug);
  const relatedProducts = PRODUCTS.filter((p) => p.collectionSlug === product.collectionSlug && p.slug !== slug).slice(0, 3);

  const [selectedSize, setSelectedSize] = useState(product.sizes[product.sizes.length > 2 ? 2 : 0]);
  const [selectedColor, setSelectedColor] = useState(product.colorways[0]);
  const [openAccordion, setOpenAccordion] = useState<string | null>("details");

  const price = product.prices[selectedSize] ?? Object.values(product.prices)[0];

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.name,
      collection: product.collection,
      category: product.category,
      size: selectedSize,
      colorway: selectedColor,
      price,
      bgClass: product.bgClass,
    });
  };

  const accordions = [
    {
      id: "details",
      label: "Product Details",
      content: (
        <div className="space-y-2">
          {product.features.map((f) => (
            <div key={f} className="flex items-start gap-2.5">
              <Check size={12} style={{ color: "#C9A96E", marginTop: "2px", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E" }}>{f}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "material",
      label: "Material & Care",
      content: (
        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.7, marginBottom: "1rem" }}>
            <strong style={{ color: "#1A1A2E" }}>Material:</strong> {product.material}
          </p>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.7 }}>
            Machine wash at 40°C on a gentle cycle. Tumble dry on low. Iron on medium heat if desired — though we find a gentle shake from the dryer gives the most natural finish. Do not bleach.
          </p>
        </div>
      ),
    },
    {
      id: "delivery",
      label: "Delivery & Returns",
      content: (
        <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.8 }}>
          <p className="mb-2"><strong style={{ color: "#1A1A2E" }}>Lagos & Abuja:</strong> 48-hour delivery via Kwik Logistics.</p>
          <p className="mb-2"><strong style={{ color: "#1A1A2E" }}>International:</strong> 5–7 business days via DHL Express.</p>
          <p className="mb-2"><strong style={{ color: "#1A1A2E" }}>Complimentary shipping</strong> on orders over ₦150,000.</p>
          <p><strong style={{ color: "#1A1A2E" }}>30-Night Trial:</strong> Return within 30 nights for a full refund, no questions asked.</p>
        </div>
      ),
    },
    {
      id: "sizing",
      label: "Sizing Guide",
      content: (
        <div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.7, marginBottom: "1rem" }}>
            Our sizes follow UK standards. If you have a Nigerian-sized mattress, we recommend sizing up.
          </p>
          <div className="space-y-2">
            {[
              { size: "Single", dims: "135 × 200 cm" },
              { size: "Double", dims: "200 × 200 cm" },
              { size: "King", dims: "230 × 220 cm" },
              { size: "Super King", dims: "260 × 220 cm" },
            ].map((s) => (
              <div key={s.size} className="flex justify-between" style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#6B5B4E", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(26,26,46,0.06)" }}>
                <span>{s.size}</span>
                <span style={{ color: "#9B8E82" }}>{s.dims}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 6vw, 7rem) 0" }}>
        <nav style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.08em", color: "#9B8E82" }}>
          <Link href="/" style={{ color: "#9B8E82", textDecoration: "none" }}>Home</Link>
          <span className="mx-2">/</span>
          <Link href="/collections" style={{ color: "#9B8E82", textDecoration: "none" }}>Collections</Link>
          <span className="mx-2">/</span>
          {collection && (
            <>
              <Link href={`/collections/${collection.slug}`} style={{ color: "#9B8E82", textDecoration: "none" }}>{collection.name}</Link>
              <span className="mx-2">/</span>
            </>
          )}
          <span style={{ color: "#1A1A2E" }}>{product.name}</span>
        </nav>
      </div>

      {/* Main product */}
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(3.5rem, 7vw, 6rem) clamp(2rem, 6vw, 7rem)" }}>
        <div className="grid lg:grid-cols-2" style={{ gap: "clamp(3rem, 7vw, 7rem)", alignItems: "start" }}>
          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="sticky top-28">
              <div className={`relative ${product.bgClass}`} style={{ aspectRatio: "1/1" }}>
                {product.badge && (
                  <div className="absolute top-4 left-4" style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", backgroundColor: "#C1623F", color: "#F5F0E8", padding: "4px 10px" }}>
                    {product.badge}
                  </div>
                )}
                {/* Corner decoration */}
                <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", width: "50px", height: "50px", borderBottom: "1px solid rgba(201,169,110,0.5)", borderRight: "1px solid rgba(201,169,110,0.5)" }} />
              </div>
              {/* Color swatch row */}
              <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
                {product.colorways.map((c) => {
                  const swatch = COLORWAY_SWATCHES[c] ?? "#E0DAD0";
                  const isSelected = selectedColor === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      title={c}
                      style={{
                        width: "36px", height: "36px", borderRadius: "50%",
                        backgroundColor: swatch, flexShrink: 0,
                        border: isSelected ? "2px solid #1A1A2E" : "2px solid transparent",
                        boxShadow: isSelected
                          ? "0 0 0 3px #F5F0E8, 0 0 0 4px #1A1A2E"
                          : "0 0 0 1px rgba(26,26,46,0.18)",
                        cursor: "pointer", transition: "box-shadow 0.25s, border-color 0.25s",
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
            {/* Collection link */}
            {collection && (
              <Link href={`/collections/${collection.slug}`} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", textDecoration: "none" }}>
                ← {collection.name}
              </Link>
            )}

            <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.1, margin: "1.25rem 0 0.75rem" }}>
              {product.name}
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "#9B8E82", letterSpacing: "0.05em", marginBottom: "1.5rem" }}>
              {product.material}
            </p>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#6B5B4E", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              {product.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem", fontWeight: 500, color: "#1A1A2E" }}>
                {formatPrice(price, currency)}
              </span>
            </div>

            {/* Size selector */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B8E82" }}>Size</p>
                <button style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "#C1623F", textDecoration: "none", background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid rgba(193,98,63,0.4)" }}>
                  Sizing Guide
                </button>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {product.sizes.map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        padding: "0.9rem 1.5rem",
                        border: isSelected ? "1px solid #1A1A2E" : "1px solid rgba(26,26,46,0.18)",
                        backgroundColor: isSelected ? "#1A1A2E" : "transparent",
                        color: isSelected ? "#F5F0E8" : "#6B5B4E",
                        cursor: "pointer",
                        transition: "all 0.22s",
                        minWidth: "90px",
                        textAlign: "center",
                      }}
                    >
                      <span style={{ display: "block", marginBottom: product.prices[size] ? "4px" : "0" }}>{size}</span>
                      {product.prices[size] && (
                        <span style={{ display: "block", fontSize: "0.52rem", letterSpacing: "0.05em", color: isSelected ? "rgba(245,240,232,0.55)" : "#9B8E82" }}>
                          {formatPrice(product.prices[size], currency)}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colorway selector */}
            <div style={{ marginBottom: "2.75rem" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9B8E82", marginBottom: "1.25rem" }}>
                Colourway: <span style={{ color: "#1A1A2E", letterSpacing: "0.15em" }}>{selectedColor.toUpperCase()}</span>
              </p>
              <div style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap", alignItems: "stretch" }}>
                {product.colorways.map((c) => {
                  const swatch = COLORWAY_SWATCHES[c] ?? "#E0DAD0";
                  const isSelected = selectedColor === c;
                  return (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      style={{
                        display: "flex", alignItems: "center", gap: "9px",
                        padding: "0.75rem 1.1rem 0.75rem 0.85rem",
                        border: isSelected ? "1px solid #1A1A2E" : "1px solid rgba(26,26,46,0.15)",
                        backgroundColor: isSelected ? "#1A1A2E" : "transparent",
                        cursor: "pointer", transition: "all 0.22s",
                        position: "relative",
                      }}
                    >
                      <span style={{
                        width: "16px", height: "16px", borderRadius: "50%", backgroundColor: swatch,
                        flexShrink: 0,
                        boxShadow: isSelected ? "0 0 0 1.5px #1A1A2E, 0 0 0 3px #F5F0E8, 0 0 0 4.5px rgba(245,240,232,0.4)" : "0 0 0 1px rgba(26,26,46,0.12)",
                        transition: "box-shadow 0.22s",
                      }} />
                      <span style={{
                        fontFamily: "var(--font-inter)", fontSize: "0.6rem",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        color: isSelected ? "#F5F0E8" : "#9B8E82",
                        transition: "color 0.22s",
                      }}>
                        {c}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full justify-center mb-6"
              style={{ fontSize: "0.75rem", padding: "1rem 2rem" }}
            >
              <ShoppingBag size={16} /> Add to Bag — {formatPrice(price, currency)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { icon: "✦", text: "30-Night Trial" },
                { icon: "✦", text: "5-Year Guarantee" },
                { icon: "✦", text: "Free Returns" },
              ].map((t) => (
                <div key={t.text} className="text-center" style={{ padding: "1rem 0.75rem", border: "1px solid rgba(26,26,46,0.1)" }}>
                  <div style={{ color: "#C9A96E", fontSize: "0.5rem", marginBottom: "3px" }}>{t.icon}</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.08em", color: "#6B5B4E", textTransform: "uppercase" }}>{t.text}</div>
                </div>
              ))}
            </div>

            {/* Monogramming */}
            <div className="mb-10" style={{ padding: "1.25rem 1.5rem", backgroundColor: "rgba(201,169,110,0.08)", border: "1px solid rgba(201,169,110,0.25)" }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#8B7355", marginBottom: "0.35rem" }}>Personalisation Available</p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#6B5B4E", lineHeight: 1.6 }}>
                Monogramming available on all John Collins products. Please add a note at checkout with your initials and preferred position.
              </p>
            </div>

            {/* Accordions */}
            <div style={{ borderTop: "1px solid rgba(26,26,46,0.1)" }}>
              {accordions.map((acc) => {
                const isOpen = openAccordion === acc.id;
                return (
                  <div key={acc.id} style={{ borderBottom: "1px solid rgba(26,26,46,0.1)", position: "relative" }}>
                    {/* Left gold bar when open */}
                    {isOpen && (
                      <motion.div
                        layoutId="accordionBar"
                        style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", backgroundColor: "#C9A96E" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                      />
                    )}
                    <button
                      onClick={() => setOpenAccordion(isOpen ? null : acc.id)}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        width: "100%", padding: "1.35rem 0 1.35rem 1rem",
                        background: "none", border: "none", cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: isOpen ? "#1A1A2E" : "#6B5B4E", transition: "color 0.2s" }}>
                        {acc.label}
                      </span>
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "1rem", color: isOpen ? "#C9A96E" : "#9B8E82", lineHeight: 1, flexShrink: 0 }}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div style={{ paddingLeft: "1rem", paddingBottom: "1.5rem" }}>
                            {acc.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div style={{ borderTop: "1px solid rgba(26,26,46,0.08)", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
          <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(2rem, 6vw, 7rem)" }}>
            <div className="flex items-center justify-between mb-14">
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 400, color: "#1A1A2E" }}>
                Complete the collection
              </h2>
              {collection && (
                <Link href={`/collections/${collection.slug}`} className="flex items-center gap-2" style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#C1623F", textDecoration: "none" }}>
                  View All <ArrowRight size={12} />
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "clamp(1.75rem, 3vw, 2.75rem)" }}>
              {relatedProducts.map((rp) => (
                <ProductCard
                  key={rp.id}
                  href={`/products/${rp.slug}`}
                  name={rp.name}
                  category={rp.category}
                  price={Math.min(...Object.values(rp.prices))}
                  currency={currency}
                  badge={rp.badge}
                  bgClass={rp.bgClass}
                  aspectRatio="4/3"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
