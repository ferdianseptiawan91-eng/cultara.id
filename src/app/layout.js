import { League_Spartan, Libre_Bodoni } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";

export const metadata = {
  title: "Cultara",
  description: "#Jaga Budaya",
  keywords: [
    "Cultara",
    "Kaos Budaya Jawa",
    "Kaos Tradisional",
    "T-Shirt Jawa",
    "Batik Modern",
    "Online Shop Kaos",
    "Pakaian Budaya Indonesia"
  ]
};

const Libre = Libre_Bodoni({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-libre"
})

const Spartan = League_Spartan({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700'],
  variable: "--font-spartan"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Libre.className} ${Spartan.className}`}>
      <body>
        <div className="w-full">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
