"use client";

import { useState } from "react";
import Image from "next/image";

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Gallery</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Image Container */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`Gallery ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>

          {/* Left Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1B505B] p-4 rounded-full shadow-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#1B505B] p-4 rounded-full shadow-lg transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? "bg-[#1B505B]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
