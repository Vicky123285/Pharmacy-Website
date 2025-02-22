import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const products = [
  { name: "Paracetamol", price: "$5", image: "/images/paracetamol.jpg", category: "Pain Relief" },
  { name: "Ibuprofen", price: "$8", image: "/images/ibuprofen.jpg", category: "Pain Relief" },
  { name: "Amoxicillin", price: "$12", image: "/images/amoxicillin.jpg", category: "Antibiotics" },
];

const categories = ["All", "Pain Relief", "Antibiotics", "Vitamins"];

export default function Home() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        <h2 className="text-xl font-bold text-blue-600">Pharmacy</h2>
        <nav className="space-x-6">
          <a href="#products" className="text-gray-700 hover:text-blue-600 transition">Our Products</a>
          <a href="#cart" className="text-gray-700 hover:text-blue-600 transition">Cart</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-5xl font-extrabold mb-4">Your Health, Our Priority</h1>
        <p className="text-lg max-w-lg mx-auto">Shop high-quality medicines at the best prices with fast delivery.</p>
        <Button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">Shop Now</Button>
      </section>

      {/* Search and Categories */}
      <div className="max-w-4xl mx-auto mt-8">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search medicines..."
            className="w-full p-3 pl-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-500" />
        </div>

        <div className="flex space-x-3 mb-6">
          {categories.map((category) => (
            <Button
              key={category}
              className={`px-4 py-2 rounded-lg shadow-md transition ${selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div id="products" className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {products
          .filter((product) =>
            (selectedCategory === "All" || product.category === selectedCategory) &&
            product.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((product, index) => (
            <Card key={index} className="p-4 text-center bg-white shadow-lg rounded-lg hover:shadow-xl transition">
              <CardContent>
                <img src={product.image} alt={product.name} className="w-full h-36 object-cover mb-3 rounded-lg transform hover:scale-105 transition-transform" />
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
                <Button className="mt-3 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Cart Icon */}
      <div id="cart" className="fixed bottom-6 right-6 bg-blue-500 p-4 rounded-full text-white shadow-lg cursor-pointer flex items-center space-x-2 hover:bg-blue-600 transition">
        <ShoppingCart size={24} />
        <span>{cart.length}</span>
      </div>

      <Footer />
    </div>
  );
}

