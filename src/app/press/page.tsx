"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

const CONTAINER = { maxWidth: "1180px", margin: "0 auto", padding: "0 clamp(2rem, 6vw, 7rem)" } as const;
const SP = "clamp(5rem, 10vw, 8rem)";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
      {children}
    </motion.div>
  );
}

const PRESS_ITEMS = [
  {
    publication: "Business Day",
    date: "March 2025",
    headline: "\"The British luxury bedding brand quietly positioning itself at the top of Nigerian home interiors\"",
    excerpt: "John Collins has spent two years building quietly — no influencer campaigns, no performance marketing. Just product and word of mouth. In Lagos, that's enough.",
    type: "Feature",
  },
  {
    publication: "The Guardian Nigeria",
    date: "January 2025",
    headline: "\"Sleep as status: inside Nigeria's emerging luxury bedding market\"",
    excerpt: "As disposable incomes among Lagos's professional class continue to grow, the bedroom has become the next frontier of luxury spending. John Collins is at the vanguard.",
    type: "Feature",
  },
  {
    publication: "Vanguard Allure",
    date: "November 2024",
    headline: "\"10 luxury gifts for the Nigerian home this Christmas\"",
    excerpt: "For the host who has everything — the John Collins Complete Bed Set arrives in archival packaging, with a handwritten note and a wax seal. It is gift as gesture.",
    type: "Gift Guide",
  },
  {
    publication: "ThisDay Style",
    date: "September 2024",
    headline: "\"How a Nigerian design studio is bringing British bedding heritage home\"",
    excerpt: "The question was always: why should Nigerian consumers have to compromise? John Collins was founded to answer it.",
    type: "Profile",
  },
];

export default function PressPage() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          The Brand
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          Press &amp; Media
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
          For media enquiries, interview requests, product loans, and imagery — contact our press team directly. We respond to all press enquiries within 48 hours.
        </motion.p>
      </section>

      {/* ── Press contact ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "clamp(1.25rem, 3vw, 2rem)" }}>
              {[
                { label: "Press enquiries", contact: "press@johncollins.ng", note: "Interviews, features, coverage" },
                { label: "Image requests", contact: "press@johncollins.ng", note: "Hi-res product and brand imagery" },
                { label: "Product loans", contact: "press@johncollins.ng", note: "Photoshoots and editorial loans" },
                { label: "Partnerships", contact: "partnerships@johncollins.ng", note: "Brand collaborations and events" },
              ].map((item, i) => (
                <FadeIn key={item.label} delay={i * 0.08}>
                  <div style={{ padding: "clamp(1.75rem, 3vw, 2.25rem)", border: "1px solid rgba(26,26,46,0.1)" }}>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>{item.label}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "#1A1A2E", marginBottom: "0.5rem" }}>{item.contact}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#9B8E82" }}>{item.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Press coverage ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E" }}>In the press</h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {PRESS_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "clamp(2rem, 4vw, 4rem)", padding: "clamp(2rem, 3.5vw, 3rem) 0", borderBottom: "1px solid rgba(26,26,46,0.08)", alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "4px" }}>{item.publication}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "#9B8E82", marginBottom: "0.75rem" }}>{item.date}</p>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C1623F", border: "1px solid rgba(193,98,63,0.3)", padding: "3px 8px" }}>{item.type}</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1rem, 2vw, 1.25rem)", fontStyle: "italic", color: "#1A1A2E", lineHeight: 1.4, marginBottom: "1rem" }}>{item.headline}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.7 }}>{item.excerpt}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand assets ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", backgroundColor: "rgba(26,26,46,0.02)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(3rem, 6vw, 6rem)", alignItems: "start" }}>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  Brand assets
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  Our press pack includes high-resolution product photography, brand logos, founder biography, and brand guidelines. Contact us to receive the full press pack by email.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Product photography", detail: "Hi-res imagery of all current collections" },
                  { title: "Brand logos", detail: "SVG and PNG in all brand colourways" },
                  { title: "Founder biography", detail: "Short and long form, with portrait" },
                  { title: "Brand guidelines", detail: "Typography, colour, usage rules" },
                ].map((asset) => (
                  <div key={asset.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.25rem 1.5rem", border: "1px solid rgba(26,26,46,0.1)", cursor: "pointer" }}>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "2px" }}>{asset.title}</p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "#9B8E82" }}>{asset.detail}</p>
                    </div>
                    <Download size={14} style={{ color: "#C9A96E", flexShrink: 0 }} />
                  </div>
                ))}
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", color: "#9B8E82", lineHeight: 1.5, marginTop: "0.5rem" }}>
                  Assets are available to verified press and media outlets. Contact us at press@johncollins.ng to request access.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Press enquiry form ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Get in touch</p>
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1A1A2E" }}>Submit a press enquiry</h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              {sent ? (
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ padding: "3rem 2.5rem", border: "1px solid rgba(201,169,110,0.3)", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 400, color: "#1A1A2E", marginBottom: "0.75rem" }}>Enquiry received.</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.7 }}>Our press team will respond within 48 hours.</p>
                </motion.div>
              ) : (
                <form style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Your Name</label>
                      <input type="text" required className="input-luxury" style={{ width: "100%", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Publication</label>
                      <input type="text" required className="input-luxury" style={{ width: "100%", boxSizing: "border-box" }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Email</label>
                    <input type="email" required className="input-luxury" style={{ width: "100%", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Enquiry Type</label>
                    <select className="input-luxury" style={{ width: "100%", boxSizing: "border-box", appearance: "none" }}>
                      <option>Feature / Interview</option>
                      <option>Product Loan</option>
                      <option>Image Request</option>
                      <option>Brand Assets</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Details</label>
                    <textarea required rows={4} style={{ width: "100%", boxSizing: "border-box", background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none", borderBottom: "1px solid rgba(26,26,46,0.2)", padding: "0.75rem 0", fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#1A1A2E", outline: "none", resize: "none" }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ fontSize: "0.72rem" }}>
                    Submit enquiry <ArrowRight size={13} />
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
}
