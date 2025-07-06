import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aeon Summer",
  description: "Sputnikspsw",
  icons: {
    icon: [
      { url: '/spx6900.png', sizes: '32x32' },
      { url: '/spx6900.png', sizes: '16x16' },
    ],
    apple: [
      { url: '/spx6900.png', sizes: '180x180' },
    ],
    shortcut: '/spx6900.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
