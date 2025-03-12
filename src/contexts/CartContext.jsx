import { useContext , createContext, useState } from "react";
import productData from '../api/productsData.json'

export const CartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const addToCart = (id, name, discountedPrice) => {
        setCart((cart) => [...cart, { id, name, discountedPrice }]);
        console.log(cart);
        
      };

   return(
    <CartContext.Provider value={{cart , setCart , addToCart}}>
        {children}
    </CartContext.Provider>
   )
}

export default function useCart(){
    return useContext(CartContext)
}