import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Cart from "./pages/cart";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

const products = [
  { name: "Face Serum", price: 15, image: "/images/serum-7675105.jpg", category: "Beauty" },
  { name: "Dumbbells", price: 30, image: "/images/vitamin-b-871135_1280.jpg", category: "Gym Equipment" },
  { name: "Protein Powder", price: 45, image: "/images/pills-6127501_1280.jpg", category: "Supplements" },
];

const categories = ["All", "Beauty", "Gym Equipment", "Supplements"];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />

      {/* Search & Categories */}
      <div className="max-w-4xl w-full mt-10 px-6">
        <div className="relative mb-6 flex items-center">
          <Search className="absolute left-3 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex space-x-3 justify-center flex-wrap">
          {categories.map((category) => (
            <Button key={category} onClick={() => setSelectedCategory(category)} isActive={selectedCategory === category}>
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-10 px-6">
        {products
          .filter(
            (product) =>
              (selectedCategory === "All" || product.category === selectedCategory) &&
              product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product, index) => (
            <Card key={index} product={product} addToCart={addToCart} />
          ))}
      </div>

      {/* Floating Cart Button */}
      <motion.div
        className="fixed bottom-6 right-6 bg-pink-500 p-4 rounded-full text-white shadow-lg cursor-pointer flex items-center space-x-2 hover:bg-pink-600 transition transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
      >
        <ShoppingCart size={24} />
        <span className="font-semibold">{cart.length}</span>
      </motion.div>

      <Footer />
    </div>
  );
}
