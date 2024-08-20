"use client"
import React from 'react'
import { Sora } from 'next/font/google'
import Product from './Product'
import supabase from '@/utils/supabase'
import { useEffect,useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Loading from './Loading'
import Filters from './Filters'
const sora = Sora({weight:"800",subsets:["latin"]});
declare global {
type praiseGod = {
  Descrition:string;
  ImageUrl:string;
  "Lens ID":string
  Name:string
  Price:string;
  created_at?:string;
  id:string,
  cameraType:"front"|"back"
}}
function Shop() {
  const [products,setProducts] = useState<praiseGod[]|null>([]);
  const fetchProductsByFilter = async (filterItem:string)=>{
    const {data} = await supabase.from('products').select('*').eq('category',filterItem);
    if(!data)return;
    setProducts([...data])
  }
  const fetchAllproducts = async ()=>{
    const {data} = await supabase.from('products').select('*');
    if(!data)return;
    setProducts([...data]);
  };
  const searchParams = useSearchParams();
  const filter = searchParams.get('query');
  useEffect(()=>{
    if(filter){
  fetchProductsByFilter(filter)
    }else{
    fetchAllproducts()
    }
  },[filter])
  return (
    <div className='px-[1em] shop flex flex-col pb-[2em] gap-y-[1em] bg-[#eaecf1]'>
      <p className={`${sora.className} text-center text-[3.625em]`}>Shop</p>
      <Filters/>
      {products?.length==0?<Loading/>:
      <div className='flex flex-col  lg:flex-row lg:justify-between gap-y-[1em] flex-wrap'>
      {products?.map((product)=>{
        return <Product cameraType={product.cameraType} lensid={product['Lens ID']} id={product?.id} imageSrc={product.ImageUrl} key={product.id} Description={product.Descrition} name={product.Name} Price={product.Price}/>
      })}

</div>}
    </div>
  )
}

export default Shop
