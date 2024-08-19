"use client"
import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Shop from './components/Shop'
import Header from './components/Header'
import { MyContext } from './components/mycontext'
import Cart from './components/Cart'
function Page() {
  const [cart,setcart] = useState<string[]|string>([]);
  const [showCart,setShowCart] = useState<boolean>(false);
  useEffect(()=>{
    const savedItems = localStorage.getItem('cart');
    if(savedItems){
    setcart([...JSON.parse(savedItems)])
   };
   },[])
 useEffect(()=>{
    if(cart.length!=0)
    localStorage.setItem('cart',JSON.stringify(cart));
 },[cart]);

  return (
    <MyContext.Provider value={{cart,setcart,setShowCart,showCart}}>
      {showCart&&<Cart/>}
      <Header/>
      <Hero/>
      <Intro/>
      <Shop/>
    </MyContext.Provider>
  )
}

export default Page
