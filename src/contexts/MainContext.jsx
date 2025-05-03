import { createContext, useContext, useState } from "react";

const MainContext = createContext();
const desertsData = [
  {
    image: {
      thumbnail: "./images/image-waffle-thumbnail.jpg",
      mobile: "./images/image-waffle-mobile.jpg",
      tablet: "./images/image-waffle-tablet.jpg",
      desktop: "./images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    image: {
      thumbnail: "./images/image-creme-brulee-thumbnail.jpg",
      mobile: "./images/image-creme-brulee-mobile.jpg",
      tablet: "./images/image-creme-brulee-tablet.jpg",
      desktop: "./images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    image: {
      thumbnail: "./images/image-macaron-thumbnail.jpg",
      mobile: "./images/image-macaron-mobile.jpg",
      tablet: "./images/image-macaron-tablet.jpg",
      desktop: "./images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    image: {
      thumbnail: "./images/image-tiramisu-thumbnail.jpg",
      mobile: "./images/image-tiramisu-mobile.jpg",
      tablet: "./images/image-tiramisu-tablet.jpg",
      desktop: "./images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    image: {
      thumbnail: "./images/image-baklava-thumbnail.jpg",
      mobile: "./images/image-baklava-mobile.jpg",
      tablet: "./images/image-baklava-tablet.jpg",
      desktop: "./images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    image: {
      thumbnail: "./images/image-meringue-thumbnail.jpg",
      mobile: "./images/image-meringue-mobile.jpg",
      tablet: "./images/image-meringue-tablet.jpg",
      desktop: "./images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    image: {
      thumbnail: "./images/image-cake-thumbnail.jpg",
      mobile: "./images/image-cake-mobile.jpg",
      tablet: "./images/image-cake-tablet.jpg",
      desktop: "./images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./images/image-brownie-thumbnail.jpg",
      mobile: "./images/image-brownie-mobile.jpg",
      tablet: "./images/image-brownie-tablet.jpg",
      desktop: "./images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    image: {
      thumbnail: "./images/image-panna-cotta-thumbnail.jpg",
      mobile: "./images/image-panna-cotta-mobile.jpg",
      tablet: "./images/image-panna-cotta-tablet.jpg",
      desktop: "./images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

export const MainProvider = ({ children }) => {
  const [deserts, setDeserts] = useState(desertsData);
  const [cartItems, setCartItems] = useState([]); // Store actual cart items instead of just indices

  const removeFromCart = (itemId) => {
    // Find the item in the cart by its unique ID
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);

    // If item doesn't exist in cart, do nothing
    if (itemIndex === -1) return;

    // Create a copy of the current cart items
    const updatedCartItems = [...cartItems];

    // If quantity is more than 1, decrease quantity
    if (updatedCartItems[itemIndex].quantity > 1) {
      updatedCartItems[itemIndex] = {
        ...updatedCartItems[itemIndex],
        quantity: updatedCartItems[itemIndex].quantity - 1,
      };
      console.log(
        `Decreased quantity of "${updatedCartItems[itemIndex].name}" to ${updatedCartItems[itemIndex].quantity}`
      );
    } else {
      // If quantity is 1, remove the item completely
      updatedCartItems.splice(itemIndex, 1);
      console.log(`Removed "${cartItems[itemIndex].name}" from cart`);
    }

    // Update the cart state
    setCartItems(updatedCartItems);
    console.log("Current cart items:", updatedCartItems);
  };

  // Modified handleAddToCart function to handle quantity increases
  const handleAddToCart = (index) => {
    // Get the desert object from the deserts array using the index
    const desertToAdd = deserts[index];

    // Make sure the desert exists
    if (desertToAdd) {
      // Check if the item is already in cart
      const existingItemIndex = cartItems.findIndex(
        (item) => item.name === desertToAdd.name
      );

      // Create a new cart array to avoid direct state mutation
      let newCartItems;

      if (existingItemIndex !== -1) {
        // Item already exists, increment its quantity
        newCartItems = [...cartItems];
        newCartItems[existingItemIndex] = {
          ...newCartItems[existingItemIndex],
          quantity: newCartItems[existingItemIndex].quantity + 1,
        };
        console.log(
          `Increased quantity of "${desertToAdd.name}" to ${newCartItems[existingItemIndex].quantity}`
        );
      } else {
        // Item doesn't exist in cart, add it with quantity 1
        const newItem = {
          ...desertToAdd,
          id: Date.now(), // Add a unique identifier for this cart item
          quantity: 1, // Initialize quantity to 1
        };
        newCartItems = [...cartItems, newItem];
        console.log(`Added new item to cart: "${desertToAdd.name}"`);
      }

      // Update the cartItems state
      setCartItems(newCartItems);

      // Log the updated cart
      console.log("Current cart items:", newCartItems);
    }
  };

  const value = {
    deserts,
    removeFromCart,
    setDeserts,
    cartItems, // Expose cartItems instead of addedItems
    setCartItems, // Expose method to update cartItems
    handleAddToCart,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMainContext = () => {
  return useContext(MainContext);
};
