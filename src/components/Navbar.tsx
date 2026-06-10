"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { CURRENCIES, type Currency } from "@/lib/data";

const NAV_LINKS = [
  {
    label: "Collections",
    href: "/collections",
    sub: [
      { label: "The Lagos Collection", href: "/collections/lagos", desc: "Entry Luxury · From ₦85,000", bg: "#e8e3dc" },
      { label: "The Abuja Collection", href: "/collections/abuja", desc: "Premium · From ₦120,000", bg: "#c8ccd2" },
      { label: "The Ile Collection", href: "/collections/ile", desc: "Artisan · From ₦150,000", bg: "#b09068" },
      { label: "The Aso Collection", href: "/collections/aso", desc: "Pinnacle · From ₦280,000", bg: "#c9a96e" },
    ],
  },
  { label: "Our Story", href: "/about" },
  { label: "The Promise", href: "/promise" },
  { label: "Gifting", href: "/gifting" },
];

const ALL_MOBILE_LINKS = NAV_LINKS;
const CONTAINER_PAD = "clamp(2rem, 6vw, 7rem)";

const NAV_LINK_STYLE = {
  fontFamily: "var(--font-inter)",
  fontSize: "0.6rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "rgba(26,26,46,0.65)",
  fontWeight: 400,
  whiteSpace: "nowrap" as const,
};

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} style={{ textDecoration: "none" }}>
      <motion.div
        initial="rest"
        whileHover="hover"
        style={{ position: "relative", display: "inline-block", cursor: "pointer" }}
      >
        <span style={NAV_LINK_STYLE}>{label}</span>
        <motion.div
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "absolute",
            bottom: "-2px",
            left: 0,
            right: 0,
            height: "1px",
            backgroundColor: "#C9A96E",
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </Link>
  );
}

