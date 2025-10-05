import Card from "@/components/section/Card";
import ChooseYourCar from "@/components/section/ChooseYourCar";
import Features from "@/components/section/Features";
import HeroSection from "@/components/section/HeroSection";
import InfoBlock from "@/components/section/InfoBlock";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen space-y-10">
      <HeroSection />
      <div className="flex justify-center gap-20">
        <Features
          name="Availability"
          image="/HomePage/Location.svg"
          desc="Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
        />
        <Features
          name="Variety"
          image="/HomePage/car(2).svg"
          desc="Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis"
        />
        <Features
          name="Convenience"
          image="/HomePage/saving.svg"
          desc="Pretium convallis id diam sed commodo vestibulum lobortis volutpat"
        />
      </div>

      <InfoBlock />
      <div className="mb-10">


        <ChooseYourCar />
      </div>
    </div>
  );
}
