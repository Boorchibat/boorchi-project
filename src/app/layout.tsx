import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

export const metadata: Metadata = {
  title: {
    template: "RAWG Game Database",
    default: "RAWG - Video Game Database",
  },
  description: "RAWG Video Game Database where you can find the latest games",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
