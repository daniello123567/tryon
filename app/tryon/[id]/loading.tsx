import React from 'react'
import { Sora } from 'next/font/google'
const sora = Sora({weight:"500",preload:false})
function loading() {
  return (
    <div className={`${sora.className} w-screen h-screen bg-blue-400 flex justify-center items-center`}>
      Cuban Case. loading..
    </div>
  )
}

export default loading
