"use client";
import { Poppins } from "next/font/google";
import SideBar from "@/components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <SideBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
