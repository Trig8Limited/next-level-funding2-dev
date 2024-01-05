
'use client'
import React, { createContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
  const itemId = action.payload.id;
  const existingItem = state.find(item => item.id === itemId);

  if (existingItem) {
    // Item already exists, update quantity for that specific item type
    return state.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    // Item doesn't exist, add with quantity 1
    return [...state, { ...action.payload, quantity: 1 }];
  }

  case 'INCREASE_QUANTITY':
    return state.map(item =>
      item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    case 'DECREASE_QUANTITY':
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      );

    case 'REMOVE_FROM_CART':
      const updatedCart = state.filter(
        (item) => item.id !== action.payload.id
      );
      return updatedCart;

    case 'CLEAR_CART':
      return [];

    // Add other cases for additional functionalities

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    // Load cart from local storage on initialization
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });
  // https://t.co/WdWOsYo1lY
  // https://t.co/8bwDAVOpVQ
  // citywalks.live
  // https://cleanup.pictures
  // where-is-this.com
  useEffect(() => {
    // Save cart to local storage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };
  

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };
  
  const increaseQuantity = (item) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: item });
  };

  const decreaseQuantity = (item) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: item });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
 // Function to calculate total quantity for each individual item in the cart
 const getTotalQuantityForAllItems = () => {
  const totalQuantityForItems = {};

  cart.forEach(item => {
    if (!totalQuantityForItems[item.id]) {
      totalQuantityForItems[item.id] = {
        quantity: 0,
        name: item.value, // Assuming there's a property 'name' in your item
      };
    }

    totalQuantityForItems[item.id].quantity += item.quantity;
  });

  return totalQuantityForItems;
};

  // Function to calculate total items in the cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Function to calculate total amount for each item type in the cart
const getTotalAmount = () => {
  return cart.reduce((total, item) => Number(total) + Number(item.quantity) * Number(item.amount), 0);
};


  useEffect(() => {
    // Update local storage when cart is cleared
    if (typeof window !== 'undefined' && cart.length === 0) {
      localStorage.removeItem('cart');
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ 
        cart, 
        addToCart, 
        removeFromCart,
         clearCart, 
         getTotalItems,
         getTotalAmount,
         increaseQuantity,
         decreaseQuantity,
         getTotalQuantityForAllItems,
        }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
