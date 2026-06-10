"use client";

import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/data";

export default function CartDrawer() {
  const { items, cartOpen, setCartOpen, removeItem, updateQuantity, total, currency } = useCart();

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "rgba(26,26,46,0.55)", backdropFilter: "blur(2px)" }}
            onClick={() => setCartOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <motion.div
        className="fixed top-0 right-0 bottom-0 z-50 flex flex-col"
        initial={false}
        animate={{ x: cartOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 32, stiffness: 300 }}
        style={{
          width: "min(440px, 100vw)",
          backgroundColor: "#F5F0E8",
          boxShadow: "-8px 0 48px rgba(26,26,46,0.18)",
        }}
      >
        {/* ── Header ── */}
        <div
          style={{
            backgroundColor: "#1A1A2E",
            padding: "1.75rem 1.75rem 1.5rem",
            position: "relative",
          }}
        >
          {/* Gold top rule */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E 40%, #C9A96E 60%, transparent)" }} />

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.52rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "0.4rem" }}>
                Your Selection
              </p>
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 300, color: "#F5F0E8", lineHeight: 1 }}>
                {items.length === 0
                  ? "The Bag"
                  : items.length === 1
                  ? "1 piece selected"
                  : `${items.length} pieces selected`}
              </h2>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              style={{ color: "rgba(245,240,232,0.45)", padding: "4px", marginTop: "2px", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5F0E8")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.45)")}
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Items ── */}
        <div className="flex-1 overflow-y-auto" style={{ backgroundColor: "#F5F0E8" }}>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-5 p-10 text-center">
              <div style={{ width: "60px", height: "60px", border: "1px solid rgba(201,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShoppingBag size={22} style={{ color: "#C9A96E" }} />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 400, color: "#1A1A2E", marginBottom: "0.5rem" }}>
                  The bag is empty.
                </p>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#9B8E82", lineHeight: 1.6 }}>
                  Every great night starts here.
                </p>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="btn-primary mt-2"
                style={{ fontSize: "0.62rem" }}
              >
                Explore Collections
              </button>
            </div>
          ) : (
            <div style={{ padding: "0 1.75rem" }}>
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "1.25rem",
                    padding: "1.75rem 0",
                    borderBottom: "1px solid rgba(26,26,46,0.07)",
                    alignItems: "start",
                  }}
                >
                  {/* Product swatch — framed thumbnail */}
                  <div style={{ position: "relative" }}>
                    <div
                      className={item.bgClass}
                      style={{ width: "80px", height: "96px" }}
                    />
                    {/* Corner accents */}
                    <div style={{ position: "absolute", top: 0, left: 0, width: "10px", height: "10px", borderTop: "1px solid #C9A96E", borderLeft: "1px solid #C9A96E" }} />
                    <div style={{ position: "absolute", bottom: 0, right: 0, width: "10px", height: "10px", borderBottom: "1px solid #C9A96E", borderRight: "1px solid #C9A96E" }} />
                  </div>

                  {/* Details */}
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.4rem" }}>
                      <div style={{ flex: 1, paddingRight: "0.75rem" }}>
                        <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 500, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "3px" }}>
                          {item.name}
                        </p>
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#9B8E82", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          {item.colorway} · {item.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        style={{ color: "rgba(26,26,46,0.25)", flexShrink: 0, background: "none", border: "none", cursor: "pointer", padding: "2px", transition: "color 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#C1623F")}
                        onMouseLeave={e => (e.currentTarget.style.color = "rgba(26,26,46,0.25)")}
                      >
                        <X size={13} />
                      </button>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.85rem" }}>
                      {/* Quantity stepper */}
                      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                            border: "1px solid rgba(26,26,46,0.15)", backgroundColor: "transparent", cursor: "pointer", color: "#6B5B4E", transition: "all 0.2s",
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A2E"; (e.currentTarget as HTMLButtonElement).style.color = "#F5F0E8"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1A1A2E"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#6B5B4E"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,26,46,0.15)"; }}
                        >
                          <Minus size={9} />
                        </button>
                        <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#1A1A2E", width: "34px", textAlign: "center", borderTop: "1px solid rgba(26,26,46,0.15)", borderBottom: "1px solid rgba(26,26,46,0.15)", height: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: "30px", height: "30px", display: "flex", alignItems: "center", justifyContent: "center",
                            border: "1px solid rgba(26,26,46,0.15)", backgroundColor: "transparent", cursor: "pointer", color: "#6B5B4E", transition: "all 0.2s",
                          }}
                          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1A1A2E"; (e.currentTarget as HTMLButtonElement).style.color = "#F5F0E8"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#1A1A2E"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = "#6B5B4E"; (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(26,26,46,0.15)"; }}
                        >
                          <Plus size={9} />
                        </button>
                      </div>

                      {/* Price */}
                      <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.2rem", fontWeight: 500, color: "#1A1A2E" }}>
                        {formatPrice(item.price * item.quantity, currency)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer ── */}
        {items.length > 0 && (
          <div style={{ backgroundColor: "#1A1A2E" }}>
            {/* Shipping threshold */}
            <div style={{ padding: "1rem 1.75rem", borderBottom: "1px solid rgba(245,240,232,0.06)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: total >= 150000 ? "#C9A96E" : "rgba(245,240,232,0.25)", flexShrink: 0 }} />
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: total >= 150000 ? "#C9A96E" : "rgba(245,240,232,0.4)", letterSpacing: "0.05em" }}>
                  {total >= 150000
                    ? "Complimentary shipping included"
                    : `Add ${formatPrice(150000 - total, currency)} for complimentary shipping`}
                </p>
              </div>
              {/* Progress bar */}
              {total < 150000 && (
                <div style={{ marginTop: "0.6rem", height: "1px", backgroundColor: "rgba(245,240,232,0.08)", position: "relative", overflow: "hidden" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min((total / 150000) * 100, 100)}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ position: "absolute", top: 0, left: 0, bottom: 0, backgroundColor: "#C9A96E" }}
                  />
                </div>
              )}
            </div>

            {/* Subtotal row */}
            <div style={{ padding: "1.25rem 1.75rem 0", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,240,232,0.45)" }}>
                Subtotal
              </span>
              <span style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 300, color: "#F5F0E8" }}>
                {formatPrice(total, currency)}
              </span>
            </div>

            {/* Trust line */}
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "rgba(245,240,232,0.25)", textAlign: "center", letterSpacing: "0.08em", padding: "0.5rem 1.75rem 0" }}>
              30-night sleep trial · Free returns · OEKO-TEX certified
            </p>

            {/* Checkout button */}
            <div style={{ padding: "1.25rem 1.75rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  backgroundColor: "#C1623F", color: "#F5F0E8",
                  fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase",
                  padding: "1.1rem", border: "none", cursor: "pointer", transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Proceed to Checkout <ArrowRight size={13} />
              </button>
              <button
                onClick={() => setCartOpen(false)}
                style={{
                  width: "100%", textAlign: "center",
                  fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "rgba(245,240,232,0.35)", background: "none", border: "none", cursor: "pointer", padding: "0.4rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,240,232,0.35)")}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
}
