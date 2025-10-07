import React from "react";
import Image from "next/image";
export default function IconDetail({
  item,
}: {
  item: { src: string; name: string; desc: string };
}) {
  return (
    <div className="flex items-center gap-2 text-base ">
      <Image src={item.src} alt={item.name} width={32} height={32} />
      <div>
        <h4 className="">{item.name}</h4>
        <p className="font-semibold ">{item.desc}</p>
      </div>
    </div>
  );
}
