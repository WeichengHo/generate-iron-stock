import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

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
      <body className={`${publicSans.className} bg-background text-on-surface min-h-screen pb-[120px]`}>
        {/* TopAppBar */}
        <header className="sticky top-0 z-50 bg-[#f9f9f9] dark:bg-slate-900 w-full px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#003178] dark:text-blue-400 text-3xl">menu</span>
            <h1 className="font-['Public_Sans'] font-bold text-[24px] tracking-tight text-[#003178] dark:text-blue-400">鋼鐵庫存管家</h1>
          </div>
          <div className="flex items-center">
            <span className="material-symbols-outlined text-[#003178] dark:text-blue-400 text-3xl">notifications</span>
          </div>
        </header>
        <div className="bg-[#eeeeee] dark:bg-slate-800 h-[2px] w-full"></div>

        {children}

        <BottomNav />
      </body>
    </html>
  );
}
