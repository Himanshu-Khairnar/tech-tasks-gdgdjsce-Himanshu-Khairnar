import Image from 'next/image'
import React from 'react'

export default function Features({name,image,desc}: {name:string,image:string,desc:string}) {
  return (
    <div className='flex flex-col items-center gap-4 text-center w-[357px] mx-auto'>
        <Image src={image} alt="Features" width={64} height={64} />
        <h1 className='text-2xl font-bold'>{name}</h1>
        <p className='text-base'>{desc}</p>
    </div>
  )
}
