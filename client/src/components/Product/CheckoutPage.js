// src/components/CheckoutPage.js
import React from "react";
import { useCart } from "../../context/CartContext";
import Navbar from "./Navbar";
import Footer from "../Footer";

const CheckoutPage = () => {
  const { cartItems, subtotal } = useCart();
  const shipping = 40;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT SIDE — FORM */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border px-4 py-2 rounded mb-4"
            />
            <p className="text-sm">
              Have an account?{" "}
              <span className="text-blue-600 cursor-pointer">
                Create Account
              </span>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Delivery</h2>
            <select className="w-full border px-4 py-2 rounded mb-4">
              <option>Country / Region</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border px-4 py-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border px-4 py-2 rounded my-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="border px-4 py-2 rounded"
              />
            </div>
            <label className="text-sm flex items-center gap-2 mt-3">
              <input type="checkbox" />
              Save this info for future
            </label>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Payment</h2>
            <select className="w-full border px-4 py-2 rounded mb-4">
              <option>Credit Card</option>
              <option>Google Pay</option>
              <option>UPI</option>
            </select>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border px-4 py-2 rounded mb-4"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiration Date"
                className="border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Security Code"
                className="border px-4 py-2 rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Card Holder Name"
              className="w-full border px-4 py-2 rounded my-4"
            />
            <label className="text-sm flex items-center gap-2">
              <input type="checkbox" />
              Save this info for future
            </label>
          </div>

          <button className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 mt-6">
            Pay Now
          </button>
        </div>

        {/* RIGHT SIDE — CART SUMMARY */}
        <div className="space-y-8">
          <div className="border p-4 rounded space-y-6">
            <h2 className="text-xl font-semibold mb-4">Your Order</h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-start border-b pb-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex flex-col gap-1 text-sm">
                  <p className="font-semibold">{item.name}</p>
                  <p>Color: {item.color}</p>
                  {item.size && <p>Size: {item.size}</p>}
                  <p className="text-gray-800 font-medium">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border p-4 rounded space-y-4">
            <div>
              <label className="text-sm block mb-1">Discount Code</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter code"
                  className="flex-1 border px-4 py-2 rounded-l"
                />
                <button className="bg-gray-800 text-white px-4 rounded-r hover:bg-black">
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-3">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
