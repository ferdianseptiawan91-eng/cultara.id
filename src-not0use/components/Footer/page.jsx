"use client"
import Image from "next/image";
import Barcode from "@/assets/image/Barcode.png"
import Instagram from "@/assets/icons/instagram.svg"
import Tiktok from "@/assets/icons/tiktok.svg"
import Shopee from "@/assets/icons/shopee.svg"
import TiktokShop from "@/assets/icons/tiktok-shop.svg"
import Tokopedia from "@/assets/icons/tokopedia.svg"
import { motion } from "motion/react"

export default function Footer() {
    const iconShop = [
        { src: Instagram, alt: "Instagram" },
        { src: Tiktok, alt: "Tiktok" },
        { src: Shopee, alt: "Shopee" },
        { src: TiktokShop, alt: "Tiktok Shop" },
        { src: Tokopedia, alt: "Tokopedia" },
    ];
    return (
        <motion.footer
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }}
  className="px-6 lg:px-[120px] py-6 lg:py-20 flex flex-col gap-y-6"
>
  <div className="flex flex-col gap-y-4 lg:flex-row gap-x-20">
    <div className="flex flex-col gap-y-8">
      <Image
        src={Barcode}
        width={224}
        height={80}
        className="max-w-[224px] h-auto"
        alt="Barcode"
      />
      <div className="flex gap-x-5">
        {iconShop.map((item, index) => (
          <div
            key={index}
            className="rounded-full bg-[#FFF2DF] flex justify-center items-center w-10 h-10"
          >
            <Image
              src={item.src}
              width={20}
              height={20}
              alt={item.alt}
              className="w-6 h-6"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="flex flex-col gap-y-4">
      <p className="font-[--font-libre] text-2xl font-bold">
        Cultara Nusantara
      </p>
      <p className="text-lg text-[#555555]">
        Cultara: Fashion with a Message. Cultara highlights cultural and
        historical stories, especially from the Nusantara. Let's together
        #JagaBudaya!
      </p>
    </div>

    <div className="flex gap-x-6 lg:gap-x-20 lg:w-full">
      <div className="flex flex-col gap-y-6">
        <p className="font-bold font-[--font-libre] text-2xl">Navigasi</p>
        <ul className="text-lg text-[#555555] flex flex-col gap-y-2">
          <li>Artikel Terlaris</li>
          <li>Jejak Budaya</li>
          <li>Kata Mereka</li>
          <li>Custom Artikel</li>
        </ul>
      </div>
      <div className="flex flex-col gap-y-6">
        <p className="font-bold font-[--font-libre] text-2xl">Information</p>
        <ul className="text-lg text-[#555555] flex flex-col gap-y-2">
          <li>Size Chart</li>
          <li>Saran Budaya</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="bg-[#272626] border border-[#BEBEBE] font-light py-4 text-center text-white mt-2 rounded-[80px]">
    @2025 Culture Nusantara All Rights Reserved
  </div>
</motion.footer>

    )
}