import React from "react";
import { useMainContext } from "../contexts/MainContext";

const Card = () => {
  // Update to use cartItems instead of addedItems
  const { deserts, cartItems, handleAddToCart } = useMainContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      {deserts.map((desert, index) => {
        // Check if this desert is in the cart by checking if any cart item has matching name
        const isItemAdded = cartItems.some((item) => item.name === desert.name);

        // Find the item in cart to get its quantity (if it exists)
        const cartItem = cartItems.find((item) => item.name === desert.name);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <CardItem
            key={index}
            index={index}
            desert={desert}
            isItemAdded={isItemAdded}
            quantity={quantity}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
};

const CardItem = ({
  index,
  desert,
  isItemAdded,
  quantity,
  handleAddToCart,
}) => {
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
          className={`absolute -bottom-4 flex justify-center items-center rounded-full border 
          border-[hsl(14,86%,42%)] p-2 sm:p-3 cursor-pointer font-bold text-xs sm:text-sm transition-all
          ${
            isItemAdded
              ? "bg-[hsl(14,86%,42%)] text-white"
              : "bg-white text-[hsl(14,86%,42%)]"
          } hover:bg-[hsl(14,86%,42%)] hover:text-white `}
          onClick={() => handleAddToCart(index)}
        >
          <span className="flex items-center">
            <img
              src="/images/icon-add-to-cart.svg"
              alt="Add to cart"
              className={`w-4 h-4 sm:w-5 sm:h-5 mx-1 sm:mx-2 ${
                isItemAdded ? "filter brightness-0 invert" : ""
              }`}
            />
          </span>
          <span className="mr-1 sm:mr-2 ">
            {isItemAdded ? `Added (${quantity})` : "Add to Cart "}
          </span>
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
