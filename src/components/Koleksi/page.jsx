import BestSeller from "@/assets/icons/best-seller.svg"
import Image from "next/image"
import { motion } from "motion/react"
import KoleksiCarousel from "./carousel"
import ArrowRight from "@/assets/icons/ArrowRight.svg"
import OrnamenTop from "@/assets/image/OrnamenKoleksiTop.png"
import OrnamenBottom from "@/assets/image/OrnamenKoleksiBottom.png"
export default function SectionKoleksi() {
    return (
        <div className="p-6 flex flex-col lg:flex-row gap-6 lg:gap-0 lg:py-[130px] lg:px-[120px] relative">
            <Image src={OrnamenTop} alt="Koleksi" className="hidden lg:block absolute top-10 left-0" />
            <Image src={OrnamenBottom} alt="Koleksi" className="hidden lg:block absolute bottom-10 right-0" />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:hidden">
                <Image src={BestSeller} width={56} height={56} alt="Best Seller" />
            </motion.div>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-2 lg:justify-center lg:w-2/6">
                <p className="text-2xl lg:text-[40px] font-[--font-libre] font-bold">Koleksi Lengkap,<br />Budaya dalam Gaya</p>
                <p className="text-[#777777] lg:text-2xl">Temukan beragam desain yang mengangkat cerita budaya, siap dipakai kapan saja, di mana saja!</p>
                <motion.button
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="hidden mt-[26px] lg:flex gap-2.5 items-center w-fit justify-center text-white rounded-full font-semibold text-xl bg-primary px-6 py-3">Show Now <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} />
                </motion.button>
            </motion.div>
            <div className="lg:w-[70%]">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <KoleksiCarousel />
                </motion.div>
            </div>
            <motion.button
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:hidden flex gap-2.5 items-center w-full justify-center text-white rounded-full font-semibold text-xl bg-primary px-6 py-3">Show Now <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} />
            </motion.button>
        </div>
    )
}