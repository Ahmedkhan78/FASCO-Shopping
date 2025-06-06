import React from "react";

import image1 from "../assets/images/instagram/image1.png";
import image2 from "../assets/images/instagram/image2.png";
import image3 from "../assets/images/instagram/image3.png";
import image4 from "../assets/images/instagram/image4.png";
import image5 from "../assets/images/instagram/image5.png";
import image6 from "../assets/images/instagram/image6.png";
import image7 from "../assets/images/instagram/image7.png";

const images = [
  { src: image1, alt: "Insta 1" },
  { src: image2, alt: "Insta 2" },
  { src: image3, alt: "Insta 3" },
  { src: image4, alt: "Insta 4" },
  { src: image5, alt: "Insta 5" },
  { src: image6, alt: "Insta 6" },
  { src: image7, alt: "Insta 7" },
];

const InstagramSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-12 font-poppins">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Follow Us On Instagram
        </h2>
        <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin.
        </p>
      </div>

      {/* Scrolling Image Strip */}
      <div className="overflow-hidden mt-10">
        <div className="flex w-max animate-scroll ">
          {images.concat(images).map((img, index) => {
            const isEven = index % 2 === 0;
            const sizeClass = isEven ? "h-40 w-40 mt-5" : "h-48 w-48"; // Adjust as needed

            return (
              <div
                key={index}
                className={`overflow-hidden  ${sizeClass} relative`}
              >
                <img src={img.src} alt={img.alt} className="object-cover" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
