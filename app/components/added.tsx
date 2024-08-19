import React from 'react'
import Image from 'next/image'
function Added() {
  return (
    <div className='w-full grid place-items-center'>
    <div className='backdrop-blur-md fixed z-50 top-[50%] flex flex-col justify-center items-center bg-white/50 h-[7em] w-[7em] rounded-[1em]'>
      <Image src={'/check.gif'} alt='checked' width={20} height={20}/>
      Added!
    </div>
    </div>
  )
}

export default Added
