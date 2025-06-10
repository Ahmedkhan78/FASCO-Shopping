import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
  FaCreditCard,
} from "react-icons/fa";

import image1 from "../../assets/images/Product/image1.png";
import image2 from "../../assets/images/Product/image2.png";
import image3 from "../../assets/images/Product/image3.png";
import image4 from "../../assets/images/Product/image4.png";
import image5 from "../../assets/images/Product/image5.png";
import image6 from "../../assets/images/Product/image6.png";
import image7 from "../../assets/images/Product/image1.png"; // reuse images if needed
import image8 from "../../assets/images/Product/image2.png";
import image9 from "../../assets/images/Product/image3.png";
import Navbar from "./Navbar";
import PeakySlider from "../PeakySlider";
import DealsSection from "../DealsSection";
import Footer from "../Footer";

import MiniCart from "./MiniCart";
import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    name: "Urban Sneakers",
    price: 999,
    oldPrice: 1299,
    discount: "23%",
    colors: ["red", "blue", "green"],
    size: ["7", "8", "9", "10"],
    description: "Comfortable urban sneakers for daily wear and running.",
    image: image1,
  },
  {
    id: 2,
    name: "Classic Hoodie",
    price: 799,
    oldPrice: 999,
    discount: "20%",
    colors: ["black", "gray"],
    size: ["S", "M", "L", "XL"],
    description: "Classic hoodie with soft fabric and warm fit.",
    image: image2,
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: 499,
    oldPrice: 699,
    discount: "29%",
    colors: ["yellow", "pink"],
    size: ["S", "M", "L", "XL"],
    description: "Casual cotton t-shirt, perfect for everyday wear.",
    image: image3,
  },
  {
    id: 4,
    name: "Slim Jeans",
    price: 1299,
    oldPrice: 1599,
    discount: "19%",
    colors: ["blue", "indigo"],
    size: ["28", "30", "32", "34", "36"],
    description: "Slim fit jeans with stretch for comfort.",
    image: image4,
  },
  {
    id: 5,
    name: "Summer Dress",
    price: 1099,
    oldPrice: 1399,
    discount: "21%",
    colors: ["peach", "mint"],
    size: ["S", "M", "L"],
    description: "Light and breezy summer dress for casual outings.",
    image: image5,
  },
  {
    id: 6,
    name: "Sports Watch",
    price: 1499,
    oldPrice: 1999,
    discount: "25%",
    colors: ["black", "silver"],
    size: [], // not applicable
    description: "Durable sports watch with multiple features.",
    image: image6,
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: 2499,
    oldPrice: 3299,
    discount: "24%",
    colors: ["brown", "black"],
    size: ["M", "L", "XL"],
    description: "Premium leather jacket for a bold look.",
    image: image7,
  },
  {
    id: 8,
    name: "Backpack",
    price: 799,
    oldPrice: 999,
    discount: "20%",
    colors: ["navy", "gray"],
    size: ["M", "L", "XL"],
    description: "Stylish and spacious backpack for everyday use.",
    image: image8,
  },
  {
    id: 9,
    name: "Sunglasses",
    price: 399,
    oldPrice: 599,
    discount: "33%",
    colors: ["black", "gold"],
    size: [], // no size
    description: "Trendy sunglasses with UV protection.",
    image: image9,
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, isMiniCartOpen, closeMiniCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedSize, setSelectedSize] = useState(product?.size[0] || "");
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [quantity, setQuantity] = useState(1);

  if (!product)
    return <div className="text-center py-10">Product not found</div>;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
      color: selectedColor,
      size: selectedSize,
    });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md object-cover rounded"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-sm font-bold text-gray-600 uppercase">Fasco</h1>
          <h2 className="text-3xl font-bold">{product.name}</h2>

          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">${product.price}</span>
            <span className="line-through text-gray-500">
              ₹{product.oldPrice}
            </span>
            <span className="text-green-600 font-medium">
              Save {product.discount}
            </span>
          </div>
          <p className="text-sm text-red-500">24 people are viewing this</p>
          <p className="text-sm text-gray-700">Only 9 left in stock!</p>

          {product.size.length > 0 && (
            <div>
              <p className="font-medium">Size:</p>
              <div className="flex gap-2">
                {product.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-1 border rounded text-sm ${
                      selectedSize === size ? "bg-gray-200" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="font-medium">Color:</p>
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  onClick={() => setSelectedColor(color)}
                  className={`w-6 h-6 rounded-full border cursor-pointer ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-medium">Quantity:</p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button className="w-full py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
              Compare
            </button>
          </div>

          <div className="flex gap-4 text-3xl justify-center mt-4 text-gray-700">
            <FaCcVisa />
            <FaCcMastercard />
            <FaGooglePay />
            <FaCreditCard />
          </div>
          <p className="text-xs text-center text-gray-500 mt-2">
            Guarantee safe & secure checkout
          </p>
        </div>
      </div>
      <PeakySlider />
      <DealsSection />
      <Footer />
      {isMiniCartOpen && <MiniCart onClose={closeMiniCart} />}
    </>
  );
};

export default ProductDetails;
