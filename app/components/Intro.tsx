"use client"
import React from 'react'
import {Archivo} from 'next/font/google'
import Try from './TryOn'
const archivo = Archivo({weight:"700",subsets:["latin"]});
type ro = {
  name:string,
  Description:string,
   Price:string,
  imagesrc:string
}
const Introbuddies:Array<ro> = [{
  name:"Cuban#01",
  Description:"Made with Pure Gold In China",
  Price:"1,000,000$",
  imagesrc:"/cuban1.jpg"
},
{
  name:"Bracelet#02",
  Description:"Female Braclets Smithed By Jackie Chan himself",
  Price:"5,000,000$",
  imagesrc:"/brace.png"
}
]
function Intro() {
  return (
    <div className={`${archivo.className} px-[1em] h-max py-[2em] bg-[#eaedf6] w-full mt-[1em] lg:flex-row flex flex-col gap-[1em] `}>
      {Introbuddies.map((introProduct:ro)=>{
        return <Try key={introProduct.name} ImageSrc={introProduct.imagesrc} Price={introProduct.Price} Desrcription={introProduct.Description} name={introProduct.name}/>
      })}
    </div>
  )
}

export default Intro
