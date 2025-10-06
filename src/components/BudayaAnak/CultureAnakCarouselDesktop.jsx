import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MoveLeft, MoveRight } from 'lucide-react';
import Budaya1 from "@/assets/image/AnakDesktop1.png"
import Budaya2 from "@/assets/image/AnakDesktop2.png"
import Budaya3 from "@/assets/image/AnakDesktop3.png"
import Budaya4 from "@/assets/image/AnakDesktop4.png"
import Image from 'next/image';
export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        { id: 1, src: Budaya1, alt: "Budaya 1" },
        { id: 2, src: Budaya2, alt: "Budaya 2" },
        { id: 3, src: Budaya3, alt: "Budaya 3" },
        { id: 4, src: Budaya4, alt: "Budaya 4" },
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getVisibleImages = () => {
        const visible = [];
        for (let i = -1; i <= 3; i++) {
            const index = (currentIndex + i + totalSlides) % totalSlides;
            visible.push({
                ...slides[index],
                position: i
            });
        }
        return visible;
    };

    return (
        <div className="w-full">

            {/* Main content */}
            <div className="relative overflow-hidden">

                {/* Carousel container */}
                <div className="relative ">
                    <div className="flex items-center gap-6 py-46">
                        {getVisibleImages().map((image, idx) => {
                            const translateX = image.position * 280;

                            return (
                                <div
                                    key={`${image.id}-${idx}`}
                                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                                    style={{
                                        transform: `translateX(${translateX}px) scale(1)`,
                                        // opacity: opacity,
                                        zIndex: 10 - Math.abs(image.position)
                                    }}
                                    onClick={() => {
                                        if (image.position === 1) nextSlide();
                                        if (image.position === -1) prevSlide();
                                    }}
                                >
                                    <div className="">
                                        <div className={` flex items-center justify-center overflow-hidden`}>
                                            {/* Placeholder - ganti dengan <img src="..." /> */}
                                            <Image src={image.src} alt={image.alt} width={268} height={351} className='object cover' />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6 pt-8 absolute bottom-0 -translate-x-[600px] z-99">
                <button
                    onClick={prevSlide}
                    className="transition-all hover:scale-110 cursor-pointer"
                    aria-label="Previous slide"
                >
                    <MoveLeft className="w-6 h-6 text-[#62748E]" />
                </button>

                {/* Dots Indicators */}
                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2.5 rounded-full transition-all ${index === currentIndex
                                ? 'w-10 bg-primary'
                                : 'w-2.5 bg-gray-500 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="transition-all hover:scale-110 cursor-pointer"
                    aria-label="Next slide"
                >
                    <MoveRight className="w-6 h-6 text-[#62748E]" />
                </button>
            </div>
        </div>
    );
}