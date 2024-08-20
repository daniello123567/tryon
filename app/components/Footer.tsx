import React from 'react'
import { Sora } from 'next/font/google'
const sora = Sora({weight:"400",subsets:["latin"]})
function Footer() {
  return (
    <div className="w-full bg-pink-500 flex justify-center items-center h-[20em] mx-auto">
      <div className={`${sora.className} rounded-[1em] shadow-md w-[40%] text-center py-[1em] bg-white/50 backdrop-blur-md`}>
         <p>Built with Nextjs & Lens studio 4.55.0</p>
        </div>
      </div>
  )
}

export default Footer
