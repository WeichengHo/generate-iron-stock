"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-[90px] px-4 bg-white dark:bg-slate-950 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] border-t-4 border-[#eeeeee] dark:border-slate-800">
      {/* Dashboard */}
      <Link href="/" className={`flex flex-col items-center justify-center py-3 px-6 min-w-[80px] duration-150 ${pathname === '/' ? 'bg-[#0d47a1] text-white rounded-xl opacity-100' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
        <span className="material-symbols-outlined mb-1" style={pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>dashboard</span>
        <span className="font-['Public_Sans'] font-bold text-[14px] uppercase tracking-wider mt-1">首頁</span>
      </Link>

      {/* Restock */}
      <Link href="/restock" className={`flex flex-col items-center justify-center py-3 px-6 min-w-[80px] duration-150 ${pathname === '/restock' ? 'bg-[#0d47a1] text-white rounded-xl opacity-100' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
        <span className="material-symbols-outlined mb-1" style={pathname === '/restock' ? { fontVariationSettings: "'FILL' 1" } : {}}>inventory</span>
        <span className="font-['Public_Sans'] font-bold text-[14px] uppercase tracking-wider mt-1">進貨</span>
      </Link>

      {/* Ship */}
      <Link href="/ship" className={`flex flex-col items-center justify-center py-3 px-6 min-w-[80px] duration-150 ${pathname === '/ship' ? 'bg-[#0d47a1] text-white rounded-xl opacity-100' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
        <span className="material-symbols-outlined mb-1" style={pathname === '/ship' ? { fontVariationSettings: "'FILL' 1" } : {}}>local_shipping</span>
        <span className="font-['Public_Sans'] font-bold text-[14px] uppercase tracking-wider mt-1">出貨</span>
      </Link>

      {/* History */}
      <Link href="/history" className={`flex flex-col items-center justify-center py-3 px-6 min-w-[80px] duration-150 ${pathname === '/history' ? 'bg-[#0d47a1] text-white rounded-xl opacity-100' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>
        <span className="material-symbols-outlined mb-1" style={pathname === '/history' ? { fontVariationSettings: "'FILL' 1" } : {}}>history</span>
        <span className="font-['Public_Sans'] font-bold text-[14px] uppercase tracking-wider mt-1">歷史紀錄</span>
      </Link>
    </nav>
  );
}
