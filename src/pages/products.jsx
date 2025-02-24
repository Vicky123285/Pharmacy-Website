import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/ui/card";  // Ensure this component exists

const products = [
  { id: 1, name: "Face Serum", price: 15, image: "/images/serum-7675105.jpg", category: "Beauty" },
  { id: 2, name: "Dumbbells", price: 30, image: "/images/vitamin-b-871135_1280.jpg", category: "Gym Equipment" },
  { id: 3, name: "Protein Powder", price: 45, image: "/images/pills-6127501_1280.jpg", category: "Supplements" },
];

export default function ProductList() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />
      <h1 className="text-3xl font-bold my-6">All Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} passHref>
            <Card product={product} />
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
