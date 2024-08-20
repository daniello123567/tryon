import React from 'react'
import Camera from '@/app/components/camera-kit';
import type { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
function Page({params,searchParams}:{params:Params,searchParams:any}) {
  const cameraType = searchParams.cameraType as "front"|"back"
  return (
      <Camera cameraType={cameraType} lensid={String(params.id)}/>
  )
}

export default Page
