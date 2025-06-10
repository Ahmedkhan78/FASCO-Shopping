// components/Cart/MiniCart.js
import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const MiniCart = ({ onClose }) => {
  const {
    cartItems,
    subtotal,
    toggleGiftWrap,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  const FREE_SHIPPING_THRESHOLD = 150;

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  const handleViewCart = () => {
    onClose();
    navigate("/cart");
  };

  return (
    <div className="fixed right-0 top-0 w-full sm:w-[400px] h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <button className="text-gray-500 hover:text-black" onClick={onClose}>
          ✕
        </button>
      </div>

      <p className="text-sm text-green-600 mb-4">
        Buy ${Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more
        and get free shipping
      </p>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="relative border-b pb-4 pt-2 pr-10">
            {/* Trash Icon */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              aria-label="Remove Item"
            >
              <FaTrash />
            </button>

            {/* Product Details */}
            <p className="text-sm text-gray-500">Color: {item.color}</p>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2 mt-2">
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

            {/* Gift Wrap */}
            <div className="mt-2">
              <label className="text-sm flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.giftWrap || false}
                  onChange={() => toggleGiftWrap(item.id)}
                />
                For $10.00 please wrap the product
              </label>
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-6 flex justify-between items-center text-lg font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      {/* Actions */}
      <div className="mt-6 space-y-3">
        <button
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          onClick={handleCheckout}
        >
          Checkout
        </button>
        <button
          className="w-full border border-black text-black py-2 rounded hover:bg-gray-100"
          onClick={handleViewCart}
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
