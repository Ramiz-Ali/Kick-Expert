import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

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
  {
    id: 4,
    category: "Basketball",
    image: "/images/image3.png",
    author: "Jake Will.",
    date: "04 June 2023",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    desc: "This article was written by Jake Willhoite from Healthlisted.com Strength in basketball isn’t all about a massive body mass or ripped muscles.",
  },
  {
    id: 5,
    category: "Hockey",
    image: "/images/image4.png",
    author: "Foxi.zacon",
    date: "03 June 2023",
    title: "Golden Knights out to fulfill owner’s quest to win Stanley Cup in 6th year",
    desc: "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
  },
  {
    id: 6,
    category: "Badminton",
    image: "/images/image5.png",
    author: "Bong Lozada",
    date: "01 June 2023",
    title: "‘Outdoor’ Badminton Gets Support From Local Federation",
    desc: "The Badminton World Federation is developing Air Badminton and the country’s governing body, Philippine Badminton Association.",
  },
];

const testimonials = [
    {
      id: 1,
      image: "/images/testimonial1.png",
      quote: "On the Windows talking painted posture yet its express parties use. Sure last upon he same as it.",
      author: "Mike Taylor",
      location: "Lahore, Pakistan",
      reference: "Chris Thomas, CEO of Red Button",
    },
    {
      id: 2,
      image: "/images/testimonial1.png",
      quote: "The service was exceptional, and the team was incredibly responsive. Highly recommended!",
      author: "Piaq Wilmos",
      location: "Warsaw, Poland",
      reference: "Otto Redford, CTO of Blue Say Solutions",
    },
    {
      id: 3,
      image: "/images/testimonial1.png",
      quote: "Their attention to detail and customer focus is unmatched in the industry. Will work with them again!",
      author: "Sarah Johnson",
      location: "New York, USA",
      reference: "Mark Williams, Director at Green Star Inc.",
    },
  ];
export default function SportsArticleSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const cardsPerPage = 3;
  const totalCards = articles.length;
  const maxIndex = totalCards - cardsPerPage;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const visibleArticles = articles.slice(currentIndex, currentIndex + cardsPerPage);

  const isLeftDisabled = currentIndex === 0;
  const isRightDisabled = currentIndex === maxIndex;

  return (
    <section className="px-4 sm:px-10 py-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-900">Sports Article</h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {visibleArticles.map((item) => (
          <div key={item.id} className="space-y-4">
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

            <h3 className="text-md font-semibold text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex gap-4">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 p-3 px-4 rounded disabled:opacity-50"
          disabled={isLeftDisabled}
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-lime-400 hover:bg-lime-500 text-white p-3 px-4 rounded disabled:opacity-50"
          disabled={isRightDisabled}
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Testimonial Section */}
       <div className="mt-16 px-4 sm:px-10 py-10 bg-zinc-50">
      <div className="text-left flex flex-col md:flex-row justify-between items-start w-full mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-5 w-full md:w-1/3">
          <p className="text-lime-500 text-xl font-bold">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">What People Say <br /> About Us.</h2>
          <div className="flex items-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-lime-500 w-6' : 'bg-gray-400'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 w-full md:w-[55%] relative">
          <div className="relative overflow-hidden h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${activeTestimonial === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              >
                <div className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                  <div className="flex items-start">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="rounded-full mr-4 w-12 h-12 object-cover"
                    />
                    <div>
                      <p className="text-gray-600 italic text-sm">&quot;{testimonial.quote}&quot;</p>
                      <p className="text-gray-800 font-medium mt-2">{testimonial.author}</p>
                      <p className="text-gray-500 text-xs">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm">{testimonial.reference}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}