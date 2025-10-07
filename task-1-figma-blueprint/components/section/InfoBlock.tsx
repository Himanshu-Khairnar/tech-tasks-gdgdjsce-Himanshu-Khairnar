import Image from "next/image";
import React from "react";

const list = [
  {
    srno: 1,
    title: "Erat at semper ",
    desc: "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
  },
  {
    srno: 2,
    title: "Urna nec vivamus risus duis arcu",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
  },
  {
    srno: 3,
    title: "Lobortis euismod imperdiet tempus  ",
    desc: "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
  },
  {
    srno: 4,
    title: "Cras nulla aliquet nam eleifend amet et ",
    desc: "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero ",
  },
];

export default function InfoBlock() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center px-4 md:px-0 py-10">
      <div>
        <Image src={"/HomePage/blurInfoPage.svg"} alt="InfoBlock" width={450} height={435} />
      </div>
      <div className="flex-1 flex flex-col gap-6">
        {list.map((item) => (
          <div key={item.srno} className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="bg-primary h-8 w-8 rounded-full text-center  p-1 text-white">{item.srno}</p>
              <h3 className="text-base font-bold">{item.title}</h3>
            </div>
            <p className="text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
