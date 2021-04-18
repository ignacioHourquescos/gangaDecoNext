
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)


export const AppWrapper = ({ children }) => {
    const [cart, setCart] = useState(["bananas","manznana"])

    const handleCartArray = (units, newItem) => {
        const existing = cartArray.find((article) => article.id === newItem.id);
        if (existing) {
            existing.quantity = existing.quantity + units;
            setCartArray([...cartArray]);
        }
        else setCartArray([...cartArray, { "id": newItem.ids}]);
    }





    return (
        <AppContext.Provider value={
            {
                cart,
                handleCartArray

            }}>
            {children}</AppContext.Provider>)
}


export default useAppContext