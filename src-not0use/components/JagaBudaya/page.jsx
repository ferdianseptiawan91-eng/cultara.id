import { motion } from "motion/react"
import ArrowRight from "@/assets/icons/ArrowRight.svg"
import Image from "next/image"
import Banner from "@/assets/image/BannerJagaBudaya.png"
export default function SectionJagaBudaya() {
    return (
        <div className="p-6 lg:px-[100px] lg:pt-[180px] lg:pb-20">
            <motion.div
                initial={{ y: 100, opacity: 0 }}          // mulai dari bawah
                whileInView={{ y: 0, opacity: 1 }}       // kembali ke posisi normal
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}   // animasi saat muncul di viewport
                className="bg-[#272626] flex flex-col overflow-visible lg:flex-row lg:justify-center lg:items-center gap-6 rounded-xl p-4 lg:p-10 relative"
            >
                <Image
                    src={Banner}
                    alt="Jaga Budaya"
                    className="absolute bottom-0 left-0 hidden lg:block"
                />
                <div className="hidden lg:block w-[280px]" />
                <div className="flex flex-col gap-4 lg:max-w-[580px]">
                    <p className="font-medium font-[--font-libre] text-2xl lg:text-[40px] text-white">
                        Saatnya <span className="text-primary italic">Jaga Budaya</span> Saatnya Pakai Cultara.
                    </p>
                    <p className="text-white lg:text-xl">
                        Mulai dari satu kain, kita bisa menjaga warisan bangsa.
                    </p>
                </div>

                {/* ✅ Button tanpa animasi */}
                <button
                    className="flex gap-2.5 items-center h-fit w-fit justify-center text-white font-semibold rounded-full text-xl bg-primary px-6 py-3"
                >
                    Shop Now
                    <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} />
                </button>
            </motion.div>
        </div>
    )
}