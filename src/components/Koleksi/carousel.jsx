'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight, MoveUpRight } from 'lucide-react';
import Koleksi1 from "@/assets/image/Koleksi1.png"
import Koleksi2 from "@/assets/image/Koleksi1.png"
import Koleksi3 from "@/assets/image/Koleksi1.png"

const KoleksiCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  // Sample data - replace with your actual data
  const image = [
    { id: 1, src: Koleksi1, alt: 'Koleksi 1' },
    { id: 2, src: Koleksi2, alt: 'Koleksi 2' },
    { id: 3, src: Koleksi3, alt: 'Koleksi 3' },
  ];

  const slides = image;

  // Auto-play functionality
  // useEffect(() => {
  //   if (!isAutoPlaying) return;

  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % slides.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, [isAutoPlaying, image.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % image.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + image.length) % image.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleDragStart = (e) => {
    e.preventDefault()
    setIsDragging(true);
    setIsAutoPlaying(false);
    const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    const clientY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    const deltaX = clientX - dragStart.x;
    setDragOffset(deltaX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;

    setIsDragging(false);
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // Dragged right, go to previous slide
        prevSlide();
      } else {
        // Dragged left, go to next slide
        nextSlide();
      }
    }

    setDragOffset(0);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  // Mouse events
  const handleMouseDown = (e) => handleDragStart(e);
  const handleMouseMove = (e) => handleDragMove(e);
  const handleMouseUp = (e) => handleDragEnd(e);
  const handleMouseLeave = (e) => handleDragEnd(e);

  // Touch events
  const handleTouchStart = (e) => handleDragStart(e);
  const handleTouchMove = (e) => handleDragMove(e);
  const handleTouchEnd = (e) => handleDragEnd(e);

  // Add global event listeners for mouse events
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, dragOffset]);

  // Get visible slides (previous, current, next) - now unused but keeping for potential future use
  const getVisibleSlides = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    const nextIndex = (currentSlide + 1) % slides.length;

    return {
      prev: slides[prevIndex],
      current: slides[currentSlide],
      next: slides[nextIndex]
    };
  };

  return (
    <div className="relative w-full max-w-[729px] mx-auto">
      <button className='w-[100px] h-[100px] absolute bottom-21 lg:bottom-29 cursor-pointer z-30 left-2/6 lg:left-2/5 bg-[#F4A22BCC] border border-white p-2 rounded-full flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110'>
        <MoveUpRight color='white' />
        <span className='text-xl text-white'>Shop</span>
      </button>
      {/* Main carousel container */}
      <div className="relative overflow-hidden lg:pt-24">

        {/* Desktop version - center focused */}
        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onDragStart={(e) => e.preventDefault()}
          className={`hidden lg:block relative h-[412px] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
          {/* Slides container with smooth transitions */}
          <div className="relative w-full h-full flex gap-2 items-center justify-center">
            {/* Render all slides with proper positioning */}
            {image.map((img, index) => {
              const position = (index - currentSlide + image.length) % image.length;
              let translateX = 0;
              let scale = 0.75;
              let opacity = 1;
              let zIndex = 10;

              if (position === 0) {
                // Current slide (center)
                translateX = isDragging ? dragOffset : 0;
                scale = 1;
                zIndex = 20;
              } else if (position === 1 || position === image.length - 1) {
                // Adjacent slides (left and right)
                const baseTranslateX = position === 1 ? 186 : -186;
                translateX = isDragging ? baseTranslateX + dragOffset : baseTranslateX;
                scale = 1;
                zIndex = 10;
              } else {
                // Hidden slides
                const baseTranslateX = position < image.length / 2 ? 600 : -600;
                translateX = isDragging ? baseTranslateX + dragOffset : baseTranslateX;
                scale = 0.5;
                opacity = 0;
                zIndex = 5;
              }

              return (
                <div
                  key={img.id}
                  className={`absolute transition-all ease-in-out 
                    ${position === 1 || position === image.length - 1 ? 'hover:opacity-80 cursor-pointer' : ''}
                    ${position === 0 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    // transition: 'all',
                    // animationDuration: 300

                  }}
                  onClick={() => {
                    if (isDragging || Math.abs(dragOffset) > 5) {
                      e.preventDefault();
                      e.stopPropagation(); 
                      return;
                    }
                    if (position === 1) nextSlide();
                    else if (position === image.length - 1) prevSlide();
                  }}
                >
                  <div className={`relative transition-all duration-300 ${position === 0 ? 'w-[412px] h-[412px]' : 'w-[312px] h-[320px]'} overflow-hidden cursor-pointer hover:cursor-pointer`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile version - single slide with normal slide transition */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="md:hidden relative h-96 overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(${isDragging ?
                -currentSlide * 100 + (dragOffset / window.innerWidth) * 100 :
                -currentSlide * 100}%)`
            }}
          >
            {image.map((img, index) => (
              <div key={img.id} className="w-full flex-shrink-0 relative">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="w-full h-full flex items-center">
                    {/* <span className="text-gray-500 text-lg font-medium">{img.src}</span> */}
                    {/* Replace with actual Image component when you have the images imported */}
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Navigation controls container */}
      <div className="flex justify-center items-center pt-[54px] gap-4 overflow-hidden">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 cursor-pointer border border-white/20 hover:scale-110 text-gray-700 hover:text-gray-900"
          aria-label="Previous slide"
        >
          <MoveLeft className="w-6 h-6 text-[#62748E]" />
        </button>

        {/* Dot indicators */}
        <div className="flex space-x-3">
          {image.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 cursor-pointer ${index === currentSlide
                ? 'w-4 h-2 bg-primary'
                : 'w-3 h-2 bg-gray-400/60 hover:bg-gray-400/80'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentSlide && (
                <div className="absolute inset-0 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 cursor-pointer border border-white/20 hover:scale-110 text-gray-700 hover:text-gray-900"
          aria-label="Next slide"
        >
          <MoveRight className="w-6 h-6 text-[#62748E]" />
        </button>
      </div>
    </div>
  );
};

export default KoleksiCarousel;