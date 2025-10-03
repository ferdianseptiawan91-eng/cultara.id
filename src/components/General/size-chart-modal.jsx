import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import SizeChild from "@/assets/image/SizeChart.png"
import SizeDewasa from "@/assets/image/SizeChartDewasa.png"

export default function SizeChartModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("dewasa");
  useEffect(() => {
      if (open) {
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = original;
        };
      }
    }, [open]);

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
            className="bg-white rounded-xl w-[90%] max-w-md p-4 relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Sizechart</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-200 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Tab Button */}
            <div className="flex justify-center gap-3 mb-5">
              <button
                onClick={() => setActiveTab("dewasa")}
                className={`px-4 py-1 rounded-full border font-medium cursor-pointer ${
                  activeTab === "dewasa"
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                Ukuran Dewasa
              </button>
              <button
                onClick={() => setActiveTab("anak")}
                className={`px-4 py-1 rounded-full border font-medium cursor-pointer ${
                  activeTab === "anak"
                    ? "bg-primary text-white border-primary"
                    : "border-gray-300 text-gray-600"
                }`}
              >
                Ukuran Anak
              </button>
            </div>

            {/* Content */}
            {activeTab === "anak" ? (
              <div className="w-full">
                <Image src={SizeChild} width={450} height={450} alt="Size Dewasa" />
              </div>
            ) : (
              <div className="w-full">
                <Image src={SizeDewasa} width={450} height={450} alt="Size Dewasa" />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
