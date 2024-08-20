"use client"
import React from 'react'
import { useEffect } from 'react'
import { Sora } from 'next/font/google'
import Image from 'next/image'
import { useContext } from 'react'
import { MyContext } from './mycontext'
const sora = Sora({weight:"700",preload:false});
function Header() {
  const {cart,setShowCart,showCart} = useContext(MyContext);

  return (
    <div className='flex justify-center'>
    <div className='w-[90%] items-center justify-between flex p-[.3em] fixed sm:top-[2em] top-[1.5em]  z-50 h-[4em] backdrop-blur-md rounded-[.8em] bg-white/50'>
      <p className={`${sora.className} text-white `}>CubanLegacy</p>
      <div className='bg-white relative flex justify-center h-full cursor-pointer rounded-[inherit] w-[2.5em]'>
        <Image onClick={()=>setShowCart(!showCart)} alt='shopping bag' src="/shop.svg" width={20} height={20}/>
        {cart.length!=0&&<div className='absolute top-[.6em] left-1 flex justify-center items-center text-white rounded-full w-[1.2em] h-[1.2em] bg-blue-600'>{cart.length}</div>}
      </div>
    </div>
    </div>
  )
}

export default Header
