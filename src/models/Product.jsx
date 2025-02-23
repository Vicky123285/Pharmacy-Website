import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CartContext } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />

      <motion.section
        className="w-full max-w-3xl text-center py-16 px-6 bg-white shadow-lg rounded-lg mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
        <p className="text-lg text-gray-600 mt-2">{product.description}</p>
        <p className="text-2xl font-bold text-gray-900 mt-4">₹{product.price}</p>

        <Button
          onClick={() => addToCart(product)}
          className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Add to Cart
        </Button>
      </motion.section>

      <Footer />
    </div>
  );
}
