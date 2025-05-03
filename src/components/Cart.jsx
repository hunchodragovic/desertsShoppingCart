import React, { useState, useEffect } from "react";
import { useMainContext } from "../contexts/MainContext";

const Cart = () => {
  const { cartItems, removeFromCart, setCartItems } = useMainContext();
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);

  // Calculate total whenever cart items change
  useEffect(() => {
    const calculatedTotal = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
    setTotal(calculatedTotal.toFixed(2));
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleConfirmOrder = () => {
    setShowModal(true);
    // Clear the cart after confirming the order
  };

  const startNewOrder = () => {
    setShowModal(false);
    setCartItems([]);
    // Add any additional logic for starting a new order
  };

  return (
    <div className="px-2">
      <h2 className="text-lg font-semibold text-gray-800">
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length > 0 ? (
        <>
          <ul className="mt-4 space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-2 bg-white rounded shadow"
              >
                <div className="flex items-center">
                  <img
                    src={item.image?.desktop || "/placeholder.png"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-orange-700">
                      <span className="font-bold">{item.quantity}x</span>
                      <br />{" "}
                      <span className="font-bold">
                        Price: ${item.price.toFixed(2)}
                      </span>
                      <br />
                      <span className="font-bold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-gray-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Order Total</span>
              <span>${total}</span>
            </div>

            <div className="mt-4 flex items-center justify-center bg-gray-100 py-2 rounded text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-500 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                  clipRule="evenodd"
                />
              </svg>
              This is a carbon-neutral delivery
            </div>

            <button
              onClick={handleConfirmOrder}
              className="w-full mt-4 py-3 bg-[hsl(14,86%,42%)] text-white font-medium rounded hover:opacity-90 transition-opacity flex items-center justify-center cursor-pointer"
            >
              Confirm Order
            </button>
          </div>
        </>
      ) : (
        <p className="mt-4 text-gray-600">Your cart is empty.</p>
      )}

      {/* Order Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-opacity-50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-6 max-w-md w-full  shadow-lg">
            <div className="flex justify-start mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h3 className="font-bold text-xl mb-4">Order Confirmed</h3>
            <p className="text-gray-600 mb-4">
              We have started preparing your food
            </p>

            <ul className="space-y-4 my-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded mr-3">
                    <img
                      src={item.image?.desktop}
                      alt={item.name}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">
                      {item.quantity}x @ ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-medium">Order Total</span>
                <span className="font-bold">${total}</span>
              </div>
            </div>

            <button
              onClick={startNewOrder}
              className=" cursor-pointer w-full py-3 bg-[hsl(14,86%,42%)] text-white font-medium rounded hover:opacity-90 transition-opacity"
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
