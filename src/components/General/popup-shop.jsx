import Shopee from "@/assets/icons/shopee.svg"
import TiktokShop from "@/assets/icons/tiktok-shop.svg"
import Tokopedia from "@/assets/icons/tokopedia.svg"
import Image from "next/image";

export default function PopUpShop() {
    const iconShop = [
        { src: Shopee, alt: "Shopee", link: "https://shopee.co.id/cultaraofficial" },
        { src: TiktokShop, alt: "Tiktok Shop", link: "https://www.tiktok.com/@cultara.official" },
        { src: Tokopedia, alt: "Tokopedia", link: "https://www.tokopedia.com/cultaraid" },
    ];
    return (
        <div className="flex justify-evenly gap-x-4 bg-white border border-[#DDDDDD] rounded-2xl w-full lg:w-fit py-3 px-6">
            {iconShop.map((item, index) => (
                <div
                    key={index}
                    onClick={() => window.open(item.link, "_blank")}
                    className="rounded-full bg-[#FFF2DF] flex justify-center items-center w-10 h-10 p-1 cursor-pointer">
                    <Image src={item.src} width={41} height={43} alt={item.alt} className="w-[41px] h-[41px] lg:w-10 lg:h-10" />
                </div>
            ))}
        </div>
    )
}