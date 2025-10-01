import { motion } from "motion/react"
import CultureAnakCarousel from "./CultureAnakCarousel"
export default function SectionJagaBudayaAnak() {
    return (
        <div className="py-12 px-6 flex flex-col lg:flex-row gap-6 lg:gap-20 lg:px-[120px] lg:py-[217px] items-center lg:bg-[#272626]">
            <div className="lg:max-w-[516px]">
                <p className="font-[--font-libre] text-2xl lg:text-5xl lg:italic lg:font-semibold lg:text-white font-bold">#JagaBudayaDari Kecil</p>
                <p className="text-xl lg:text-white lg:text-[32px]">Anak Tumbuh Dekat dengan Budaya</p>
                <p className="lg:text-2xl lg:text-white">Cultara menghadirkan koleksi khusus anak. Nyaman dipakai, penuh gaya, sekaligus memperkenalkan warisan budaya sejak langkah kecil mereka.</p>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full"
            >
                <CultureAnakCarousel />
            </motion.div>
        </div>
    )
}