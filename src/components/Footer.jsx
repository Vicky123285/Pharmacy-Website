import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      <p>&copy; {new Date().getFullYear()} Pharmacy Store. All rights reserved.</p>
    </footer>
  );
}
