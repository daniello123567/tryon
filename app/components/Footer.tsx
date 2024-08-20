import React from 'react'
import { Sora } from 'next/font/google'
const sora = Sora({weight:"400",subsets:["latin"]})
function Footer() {
  return (
    <div className="w-full bg-pink-500 flex justify-center items-center h-[20em] mx-auto">
      <div className={`${sora.className} rounded-[1em] shadow-md w-[40%] text-center py-[1em] bg-white/50 backdrop-blur-md`}>
      <p>Find Us On</p>
      <div>
        <p>Twitter</p>
        <p>facebook</p>
        <p>instagram</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
