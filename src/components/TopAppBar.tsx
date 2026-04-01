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
    <header className="h-[72px] w-full docked top-0 border-none bg-neutral-50 dark:bg-neutral-900 shadow-sm flex items-center justify-between px-6 z-50 sticky">
      <div className="flex items-center gap-4">
        <button className="active:scale-95 transition-transform text-blue-900 dark:text-blue-400">
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{icon}</span>
        </button>
        <h1 className="font-public-sans font-bold text-2xl uppercase tracking-wider text-blue-900 dark:text-blue-400">{title}</h1>
      </div>
      <div className="flex items-center">
        <button className="active:scale-95 transition-transform text-blue-900 dark:text-blue-400">
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>account_circle</span>
        </button>
      </div>
    </header>
  );
}
