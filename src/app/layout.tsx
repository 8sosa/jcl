import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AnnouncementBar from "@/components/AnnouncementBar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Collins | The World's Finest Sleep, Designed for Nigeria",
  description:
    "Luxury British bedding, designed in Lagos. Long-staple Egyptian cotton, Belgian flax linen, and Mulberry silk — finished in Portugal and Italy. Delivering to Lagos, Abuja, and worldwide.",
  keywords: [
    "luxury bedding Nigeria",
    "Egyptian cotton sheets Lagos",
    "premium bedding Abuja",
    "John Collins Nigeria",
    "luxury home textiles Nigeria",
  ],
  openGraph: {
    title: "John Collins | The World's Finest Sleep, Designed for Nigeria",
    description:
      "The finest British bedding in Africa — globally sourced, Nigerian in spirit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col" style={{ backgroundColor: "#F5F0E8", color: "#1A1A2E" }}>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
