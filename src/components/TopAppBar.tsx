"use client";

import { usePathname } from "next/navigation";

export default function TopAppBar() {
  const pathname = usePathname();

  let title = "首頁";
  let icon = "menu";

  if (pathname === "/restock") {
    title = "進貨";
  } else if (pathname === "/ship") {
    title = "出貨";
  } else if (pathname === "/suppliers") {
    title = "供應商";
  } else if (pathname === "/history") {
    title = "歷史紀錄";
  }

  return (
    <header className="h-[72px] w-full max-w-lg mx-auto top-0 border-none bg-primary shadow-sm flex items-center justify-between px-6 z-50 sticky">
      <div className="flex items-center gap-4">
        <button className="active:scale-95 transition-transform text-white">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>{icon}</span>
        </button>
        <h1 className="font-headline font-bold text-2xl uppercase tracking-wider text-white">{title}</h1>
      </div>
      <div className="flex items-center">
        <button className="active:scale-95 transition-transform text-white">
          <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>account_circle</span>
        </button>
      </div>
    </header>
  );
}
