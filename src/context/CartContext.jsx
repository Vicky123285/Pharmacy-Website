import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartContent() {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />

      <motion.section
        className="w-full max-w-4xl text-center py-16 px-6 bg-white shadow-lg rounded-lg mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
                >
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: ₹{item.price}</p>
                  </div>
                  <Button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h2 className="text-2xl font-bold">Total: ₹{getTotal()}</h2>
              <div className="flex justify-center gap-4 mt-4">
                <Button
                  onClick={clearCart}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition"
                >
                  Clear Cart
                </Button>
                <Button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </motion.section>

      <Footer />
    </div>
  );
}
