import React from "react";

import Card from "./components/Card";
import { useMainContext } from "./contexts/MainContext";
import Cart from "./components/Cart";

function App() {
  const { cartItems } = useMainContext();

  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <header className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Sweet Delights Dessert Shop
          </h1>
          <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">
            Browse our delicious selection of handcrafted desserts
          </p>
        </header>
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto gap-6">
          <main className="w-full lg:w-3/5">
            <Card />
          </main>
          <aside className="w-full lg:w-2/5 bg-gray-100 rounded-lg p-4 min-h-[20rem] ">
            {/* Cart component will go here */}
            <div className="h-full  border-2 border-dashed border-red-300 bg-gray-100 rounded-lg">
              {cartItems.length > 0 ? (
                <Cart />
              ) : (
                <div className="flex flex-col items-center justify-center h-full">
                  <img
                    src="/public/images/illustration-empty-cart.svg"
                    alt="Empty Cart"
                    className="w-24 h-24 mb-4"
                  />
                  <h2 className="text-lg font-semibold text-gray-800">
                    Your Cart is Empty
                  </h2>
                </div>
              )}
            </div>
          </aside>
        </div>
        <footer className="mt-12 text-center text-gray-500 text-xs sm:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Sweet Delights. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
