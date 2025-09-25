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
    const [showIcon, setShowIcon] = useState(false);

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
                <motion.button
                    initial="hidden"
                    // animate="show"
                    variants={{
                        hidden: { opacity: 0, x: -40 },
                        show: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="hidden lg:flex gap-2.5 items-center w-fit text-white rounded-full font-semibold text-xl bg-primary px-6 py-3">Lihat Semua Koleksi <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} />
                </motion.button>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                // animate="show"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex justify-around gap-2 lg:gap-[18px] overflow-x-auto md:overflow-x-visible hide-scrollbar">
                {[1, 2, 3, 4].map((_, idx) => (
                    <motion.div
                        variants={cardVariants}
                        key={idx}
                        className="rounded-2xl p-2 lg:p-4 flex-shrink-0 flex flex-col gap-4 bg-white border border-[#DDDDDD] md:min-w-0"
                    >
                        <Image
                            src={imageCard[idx]}
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
                                <p className="font-semibold lg:font-medium tracking-wider lg:text-xl">Gatot Kaca</p>
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