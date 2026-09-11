import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Rizki Agustiansyah | Portfolio",
  description:
    "Fullstack and Data Analytics Portfolio of Muhammad Rizki Agustiansyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}