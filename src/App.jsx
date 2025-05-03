import React from "react";

import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <header className="mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800">
            Sweet Delights Dessert Shop
          </h1>
          <p className="mt-2 text-center text-gray-600 text-sm sm:text-base">
            Browse our delicious selection of handcrafted desserts
          </p>
        </header>
        <main className="w-full max-w-7xl mx-auto">
          <Card />
        </main>
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
