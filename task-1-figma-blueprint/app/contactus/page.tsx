import HeroAboutContact from "@/components/section/HeroAbout&Contact";
import CompanyLogo from "@/components/shared/CompanyLogo";
import React from "react";
import IconDetail from "@/components/shared/IconDetail";

const Icon: { src: string; name: string; desc: string }[] = [
  { src: "Address.svg", name: "Address", desc: "Oxford Ave. Cary, NC 27511" },
  { src: "Email.svg", name: "Email", desc: "nwiger@yahoo.com" },
  { src: "Phone.svg", name: "Phone", desc: "+537 547-6401" },
  { src: "Clock.svg", name: "Opening hours", desc: "Sun-Mon: 10am-10pm" },
];

export default function page() {
  return (
    <div>
      <HeroAboutContact title="Contact Us" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Icon.map((item, index) => (
          <IconDetail key={index} item={item} />
        ))}{" "}
      </div>
      <CompanyLogo />
    </div>
  );
}
