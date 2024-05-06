import React, { useState } from "react";
import ChevronLeft from "../../assets/icons/ChevronLeft.svg";
import ChevronRight from "../../assets/icons/ChevronRight.svg";
import { CarouselProps } from "../../types/types";

const Carousel: React.FC<CarouselProps> = ({ title, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = React.Children.toArray(children);
  const itemsPerPage = 5;
  const totalItems = slides.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const next = () => {
    setCurrentIndex((currentIndex) => {
      return (currentIndex + 1) % totalPages;
    });
  };

  const prev = () => {
    setCurrentIndex((currentIndex) => {
      return (currentIndex - 1 + totalPages) % totalPages;
    });
  };

  const translateAmount = -(currentIndex * 100);

  return (
    <div className="relative overflow-hidden mx-auto max-w-screen-xl">
      <h1 className="flex justify-center items-center text-2xl font-bold text-bookFlix-colors-secondary">
        {title}
      </h1>
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2"
      >
        <img src={ChevronLeft} alt="Previous" />
      </button>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(${translateAmount}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-none w-full max-w-[20%] p-2">
            {slide}
          </div>
        ))}
      </div>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2"
      >
        <img src={ChevronRight} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
