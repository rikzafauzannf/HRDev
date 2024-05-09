import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import Mainnav from "@/components/Navbar/Mainnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RHDev",
  description: "Make it simple, make me better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        <Mainnav />
        {children}
        <footer className="p-4 text-center text-slate-700">
          &copy;LoveCreative-2024
        </footer>
      </body>
    </html>
  );
}
