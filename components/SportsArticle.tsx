// components/SportsArticleSection.js
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const articles = [
  {
    id: 1,
    category: "Basketball",
    image: "/images/image3.png",
    author: "Jake Will.",
    date: "04 June 2023",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    desc: "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
  },
  {
    id: 2,
    category: "Hockey",
    image: "/images/image4.png",
    author: "Foxi.zacon",
    date: "03 June 2023",
    title: "Golden Knights out to fulfill owner’s quest to win Stanley Cup in 6th year",
    desc: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    id: 3,
    category: "Badminton",
    image: "/images/image5.png",
    author: "Bong Lozada",
    date: "01 June 2023",
    title: "‘Outdoor’ Badminton Gets Support From Local Federation",
    desc: "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
  },
];

export default function SportsArticleSection() {
  return (
    <section className="px-4 sm:px-10 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-900">Sports Article</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((item) => (
          <div key={item.id} className="space-y-4">
            {/* Image with Category */}
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="rounded-lg w-full object-cover"
              />
              <span className="absolute top-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>

            {/* Author & Meta */}
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <Image
                src="/images/image6.png"
                alt="Author"
                width={24}
                height={24}
                className="rounded-full w-6 h-6 object-cover"
              />
              <span>{item.author}</span>
              <span className="text-gray-500">{item.date}</span>
            </div>

            {/* Title & Description */}
            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="mt-10 flex justify-center gap-4">
        <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded">
          <FaArrowLeft />
        </button>
        <button className="bg-lime-400 hover:bg-lime-500 text-white p-2 rounded">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
