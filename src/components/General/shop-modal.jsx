import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Shopee from "@/assets/icons/shopee.svg"
import TiktokShop from "@/assets/icons/tiktok-shop.svg"
import Tokopedia from "@/assets/icons/tokopedia.svg"
import Image from "next/image";
import { useEffect } from "react";

export default function ShopModal({ open, onClose }) {
    useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);
    const iconShop = [
        { src: Shopee, alt: "Shopee", link: "https://shopee.co.id/cultaraofficial" },
        { src: TiktokShop, alt: "Tiktok Shop", link: "https://www.tiktok.com/@cultara.official" },
        { src: Tokopedia, alt: "Tokopedia", link: "https://www.tokopedia.com/cultaraid" },
    ];

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-xl w-[90%] max-w-[268px] relative"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4 border-b border-[#E2E8F0] p-3">
                            <h2 className="text-lg font-semibold">Shop Now</h2>
                            <button
                                onClick={onClose}
                                className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div className="flex justify-center gap-6 my-5">
                            {iconShop.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => window.open(item.link, "_blank")}
                                    className="rounded-full bg-[#FFF2DF] flex justify-center items-center w-14 h-14 p-1 my-3 cursor-pointer">
                                    <Image src={item.src} width={41} height={43} alt={item.alt} className="w-[41px] h-[41px] lg:w-10 lg:h-10" />
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
