"use client";
import SideBar from "@/components/Sidebar";
import { Provider } from "react-redux";
import store from "@/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <SideBar />
          <main style={{ padding: "12px" }}>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
