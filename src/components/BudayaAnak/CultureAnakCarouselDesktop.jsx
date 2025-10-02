import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Budaya1 from "@/assets/image/AnakDesktop1.png"
import Budaya2 from "@/assets/image/AnakDesktop2.png"
import Budaya3 from "@/assets/image/AnakDesktop3.png"
import Budaya4 from "@/assets/image/AnakDesktop4.png"
import Image from 'next/image';
export default function ImageSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, src: Budaya1, alt: "Budaya 1" },
        { id: 2, src: Budaya2, alt: "Budaya 2" },
        { id: 3, src: Budaya3, alt: "Budaya 3" },
        { id: 4, src: Budaya4, alt: "Budaya 4" },
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-6xl">
                <div className="relative">
                    {/* Main content */}
                    <div className="relative">
                        <div className="flex flex-col items-center gap-12">
                            {/* Images */}
                            <div className="flex gap-6 justify-center">
                                {slides.map((image, index) => (
                                    <div
                                        key={image.id}
                                        className="relative transform transition-all duration-500 hover:scale-105"
                                    >
                                        <div className={`w-[268px] h-[361px] bg-gradient-to-br rounded-2xl flex items-center justify-center overflow-hidden`}>
                                            {/* Placeholder - ganti dengan <img src="..." alt={image.alt} className="w-full h-full object-cover" /> */}
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={prevSlide}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>

                                {/* Dots */}
                                <div className="flex gap-3">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`h-2.5 rounded-full transition-all ${index === currentSlide
                                                ? 'w-10 bg-orange-500'
                                                : 'w-2.5 bg-gray-500 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
                                    aria-label="Next slide"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}