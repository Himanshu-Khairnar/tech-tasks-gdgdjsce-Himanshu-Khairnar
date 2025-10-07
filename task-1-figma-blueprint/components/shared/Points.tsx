import { Check } from 'lucide-react'
import React from 'react'

export default function Points() {
  return (
    <div className='flex gap-2'>
        <Check className='inline-block mr-2 text-white bg-[#3e34f0] rounded-full font-[700] p-1' size={22} />
        <span className='text-gray-600'>ABS</span>
    </div>
  )
}
