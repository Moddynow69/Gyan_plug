import type { Metadata } from "next";
import "./globals.css";
import { folito, inter } from "./fonts";

export const metadata: Metadata = {
  title: "GyanPlug",
  description: "Education Counselors",
  openGraph: {
    title: "GyanPlug",
    description: "Education Counselors",
    type: "website",
    locale: "en_US",
    siteName: "Gyan Plug",
    images: [ { url: "https://ibb.co/17ryW35" } ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${folito.className}`}>
        {children}
      </body>
    </html>
  );
}
