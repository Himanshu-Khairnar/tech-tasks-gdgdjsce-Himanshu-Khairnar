import Image from 'next/image'
import React from 'react'
import HeroSectionForm from '../forms/HeroSectionForm'

export default function ContactUsBook() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-10 my-20 px-4'>
        <HeroSectionForm  className=' bg-primary  text-white' />
        <Image src="/ContactUs/BookCar.svg" alt="Contact Us Book" width={550} height={350} />
    </div>
  )
}
