"use client";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
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
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <SideBar />
        <main style={{ padding: "12px" }}>{children}</main>
      </body>
    </html>
  );
};
