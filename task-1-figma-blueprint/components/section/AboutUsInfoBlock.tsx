import React from "react";
import Points from "../shared/Points";
import Image from "next/image";

const list = [
  "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum",
  "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor",
  "Quis nunc interdum gravida ullamcorper",
];

export default function AboutUsInfoBlock() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
      <div className="space-y-4 w-full md:w-3/5 text-center md:text-left px-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          Unlock unforgettable memories on the road
        </h1>

        <p className="text-sm md:text-base text-gray-700">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
          {list.map((item, index) => (
            <div key={index} className="flex items-start">
              <Points data={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-2/5 flex justify-center">
        <Image
          src="/Aboutus/InfoBlock.svg"
          width={500}
          height={400}
          alt="About Us Info Block Image"
          className="object-contain"
        />
      </div>
    </section>
  );
}
