"use client"
import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { useTheme } from '@/context/ThemeContext';
import Button from './Button';



const Cart = ({handleSignInWithGoogle, cartShow}) => {
  const { theme} = useTheme();
  const { 
    cart, 
    getTotalAmount,
    removeFromCart,
    clearCart,
    getTotalQuantityForAllItems,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);
 
  const handleIncrease = (ID) => {
    const ItemId = ID;
    increaseQuantity({ id: ItemId });
  };

  const handleDecrease = (ID) => {
    const ItemId = ID;
    decreaseQuantity({ id: ItemId });
    
  };
  const handleClearSingleItem = (ID)=>{
   
   // Assuming you have an item ID to remove, replace 'yourItemId' with the actual item ID
   const ItemId = ID;
    
   // Call removeFromCart with the item ID
   removeFromCart({ id: ItemId });
  }
  const handleClearingCart = ()=>{
    clearCart()
  }
  const totalQuantityForAllItems = getTotalQuantityForAllItems();

  return (
  <>
    <div className={` lexend ${cartShow ? 'hidden' : 'block'} rounded-lg  fixed top-[5rem] right-0 md:right-5 p-3  md:p-5  ${theme === 'light' ? "text-white bg-black border-slate-500" : "text-black bg-white border-white"} ` }>
      
      <div className={`w-[210px]  md:w-[260px] flex flex-wrap justify-center gap-2 ${theme === 'light' ? "text-white  bg-black" : "text-black border-white bg-white"} `}>
      {cart?.length === 0 ? (
        <div className={`${theme === 'light' ? "text-white" : "text-black"} font-bold`}>Your cart is empty</div>
      ) : (
      
        cart.map((item,index) => (
          <div key={index} className={`${theme === 'light' ? "text-white border-slate-500" : "text-black  border-slate-200"} ${item?.highlight === true &&  "bg-blue-500 text-white" } price-card-morph-cart  w-[70px] p-1 text-[10px] shadow-2xl`}>
              
            <div className={`font-bold text-[0.580rem] leading-[0.8rem] text-center`}>{item?.pack}</div>
            <div className={`text-center text-[0.550rem] leading-[0.7rem]`}>{item?.valPrep}</div>
            
            <div className={`${item?.highlight  === true && "text-white" } text-blue-500 text-center font-bold`}>{item?.value}</div>
            <div className='flex items-center justify-center flex-row gap-1 font-bold'>
              <div className='cursor-pointer  font-bold' onClick={()=>handleDecrease(item?.id)}><DoNotDisturbOnIcon className='text-[15px]'/></div>
              <div className='cursor-pointer  font-bold' onClick={()=>handleIncrease(item?.id)}><AddShoppingCartIcon className='text-[15px]'/></div>
              <div className='cursor-pointer font-bold' onClick={()=>handleClearSingleItem(item?.id)}><RemoveShoppingCartIcon className='text-[15px]'/></div>
            </div>
          </div>
        ))
        
      )}
      </div>
      <div  className={`${theme === 'light' ? "text-white" : "text-black "} flex gap-4 text-[10px] font-bold`}>
      <div>
        <div className={` mt-4  text-[0.550rem] leading-[0.7rem]`}>Total Amount: €{Number(getTotalAmount().toFixed(2))}</div>
      </div>
      <div className=''>
        <div className='mt-3 text-[0.550rem] leading-[0.7rem]'>
        {cart?.length === 0 ? (<></>)
         :
         ( <div>{cart?.length === 1 ? "Package Selected:" : "Packages Selected:"}</div>)}
          
          </div>
        <ul >
        {totalQuantityForAllItems &&
            Object.entries(totalQuantityForAllItems).map(([itemId, { quantity, name }]) => (
              <li className='flex justify-between text-[0.550rem] leading-[0.7rem]' key={itemId}> 
              <div>{`${name} `} :</div>
              <div>{` ${quantity} `}</div>
              </li>
            ))}

        </ul>
      </div>
      </div>
      <div className='flex gap-2'>
        {/* clear cart btn */}
      <Button className={`${theme === 'light' ? "text-white" : "text-black"} text-[0.550rem] leading-[0.7rem] ${Number(getTotalAmount().toFixed(2)) === 0 ? "hidden" : "block"} mt-4 border-[red] bg-transparent text-[10px] rounded-none`} onClick={handleClearingCart} text='Clear Cart' />
      {/* checkout button */}
      <Button className={`${theme === 'light' ? "text-white" : "text-white"} text-[0.550rem] leading-[0.7rem] ${Number(getTotalAmount().toFixed(2)) === 0 ? "hidden" : "block"} mt-4 border-[#951D82] bg-[#951D82] rounded-none text-[10px]`} onClick={handleSignInWithGoogle}  text='Check out' />

      </div>
  </div>
  </>
  );
};

export default Cart;
