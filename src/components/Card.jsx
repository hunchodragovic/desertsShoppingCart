import React, { useState } from "react";
import { useMainContext } from "../contexts/MainContext";

const Card = () => {
  const { deserts } = useMainContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {deserts.map((desert, index) => (
        <CardItem key={index} desert={desert} />
      ))}
    </div>
  );
};

const CardItem = ({ desert }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000); // Reset after 1 second
    console.log("Item added to cart!");
  };

  return (
    <div className="w-full shadow-md rounded-md p-2 sm:p-3 lg:p-4 transition-transform hover:shadow-lg hover:scale-105">
      <div className="relative w-full flex flex-col justify-center items-center bg-transparent rounded-md">
        <div className="w-full h-36 sm:h-40 md:h-48 overflow-hidden rounded-md">
          <img
            src={desert.image.desktop}
            alt={desert.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <button
          className={`absolute -bottom-4 flex justify-center items-center rounded-full border border-[hsl(14,86%,42%)] 
            p-2 sm:p-3 cursor-pointer bg-white font-bold text-xs sm:text-sm transition-all 
            hover:bg-[hsl(14,86%,42%)] hover:text-white ${
              isAdded ? "bg-[hsl(14,86%,42%)] text-white" : ""
            }`}
          onClick={handleAddToCart}
        >
          <span className="flex items-center">
            <img
              src="/images/icon-add-to-cart.svg"
              alt="Add to cart"
              className="w-4 h-4 sm:w-5 sm:h-5 mx-1 sm:mx-2"
            />
          </span>
          <span className="mr-1 sm:mr-2">Add to Cart</span>
        </button>
      </div>
      <div className="flex flex-col justify-center items-start pt-6 p-1 sm:p-2 gap-y-1 sm:gap-y-2">
        <p className="text-gray-500 text-xs sm:text-sm">{desert.category}</p>
        <h2 className="text-black font-bold text-sm sm:text-base">
          {desert.name}
        </h2>
        <p className="text-[hsl(14,86%,42%)] font-bold text-lg sm:text-xl">
          ${desert.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Card;
