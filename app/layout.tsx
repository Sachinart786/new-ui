"use client";
import SideBar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
