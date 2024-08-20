"use client"
import React, { useContext, useEffect, useState } from 'react'
import { Sora } from 'next/font/google'
import Image from 'next/image';
import Cartproducts from './Cartproducts';
import supabase from '@/utils/supabase';
import { MyContext } from './mycontext';
const sora = Sora({weight:"500",subsets:["latin"]});
const glass = 'bg-white/50 backdrop-blur-md';

function Cart() {
  const [products,setProducts] = useState<any[]>();
  const {cart,setShowCart} = useContext(MyContext);
  const[l,setl] = useState<boolean>()
  const fetchFromBasedOnId = async (ids:Array<string>)=>{
     setl(true)
    const {data} = await supabase.from('products').select('*').in('id',[...ids]);
    if(data){
        setProducts([...data])
    }
    setl(false)
  }
  useEffect(()=>{
     const ids = cart.map((product:any)=>{
    return product.id
   });
   fetchFromBasedOnId([...ids]);

  },[cart])

  return (
    <div className='flex justify-center'>
    <div className={`${sora.className} grid place-items-center`}>
    <div className='fixed rounded-[1em] w-[80%] py-[1em] px-[1em] z-50 h-[80vh] bg-orange-400 top-[6em]'>
       <div className='flex justify-between'>
        <p className={`${glass} flex items-center gap-[.8em] text-white px-[1em] py-[.8em] rounded`}>
          Bag
         <Image src='/bag.png' alt='bag' width={20} height={20}/>
        </p>
        <p className={`${glass} w-[50%] text-white px-[1em] py-[.8em] rounded`}>Goods: {products?.length!=0?products?.length : 'no product'}</p>
       </div>
       <div>
        {l&&<p>Loading..</p>}
        {products?.length!=0&&products?.map((product:praiseGod)=>{
          return <Cartproducts stateSet={setProducts} id={product.id} Price={product.Price} Description={product.Descrition} Name={product.Name} key={product.id} imgSrc={product.ImageUrl} />
        })}
       </div>
       <button onClick={()=>setShowCart(false)} className='absolute bottom-4 rounded-[inherit] right-4 backdrop-blur-md bg-white/50  px-[1em]' type='button'>Close</button>
    </div>
    </div>
    </div>
  )
}

export default Cart
