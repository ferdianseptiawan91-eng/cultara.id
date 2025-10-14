import Image from "next/image";
import FireIcon from "@/assets/icons/fire-icon.svg"
import Artikel1 from "@/assets/image/Artikel1.png"
import Artikel2 from "@/assets/image/Artikel2.png"
import Artikel3 from "@/assets/image/Artikel3.png"
import Artikel4 from "@/assets/image/Artikel4.png"
import Star from "@/assets/icons/Star.svg"
import Shopee from "@/assets/icons/shopee.svg"
import TiktokShop from "@/assets/icons/tiktok-shop.svg"
import Tokopedia from "@/assets/icons/tokopedia.svg"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react";
import ArrowRight from "@/assets/icons/ArrowRight.svg"
export default function SectionArtikel() {
    const data = [Star, Star, Star, Star, Star]
    const iconShop = [
        { src: Shopee, alt: "Shopee" },
        { src: TiktokShop, alt: "Tiktok Shop" },
        { src: Tokopedia, alt: "Tokopedia" },
    ];
    const imageCard = [Artikel1, Artikel2, Artikel3, Artikel4]
    const image = [
        { img: Artikel1, label: "Urip iku Urup" },
        { img: Artikel1, label: "Gatot Kaca" },
        { img: Artikel1, label: "Adigang Adigung Adiguna" },
        { img: Artikel1, label: "Hanoman" }
    ]
    const [showIcon, setShowIcon] = useState(false);
    const [showTooltip, setShowTooltip] = useState(null);

    const handleToggleTooltip = (index) => {
        // Hanya aktif di mobile (layar kecil)
        if (window.innerWidth < 1024) {
            setShowTooltip(prev => (prev === index ? null : index));
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setShowIcon(true), 400);
        return () => clearTimeout(timer);
    }, []);
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
    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1,
            scale: 1
        }
    }
    const titleVariants = {
        hidden: { opacity: 0, x: -40 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };
    return (
        <div className="lg:bg-[#EEEBE8] w-full p-6 lg:p-[120px] flex flex-col gap-6">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-6 items-center">
                    <AnimatePresence>
                        {showIcon && (
                            <motion.div
                                variants={iconVariants}
                                initial="hidden"
                                // animate="show"
                                exit="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                className="rounded-full bg-primary flex items-center justify-center p-1">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    // animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                        delay: 1
                                    }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                >
                                    <Image
                                        src={FireIcon}
                                        alt="Artikel Terlaris"
                                        width={33}
                                        height={33}
                                        className="w-auto h-auto lg:w-12 lg:h-12"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        className="flex flex-col gap-2"
                        variants={titleVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}

                    >
                        <p className="text-2xl lg:text-[40px] font-[--font-libre] font-bold">
                            Artikel Budaya Terlaris
                        </p>
                        <p className="text-[#777777] lg:text-2xl font-normal">
                            Pilihan paling banyak dipakai penjaga budaya
                        </p>
                    </motion.div>
                </div>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                // animate="show"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-around gap-2 lg:gap-[18px] overflow-x-auto md:overflow-x-visible hide-scrollbar">
                {image.map((item, idx) => (
                    <motion.div
                        variants={cardVariants}
                        key={idx}
                        className="rounded-2xl p-2 lg:p-4 flex-shrink-0 flex flex-col gap-4 bg-white border border-[#DDDDDD] md:min-w-0 cursor-pointer"
                    >
                        <Image
                            src={item.img}
                            alt={`Produk ${idx + 1}`}
                            width={166}
                            height={76}
                            className="min-w-[166px] lg:min-w-[236px] h-auto"
                        />
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-1 items-center">
                                    {data.map((item, index) => (
                                        <Image src={item} key={index} width={16} height={16} alt="icon" />
                                    ))}
                                </div>
                                {/* <p className="font-semibold lg:font-medium tracking-wider lg:text-xl">{item.label.length > 13 ? item.label.substring(0, 10) + "..." : item.label}</p> */}
                                <div
                                    className="relative group inline-block cursor-pointer"
                                    onClick={() => handleToggleTooltip(idx)}
                                >
                                    <p
                                        className="font-semibold lg:font-medium tracking-wider lg:text-xl"
                                        title={item.label}
                                    >
                                        {item.label.length > 13 ? item.label.substring(0, 13) + "..." : item.label}
                                    </p>

                                    {/* Tooltip */}
                                    <span
                                        className={`absolute left-0 bottom-full mb-2 bg-gray-800 text-white text-sm rounded-lg px-2 py-1 whitespace-nowrap z-10 transition-opacity duration-200
          ${showTooltip === idx ? "block" : "hidden"} 
          lg:group-hover:block`}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                {iconShop.map((item, index) => (
                                    <div
                                        key={index}
                                        className="rounded-full bg-[#FFF2DF] flex justify-center items-center w-7 h-7 p-1"
                                    >
                                        <Image
                                            src={item.src}
                                            width={24}
                                            height={24}
                                            alt="Online Shop Cultara"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </div>
    )
}