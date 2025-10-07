import Image from "next/image";
import React from "react";
const list = [
  "How to choose the right car",
  "Which plan is right for me?",
  "Enjoy Speed, Choice & Total Control",
];
export default function ContactUsBlog() {
  return (
    <div>
      <h1 className="text-[45px] font-bold text-center">Latest blog posts & news</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {list.map((item, index) => (
          <div
            key={index}
            className="  rounded-lg mb-4 hover:shadow-lg transition-shadow cursor-pointer p-2"
          >
            <Image
              src={"/ContactUs/BookCar.svg"}
              alt="Blog Image"
              width={400}
              height={200}
              className="rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{item}</h2>
            <p className="text-gray-600 mt-2">News / 12April 2024</p>
          </div>
        ))}
      </div>
    </div>
  );
}
