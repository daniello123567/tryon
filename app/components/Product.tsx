"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import Added from './added';
import Link from 'next/link';
import { Sora } from 'next/font/google';
import { MyContext } from './mycontext';
const sora = Sora({weight:"600",preload:false});
const sora2 = Sora({weight:"400",preload:false});

type Props =  {cameraType:"front"|"back",lensid:string,id:string,name:string,Description:string,Price:string,imageSrc:string}

function Product({name,Description,Price,imageSrc,id,lensid,cameraType}:Props) {
  const [addingEvent,setAddingEvent] = useState<boolean>()
  const {cart,setcart} = useContext(MyContext);
  const checkIfItemALreadyInCart = () =>{
    return cart.some((prod:any)=> prod.id == id);
   }
 const removeItem = ()=>{
  const newData = cart.filter((product:any)=>product.id!==id);
  setcart(newData)
 }
  const addtoglobalcart = ()=>{
   if(!checkIfItemALreadyInCart()){
    setAddingEvent(true)
    setcart([...cart,{id:id,quantity:1}])
    setTimeout(()=>setAddingEvent(false),850)
   }else{
    removeItem()
   }



  }

  return (<>
        {addingEvent&&<Added/>}
      <div className={`${sora.className} w-full lg:w-[30.25em] rounded-[1.625em] p-[0.75em] bg-white pb-[1em]`}>
      <div className='bg-red-50 overflow-hidden rounded-[inherit] h-[18.75em]'>
 <img className='w-full h-full  object-cover' src={imageSrc} alt="" />
      </div>
      <div className='pt-[1em]'>
        <p className='text-[1.5em] leading-[-.04em]'>{name}</p>
        <p className={`${sora2.className} text-[#0d0c0c99] text-[0.8125em]`}>{Description}</p>
        <p>{Price}</p>
        <div className='flex justify-between mt-[1em]'>
        <p onClick={addtoglobalcart} className='px-[1em] gap-x-[.3em] cursor-pointer flex py-[1em] items-center rounded bg-slate-200'>
          {checkIfItemALreadyInCart()?'added to bag':'add to bag'}
          <Image src="/shop.svg" width={18} height={20} alt='shopping bag'/>
        </p>
        <Link href={`/tryon/${lensid}?cameraType=${cameraType}`} className='px-[1em] cursor-pointer py-[1em] rounded bg-slate-200'>--Try On</Link>
        </div>
      </div>
    </div></>
  )
}

export default Product
