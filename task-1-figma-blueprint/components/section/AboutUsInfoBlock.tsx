import React from "react";
import { map } from "zod";
import Points from "../shared/Points";
import Image from "next/image";
const list = [
  "Velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  "Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum ",
  "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor ",
  "Quis nunc interdum gravida ullamcorper",
];
export default function AboutUsInfoBlock() {
  return (
    <div className="flex items-center justify-between gap-10">
      <div className="space-y-4 w-[75%]">
        <h1 className="text-[40px] font-bold ">Unlock unforgettable memories on the road</h1>
        <p className="text-sm  text-gray-700">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper
        </p>
        <div className="grid grid-cols-2 gap-2 mt-4 ">
          {list.map((item, index) => (
            <div key={index} className="flex items-center ">
              <Points data={item} />
            </div>

          ))}
        </div>
      </div>
      <div>
        <Image  src={'/Aboutus/InfoBlock.svg'} width={600} height={400} alt='About Us Info Block Image' />
      </div>
    </div>
  );
}