export default function Navbar() {
  const { itemCount, setCartOpen, currency, setCurrency } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [mobileCollOpen, setMobileCollOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: scrolled ? "rgba(245,240,232,0.97)" : "#F5F0E8" }}
        transition={{ duration: 0.35 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: scrolled ? "blur(14px)" : "none",
        }}
      >
        {/* ══════════════════════════════════════════════
            ROW 1 — Logo + utility strip
        ══════════════════════════════════════════════ */}
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            paddingLeft: CONTAINER_PAD,
            paddingRight: CONTAINER_PAD,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
          }}
        >
          {/* Left — hamburger (mobile only) */}
          <div>
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{ padding: "0.5rem", marginLeft: "-0.5rem", background: "none", border: "none", cursor: "pointer" }}
            >
              <Menu size={18} style={{ color: "#1A1A2E" }} />
            </button>
          </div>

          {/* Center — Wordmark */}
          <motion.div
            animate={{ paddingTop: scrolled ? "0.85rem" : "1.6rem", paddingBottom: scrolled ? "0.85rem" : "1.6rem" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ textAlign: "center" }}
          >
            <Link href="/" style={{ textDecoration: "none", display: "inline-block" }}>
              <motion.div whileHover={{ opacity: 0.75 }} transition={{ duration: 0.2 }}>
                {/* Main wordmark */}
                <div
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.35rem, 2.8vw, 2rem)",
                    fontWeight: 500,
                    letterSpacing: "0.48em",
                    textTransform: "uppercase",
                    color: "#1A1A2E",
                    lineHeight: 1,
                  }}
                >
                  John Collins
                </div>

                {/* Ornamental subtitle — hides on scroll */}
                <AnimatePresence initial={false}>
                  {!scrolled && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: "6px" }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                    >
                      <div style={{ height: "1px", width: "22px", backgroundColor: "#C9A96E", flexShrink: 0 }} />
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.43rem",
                          letterSpacing: "0.42em",
                          textTransform: "uppercase",
                          color: "#C9A96E",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Est. London
                      </span>
                      <div style={{ height: "1px", width: "22px", backgroundColor: "#C9A96E", flexShrink: 0 }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </motion.div>

          {/* Right — currency + cart */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1.25rem" }}>
            {/* Currency (desktop) */}
            <div className="hidden lg:flex items-center">
              {CURRENCIES.map((c, i) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c as Currency)}
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.1em",
                    color: currency === c ? "#1A1A2E" : "rgba(26,26,46,0.3)",
                    fontWeight: currency === c ? 600 : 400,
                    padding: "0 0.55rem",
                    background: "none",
                    borderTop: "none",
                    borderLeft: "none",
                    borderBottom: "none",
                    borderRight: i < CURRENCIES.length - 1 ? "1px solid rgba(26,26,46,0.12)" : "none",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Cart */}
            <motion.button
              onClick={() => setCartOpen(true)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              style={{ position: "relative", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={18} style={{ color: "#1A1A2E" }} />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      position: "absolute",
                      top: "-6px",
                      right: "-6px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      backgroundColor: "#C1623F",
                      color: "#F5F0E8",
                      fontSize: "0.5rem",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            ROW 2 — Navigation (desktop only)
        ══════════════════════════════════════════════ */}
        <div
          className="hidden lg:block"
          style={{ borderTop: "1px solid rgba(26,26,46,0.1)" }}
        >
          <nav
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              paddingLeft: CONTAINER_PAD,
              paddingRight: CONTAINER_PAD,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "clamp(2rem, 4vw, 3.5rem)",
              height: "2.75rem",
            }}
          >
            {NAV_LINKS.map((link) =>
              link.sub ? (
                <div
                  key={link.label}
                  style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                  onMouseEnter={() => setCollectionsOpen(true)}
                  onMouseLeave={() => setCollectionsOpen(false)}
                >
                  <motion.button
                    initial="rest"
                    whileHover="hover"
                    style={{ display: "flex", alignItems: "center", gap: "5px", background: "none", border: "none", cursor: "pointer", position: "relative", height: "100%" }}
                  >
                    <span style={NAV_LINK_STYLE}>{link.label}</span>
                    <motion.div
                      animate={{ rotate: collectionsOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <ChevronDown size={9} style={{ color: "rgba(26,26,46,0.35)" }} />
                    </motion.div>
                    <motion.div
                      variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      style={{ position: "absolute", bottom: "0", left: 0, right: "18px", height: "1px", backgroundColor: "#C9A96E", transformOrigin: "left" }}
                    />
                  </motion.button>

                  {/* Collections dropdown */}
                  <AnimatePresence>
                    {collectionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "340px",
                          backgroundColor: "#F5F0E8",
                          border: "1px solid rgba(26,26,46,0.1)",
                          boxShadow: "0 20px 60px rgba(26,26,46,0.1)",
                          zIndex: 60,
                        }}
                      >
                        <div style={{ height: "2px", background: "linear-gradient(90deg, #C9A96E, rgba(201,169,110,0.25))" }} />
                        <div style={{ padding: "1.5rem 1.75rem" }}>
                          {link.sub.map((sub, i) => (
                            <motion.div
                              key={sub.href}
                              initial={{ opacity: 0, x: -6 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04, duration: 0.2 }}
                            >
                              <Link
                                href={sub.href}
                                onClick={() => setCollectionsOpen(false)}
                                className="group"
                                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.85rem 0", borderBottom: "1px solid rgba(26,26,46,0.06)", textDecoration: "none" }}
                              >
                                <div style={{ width: "34px", height: "34px", flexShrink: 0, backgroundColor: sub.bg }} />
                                <div>
                                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem", fontWeight: 500, color: "#1A1A2E", lineHeight: 1.2, transition: "color 0.18s" }} className="group-hover:text-terracotta">
                                    {sub.label}
                                  </div>
                                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.06em", color: "#9B8E82", marginTop: "2px" }}>
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                          <Link
                            href="/collections"
                            onClick={() => setCollectionsOpen(false)}
                            style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "1.1rem", fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "#C1623F", textDecoration: "none" }}
                          >
                            View All Collections
                            <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M1 5h8M5 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={link.href} href={link.href} label={link.label} />
              )
            )}
          </nav>
        </div>

        {/* Bottom shadow line on scroll */}
        <motion.div
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.35), transparent)",
          }}
        />
      </motion.header>

      {/* ══════════════════════════════════════════════
          MOBILE DRAWER
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMobileOpen(false)}
              style={{ position: "fixed", inset: 0, zIndex: 50, backgroundColor: "rgba(26,26,46,0.4)" }}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                zIndex: 51,
                width: "min(340px, 88vw)",
                backgroundColor: "#F5F0E8",
                display: "flex",
                flexDirection: "column",
                boxShadow: "8px 0 40px rgba(26,26,46,0.1)",
              }}
            >
              {/* Drawer header */}
              <div style={{ padding: "1.5rem clamp(1.5rem, 4vw, 2rem)", borderBottom: "1px solid rgba(26,26,46,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 500, letterSpacing: "0.32em", textTransform: "uppercase", color: "#1A1A2E", lineHeight: 1 }}>John Collins</div>
                  <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.44rem", letterSpacing: "0.38em", color: "#C9A96E", textTransform: "uppercase", marginTop: "5px" }}>Est. London</div>
                </div>
                <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }} aria-label="Close menu">
                  <X size={17} style={{ color: "#1A1A2E" }} />
                </button>
              </div>

              {/* Drawer nav */}
              <nav style={{ flex: 1, overflowY: "auto", padding: "1.5rem clamp(1.5rem, 4vw, 2rem)" }}>
                {ALL_MOBILE_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.06, duration: 0.3 }}
                  >
                    {link.sub ? (
                      <div>
                        <button
                          onClick={() => setMobileCollOpen(!mobileCollOpen)}
                          style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 0", background: "none", border: "none", borderBottom: "1px solid rgba(26,26,46,0.07)", cursor: "pointer" }}
                        >
                          <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A1A2E", fontWeight: 500 }}>
                            {link.label}
                          </span>
                          <motion.div animate={{ rotate: mobileCollOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={11} style={{ color: "#9B8E82" }} />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileCollOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28 }}
                              style={{ overflow: "hidden" }}
                            >
                              {link.sub.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  style={{ display: "flex", alignItems: "center", gap: "0.85rem", padding: "0.7rem 0 0.7rem 0.25rem", textDecoration: "none" }}
                                >
                                  <div style={{ width: "22px", height: "22px", flexShrink: 0, backgroundColor: sub.bg }} />
                                  <div>
                                    <div style={{ fontFamily: "var(--font-cormorant)", fontSize: "1rem", fontWeight: 500, color: "#1A1A2E", lineHeight: 1.2 }}>{sub.label}</div>
                                    <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", color: "#9B8E82", marginTop: "1px" }}>{sub.desc}</div>
                                  </div>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        style={{ display: "block", padding: "1rem 0", fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1A1A2E", textDecoration: "none", borderBottom: "1px solid rgba(26,26,46,0.07)", fontWeight: 400 }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer */}
              <div style={{ padding: "1.5rem clamp(1.5rem, 4vw, 2rem)", borderTop: "1px solid rgba(26,26,46,0.08)" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.52rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", marginBottom: "0.75rem" }}>Currency</p>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  {CURRENCIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCurrency(c as Currency)}
                      style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.06em", color: currency === c ? "#C1623F" : "#9B8E82", fontWeight: currency === c ? 600 : 400, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
                <div style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "rgba(26,26,46,0.3)", letterSpacing: "0.04em", lineHeight: 1.7 }}>
                  Victoria Island, Lagos<br />Maitama, Abuja
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
