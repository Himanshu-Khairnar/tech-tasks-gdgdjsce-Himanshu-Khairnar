import Image from "next/image";
import HeroSectionForm from "../forms/HeroSectionForm";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex justify-between items-center bg-primary h-[540px] text-white rounded-3xl p-10 mx-auto mt-10 max-w-6xl relative overflow-hidden">
      <div className="max-w-md">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Experience the road <br /> like never before
        </h1>
        <p className="text-gray-200 mb-6">
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
      <HeroSectionForm className="bg-white text-black " />
      <Image
        src="/HomePage/Grip.svg"
        alt="grip"
        width={1000}
        height={1000}
        className="absolute right-40 top-0 text-white"
      />
      <Image
        src="/HomePage/Car.svg"
        alt="car"
        width={600}
        height={300}
        className="absolute right-40 bottom-0 opacity-30 blur-sm"
      />
    </section>
  );
}
