import type { Metadata } from "next";
import { geistSans, geistMono } from "./assets/font";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Navbar from "./component/Navbar";
import Footer from "./footer/page";

export const metadata: Metadata = {
  title: "Company Profile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
