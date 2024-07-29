import type { Metadata } from "next";
import "./globals.css";
import { folito, inter } from "./fonts";

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
