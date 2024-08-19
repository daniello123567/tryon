"use client"
import { useRouter, useSearchParams} from 'next/navigation'
import React from 'react'
import { Sora } from 'next/font/google'
const sora = Sora({weight:'500',subsets:["latin"]})
function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get('query')
  const params = new URLSearchParams();
  const handleFilter = (e:React.MouseEvent<HTMLButtonElement> &{target:{innerText:string}})=>{
       params.set('query',e.target.innerText);
       router.replace(`?${params}`,{scroll:false})
  }
  const resetURL = ()=>{
    router.replace(origin,{scroll:false})
 }
  return (
    <div className='bg-[#36454F] overflow-hidden w-full h-[3em] rounded-[1em]'>
      <div className='backdrop-blur-md justify-between px-[1em] flex items-center bg-white/50 w-full h-full'>
      <button  onClick={handleFilter} type='button' className={`${sora.className} ${filter?.includes('Earrings')&&'bg-white text-black rounded px-[.4em]'} text-white`}>Earrings</button>
      <button onClick={handleFilter} type='button' className={`${sora.className}  ${filter?.includes('NeckLace')&&'bg-white text-black rounded px-[.4em]'} text-white`}>NeckLaces</button>
      <button onClick={handleFilter} type='button' className={`${sora.className}  ${filter?.includes('Bracelets')&&'bg-white text-black rounded px-[.4em]'} text-white`}>Bracelets</button>
        <button onClick={resetURL} type='button' className={`${sora.className} text-white`}>All</button>
      </div>
    </div>
  )
}

export default Filters
