"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { type Currency } from "@/lib/data";

export type CartItem = {
  id: string;
  productId: string;
  name: string;
  collection: string;
  category: string;
  size: string;
  colorway: string;
  price: number;
  quantity: number;
  bgClass: string;
};

type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  total: number;
  itemCount: number;
  currency: Currency;
  setCurrency: (c: Currency) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [currency, setCurrency] = useState<Currency>("NGN");

  const addItem = useCallback((item: Omit<CartItem, "id" | "quantity">) => {
    setItems((prev) => {
      const key = `${item.productId}-${item.size}-${item.colorway}`;
      const existing = prev.find((i) => i.id === key);
      if (existing) {
        return prev.map((i) =>
          i.id === key ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, id: key, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, quantity } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartOpen,
        setCartOpen,
        total,
        itemCount,
        currency,
        setCurrency,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
