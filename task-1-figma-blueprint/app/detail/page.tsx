import ChooseYourCar from '@/components/section/ChooseYourCar'
import DetailSection from '@/components/section/DetailSection'
import React from 'react'

export default function page() {
  return (
    <div className='space-y-10 my-10'>
        <DetailSection/>
        <ChooseYourCar title={"Other Cars"} />
    </div>
  )
}
