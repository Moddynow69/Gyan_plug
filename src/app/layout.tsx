import type { Metadata } from "next";
import "./globals.css";
import { folito, inter } from "./fonts";
import Image from "next/image";

import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export async function GET() {
  return new ImageResponse(
    (
      <Image
        height={600}
        width={1200}
        src="https://example.com/images/THBHNL.jpg"
        alt="A beautiful image"
      />
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
export const metadata: Metadata = {
  title: "Gyan Plug",
  description: "Education Counselors",
};
<meta property="og:image" content="https://example.com/images/THBHNL.jpg" />;

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
