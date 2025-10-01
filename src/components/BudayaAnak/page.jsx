import { motion } from "motion/react"
import CultureAnakCarousel from "./CultureAnakCarousel"
export default function SectionJagaBudayaAnak() {
    return (
        <div className="py-12 px-6 flex flex-col gap-6">
            <div>
                <p className="font-[--font-libre] text-2xl font-bold">#JagaBudayaDariKecil</p>
                <p className="text-xl">Anak Tumbuh Dekat dengan Budaya</p>
                <p>Cultara menghadirkan koleksi khusus anak. Nyaman dipakai, penuh gaya, sekaligus memperkenalkan warisan budaya sejak langkah kecil mereka.</p>
            </div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <CultureAnakCarousel />
            </motion.div>
        </div>
    )
}