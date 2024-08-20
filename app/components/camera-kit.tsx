"use client"
import React, { useEffect ,useState} from 'react'
import { Sora } from 'next/font/google';
import {bootstrapCameraKit,createMediaStreamSource,Transform2D} from '@snap/camera-kit'
import Image from 'next/image';
const sora = Sora({weight:"500",subsets:["latin"]});

function Camera({lensid,cameraType}:{lensid:string,cameraType:"front"|"back"}) {
  const [camLoading,setCamloading] = useState(false);
  const [bootstrapLoading,setbootstraploading] = useState(false);
  useEffect(()=>{
    const activateCamera = async ()=>{
      setbootstraploading(true);
      const camerakit = await bootstrapCameraKit({apiToken:"eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzIzNTA0OTI2LCJzdWIiOiIzZWQ3ZDcwZi0zOTc5LTQzM2UtYjk5ZC04NWYzNTdhN2RiODh-U1RBR0lOR35hY2VlZmU2OS1lMGQ2LTQ4YTMtYjM0Yi1hZjBjODZlZjA4MzcifQ.wa3_Y9ylQshupHPCClFe9Xr5ZPNTAgqxMz-6nYPDS8k"})
      const liveRenderTarget = document.getElementById('my-canvas') as HTMLCanvasElement|undefined
      const session = await camerakit.createSession({liveRenderTarget})
      const mediaStream = await navigator.mediaDevices.getUserMedia({video:{
        width:1280,
        height:720,
        facingMode:cameraType=="front"?"user":"environment"
      }});
      setbootstraploading(false)
      const source = createMediaStreamSource(mediaStream,{
        transform:Transform2D.MirrorX,
        cameraType:cameraType
      });
      session.events.addEventListener('error',(event)=>{
       if(event.detail.error.name==="LensExecutionError")
      alert('BAD INTERNET : PLEASE RELOAD BROWSER ASAP')
      })
      await session.setSource(source);
      session.setFPSLimit(30)
      await session.play();
      setCamloading(true)
      const lens = await camerakit.lensRepository.loadLens(
        `${lensid}`,
        "d971f3e4-ea9c-4864-bb83-d53f41811cf7"
      );

      await session.applyLens(lens)
      setCamloading(false)
    }
   activateCamera()
  },[lensid]);
  setTimeout(()=>setbootstraploading(false),3000)
  return (<div className={`${sora.className}`}>
     <div className='grid place-items-center'>
      {bootstrapLoading&&
      <div className='flex w-max backdrop-blur-md bg-white/50 absolute top-[50%] rounded-full px-[1em] py-[.8em] items-center'>
        Getting snap sdk set..
        <Image className='rounded' src='/bootstrapping.gif' width={20} height={20} alt='spanner' />
      </div>}
      {camLoading&&<div className='flex w-max backdrop-blur-md bg-white/50 absolute top-[50%] rounded-full px-[1em] py-[.8em] items-center'>
        preparing the asset..
        patience please
        <Image className='rounded' src='/camera.gif' width={20} height={20} alt='spanner'/>
      </div>}
     </div>
    <canvas className='w-full object-center object-cover h-[100vh]' id='my-canvas'></canvas></div>
  )
}

export default Camera;
