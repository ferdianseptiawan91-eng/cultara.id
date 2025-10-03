import { motion } from "motion/react"
import CultureAnakCarousel from "./CultureAnakCarousel"
import AnakDesktop1 from "@/assets/image/AnakDesktop1.png"
import AnakDesktop2 from "@/assets/image/AnakDesktop2.png"
import AnakDesktop3 from "@/assets/image/AnakDesktop3.png"
import AnakDesktop4 from "@/assets/image/AnakDesktop4.png"
import Image from "next/image"
import ImageSlider from "./CultureAnakCarouselDesktop"
export default function SectionJagaBudayaAnak() {
    const imageCard = [AnakDesktop1, AnakDesktop2, AnakDesktop3, AnakDesktop4]
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
    return (
        <div className="py-12 px-6 flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-20 lg:px-[0px] lg:py-[217px] items-center lg:bg-[#272626] lg:overflow-hidden">
            <div className="lg:w-[506px] lg:flex lg:flex-col lg:gap-4 lg:ml-[120px]">
                <p className="font-[--font-libre] text-2xl lg:text-5xl lg:italic lg:font-semibold lg:text-white font-bold">#JagaBudaya<br/>Dari Kecil</p>
                <p className="text-xl lg:text-white lg:text-[32px]">Anak Tumbuh Dekat dengan Budaya</p>
                <p className="lg:text-2xl lg:text-white">Cultara menghadirkan koleksi khusus anak. Nyaman dipakai, penuh gaya, sekaligus memperkenalkan warisan budaya sejak langkah kecil mereka.</p>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="hidden lg:block lg:w-[760px] lg:relative"
            >
                {/* <CultureAnakCarousel /> */}
                <ImageSlider />
            </motion.div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:hidden lg:w-[760px] "
            >
                <CultureAnakCarousel />
            </motion.div>
            {/* <motion.div
                variants={containerVariants}
                initial="hidden"
                // animate="show"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="lg:flex justify-around gap-2 lg:gap-[18px] overflow-x-auto hidden">
                {imageCard.map((item, idx) => (
                    <motion.div
                        variants={cardVariants}
                        key={idx}
                        className="rounded-2xl flex-shrink-0 flex flex-col gap-4 md:min-w-0"
                    >
                        <Image
                            src={item}
                            alt={`Produk Anak ${idx + 1}`}
                            width={166}
                            height={76}
                            className="min-w-[166px] lg:min-w-[268px] h-auto"
                        />
                    </motion.div>
                ))}
            </motion.div> */}
        </div>
    )
}