import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/Product/img1.png";
import image2 from "../../assets/images/Product/img2.png";
import image3 from "../../assets/images/Product/img3.png";
import image4 from "../../assets/images/Product/img4.png";
import image5 from "../../assets/images/Product/img5.png";
import image6 from "../../assets/images/Product/img6.png";
import image7 from "../../assets/images/Product/img7.png";
import image8 from "../../assets/images/Product/img8.png";
import image9 from "../../assets/images/Product/img9.png";
import MiniCart from "./MiniCart";
import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    name: "Urban Sneakers",
    price: "₹999",
    image: image1,
    colors: ["red", "blue", "green"],
  },
  {
    id: 2,
    name: "Classic Hoodie",
    price: "₹799",
    image: image2,
    colors: ["black", "gray"],
  },
  {
    id: 3,
    name: "Casual T-Shirt",
    price: "₹499",
    image: image3,
    colors: ["yellow", "pink"],
  },
  {
    id: 4,
    name: "Slim Jeans",
    price: "₹1,299",
    image: image4,
    colors: ["blue", "indigo"],
  },
  {
    id: 5,
    name: "Summer Dress",
    price: "₹1,099",
    image: image5,
    colors: ["peach", "mint"],
  },
  {
    id: 6,
    name: "Sports Watch",
    price: "₹1,499",
    image: image6,
    colors: ["black", "silver"],
  },
  {
    id: 7,
    name: "Leather Jacket",
    price: "₹2,499",
    image: image7,
    colors: ["brown", "black"],
  },
  {
    id: 8,
    name: "Backpack",
    price: "₹799",
    image: image8,
    colors: ["navy", "gray"],
  },
  {
    id: 9,
    name: "Sunglasses",
    price: "₹399",
    image: image9,
    colors: ["black", "gold"],
  },
];

const ProductList = () => {
  const navigate = useNavigate();

  const { isMiniCartOpen, closeMiniCart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="w-full h-52 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h2 className="text-md font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.price}</p>
              <div className="flex gap-2 mt-2">
                {product.colors.map((color, index) => (
                  <span
                    key={index}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {isMiniCartOpen && <MiniCart onClose={closeMiniCart} />}
    </div>
  );
};

export default ProductList;
