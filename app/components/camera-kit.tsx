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
      const session = await camerakit.createSession({liveRenderTarget});
      const mediaStream = await navigator.mediaDevices.getUserMedia({video:{
        height:720,
        facingMode:cameraType=="front"?"user":"environment",
      }    });

      const selectCam = ()=>{
        if(cameraType==="front"){
          return {
            cameraType:cameraType,
            transform: Transform2D.MirrorX,
          }
        }else {
          return {
            cameraType:cameraType
          }
        }
      }
      const source = createMediaStreamSource(mediaStream,selectCam());
      session.events.addEventListener('error',(event)=>{
       if(event.detail.error.name==="LensExecutionError")
      alert('BAD INTERNET : PLEASE RELOAD BROWSER ASAP')
      })
      await session.setSource(source);
      session.setFPSLimit(30)
      source.setRenderSize(window.innerWidth,window.innerHeight)
      await session.play();
      setbootstraploading(false)

      setCamloading(true)
      const lens = await camerakit.lensRepository.loadLens(
        `${lensid}`,
        "d971f3e4-ea9c-4864-bb83-d53f41811cf7"
      );
      await session.applyLens(lens)
      setCamloading(false)

    }
   activateCamera()
  },[lensid,cameraType]);
  return (<div className={`${sora.className}`}>
     <div className='grid place-items-center'>
      {bootstrapLoading&&
      <div className='flex w-max backdrop-blur-md bg-white/50 absolute top-[50%] rounded-full px-[1em] py-[.8em] items-center'>
        Getting snap sdk set..
        <Image className='rounded' src='/bootstrapping.gif' width={20} height={20} alt='spanner' />
      </div>}
      {camLoading&&<div className='flex w-max z-50 text-black backdrop-blur-md bg-white/50 absolute top-[50%] rounded-full px-[1em] py-[.8em] items-center'>
        preparing the asset..
        patience please
        <Image className='rounded' src='/camera.gif' width={20} height={20} alt='spanner'/>
      </div>}
     </div>
    <canvas  id='my-canvas'></canvas></div>
  )
}

export default Camera;
export const revalidate = 0;
