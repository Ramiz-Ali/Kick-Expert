"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AskQuestion from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <section className="bg-zinc-50 h-fit m-0 p-0 overflow-x-hidden">
  
      {/* About Section */}
      <div className="w-full m-0 p-0">
        <AskQuestion />
      </div>

<div className="w-full px-4 md:px-16 my-10">
  <Swiper
    modules={[Navigation, Pagination]}
    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    pagination={{
      el: ".custom-pagination",
      clickable: true,
      renderBullet: (index, className) => {
        return `<span class="${className} custom-bullet">${index + 1}</span>`;
      },
    }}
    loop
    spaceBetween={30}
    slidesPerView={1}
    className="rounded-lg overflow-hidden"
  >
    <SwiperSlide>
      <Image
        src="/images/image.png"
        alt="Slide 1"
        width={1920}
        height={600}
        className="w-full h-auto object-cover rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/image.png"
        alt="Slide 2"
        width={1920}
        height={600}
        className="w-full h-auto object-cover rounded-lg"
      />
    </SwiperSlide>
    <SwiperSlide>
      <Image
        src="/images/image.png"
        alt="Slide 3"
        width={1920}
        height={600}
        className="w-full h-auto object-cover rounded-lg"
      />
    </SwiperSlide>
  </Swiper>

  {/* Pagination and Arrows */}
  <div className="flex justify-center items-center gap-6 mt-6">
    <button className="custom-prev bg-lime-400 text-black px-4 py-2 rounded hover:bg-lime-500 transition">
      &larr;
    </button>

    <div className="custom-pagination flex gap-4 text-lg font-medium text-gray-700" />

    <button className="custom-next bg-lime-400 text-black px-4 py-2 rounded hover:bg-lime-500 transition">
      &rarr;
    </button>
  </div>
</div>


      {/* Reviews Section */}
      <div className="mt-20">
        <Reviews />
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
}
