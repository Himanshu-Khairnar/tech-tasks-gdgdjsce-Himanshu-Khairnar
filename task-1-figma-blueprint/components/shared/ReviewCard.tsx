import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ReviewCard({
  review,
  reviewer,
  name,
  company,
}: {
  review?: string;
  reviewer?: string;
  name?: string;
  company?: string;
}) {
  return (
    <Card className="w-[320px] h-fit rounded-2xl bg-gray-50  overflow-hidden hover:bg-gray-100  hover:shadow-xl transition-all duration-300">
      <CardContent className="p-6 text-center  relative">
        <div className="flex justify-start mb-4">
          <Image
            src="/aboutus/quote.svg"
            width={32}
            height={32}
            alt="quote"
            className="text-primary"
          />
        </div>

        <p className="text-gray-800 text-[15px] h-[150px]">
        {review || `“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
          neque sed imperdiet nibh lectus feugiat nunc sem.”`}
        </p>
      </CardContent>

      <div className="bg-primary  text-white flex flex-col items-center pt-12 pb-6 relative ">
        <div className="absolute -top-8 w-16 h-16 rounded-full  overflow-hidden  shadow-md">
          <Image
            src={reviewer || "/aboutus/reviewer1.png"}
            alt="Reviewer"
            width={64}
            height={64}
            className="object-cover"
          />
        </div>

        <p className="text-sm opacity-80 mt-2">{company || "Kuphal LLC"}</p>
        <h3 className="font-semibold text-base">{name || "Emanuel Boyle"}</h3>
      </div>
    </Card>
  );
}
