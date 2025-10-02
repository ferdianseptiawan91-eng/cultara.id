'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';
import Budaya1 from "@/assets/image/AnakDesktop1.png"
import Budaya2 from "@/assets/image/AnakDesktop2.png"
import Budaya3 from "@/assets/image/AnakDesktop3.png"
import Budaya4 from "@/assets/image/AnakDesktop4.png"
import Budaya1Mobile from "@/assets/image/AnakMobile1.png"
import Budaya2Mobile from "@/assets/image/AnakMobile2.png"
import Budaya3Mobile from "@/assets/image/AnakMobile3.png"
import Budaya4Mobile from "@/assets/image/AnakMobile4.png"
import { motion } from "motion/react"

const CultureAnakCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  // Sample data - replace with your actual data
  const image = [
    { id: 1, src: Budaya1, alt: "Budaya 1" },
    { id: 2, src: Budaya2, alt: "Budaya 2" },
    { id: 3, src: Budaya3, alt: "Budaya 3" },
    { id: 4, src: Budaya4, alt: "Budaya 4" },
  ];

  const imageMobile = [
    { id: 1, src: Budaya1Mobile, alt: "Budaya 1 Mobile" },
    { id: 2, src: Budaya2Mobile, alt: "Budaya 2 Mobile" },
    { id: 3, src: Budaya3Mobile, alt: "Budaya 3 Mobile" },
    { id: 4, src: Budaya4Mobile, alt: "Budaya 4 Mobile" },
  ];

  const slides = image;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, image.length]);

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

  const maxVisible = 4; // maksimal dot terlihat
  let start = Math.min(
    Math.max(0, currentSlide - Math.floor(maxVisible / 2)),
    Math.max(0, image.length - maxVisible)
  );
  let end = Math.min(image.length, start + maxVisible);
  const visibleDots = image.slice(start, end);

  return (
    <div className="relative w-full mx-auto lg:py-12 px-4">
      {/* Main carousel container */}
      <div className="relative overflow-hidden">

        {/* Desktop version - center focused */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          animate={{ x: -currentSlide * (268 + 15) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="lg:flex justify-around gap-2 lg:gap-[18px] overflow-x-auto hidden">
          {image.map((item, idx) => (
            <motion.div
              variants={cardVariants}
              key={idx}
              className="rounded-2xl flex-shrink-0 flex flex-col gap-4 md:min-w-0"
            >
              <Image
                src={item.src}
                alt={`Produk Anak ${idx + 1}`}
                width={166}
                height={76}
                className="min-w-[166px] lg:min-w-[268px] h-auto"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile version - single slide with normal slide transition */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="md:hidden relative overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(${isDragging ?
                -currentSlide * 100 + (dragOffset / window.innerWidth) * 100 :
                -currentSlide * 100}%)`
            }}
          >
            {imageMobile.map((img, index) => (
              <div key={img.id} className="w-full relative">
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  {/* Image */}
                  <div className="w-[380px] h-[350px] flex items-center justify-center">
                    {/* <span className="text-gray-500 text-lg font-medium">{img.src}</span> */}
                    {/* Replace with actual Image component when you have the images imported */}
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Navigation controls container */}
      <div className="flex justify-center items-center mt-[22px] gap-4 overflow-hidden">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 cursor-pointer border border-white/20 hover:scale-110 text-gray-700 hover:text-gray-900"
          aria-label="Previous slide"
        >
          <MoveLeft className="w-6 h-6 text-[#62748E]" />
        </button>

        <div className="flex space-x-3 transition-transform duration-300">
          {visibleDots.map((_, idx) => {
            // hitung index aslinya
            const realIndex = start + idx;
            return (
              <button
                key={realIndex}
                onClick={() => goToSlide(realIndex)}
                className={`relative overflow-hidden rounded-full transition-all duration-300 cursor-pointer ${realIndex === currentSlide
                  ? "w-4 h-2 bg-primary"
                  : "w-3 h-2 bg-gray-400/60 hover:bg-gray-400/80"
                  }`}
                aria-label={`Go to slide ${realIndex + 1}`}
              >
                {realIndex === currentSlide && (
                  <div className="absolute inset-0 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
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

export default CultureAnakCarousel;