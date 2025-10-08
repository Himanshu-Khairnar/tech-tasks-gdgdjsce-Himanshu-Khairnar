import React from "react";

const features = [
  {
    title: "Variety Brands",
    description:
      "Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.",
  },
  {
    title: "Awesome Support",
    description:
      "Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit.",
  },
  {
    title: "Maximum Freedom",
    description:
      "Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in.",
  },
  {
    title: "Flexibility On The Go",
    description:
      "Vitae pretium nulla sed quam id nisl semper. Vel non in proin egestas dis. Faucibus rhoncus, iaculis dignissim aenean pellentesque nisl.",
  },
];

export default function AboutUsFeature() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-12 py-12">
      <h1 className="text-3xl md:text-[42px] font-bold text-center md:text-left max-w-[320px]">
        Where every drive feels extraordinary
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="space-y-2 hover:translate-y-1 transition-transform duration-300"
          >
            <h2 className="text-lg md:text-xl font-bold text-black">
              {feature.title}
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
