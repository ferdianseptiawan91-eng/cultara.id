"use client"
import Image from "next/image";
import Logo from "@/assets/icons/Logo.png"
import Hamburger from "@/assets/icons/Hamburger.svg"
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("");
    const sectionsRef = useRef({})
    const menuItems = [
        { href: "#home", label: "Home" },
        { href: "#artikel-terlaris", label: "Artikel Terlaris" },
        { href: "#jejak-budaya", label: "Jejak Budaya" },
        { href: "#koleksi", label: "Koleksi" },
        { href: "#kata-mereka", label: "Kata Mereka" },
        { href: "#budaya-versimu", label: "Budaya Versimu", special: true },
    ];
    useEffect(() => {
        menuItems.forEach((item) => {
            const id = item.href.replace("#", "");
            sectionsRef.current[id] = document.getElementById(id);
        });

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible?.target) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: [0.5],
            }
        );
        Object.values(sectionsRef.current).forEach((sec) => {
            if (sec) observer.observe(sec);
        });

        return () => observer.disconnect();
    }, []);
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-[1126px] w-full flex justify-between gap-2.5 items-center px-6 py-[9px] bg-white shadow-sm fixed left-1/2 -translate-x-1/2 lg:mt-5 lg:shadow-[0_4px_5px_rgba(0,0,0,0.1)] lg:rounded-full lg:px-2.5 z-[99]">
            <div className="flex gap-1.5 items-center">
                <Image
                    src={Logo}
                    width={60}
                    height={60}
                    alt="Cultara Logo"
                    className="object-cover"
                />
                <p className="text-2xl font-[--font-libre] font-semibold">Cultara.id</p>
            </div>

            <div className="lg:hidden">
                <button
                    type="button"
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen && <X />}
                    {!isOpen && <Menu />}
                </button>
            </div>

            <motion.div
                className="hidden lg:flex gap-5 items-center"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.15, // kasih jeda animasi tiap anak
                        },
                    },
                }}
            >
                {menuItems.map((item, i) => {
                    const section = item.href.replace("#", ""); // contoh "#home" -> "home"
                    const isActive = activeSection === section;
                    return (
                        <motion.a
                            key={i}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault()
                                const element = document.getElementById(section)
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    })
                                }
                            }}
                            variants={{
                                hidden: { y: -20, opacity: 0 },
                                show: { y: 0, opacity: 1 },
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            whileHover={{ borderBottomColor: '#F4A22B' }}
                            className={`text-[#555555] border-b-2 border-transparent 
                                ${isActive ? "border-[#F4A22B] text-[#F4A22B] font-semibold" : ""}
                                ${item.special
                                    ? "text-white rounded-full font-medium bg-primary px-6 py-3"
                                    : ""
                                }`}
                        >
                            {item.label}
                        </motion.a>
                    )
                }
                )}
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start p-6 gap-2.5 lg:hidden"
                    >
                        {menuItems.map((item, i) => {
                            const section = item.href.replace("#", ""); // contoh "#home" -> "home"
                            const isActive = activeSection === section;
                            return (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        const element = document.getElementById(section)
                                        if (element) {
                                            element.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            })
                                        }
                                    }}
                                    variants={{
                                        hidden: { y: -20, opacity: 0 },
                                        show: { y: 0, opacity: 1 },
                                    }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    whileHover={{ borderBottomColor: '#F4A22B' }}
                                    className={`text-[#555555] border-b-2 border-transparent 
                                ${isActive ? "border-[#F4A22B] text-[#F4A22B] font-semibold" : ""}
                                ${item.special
                                            ? "text-white rounded-full font-medium bg-primary px-6 py-3"
                                            : ""
                                        }`}
                                >
                                    {item.label}
                                </motion.a>
                            )
                        }
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}