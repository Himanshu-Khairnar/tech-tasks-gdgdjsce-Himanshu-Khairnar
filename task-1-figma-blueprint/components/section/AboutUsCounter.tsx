import Image from 'next/image'
import React from 'react'

const counters = [
  {
    title: '20k+',
    description: 'Happy Customers',
  },
  {
    title: '540+',
    description: 'Counts of Cars',
  },
  {
    title: '25+',
    description: 'Years of Experience',
  },
]

export default function AboutUsCounter() {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-6">
      <div className="w-full max-w-5xl">
        <Image
          src="/Aboutus/ImageWithButton.svg"
          width={1000}
          height={500}
          alt="About Us Image"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 text-center">
        {counters.map((counter, index) => (
          <div key={index}>
            <h2 className="text-4xl md:text-[40px] font-bold text-primary">
              {counter.title}
            </h2>
            <p className="font-semibold text-gray-700">
              {counter.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
