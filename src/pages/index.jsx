import React, { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center">
      {/* Company Title */}
      <div className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4">
        <h1 className="text-3xl font-bold">Glow&Fit</h1>
        <p className="text-lg">Your ultimate destination for beauty and fitness essentials.</p>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex space-x-4">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild>
            <Link href="/products">Products</Link>
          </Button>
          <Button asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Fixing Login & Signup Links */}
        <div className="flex space-x-4">
          <Link href="/auth/login">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Login</Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">Signup</Button>
          </Link>
        </div>
      </nav>

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10 px-6">
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
