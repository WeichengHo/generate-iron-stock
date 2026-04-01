"use client";

import { useState } from "react";

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<"inbound" | "outbound">("inbound");

  const handleExport = () => {
    alert(`正在準備匯出${activeTab === "inbound" ? "進貨" : "出貨"}報表...`);
  };

  const inboundLogs = [
    { title: "熱軋鋼捲", date: "2月 24", batch: "#882", amount: "+12.5t", type: "inbound" },
    { title: "結構工字鋼", date: "2月 22", batch: "#901", amount: "+48.0t", type: "inbound" },
    { title: "鋼筋", date: "2月 20", batch: "#742", amount: "+5.2t", type: "inbound" },
    { title: "鍍鋅板", date: "2月 18", batch: "#112", amount: "+22.0t", type: "inbound" },
  ];

  const outboundLogs = [
    { title: "熱軋鋼捲", date: "2月 25", batch: "#882", amount: "-3.5t", type: "outbound" },
    { title: "鋼筋 (#3)", date: "2月 23", batch: "#740", amount: "-12.0t", type: "outbound" },
    { title: "結構工字鋼", date: "2月 21", batch: "#899", amount: "-18.5t", type: "outbound" },
    { title: "鋼筋 (#5)", date: "2月 19", batch: "#730", amount: "-8.0t", type: "outbound" },
  ];

  const logs = activeTab === "inbound" ? inboundLogs : outboundLogs;

  return (
    <main className="max-w-md mx-auto px-4 pt-6 pb-32 space-y-8">
      {/* Section: Price Trends Chart */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-headline font-bold text-2xl tracking-tight text-on-surface">價格趨勢</h2>
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">最近 6 個月</span>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6">
          {/* Simple Bar Chart Visualization */}
          <div className="flex items-end justify-between h-48 gap-2">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[40%] transition-all"></div>
              <span className="text-[12px] font-bold text-outline">9月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[55%]"></div>
              <span className="text-[12px] font-bold text-outline">10月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[45%]"></div>
              <span className="text-[12px] font-bold text-outline">11月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-primary w-full rounded-t-lg h-[75%]"></div>
              <span className="text-[12px] font-bold text-on-surface">12月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[65%]"></div>
              <span className="text-[12px] font-bold text-outline">1月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[85%]"></div>
              <span className="text-[12px] font-bold text-outline">2月</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-lg">
            <span className="text-lg font-bold text-on-surface">目前平均</span>
            <span className="text-3xl font-black text-primary">$1,240</span>
          </div>
        </div>
      </section>

      {/* Section: Navigation Tabs */}
      <div className="flex gap-2 p-1 bg-surface-container rounded-xl">
        <button
          onClick={() => setActiveTab("inbound")}
          className={`flex-1 py-4 px-2 font-bold rounded-lg transition-all active:scale-95 ${
            activeTab === "inbound"
              ? "bg-surface-container-lowest text-primary shadow-sm border-2 border-primary"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          進貨明細
        </button>
        <button
          onClick={() => setActiveTab("outbound")}
          className={`flex-1 py-4 px-2 font-bold rounded-lg transition-all active:scale-95 ${
            activeTab === "outbound"
              ? "bg-surface-container-lowest text-primary shadow-sm border-2 border-primary"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          出貨明細
        </button>
      </div>

      {/* Section: High-Contrast Log List */}
      <div className="space-y-4">
        <h3 className="font-headline font-bold text-xl text-on-surface ml-1">最近紀錄</h3>
        <div className="flex flex-col space-y-3">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl flex justify-between items-center ${
                index % 2 === 0 ? "bg-surface-container-lowest shadow-sm" : "bg-surface-container-low"
              }`}
            >
              <div className="space-y-1">
                <p className="text-lg font-bold text-on-surface">{log.title}</p>
                <p className="text-sm font-medium text-outline uppercase tracking-wider">{log.date} • 批次 {log.batch}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`material-symbols-outlined font-black ${activeTab === 'inbound' ? 'text-secondary' : 'text-error'}`}
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {activeTab === 'inbound' ? 'add_circle' : 'remove_circle'}
                </span>
                <span className={`text-2xl font-black ${activeTab === 'inbound' ? 'text-secondary' : 'text-error'}`}>
                  {log.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB: Export Report */}
      <button
        onClick={handleExport}
        className="fixed bottom-28 right-6 bg-primary text-on-primary w-20 h-20 rounded-full shadow-2xl flex flex-col items-center justify-center transition-transform hover:scale-105 active:scale-90 z-40 border-4 border-white"
      >
        <span className="material-symbols-outlined text-3xl">download</span>
        <span className="text-[10px] font-black uppercase tracking-tighter">匯出報表</span>
      </button>
    </main>
  );
}
