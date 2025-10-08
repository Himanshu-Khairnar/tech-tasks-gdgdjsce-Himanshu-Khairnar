import Banner from "@/components/section/Banner";
import Banner2 from "@/components/section/Banner2";
import ChooseYourCar from "@/components/section/ChooseYourCar";
import Features from "@/components/section/Features";
import HeroSection from "@/components/section/HeroSection";
import InfoBlock from "@/components/section/InfoBlock";
import Mobile from "@/components/section/Mobile";
import React from "react";

export default function page() {
  const features = [
    {
      name: "Availability",
      image: "/HomePage/Location.svg",
      desc: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    },
    {
      name: "Variety",
      image: "/HomePage/car(2).svg",
      desc: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    },
    {
      name: "Convenience",
      image: "/HomePage/saving.svg",
      desc: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    },
  ];
  return (
    <div className="min-h-screen space-y-16 page-enter">
      <HeroSection />
     <div className="flex flex-wrap lg:flex-nowrap justify-center gap-10 ">
  {features.map((item) => (
    <Features
      key={item.name}
      name={item.name}
      image={item.image}
      desc={item.desc}
    />
  ))}
</div>

      <InfoBlock />
      <div className="mb-10">
        <ChooseYourCar title={"Choose your car that suits you"} />
        <Banner />
        <Mobile />
        <Banner2 />
      </div>
    </div>
  );
}
