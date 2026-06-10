"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MapPin, Mail, MessageCircle, Clock } from "lucide-react";

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

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Lagos",
    lines: ["1, Adeola Odeku Street", "Victoria Island, Lagos", "Nigeria"],
    note: "By appointment only",
  },
  {
    icon: MapPin,
    label: "Abuja",
    lines: ["Plot 1234, Aminu Kano Crescent", "Wuse II, Abuja", "Nigeria"],
    note: "By appointment only",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["hello@johncollins.ng", "corporate@johncollins.ng"],
    note: "Response within 24 hours",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: ["+234 901 234 5678"],
    note: "Mon–Fri, 9am–6pm WAT",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          We&apos;d Love to Hear from You
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          Get in touch.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "480px", margin: "0 auto" }}>
          Questions about an order, a product, or a bespoke gifting enquiry — our team responds to every message personally, within 24 hours.
        </motion.p>
      </section>

      {/* ── Contact cards ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "clamp(1.25rem, 2.5vw, 2rem)" }}>
            {CONTACT_INFO.map((card, i) => (
              <FadeIn key={card.label} delay={i * 0.08}>
                <div style={{ padding: "clamp(1.75rem, 3vw, 2.25rem)", border: "1px solid rgba(26,26,46,0.1)", height: "100%", boxSizing: "border-box" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <card.icon size={15} style={{ color: "#C9A96E", flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.58rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C9A96E" }}>{card.label}</p>
                  </div>
                  {card.lines.map((line) => (
                    <p key={line} style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "#1A1A2E", lineHeight: 1.8 }}>{line}</p>
                  ))}
                  <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", gap: "5px" }}>
                    <Clock size={10} style={{ color: "#9B8E82" }} />
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", color: "#9B8E82", letterSpacing: "0.04em" }}>{card.note}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(4rem, 8vw, 8rem)", alignItems: "start" }}>

            {/* Left: context */}
            <FadeIn>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                  Send us a message
                </h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.9, marginBottom: "2.5rem" }}>
                  Whether you need help selecting the right collection, want to arrange a corporate gifting order, or have a question about your delivery — our team will respond personally and promptly.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { label: "Order enquiries", text: "Order status, delivery tracking, changes or cancellations." },
                    { label: "Product advice", text: "Not sure which collection is right for you? We'll guide you." },
                    { label: "Corporate gifting", text: "Bespoke programmes for 10+ recipients." },
                    { label: "Press & partnerships", text: "Media enquiries and collaboration requests." },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: "0.85rem" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#C9A96E", flexShrink: 0, marginTop: "8px" }} />
                      <div>
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "2px" }}>{item.label}</p>
                        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "#9B8E82", lineHeight: 1.5 }}>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.1}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ padding: "3rem 2.5rem", border: "1px solid rgba(201,169,110,0.3)", backgroundColor: "rgba(201,169,110,0.06)", textAlign: "center" }}
                >
                  <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A96E", margin: "0 auto 1.5rem" }} />
                  <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.75rem", fontWeight: 400, color: "#1A1A2E", marginBottom: "0.75rem" }}>Message received.</h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.7 }}>
                    Thank you for reaching out. A member of our team will respond personally within 24 hours.
                  </p>
                  <div style={{ width: "40px", height: "1px", backgroundColor: "#C9A96E", margin: "1.5rem auto 0" }} />
                </motion.div>
              ) : (
                <form
                  style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <div>
                      <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>First Name</label>
                      <input type="text" required placeholder="Adaeze" className="input-luxury" style={{ width: "100%", boxSizing: "border-box" }} />
                    </div>
                    <div>
                      <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Last Name</label>
                      <input type="text" required placeholder="Nwosu" className="input-luxury" style={{ width: "100%", boxSizing: "border-box" }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Email Address</label>
                    <input type="email" required placeholder="hello@example.com" className="input-luxury" style={{ width: "100%", boxSizing: "border-box" }} />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Subject</label>
                    <select className="input-luxury" style={{ width: "100%", boxSizing: "border-box", appearance: "none" }}>
                      <option>Order Enquiry</option>
                      <option>Product Advice</option>
                      <option>Corporate Gifting</option>
                      <option>Returns & Exchanges</option>
                      <option>Press & Partnerships</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-inter)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9B8E82", display: "block", marginBottom: "0.6rem" }}>Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help..."
                      style={{
                        width: "100%", boxSizing: "border-box",
                        background: "transparent", borderTop: "none", borderLeft: "none", borderRight: "none",
                        borderBottom: "1px solid rgba(26,26,46,0.2)",
                        padding: "0.75rem 0", fontFamily: "var(--font-inter)", fontSize: "0.875rem",
                        color: "#1A1A2E", outline: "none", resize: "none",
                      }}
                    />
                  </div>
                  <button type="submit" className="btn-primary" style={{ fontSize: "0.72rem" }}>
                    Send Message <ArrowRight size={13} />
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
