
import { motion, AnimatePresence } from "motion/react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Banner from "@/assets/image/BannerJagaBudaya.png"
import { useEffect, useRef, useState } from "react"
import PopUpShop from "../General/popup-shop"
import ShopModal from "../General/shop-modal"
export default function SectionJagaBudaya() {
    const [showPopUp, setShowPopUp] = useState(false)
    const popupRef = useRef(null);
    const [openModal, setOpenModal] = useState(false)

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
                <div className="relative hidden lg:block lg:min-w-[172px] min-h-[52px]">
                    <AnimatePresence>
                        {showPopUp && (
                            <motion.div
                                key="popup"
                                ref={popupRef}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="absolute z-50 left-0 bottom-0 lg:-right-10"
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
                <div className="relative lg:hidden lg:min-w-[172px] min-h-[52px]">
                    <motion.button
                        key="button"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        onClick={() => setOpenModal(true)}
                        className="flex gap-2.5 cursor-pointer items-center w-fit justify-center text-white rounded-full font-semibold text-xl bg-primary px-6 py-3"
                    >
                        Show Now
                        <ArrowRight width={24} height={24} className="text-white" />
                    </motion.button>
                    <ShopModal onClose={() => setOpenModal(false)} open={openModal} />
                </div>
                {/* <button
                    className="flex gap-2.5 items-center h-fit w-fit justify-center text-white font-semibold rounded-full text-xl bg-primary px-6 py-3"
                >
                    Shop Now
                    <Image src={ArrowRight} alt="Cultara Shop" width={24} height={24} />
                </button> */}
            </motion.div>
        </div>
    )
}