import Image from 'next/image'
import React from 'react'

const counters = [
    {
        title: '20k+',
        description: 'Happy Customers'
    },
    {
        title: '540+',
        description: 'Counts of Cars'
    },
    {
        title: '25+',
        description: 'Years of experience'
    },
]

export default function AboutUsCounter() {
  return (
    <div>
        <div>
            <Image src={'/Aboutus/ImageWithButton.svg'} width={1000} height={500} alt='About Us Image' />
        </div>
        <div className='flex items-center justify-between p-5 mt-10'>
            {
                counters.map((counter, index) => (
                    <div key={index} className='inline-block mr-10'>
                        <h2 className='text-[40px] font-bold text-primary'>{counter.title}</h2>  
                        <p className='font-bold'>{counter.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
