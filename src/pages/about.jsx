import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />

      <motion.section
        className="w-full max-w-3xl text-center py-16 px-6 bg-white shadow-lg rounded-lg mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About TikishCares</h1>
        <p className="text-lg text-gray-600 mb-6">
          TikishCares is dedicated to providing high-quality beauty and wellness products.
          Our mission is to ensure that our customers receive the best care and products to enhance their well-being.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Our Vision</h2>
        <p className="text-md text-gray-600 mt-2">
          We aim to become a trusted brand for beauty and wellness by offering carefully curated and sustainable products.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6">Why Choose Us?</h2>
        <ul className="text-md text-gray-600 mt-2 list-disc list-inside">
          <li>Premium quality products</li>
          <li>Ethically sourced ingredients</li>
          <li>Customer satisfaction as our priority</li>
          <li>Fast and reliable delivery</li>
        </ul>
      </motion.section>

      <Footer />
    </div>
  );
}
