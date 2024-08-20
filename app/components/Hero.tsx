"use client"
import { Sora } from 'next/font/google';
import Header from './Header';
const sora = Sora({ weight: '700', preload: false });
const gotoshop = ()=>{
  const shop = document.querySelector('.shop');
  shop?.scrollIntoView({behavior:'smooth'})
}
function Hero() {
  return (
    <div className={`${sora.className} px-[1em] pt-[1em]`}>
    <Header/>
    <div className="bg-[url('/bg.jpg')] lg:object-contain relative px-[1em] flex items-center justify-center rounded-[1.39em] bg-cover object-fill bg-no-repeat w-full h-[38.9375em]">
    <div className='sm:mt-[-4em] w-max h-max sm:text-center'>
    <div className={` text-white`}>
          <span className='text-[1.375em] md:text-[1.875em] tracking-tight font-[800]'>check Out Our</span> <br />
          <span className='text-[4em] lg:text-[7.625em] sm:text-[4.5em]'>Cuban Case!</span>
          <p className='text-[0.8125em] md:text-[0.875em] md:w-[29.1875em] mx-auto leading-[1.3em] font-[400]'>Our Jewelries Are Top Notch. Crafted to make You Shine!. They&apos;re not your typical trinkets. They&apos;re unnecessarily exquisite. Maybe that&apos;s because we&apos;re unnecessarily obsessed with perfection, but we think it&apos;s worth it.</p>
    </div>
      <div onClick={gotoshop} className='absolute text-center w-[17.99375em] pt-[1.2em] rounded-full bg-white h-[3.925em] bottom-[1em] right-[1em] font-bold'>
       Go To Shop
      </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
