"use client";
import { Poppins } from "next/font/google";
import { Provider } from "react-redux";
import store from "@/store";
import "./globals.css";
import theme from "@/theme";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@mui/material";

const DynamicSideBar = dynamic(() => import("@/components/Sidebar"), {
  ssr: false,
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <DynamicSideBar />
            <main style={{ padding: "12px" }}>{children}</main>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
