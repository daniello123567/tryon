import { Sora } from 'next/font/google';
const sora = Sora({ weight: '700', preload: false })
function Hero() {
  return (
    <div className={`${sora.className} px-[1em] pt-[1em]`}>
    <div className="bg-[url('/bg.jpg')] relative px-[1em] flex items-center justify-center rounded-[1.39em] bg-cover object-fill bg-no-repeat w-full h-[38.9375em]">
    <div className={` text-white`}>
          <span className='text-[1.375em] tracking-tight font-[800]'>check Out Our</span> <br />
          <span className='text-[4em]'>Cuban Case!</span>
          <p className='text-[0.8125em] leading-[1.3em] font-[400]'>Our Jewelries Are Top Notch. Crafted to make You Shine!. They&apos;re not your typical trinkets. They&apos;re unnecessarily exquisite. Maybe that&apos;s because we&apos;re unnecessarily obsessed with perfection, but we think it&apos;s worth it.</p>
    </div>
      <div className='absolute text-center w-[17.99375em] pt-[1.2em] rounded-full bg-white h-[3.925em] bottom-[1em] right-[1em] font-bold'>
       Go To Shop
      </div>
    </div>
    </div>
  )
}

export default Hero
