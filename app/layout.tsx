import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ColorSchemeScript } from '@mantine/core';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Places To Visit",
  description: "These are few places I want to visit this year!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
