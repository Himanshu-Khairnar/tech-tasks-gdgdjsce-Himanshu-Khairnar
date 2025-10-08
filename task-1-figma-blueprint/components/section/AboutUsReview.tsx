import React from "react";
import ReviewCard from "../shared/ReviewCard";

const reviews = [
  {
    id: 1,
    text: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
    name: "Emanuel Boyle",
    company: "Kuphal LLC",
    photo: "/aboutus/review1.svg",
  },
  {
    id: 2,
    text: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
    name: "River Graves",
    company: "Glover - Orn",
    photo: "/aboutus/review2.png",
  },
  {
    id: 3,
    text: "Quam neque odio urna euismod felis. Sit egestas magna in quisque fames dapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
    name: "Ryder Malone",
    company: "Haag LLC",
    photo: "/aboutus/review3.svg",
  },
];

export default function AboutUsReview() {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">
        What Our Clients Say
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            review={review.text}
            name={review.name}
            company={review.company}
            reviewer={review.photo}
          />
        ))}
      </div>
    </section>
  );
}
