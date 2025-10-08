import Image from "next/image";
import HeroSectionForm from "../forms/HeroSectionForm";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center bg-primary h-auto md:h-[540px] text-white rounded-3xl p-6 md:p-10 mx-auto mt-10 max-w-6xl relative overflow-hidden">
      <div className="max-w-md text-center lg:text-left mb-8 lg:mb-0 z-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Experience the road <br className="hidden sm:block" /> like never
          before
        </h1>
        <p className="text-gray-200 mb-6 text-sm sm:text-base">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper.
        </p>
        <Link
          href={"/vehicles"}
          className="bg-secondary text-white px-5 py-2 rounded-md font-semibold hover:bg-yellow-300 transition"
        >
          View all cars
        </Link>
      </div>

      <div className="z-10 w-full sm:w-auto">
        <HeroSectionForm className="bg-white text-black mx-auto lg:mx-0" />
      </div>

      <Image
        src="/HomePage/Grip.svg"
        alt="grip"
        width={1000}
        height={1000}
        className="absolute right-10 top-10 opacity-50 sm:opacity-80 pointer-events-none"
      />
      <Image
        src="/HomePage/Car.svg"
        alt="car"
        width={600}
        height={300}
        className="absolute right-10 bottom-0 opacity-30 blur-sm pointer-events-none"
      />
    </section>
  );
}
