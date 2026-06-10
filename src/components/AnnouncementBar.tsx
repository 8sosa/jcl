"use client";

import { useState } from "react";
import { X } from "lucide-react";

const messages = [
  "Complimentary shipping on orders over ₦150,000",
  "30-Night Sleep Trial on every order — no questions asked",
  "Now delivering to Lagos, Abuja & internationally via DHL Express",
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  if (!visible) return null;

  return (
    <div className="announcement-bar relative">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setIndex((i) => (i - 1 + messages.length) % messages.length)}
          className="opacity-40 hover:opacity-100 transition-opacity hidden sm:block"
          aria-label="Previous message"
        >
          ←
        </button>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.12em" }}>
          {messages[index]}
        </p>
        <button
          onClick={() => setIndex((i) => (i + 1) % messages.length)}
          className="opacity-40 hover:opacity-100 transition-opacity hidden sm:block"
          aria-label="Next message"
        >
          →
        </button>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>
    </div>
  );
}
