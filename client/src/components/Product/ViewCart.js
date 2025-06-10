import React from "react";
import { useCart } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";

const ViewCart = () => {
  const {
    cartItems,
    subtotal,
    toggleGiftWrap,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center ">Shopping Cart</h1>
        <p className="text-xl  text-center my-4">
          Home <span>{">"}</span> Shopping
        </p>
        <div className="space-y-8">
          {cartItems.map((item) => (
            <div key={item.id} className="border-t border-b py-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                {/* Left: Image & Details */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="space-y-1 text-sm">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Color: {item.color}</p>
                    {item.size && (
                      <p className="text-gray-600">Size: {item.size}</p>
                    )}
                    <p className="text-gray-800 font-medium">
                      Price: ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Middle: Quantity Controls */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium">Quantity</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="border px-2 py-1 text-sm"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id)}
                      className="border px-2 py-1 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Right: Total & Gift Wrap */}
                <div className="flex flex-col items-center gap-2">
                  <label className="flex items-center gap-2 text-sm ">
                    <input
                      type="checkbox"
                      checked={item.giftWrap || false}
                      onChange={() => toggleGiftWrap(item.id)}
                    />
                    Gift Wrap (+$10)
                  </label>
                  <p className="text-sm font-medium">
                    Total: $
                    {(
                      item.price * item.quantity +
                      (item.giftWrap ? 10 : 0)
                    ).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 mt-1"
                    aria-label="Remove Item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-end items-center gap-6">
          <h2 className="text-2xl font-bold">
            Subtotal: ${subtotal.toFixed(2)}
          </h2>
          <button
            onClick={() => navigate("/checkout")}
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewCart;
