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
    <div className="flex gap-8">
      <h1 className="text-[42px] font-bold w-[300px]">
        Where every drive feels extraordinary
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <h2 className="text-xl font-bold">{feature.title}</h2>
            <p className="text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
