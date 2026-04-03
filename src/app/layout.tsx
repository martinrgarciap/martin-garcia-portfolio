import { NavBar } from "@/components";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Garcia | Software Developer",
  description:
    "Portfolio of Martin Garcia, a software developer focused on clean interfaces, polished product experiences, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${inter.className} min-h-screen overflow-x-hidden bg-[#07111f] text-[#F8FAFC] antialiased`}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
