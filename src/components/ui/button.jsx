import React from "react";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-blue-500 text-white p-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

