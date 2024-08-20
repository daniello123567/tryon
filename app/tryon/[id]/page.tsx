"use client"
import React from 'react'
import Camera from '@/app/components/camera-kit';
import { useParams, useSearchParams } from 'next/navigation';
function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const cameraType = searchParams.get('cameraType') as "front"|"back";
  return (
    <div>
      <Camera cameraType={cameraType} lensid={String(params.id)}/>
    </div>
  )
}

export default Page
