import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { folito } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gyan Plug",
  description: "Education Counselors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${folito.className}`}>{children}</body>
    </html>
  );
}
