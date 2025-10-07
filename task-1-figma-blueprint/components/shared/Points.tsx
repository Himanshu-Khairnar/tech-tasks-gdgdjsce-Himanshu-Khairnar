import { Check } from 'lucide-react'
import React from 'react'

export default function Points({data}:{data?:string}) {
  return (
    <div className='flex gap-1 '>
        <Check className='  mr-2 text-white bg-[#3e34f0] rounded-full font-[700] p-1' size={22} />
        <span className='text-gray-600 w-[90%] text-sm  '>{data}</span>
    </div>
  )
}
