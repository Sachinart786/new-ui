// "use client";
// import { Poppins } from "next/font/google";
// import SideBar from "@/components/Sidebar";
// import { useEffect, useState } from "react";

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [isClient, setIsClient] = useState<boolean>(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   return (
//     <html lang="en" className={`${poppins.variable}`}>
//       <body>
//         {isClient ? (
//           <>
//             <SideBar />
//             <main>{children}</main>
//           </>
//         ) : null}
//       </body>
//     </html>
//   );
// }

"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import SideBar from "@/components/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

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
        <main style={{padding: "18px"}}>{children}</main>
      </body>
    </html>
  );
}
