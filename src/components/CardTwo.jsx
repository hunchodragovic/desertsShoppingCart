import React from "react";

const CardTwo = () => {
  return (
    <div className="w-70 shadow-md rounded-md p-4 m-4">
      {/* Image container with relative positioning */}
      <div className="relative w-full rounded-md overflow-hidden">
        {/* Image */}
        <img
          src="/images/image-baklava-desktop.jpg"
          className="w-full h-48 object-cover"
          alt="Baklava"
        />

        {/* Button positioned absolutely within the image container */}
        <button className="absolute bottom-4 right-4 flex justify-center items-center rounded-full border p-3 cursor-pointer bg-white font-bold hover:bg-gray-100 transition-colors">
          <span>
            <img
              src="/public/images/icon-add-to-cart.svg"
              alt="Add to cart"
              className="w-5 h-5 mx-2"
            />
          </span>
          Add to Cart
        </button>
      </div>

      {/* Product info */}
      <div className="flex flex-col justify-center items-start p-2 gap-y-2 mt-3">
        <h2 className="text-black font-bold text-[16px]">Baklava</h2>
        <p className="text-gray-500">Pistachio Baklava</p>
        <p className="text-[hsl(14,86%,42%)] font-bold text-xl">$4.00</p>
      </div>
    </div>
  );
};

export default CardTwo;
