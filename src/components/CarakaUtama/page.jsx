import CarakaSmall from "@/assets/image/CarakaUtamaSmall.png"
import CarakaLarge from "@/assets/image/CarakaUtamaLarge.png"
import Image from "next/image"
import ArrowRight from "@/assets/icons/ArrowRight.svg"
import { motion } from "motion/react"
export default function CarakaUtamaSection() {
    return (
        <div className="bg-[#272626] lg:min-h-[768px] flex flex-col lg:flex-row lg:justify-end lg:items-center gap-4 p-6 relative">
            {/* Gambar mobile */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:hidden"
            >
                <Image
                    src={CarakaSmall}
                    width={380}
                    height={416}
                    alt="Caraka Utama"
                />
            </motion.div>

            {/* Gambar desktop */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="hidden lg:block absolute bottom-0 left-[120px]"
            >
                <Image
                    src={CarakaLarge}
                    width={597}
                    height={688}
                    alt="Caraka Utama"
                />
            </motion.div>

            {/* Konten teks */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="lg:w-1/2"
            >
                <div className="lg:w-[505px] flex flex-col gap-4 lg:gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl lg:text-5xl font-bold font-[--font-libre] text-white">
                            Caraka Utama
                        </p>
                        <p className="text-lg lg:text-[32px] text-[#B29980]">
                            Wajah dari Gerakan Jaga Budaya
                        </p>
                    </div>
                    <p className="text-white lg:text-[#BEBEBE] lg:text-6">
                        Caraka Utama lahir dan hidup sebagai perwujudan Cultara Dalam
                        perjalanannya menyampaikan pesan budaya. Caraka yang berarti
                        perjalanan dan Utama berarti keutamaan, mencerminkan pentingnya
                        menjalani perjalanan panjang dalam memahami, menghargai, dan menjaga
                        kekayaan budaya Nusantara.
                    </p>
                    <button className="flex gap-2.5 items-center w-fit text-white rounded-full font-semibold text-xl bg-primary px-6 py-3">
                        Ikuti Jejak Caraka{" "}
                        <Image
                            src={ArrowRight}
                            alt="Cultara Shop"
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}