import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";
import TopAppBar from "@/components/TopAppBar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "鋼鐵庫存管家",
  description: "Steel Rebar Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${publicSans.className} bg-background flex justify-center min-h-screen`}>
        <div className="w-full max-w-lg bg-background relative min-h-screen shadow-2xl flex flex-col">
          <TopAppBar />

          <div className="flex-1 pb-safe">
            {children}
          </div>

          <BottomNav />
        </div>
      </body>
    </html>
  );
}
