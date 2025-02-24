import React from "react";
import { X } from "lucide-react";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex-1 ml-4">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(index)} className="text-red-500">
              <X size={20} />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
