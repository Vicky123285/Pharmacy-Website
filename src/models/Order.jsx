import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import InputField from "@/components/InputField";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Order() {
  const [order, setOrder] = useState({
    name: "",
    email: "",
    address: "",
    product: "",
    quantity: 1,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // API call to save order (backend integration)
    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        setSubmitted(true);
        setOrder({ name: "", email: "", address: "", product: "", quantity: 1 });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error("Order submission failed:", error);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <Header />
      <motion.section
        className="w-full max-w-3xl text-center py-10 px-6 bg-white shadow-lg rounded-lg mt-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Place an Order</h1>
        {submitted ? (
          <p className="text-green-500 text-lg">Order placed successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <InputField type="text" name="name" placeholder="Your Name" value={order.name} onChange={handleChange} />
            <InputField type="email" name="email" placeholder="Your Email" value={order.email} onChange={handleChange} />
            <InputField type="text" name="address" placeholder="Shipping Address" value={order.address} onChange={handleChange} />
            <InputField type="text" name="product" placeholder="Product Name" value={order.product} onChange={handleChange} />
            <InputField type="number" name="quantity" placeholder="Quantity" min="1" value={order.quantity} onChange={handleChange} />
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
