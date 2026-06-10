"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/data";

interface ProductCardProps {
  href: string;
  name: string;
  /** Collection or category label shown above the name */
  category?: string;
  /** Lowest price (pre-formatted with formatPrice by caller, or pass raw + currency) */
  price: number;
  currency: string;
  badge?: string;
  bgClass: string;
  /** CSS aspect-ratio string, e.g. "4/3" or "1/1" */
  aspectRatio?: string;
}

export default function ProductCard({
  href,
  name,
  category,
  price,
  currency,
  badge,
  bgClass,
  aspectRatio = "4/3",
}: ProductCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none", display: "block" }} className="group">

      {/* ── Image ── */}
      <div style={{ position: "relative", overflow: "hidden", aspectRatio }}>

        {/* Scalable swatch — zooms on hover */}
        <div
          className={`${bgClass} absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105`}
          style={{ transformOrigin: "center" }}
        />

        {/* Subtle fabric weave overlay — gives depth to the flat color */}
        <div
          style={{
            position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.025) 3px, rgba(255,255,255,0.025) 6px)",
          }}
        />

        {/* Badge */}
        {badge && (
          <div style={{
            position: "absolute", top: 14, left: 14, zIndex: 10,
            fontFamily: "var(--font-inter)", fontSize: "0.5rem",
            letterSpacing: "0.18em", textTransform: "uppercase",
            backgroundColor: "#C1623F", color: "#F5F0E8",
            padding: "4px 10px",
          }}>
            {badge}
          </div>
        )}

        {/* Corner accent marks */}
        <div style={{ position: "absolute", top: 12, right: 12, width: 24, height: 24, borderTop: "1px solid rgba(201,169,110,0.5)", borderRight: "1px solid rgba(201,169,110,0.5)", zIndex: 3, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 12, left: 12, width: 24, height: 24, borderBottom: "1px solid rgba(201,169,110,0.5)", borderLeft: "1px solid rgba(201,169,110,0.5)", zIndex: 3, pointerEvents: "none" }} />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "rgba(26,26,46,0.42)",
            zIndex: 8,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            fontFamily: "var(--font-inter)", fontSize: "0.58rem",
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "#F5F0E8",
            border: "1px solid rgba(245,240,232,0.65)",
            padding: "0.75rem 1.6rem",
          }}>
            View <ArrowRight size={10} />
          </div>
        </div>

      </div>

      {/* Gold separator — always visible, adds editorial break */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A96E 0%, rgba(201,169,110,0.15) 100%)" }} />

      {/* ── Info ── */}
      <div style={{ paddingTop: "1.35rem", paddingBottom: "0.25rem" }}>

        {category && (
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "0.52rem",
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#C9A96E", marginBottom: "0.6rem",
          }}>
            {category}
          </p>
        )}

        <h3
          className="group-hover:text-terracotta"
          style={{
            fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
            fontWeight: 400, color: "#1A1A2E",
            lineHeight: 1.2, marginBottom: "0.65rem",
            transition: "color 0.25s",
          }}
        >
          {name}
        </h3>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "18px", height: "1px", backgroundColor: "rgba(26,26,46,0.18)", flexShrink: 0 }} />
          <p style={{
            fontFamily: "var(--font-inter)", fontSize: "0.65rem",
            color: "#9B8E82", letterSpacing: "0.04em",
          }}>
            From {formatPrice(price, currency)}
          </p>
        </div>

      </div>
    </Link>
  );
}
