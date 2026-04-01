"use client";

import { usePathname } from "next/navigation";

export default function TopAppBar() {
  const pathname = usePathname();

  let title = "首頁";
  let icon = "menu";
  let showSearch = false;

  if (pathname === "/restock") {
    title = "進貨";
    icon = "menu";
  } else if (pathname === "/ship") {
    title = "出貨";
    icon = "menu";
  } else if (pathname === "/history") {
    title = "歷史紀錄";
    icon = "history";
    showSearch = true;
  }

  // Adjust styling based on the path. History page (Screen 5) has a slightly different TopAppBar design.
  if (pathname === "/history") {
    return (
      <header className="w-full top-0 sticky bg-slate-50 z-50">
        <div className="flex items-center justify-between px-6 h-20 w-full max-w-none">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#003178] text-3xl">{icon}</span>
            <h1 className="font-['Public_Sans'] font-bold text-2xl tracking-tight text-[#003178]">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
            {showSearch && <span className="material-symbols-outlined text-slate-600 text-2xl">search</span>}
            {!showSearch && <span className="material-symbols-outlined text-[#003178] text-2xl">notifications</span>}
          </div>
        </div>
        <div className="bg-[#eeeeee] h-1 w-full"></div>
      </header>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#f9f9f9] dark:bg-slate-900 w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#003178] dark:text-blue-400 text-3xl">{icon}</span>
          <h1 className="font-['Public_Sans'] font-bold text-[24px] tracking-tight text-[#003178] dark:text-blue-400">{title}</h1>
        </div>
        <div className="flex items-center">
          <span className="material-symbols-outlined text-[#003178] dark:text-blue-400 text-3xl">notifications</span>
        </div>
      </header>
      <div className="bg-[#eeeeee] dark:bg-slate-800 h-[2px] w-full"></div>
    </>
  );
}
