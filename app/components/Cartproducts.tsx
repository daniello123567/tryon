import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { MyContext } from './mycontext'
type props = {stateSet:any,id:string,imgSrc:string,Name:string,Description:string,Price:string}
function Cartproducts({stateSet,id,imgSrc,Name,Description,Price}:props) {
const {setcart,cart} = useContext(MyContext)
const removeItem = ()=>{
    const newData = cart.filter((product:praiseGod)=>{
      return product.id !== id;
    });
   setcart(newData)
   localStorage.setItem('cart',JSON.stringify(newData))
}

  return (
    <div className='backdrop-blur-md mt-[1em] overflow-hidden h-[6.5em] rounded bg-white/50 '>
      <div className='flex h-full w-full'>
        <div className='h-full w-[40%]'>
          <img className='w-full h-full object-cover' src={imgSrc} alt={`image for ${Name}`} />
        </div>
         <div className='p-[.4em]  pb-[.6em] w-[50%]'>
          <p className='font-semibold text-nowrap'>{Name}</p>
          <p className='text-[.5em] text-wrap'>{Description}</p>
          <div className='flex justify-between items-center'>
            <p className='mt-[.5em] text-white w-max  rounded'>{Price}</p>
          <p onClick={removeItem}>
            <Image width={20} height={20} alt='delete btn' src="/delete.png"/></p>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Cartproducts
