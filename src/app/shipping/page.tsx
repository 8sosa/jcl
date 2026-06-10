"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Package, RefreshCw, Clock, Globe } from "lucide-react";
import Link from "next/link";

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

const DESTINATIONS = [
  { region: "Lagos Metropolitan", time: "2–3 business days", price: "Complimentary on orders above ₦150,000", note: "Victoria Island, Lekki, Ikoyi, Ikeja, Surulere" },
  { region: "Abuja Metropolitan", time: "2–3 business days", price: "Complimentary on orders above ₦150,000", note: "Wuse II, Maitama, Asokoro, Garki, Jabi" },
  { region: "Other Nigerian cities", time: "3–5 business days", price: "₦5,000 flat rate", note: "Port Harcourt, Kano, Ibadan, Benin City, and more" },
  { region: "United Kingdom", time: "5–7 business days", price: "£15 / Complimentary over £300", note: "London, Manchester, Birmingham, and nationwide" },
  { region: "United States & Canada", time: "7–10 business days", price: "$25 flat rate", note: "All major cities" },
  { region: "Rest of World", time: "10–14 business days", price: "Calculated at checkout", note: "We ship to 40+ countries" },
];

export default function ShippingPage() {
  return (
    <div style={{ backgroundColor: "#F5F0E8" }}>

      {/* ── Hero ── */}
      <section style={{ position: "relative", textAlign: "center", borderBottom: "1px solid rgba(26,26,46,0.08)", padding: `${SP} clamp(2rem, 6vw, 7rem)` }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1 }} style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }} />
        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.35em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1.25rem" }}>
          Customer Care
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "#1A1A2E", lineHeight: 1.05, marginBottom: "1.5rem" }}>
          Shipping &amp; Returns
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "#6B5B4E", lineHeight: 1.7, maxWidth: "500px", margin: "0 auto" }}>
          Every John Collins order is packed by hand in archival tissue, sealed with our wax stamp, and dispatched with a personal note. We deliver worldwide.
        </motion.p>
      </section>

      {/* ── Icon summary ── */}
      <section>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(1.25rem, 3vw, 2rem)" }}>
            {[
              { icon: Package, label: "Gift packaging", text: "Every order arrives in our signature archival box." },
              { icon: Clock, label: "Fast dispatch", text: "Orders placed before 2pm WAT ship the same day." },
              { icon: Globe, label: "Worldwide delivery", text: "We ship to over 40 countries across 6 continents." },
              { icon: RefreshCw, label: "30-day returns", text: "Change your mind? Return within 30 days, no questions." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div style={{ padding: "clamp(1.75rem, 3vw, 2.25rem)", border: "1px solid rgba(26,26,46,0.1)", textAlign: "center" }}>
                  <item.icon size={22} style={{ color: "#C9A96E", margin: "0 auto 1.25rem" }} />
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1A1A2E", fontWeight: 600, marginBottom: "0.75rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "#6B5B4E", lineHeight: 1.6 }}>{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Delivery table ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
              <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
              <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E" }}>Delivery destinations</h2>
            </div>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {DESTINATIONS.map((d, i) => (
              <FadeIn key={d.region} delay={i * 0.06}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", padding: "clamp(1.5rem, 2.5vw, 2rem) 0", borderBottom: "1px solid rgba(26,26,46,0.08)", alignItems: "start" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "4px" }}>{d.region}</p>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", color: "#9B8E82" }}>{d.note}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Clock size={11} style={{ color: "#C9A96E", flexShrink: 0 }} />
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#6B5B4E" }}>{d.time}</p>
                  </div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#1A1A2E" }}>{d.price}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Returns policy ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", backgroundColor: "rgba(26,26,46,0.02)" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(4rem, 8vw, 7rem)", alignItems: "start" }}>
            <FadeIn>
              <div>
                <div style={{ width: "40px", height: "2px", backgroundColor: "#C9A96E", marginBottom: "2rem" }} />
                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 400, color: "#1A1A2E", lineHeight: 1.2, marginBottom: "1.5rem" }}>Returns &amp; exchanges</h2>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "#6B5B4E", lineHeight: 1.9 }}>
                  We want you to love every piece. If something isn&apos;t right, return it within 30 days of delivery — unused, in original packaging — for a full refund or exchange, no questions asked.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { step: "01", title: "Contact us", text: "Email hello@johncollins.ng or WhatsApp us within 30 days of delivery." },
                  { step: "02", title: "Pack the item", text: "Return the unused item in its original packaging with your order slip." },
                  { step: "03", title: "Ship it back", text: "We&apos;ll provide a return label. Lagos and Abuja customers can arrange a collection." },
                  { step: "04", title: "Receive your refund", text: "Processed within 5 business days of receiving the item." },
                ].map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: "1.25rem" }}>
                    <p style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 300, color: "#C9A96E", flexShrink: 0, lineHeight: 1 }}>{item.step}</p>
                    <div>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", fontWeight: 600, color: "#1A1A2E", marginBottom: "4px" }}>{item.title}</p>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "#9B8E82", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: "1px solid rgba(26,26,46,0.08)", textAlign: "center" }}>
        <div style={{ ...CONTAINER, paddingTop: SP, paddingBottom: SP }}>
          <FadeIn>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#C9A96E", marginBottom: "1rem" }}>Still have questions?</p>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#1A1A2E", marginBottom: "2rem" }}>We&apos;re here to help.</h2>
            <Link href="/contact" className="btn-primary" style={{ display: "inline-flex" }}>Contact our team</Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
