"use client"
import SectionArtikel from "@/components/Artikel/page";
import SectionBudaya from "@/components/budaya/page";
import SectionBudayaVersimu from "@/components/BudayaVersimu/page";
import CarakaUtamaSection from "@/components/CarakaUtama/page";
import SectionHome from "@/components/Home/page";
import SectionJagaBudaya from "@/components/JagaBudaya/page";
import SectionKataMereka from "@/components/KataMereka/page";
import SectionKoleksi from "@/components/Koleksi/page";

export default function Home() {
  return (
    <div className="w-full">
      <section id="home">
        <SectionHome />
      </section>
      <section id="artikel-terlaris">
        <SectionArtikel />
      </section>
      <section id="jejak-budaya">
        <SectionBudaya />
      </section>
      <section>
        <CarakaUtamaSection />
      </section>
      <section id="koleksi">
        <SectionKoleksi />
      </section>
      <section id="kata-mereka">
        <SectionKataMereka />
      </section>
      <section id="budaya-versimu">
        <SectionBudayaVersimu />
      </section>
      <section>
        <SectionJagaBudaya />
      </section>
    </div>
  );
}
