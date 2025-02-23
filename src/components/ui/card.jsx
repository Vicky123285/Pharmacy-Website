import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/button";

const Card = ({ product, addToCart }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-white shadow-lg rounded-2xl overflow-hidden p-5 flex flex-col items-center text-center">
    <Image src={product.image} alt={product.name} width={250} height={250} className="w-full h-52 object-cover rounded-xl" priority />
    <h2 className="text-xl font-bold text-gray-800 mt-4">{product.name}</h2>
    <p className="text-pink-600 font-bold text-lg">${product.price}</p>
    <div className="flex space-x-3 mt-4 w-full justify-center">
      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      <Button>View Product</Button>
    </div>
  </motion.div>
);

export default Card;
