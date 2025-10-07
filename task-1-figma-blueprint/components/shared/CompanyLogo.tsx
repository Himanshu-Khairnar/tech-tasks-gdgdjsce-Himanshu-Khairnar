import Image from "next/image";
import React from "react";

export default function CompanyLogo() {
  return (
    <div>
      <div className="my-10">
        <Image
          src="/vehicles/Logos.svg"
          alt="Hero Image"
          height={400}
          width={1000}
        />
      </div>
    </div>
  );
}
