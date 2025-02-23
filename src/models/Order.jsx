import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Order() {
  const [order, setOrder] = useState({ name: "", email: "", address: "", product: "", quantity: 1 });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />

      <motion.section
        className="w-full max-w-3xl text-center py-16 px-6 bg-white shadow-lg rounded-lg mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Place an Order</h1>
        <p className="text-lg text-gray-600 mb-6">Fill in your details to place an order.</p>

        {submitted ? (
          <p className="text-green-500 text-lg">Your order has been placed successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={order.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={order.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={order.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="product"
              placeholder="Product Name"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={order.product}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              min="1"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={order.quantity}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
              Place Order
            </Button>
          </form>
        )}
      </motion.section>

      <Footer />
    </div>
  );
}
