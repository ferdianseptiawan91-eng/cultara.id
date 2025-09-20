import Banner from "@/assets/image/BudayaVersimu.png"
import Image from "next/image"
import { motion } from "motion/react"
import ArrowRight from "@/assets/icons/ArrowRight.svg"
export default function SectionBudayaVersimu() {
    const handleChatClick = () => {
        // Ganti nomor dengan nomor WhatsApp tujuan
        const phone = "6288802877549"; // format internasional, tanpa +
        const message = encodeURIComponent("Halo Admin, saya mau bertanya.");
        const waLink = `https://wa.me/${phone}?text=${message}`;

        // Buka di tab baru
        window.open(waLink, "_blank");
    };
    return (
        <div className="w-full bg-[#272626] p-6 flex flex-col lg:flex-row lg:py-20 lg:px-[120px] lg:items-center gap-[60px]">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <Image src={Banner} alt="Budaya Versimu" />
            </motion.div>
            <div className="flex flex-col gap-6">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col gap-2 lg:w-[411px]">
                    <p className="text-2xl text-white lg:text-[40px] font-bold lg:leading-10 font-[--font-libre]">Custom Suka-suka!</p>
                    <p className="text-primary lg:text-[40px] font-bold font-[--font-libre] text-2xl">#BudayaVersimu</p>
                    <p className="text-white lg:text-xl">Bikin kaos custom dengan sentuhan budaya favoritmu. Dari karakter, aksara, sampai cerita, Cultara siap wujudkan!</p>
                </motion.div>
                <motion.button
                    onClick={handleChatClick}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex gap-2.5 items-center w-fit justify-center cursor-pointer text-white rounded-full font-semibold text-xl bg-primary px-6 py-3">Chat Admin <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} />
                </motion.button>
            </div>
        </div>
    )
}