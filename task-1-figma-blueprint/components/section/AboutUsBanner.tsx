'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
export default function AboutUsBanner() {
  const handleSubmit = () => {
    toast.success("Booking Successful 🎉", {
      description: "Car has been rented successfully!",
      duration: 3000,
    });
  };
  return (
    <section className="relative w-full max-w-[1300px] mx-auto rounded-3xl overflow-hidden bg-primary text-white px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
      <div className="absolute inset-0 top-10 opacity-08">
        <Image
          src="/HomePage/grip2.svg"
          alt="Grip texture"
          width={600}
          height={300}
          className="object-cover object-left md:object-center"
        />
      </div>

      <div className="relative z-10 max-w-lg space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Looking for a car?
        </h2>
        <p className="text-2xl font-semibold">+537 547-6401</p>
        <p className="text-sm text-white/90 leading-relaxed">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in…
        </p>

        <Button
          className="w-[200px]"
          onClick={handleSubmit}
          variant="secondary"
        >
          Book now
        </Button>
      </div>

      <div className="relative z-10 w-full  flex justify-center">
        <Image
          src="/aboutus/BlurCar.svg"
          alt="Blue car"
          width={600}
          height={400}
          className="object-contain drop-shadow-xl "
        />
      </div>
    </section>
  );
}
