import React from 'react'
import Image from 'next/image'
function Loading() {
  return (
    <div className='flex justify-center rounded-[.8em] mx-auto h-[7em] w-[7em] items-center bg-white'>
      <Image
      src='/loadingbag.gif'
      width={30}
      height={100}
      alt='loading'
      />
    </div>
  )
}

export default Loading
