import Shopee from "@/assets/icons/shopee.svg"
import TiktokShop from "@/assets/icons/tiktok-shop.svg"
import Tokopedia from "@/assets/icons/tokopedia.svg"
import Image from "next/image"
// import ArrowRight from "@/assets/icons/ArrowRight.svg"
import GoodQuality from "@/assets/icons/good-quality.svg"
import JagaBudaya from "@/assets/icons/jaga-budaya.svg"
import { motion } from "motion/react"
import SideBanner from "@/assets/image/SideBannerHome.png"
import { ArrowRight } from "lucide-react"
export default function SectionHome() {
    const iconShop = [
        { src: Shopee, alt: "Shopee", link: "https://shopee.co.id/cultaraofficial" },
        { src: TiktokShop, alt: "Tiktok Shop", link: "https://www.tiktok.com/@cultara.official" },
        { src: Tokopedia, alt: "Tokopedia", link: "https://www.tokopedia.com/cultaraid" },
    ];
    const container = {
        hidden: {},
        show: {
            transition: { staggerChildren: 0.2 }
        }
    };
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-[url(/Bg-Home.png)] bg-cover min-h-[738px] lg:min-h-[768px] w-full flex flex-col lg:flex-row justify-center items-center gap-6 px-6 lg:px-[120px] relative">
            <div className="h-[376px] lg:w-1/2 flex items-center justify-center relative lg:order-2">
                {/* SideBanner di tengah */}
                <Image
                    src={SideBanner}
                    width={331}
                    height={406}
                    alt="Jaga Budaya"
                    className="relative top-[46px] z-10 lg:w-[605px] lg:top-[65px] -left-3"
                />

                {/* Good Quality di kiri atas, lebih depan */}
                <motion.div
                    className="absolute left-4 lg:left-0 bottom-22 lg:bottom-8 z-20"
                    animate={{ y: [0, 20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src={GoodQuality}
                        width={100}
                        height={33}
                        alt="Good Quality"
                        className="lg:w-[185px] h-auto"
                    />
                </motion.div>

                {/* Jaga Budaya di kanan bawah, lebih belakang */}
                <motion.div
                    className="absolute -right-5 lg:-right-10 top-40 lg:top-30 z-0"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        src={JagaBudaya}
                        width={100}
                        height={33}
                        alt="Jaga Budaya"
                        className="w-auto lg:w-[185px] h-auto"
                    />
                </motion.div>
            </div>

            <div className="lg:w-1/2 mt-6 flex flex-col gap-6 lg:gap-10">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: { y: 40, opacity: 0 },
                        show: { y: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col gap-2 lg:gap-4">
                    <p className="font-[--font-libre] italic text-5xl lg:text-[64px] font-semibold">#JagaBudaya</p>
                    <p className="text-[28px] lg:text-[40px]"> Mulai dari yang Kamu Pakai</p>
                    <p className="text-[#777777] lg:text-2xl">Setiap kain menyimpan cerita. Setiap gaya menjaga budaya.</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.6,
                            }
                        },
                    }}
                    className="flex flex-col lg:flex-row gap-4 lg:items-center">
                    <div className="flex gap-x-4">
                        {iconShop.map((item, index) => (
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 40 },
                                    show: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                key={index}
                                onClick={() => window.open(item.link, "_blank")}
                                className="rounded-full bg-[#FFF2DF] flex justify-center items-center w-14 h-14 p-1 cursor-pointer">
                                <Image src={item.src} width={41} height={43} alt={item.alt} className="w-[41px] h-[41px] lg:w-10 lg:h-10" />
                            </motion.div>
                        ))}
                    </div>
                    <motion.a
                        href="https://www.instagram.com/cultaraofficial"
                        target="_blank"
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            show: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex mb-6 lg:mb-0 gap-2.5 cursor-pointer items-center w-fit text-primary rounded-full font-semibold text-xl border border-primary px-6 py-3">
                        Ikuti Perjalanan Kami
                        {/* <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} /> */}
                        <ArrowRight width={24} height={24} className="text-primary" />
                    </motion.a>
                </motion.div>
            </div>

        </motion.div>
    )
}