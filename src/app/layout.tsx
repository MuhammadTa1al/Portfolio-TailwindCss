import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meer Talal - Portfolio",
  description:
    "Personal portfolio of Meer Talal, Software Developer | Web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-[#e5e5e5]`}>
        <Providers>
          <Navbar />

          <main className="pt-24">{children}</main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
