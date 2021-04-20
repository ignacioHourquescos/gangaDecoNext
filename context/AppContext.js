
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)


export const AppWrapper = ({ children }) => {


    const [cart, setCart] = useState([]);
    const [order, setOrder] = useState([{id:0}]);
    const [user, setUser] =useState({name:""});

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

    const handleUserData = (data) => {
        setUser(data);
    }


    //CALULATES TOTAL VALUE OF CART
    const getTotalCartValue = cart.reduce((acumulator, current) => {
        return acumulator + current.quantity * current.price;
    }, 0);


    return (
        <AppContext.Provider value={
            {
                cart,
                order,
                user,
                getTotalCartValue,
                handleCart,
                generateOrder,
               
                handleUserData

            }}>
            {children}</AppContext.Provider>)
}


export default useAppContext