import { createContext, useContext, useState } from "react";

const CartContext=createContext()

export const CartProvider=({children})=>{
    const [cartItems,setCartItems]=useState([])

    const addtoCart=(item)=>{
        setCartItems([...cartItems,item])
    }

const removeFromCart=(item)=>{
    setCartItems(cartItems.filter((FS)=> FS!==item))
}
return (
    <CartContext.Provider value={{cartItems,addtoCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
)
}
export const useCart=()=>{
    return useContext(CartContext)
} 