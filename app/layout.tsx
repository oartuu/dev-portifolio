import type { Metadata } from "next";
import { Cal_Sans } from "next/font/google";
import "./globals.css";


const calSans = Cal_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "oartuu portifolio",
  description: "personal portifolio of oartuu, fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${calSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
