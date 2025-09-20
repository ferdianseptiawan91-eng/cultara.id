import Image from "next/image";
import CultureCarousel from "./carousel";
import Ornamen from "@/assets/image/Ornamen.png"
import { motion } from "motion/react"
export default function SectionBudaya() {
    return (
        <div className="p-6 flex flex-col gap-4 relative lg:py-24 lg:px-[218px]">
            {/* Ornamen tetap tanpa animasi */}
            <Image
                src={Ornamen}
                alt="Budaya"
                width={208}
                height={328}
                className="hidden lg:block absolute top-0 right-0"
            />

            {/* Teks pertama dari kiri */}
            <motion.p
                className="text-2xl lg:text-[40px] font-bold font-[--font-libre] text-center"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Budaya adalah Identitas Kita
            </motion.p>

            {/* Teks kedua dari kanan */}
            <motion.p
                className="text-lg lg:text-2xl text-[#777777] text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Di tengah derasnya arus tren global, banyak budaya yang perlahan terlupakan.<br />
                Cultara hadir agar budaya tetap hidup tidak hanya disimpan di museum,
                tapi dipakai dan dibanggakan dalam keseharian.
            </motion.p>

            {/* Carousel dari kiri */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <CultureCarousel />
            </motion.div>
        </div>
    )
}