import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function Cart({ cart, removeFromCart }) {
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="min-h-screen pt-24 pb-10 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            Your cart is empty.{" "}
            <Link href="/products" className="text-pink-500 font-semibold hover:underline">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg" />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-pink-600 font-bold">${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(index)} className="text-gray-500 hover:text-red-500">
                  <Trash2 size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between text-gray-700 text-lg font-semibold">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-lg mt-4 hover:opacity-90 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
