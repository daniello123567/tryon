"use client"
import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Shop from './components/Shop'
import { MyContext } from './components/mycontext'
import Cart from './components/Cart'
import Footer from './components/Footer'
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
      <Hero/>
      <Intro/>
      <Shop/>
      <Footer/>
    </MyContext.Provider>
  )
}

export default Page
