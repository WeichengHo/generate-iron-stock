"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="h-[80px] fixed bottom-0 left-0 w-full flex justify-around items-center px-4 bg-surface dark:bg-neutral-900 border-t-4 border-neutral-200 dark:border-neutral-800 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 rounded-t-lg">
      {/* Home */}
      <Link href="/" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/' ? 'bg-blue-900 text-white rounded-lg px-4 py-2' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-blue-800'}`}>
        <span className="material-symbols-outlined" style={pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
        <span className="text-[14px] font-bold uppercase tracking-widest">Home</span>
      </Link>

      {/* Restock */}
      <Link href="/restock" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/restock' ? 'bg-blue-900 text-white rounded-lg px-4 py-2' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-blue-800'}`}>
        <span className="material-symbols-outlined" style={pathname === '/restock' ? { fontVariationSettings: "'FILL' 1" } : {}}>inventory_2</span>
        <span className="text-[14px] font-bold uppercase tracking-widest">Restock</span>
      </Link>

      {/* Ship */}
      <Link href="/ship" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/ship' ? 'bg-blue-900 text-white rounded-lg px-4 py-2' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-blue-800'}`}>
        <span className="material-symbols-outlined" style={pathname === '/ship' ? { fontVariationSettings: "'FILL' 1" } : {}}>local_shipping</span>
        <span className="text-[14px] font-bold uppercase tracking-widest">Ship</span>
      </Link>

      {/* Suppliers */}
      <Link href="/suppliers" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/suppliers' ? 'bg-blue-900 text-white rounded-lg px-4 py-2' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-blue-800'}`}>
        <span className="material-symbols-outlined" style={pathname === '/suppliers' ? { fontVariationSettings: "'FILL' 1" } : {}}>factory</span>
        <span className="text-[14px] font-bold uppercase tracking-widest">Suppliers</span>
      </Link>

      {/* History */}
      <Link href="/history" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/history' ? 'bg-blue-900 text-white rounded-lg px-4 py-2' : 'text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-700 active:bg-blue-800'}`}>
        <span className="material-symbols-outlined" style={pathname === '/history' ? { fontVariationSettings: "'FILL' 1" } : {}}>history</span>
        <span className="text-[14px] font-bold uppercase tracking-widest">History</span>
      </Link>
    </nav>
  );
}
