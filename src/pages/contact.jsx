import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">We'd love to hear from you! Fill out the form below to get in touch.</p>

        {submitted ? (
          <p className="text-green-500 text-lg">Thank you for reaching out! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button type="submit" className="bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
              Send Message
            </Button>
          </form>
        )}
      </motion.section>

      <Footer />
    </div>
  );
}
