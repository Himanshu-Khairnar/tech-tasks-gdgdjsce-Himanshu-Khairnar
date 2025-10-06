import React from 'react'
import Download from '../shared/Download'
import Image from 'next/image'

export default function Mobile() {
  return (
    <div className='bg-white flex flex-col md:flex-row justify-between items-center gap-10 p-10 '>

      <div className='flex flex-col gap-10 flex-1'>
        <h1 className='text-[50px] font-[700]'>Download mobile app</h1>
        <p className='text-gray-600'>Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum. Condimentum interdum risus bibendum urna</p>
        <Download className="" />
      </div>
      <div>
        <Image src="/HomePage/Mobile.svg" alt="Mobile App" width={300} height={600} />
      </div>

    </div>
  )
}
