"use client"
import BestSeller from "@/assets/icons/best-seller.svg"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import KataMerekaCarousel from "./carousel"
import KataMereka1 from "@/assets/image/KataMereka1.png"
import KataMereka2 from "@/assets/image/KataMereka2.png"
import KataMereka3 from "@/assets/image/KataMereka3.png"
import Quote from "@/assets/icons/quote-icon.svg"
import { useState } from "react"
import Background from "@/assets/image/BgKataMereka.png"

export default function SectionKataMereka() {
    const [activeId, setActiveId] = useState(null);
    const image = [
        { id: 1, src: KataMereka1, alt: "Testimoni 1" },
        { id: 2, src: KataMereka2, alt: "Testimoni 2" },
        { id: 3, src: KataMereka3, alt: "Testimoni 3" }
    ]
    return (
        <div className="p-6 lg:px-[120px] lg:py-[287px] flex flex-col lg:flex-row lg:justify-center lg:gap-16 lg:items-center w-full gap-6 relative">
            <div className="w-full h-full absolute hidden lg:block">
                <Image src={Background} alt="Testimoni Budaya" className="absulote top-0 w-full" />
                <div className="absloute bottom-0 bg-[#B299801A] h-1/2"></div>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:hidden z-20">
                <Image src={BestSeller} width={56} height={56} alt="Best Seller" />
            </motion.div>
            <div
                className="flex flex-col gap-4 z-20">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-2 lg:w-[411px]">
                    <p className="text-2xl lg:text-[40px] font-medium lg:leading-10">Kata mereka yang Sudah Ikut </p>
                    <p className="text-[#8B6239] lg:text-[40px] font-bold font-[--font-libre] text-2xl">#JagaBudaya</p>
                    <p className="text-[#777777] lg:text-xl">Semua bisa ikut menjaga budaya dengan cara sederhana: memakainya.</p>
                </motion.div>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="lg:hidden">
                    <KataMerekaCarousel />
                </motion.div>
            </div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="hidden min-w-[655px] lg:flex gap-4 justify-end z-20">
                {image.map((item) => {
                    const isActive = activeId === item.id;
                    const isExpanding = activeId === item.id;
                    const isCollapsing = activeId !== item.id && activeId !== null;
                    return (
                        <motion.div
                            key={item.id}
                            layout
                            initial={false}
                            animate={{
                                width: isActive ? 413 : 105,
                            }}
                            className="border border-[#B29980] flex overflow-hidden"
                            transition={{
                                duration: 0.5, ease: "easeInOut", layout: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                minWidth: 105,
                                height: 313
                            }}
                        >
                            <div className="w-[105px] flex-shrink-0 relative z-10 min-w-[105px]">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={105}
                                    height={313}
                                    className="cursor-pointer w-[105px] h-[313px] object-cover"
                                    onClick={() =>
                                        setActiveId((prev) => (prev === item.id ? null : item.id))
                                    }
                                />
                            </div>
                            <AnimatePresence mode="wait">
                                {isActive && (
                                    <motion.div
                                        key="content"
                                        initial={{
                                            opacity: 0,
                                            x: -20,
                                            width: 0
                                        }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            width: 300
                                        }}
                                        exit={{
                                            opacity: 0,
                                            x: -20,
                                            width: 0
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay: isExpanding ? 0.2 : 0,
                                            ease: "easeInOut",
                                            width: {
                                                duration: 0.5,
                                                ease: "easeInOut",
                                            },
                                            opacity: 0
                                        }}
                                        className="bg-white py-5 px-4 flex flex-col gap-6 min-w-0 max-w-[300px]"
                                    >
                                        <div className="flex flex-col gap-2">
                                            <Image src={Quote} alt="Quote" width={40} height={40} />
                                            <p className="text-xl text-[#555555]">
                                                Checkout karena iseng tengah malem haha. Eh taunya bagus,
                                                mantap seller👌 Bahannya adem, desainnya oke. Sukses minn😇😇
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xl">i*****e</p>
                                            <p className="text-[#777777]">Shopee</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    )
}