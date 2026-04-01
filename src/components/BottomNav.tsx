"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="h-[80px] pb-safe fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg flex justify-around items-center px-4 bg-surface border-t-2 border-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
      {/* Home */}
      <Link href="/" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/' ? 'bg-primary text-white rounded-xl px-4 py-1' : 'text-outline hover:bg-surface-container active:bg-surface-container-highest'}`}>
        <span className="material-symbols-outlined" style={{ fontSize: '28px', ...(pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}) }}>home</span>
        <span className="text-[14px] font-bold uppercase tracking-widest mt-1">Home</span>
      </Link>

      {/* Restock */}
      <Link href="/restock" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/restock' ? 'bg-primary text-white rounded-xl px-4 py-1' : 'text-outline hover:bg-surface-container active:bg-surface-container-highest'}`}>
        <span className="material-symbols-outlined" style={{ fontSize: '28px', ...(pathname === '/restock' ? { fontVariationSettings: "'FILL' 1" } : {}) }}>inventory_2</span>
        <span className="text-[14px] font-bold uppercase tracking-widest mt-1">Restock</span>
      </Link>

      {/* Ship */}
      <Link href="/ship" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/ship' ? 'bg-primary text-white rounded-xl px-4 py-1' : 'text-outline hover:bg-surface-container active:bg-surface-container-highest'}`}>
        <span className="material-symbols-outlined" style={{ fontSize: '28px', ...(pathname === '/ship' ? { fontVariationSettings: "'FILL' 1" } : {}) }}>local_shipping</span>
        <span className="text-[14px] font-bold uppercase tracking-widest mt-1">Ship</span>
      </Link>

      {/* Suppliers */}
      <Link href="/suppliers" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/suppliers' ? 'bg-primary text-white rounded-xl px-4 py-1' : 'text-outline hover:bg-surface-container active:bg-surface-container-highest'}`}>
        <span className="material-symbols-outlined" style={{ fontSize: '28px', ...(pathname === '/suppliers' ? { fontVariationSettings: "'FILL' 1" } : {}) }}>factory</span>
        <span className="text-[14px] font-bold uppercase tracking-widest mt-1">Suppliers</span>
      </Link>

      {/* History */}
      <Link href="/history" className={`flex flex-col items-center justify-center p-2 transition-colors duration-200 ${pathname === '/history' ? 'bg-primary text-white rounded-xl px-4 py-1' : 'text-outline hover:bg-surface-container active:bg-surface-container-highest'}`}>
        <span className="material-symbols-outlined" style={{ fontSize: '28px', ...(pathname === '/history' ? { fontVariationSettings: "'FILL' 1" } : {}) }}>history</span>
        <span className="text-[14px] font-bold uppercase tracking-widest mt-1">History</span>
      </Link>
    </nav>
  );
}
