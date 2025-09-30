import BestSeller from "@/assets/icons/best-seller.svg"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import KoleksiCarousel from "./carousel"
import OrnamenTop from "@/assets/image/OrnamenKoleksiTop.png"
import OrnamenBottom from "@/assets/image/OrnamenKoleksiBottom.png"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import PopUpShop from "../General/popup-shop"
import ShopModal from "../General/shop-modal"
export default function SectionKoleksi() {
    const [showPopUp, setShowPopUp] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const popupRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            // Jika klik di luar popupRef
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setShowPopUp(false);
            }
        }

        if (showPopUp) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopUp]);
    return (
        <div className="p-6 flex flex-col lg:flex-row gap-6 lg:gap-0 lg:py-[130px] lg:px-[120px] relative">
            <Image src={OrnamenTop} alt="Koleksi" className="hidden lg:block absolute top-10 left-0" />
            <Image src={OrnamenBottom} alt="Koleksi" className="hidden lg:block absolute bottom-10 right-0" />
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-2 lg:justify-center lg:w-2/6">
                <p className="text-2xl lg:text-[40px] font-[--font-libre] font-bold">Koleksi Lengkap,<br />Budaya dalam Gaya</p>
                <p className="text-[#777777] lg:text-2xl">Temukan beragam desain yang mengangkat cerita budaya, siap dipakai kapan saja, di mana saja!</p>
                <div className="relative mt-[26px] min-h-[52px] hidden lg:block">
                    <AnimatePresence>
                        {showPopUp && (
                            <motion.div
                                key="popup"
                                ref={popupRef}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute z-50"
                            >
                                <PopUpShop />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!showPopUp && (
                        <motion.button
                            key="button"
                            ref={popupRef}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            onClick={() => setShowPopUp(true)}
                            className="flex gap-2.5 cursor-pointer items-center w-fit justify-center text-white rounded-full font-semibold text-xl bg-primary px-6 py-3"
                        >
                            Show Now
                            <ArrowRight width={24} height={24} className="text-white" />
                        </motion.button>
                    )}
                </div>
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
            <div className="relative mt-[26px] min-h-[52px] lg:hidden">
                <motion.button
                    key="button"
                    ref={popupRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onClick={() => setOpenModal(true)}
                    className="flex gap-2.5 cursor-pointer items-center w-full justify-center text-white rounded-full font-semibold text-xl bg-primary px-6 py-3"
                >
                    Show Now
                    <ArrowRight width={24} height={24} className="text-white" />
                </motion.button>
                <ShopModal onClose={() => setOpenModal(false)} open={openModal} />
            </div>
            {/* <motion.button
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:hidden flex gap-2.5 items-center w-full justify-center text-white rounded-full font-semibold text-xl bg-primary px-6 py-3">
                Show Now
                <ArrowRight width={24} height={24} className="text-white" />
            </motion.button> */}
        </div>
    )
}