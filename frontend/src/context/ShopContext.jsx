import React, { createContext, useEffect, useState } from "react";


export const ShopContext= createContext(null);


const getDefaultCart = ()=>{
    let cart = {};
    for (let index = 1; index < 300+1; index++) {
        cart[index] = 0;
        
    }
    return cart;
}
const ShopContextProvider=(props)=>{

    const [all_product,setall_product] = useState([]);
    
    const [cartItems,setCartItems] = useState(getDefaultCart());

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts').then((response)=>response.json())
        .then((data)=>setall_product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:"POST",
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }

    },[])
    

    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const cartItems = { ...prev, [itemId]: prev[itemId] + 1 };
            if (localStorage.getItem('auth-token')) {
                fetch("http://localhost:4000/addtocart", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'auth-token': `${localStorage.getItem('auth-token')}`,
                        'Content-Type': 'application/json', // Fixed typo here
                    },
                    body: JSON.stringify({ "itemId": itemId })
                })
                    .then((response) => response.json())
                    .then((data) => console.log(data));
            }
            return cartItems; // returning the updated cartItems object
        });
    }
    

    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')) {
            fetch("http://localhost:4000/removefromcart", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json', // Fixed typo here
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((response) => response.json())
                .then((data) => console.log(data));

            
        }
    }


    const getTotalCartAmount = ()=>{
        let totalamount = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalamount+=iteminfo.new_price*cartItems[item]
            }
            
        }
        return totalamount;
    }

    const getTotalCartItems =()=>{
        let totalitem = 0;
        for (const item in cartItems){
            if (cartItems[item]>0){
                totalitem+=cartItems[item];
            }
        }
        return totalitem;   
    }


    const contextValue ={getTotalCartItems,all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount};

    

   

    
     
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
