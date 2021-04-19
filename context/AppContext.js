
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)


export const AppWrapper = ({ children }) => {


    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([{id:0}]);

    const handleCart = (units, newItem) => {
        const existing = cart.find((article) => article.id === newItem.id);
        if (existing) {
            existing.quantity = existing.quantity + units;
            setCart([...cart]);
        }
        else setCart([...cart, { "id": newItem.id, "quantity":1, "desc":newItem.desc, "price":newItem.price}]);
    }


    const generateOrder = (array) => {
        console.log(array);
        setOrder(array);
    }



    return (
        <AppContext.Provider value={
            {
                cart,
                order,
                handleCart,
                generateOrder

            }}>
            {children}</AppContext.Provider>)
}


export default useAppContext