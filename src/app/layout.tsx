import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Majed Al-Sardi",
  description: "Portfolio of Majed Al-Sardi",
  icons: {
    icon: "/confluence.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
