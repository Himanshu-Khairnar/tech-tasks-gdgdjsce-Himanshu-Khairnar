'use client'
import ChooseYourCar from '@/components/section/ChooseYourCar'
import DetailSection from '@/components/section/DetailSection'
import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function page() {
  const searchParams = useSearchParams();
  const carId = searchParams.get('id') || '1';
  
  return (
    <div className='space-y-10 my-10 page-enter'>
        <DetailSection carId={carId} />
        <ChooseYourCar title={"Other Cars"} />
    </div>
  )
}
