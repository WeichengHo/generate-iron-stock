"use client";

import { useState } from "react";

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<"inbound" | "outbound">("inbound");

  const handleExport = () => {
    alert(`正在準備匯出${activeTab === "inbound" ? "進貨" : "出貨"}報表...`);
  };

  const inboundLogs = [
    { title: "鋼筋 4分", date: "2026年2月24日", batch: "882", amount: "+12.5 公斤", type: "inbound" },
    { title: "鋼筋 3分", date: "2026年2月22日", batch: "901", amount: "+48.0 公斤", type: "inbound" },
    { title: "鋼筋 5分", date: "2026年2月20日", batch: "742", amount: "+5.2 公斤", type: "inbound" },
  ];

  const outboundLogs = [
    {
      company: "宏達工程有限公司",
      date: "2026年2月26日",
      items: [
        { name: "3分筋", amount: "1,200 公斤" },
        { name: "4分筋", amount: "500 公斤" },
      ],
      total: "1,700 公斤",
      status: "已出貨",
      borderColor: "border-primary",
    },
    {
      company: "泰和營造廠",
      date: "2026年2月24日",
      items: [
        { name: "5分筋", amount: "2,450 公斤" },
      ],
      total: "2,450 公斤",
      status: "已出貨",
      borderColor: "border-primary-container",
    },
    {
      company: "中鋼結構股份有限公司",
      date: "2026年2月20日",
      items: [
        { name: "3分筋", amount: "8,000 公斤" },
        { name: "6分筋", amount: "4,200 公斤" },
      ],
      total: "12,200 公斤",
      status: "已出貨",
      borderColor: "border-primary",
    },
  ];

  return (
    <main className="max-w-md mx-auto px-4 py-6 space-y-6">
      {/* Section: Navigation Tabs */}
      <div className="flex gap-2 p-1 bg-surface-container rounded-xl">
        <button
          onClick={() => setActiveTab("inbound")}
          className={`flex-1 py-4 px-2 font-bold rounded-lg transition-transform active:scale-95 ${
            activeTab === "inbound"
              ? "bg-surface-container-lowest text-primary shadow-sm border-2 border-primary"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          進貨明細
        </button>
        <button
          onClick={() => setActiveTab("outbound")}
          className={`flex-1 py-4 px-2 font-bold rounded-lg transition-transform active:scale-95 ${
            activeTab === "outbound"
              ? "bg-surface-container-lowest text-primary shadow-sm border-2 border-primary"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          出貨明細
        </button>
      </div>

      {activeTab === "inbound" && (
        <>
          {/* Section: Price Trends Chart */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between px-1">
              <h2 className="text-[24px] font-black text-on-surface">價格趨勢</h2>
              <span className="text-[16px] font-bold text-secondary">最近 6 個月</span>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border-l-[8px] border-secondary-fixed space-y-6">
              {/* Simple Bar Chart Visualization */}
              <div className="flex items-end justify-between h-40 gap-3">
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-surface-container-high w-full rounded-t-lg h-[40%]"></div>
                  <span className="text-[12px] font-bold text-slate-400">9月</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-surface-container-high w-full rounded-t-lg h-[55%]"></div>
                  <span className="text-[12px] font-bold text-slate-400">10月</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-surface-container-high w-full rounded-t-lg h-[45%]"></div>
                  <span className="text-[12px] font-bold text-slate-400">11月</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-primary w-full rounded-t-lg h-[75%]"></div>
                  <span className="text-[12px] font-bold text-on-surface">12月</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-surface-container-high w-full rounded-t-lg h-[65%]"></div>
                  <span className="text-[12px] font-bold text-slate-400">1月</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="bg-surface-container-high w-full rounded-t-lg h-[85%]"></div>
                  <span className="text-[12px] font-bold text-slate-400">2月</span>
                </div>
              </div>
              <div className="flex justify-between items-center p-5 bg-surface-container-low rounded-lg">
                <span className="text-[20px] font-bold text-on-surface">目前平均</span>
                <span className="text-[32px] font-black text-primary">$1,240</span>
              </div>
            </div>
          </section>

          {/* Section: Recent Inbound Logs */}
          <div className="space-y-6">
            <h3 className="text-[24px] font-black text-on-surface px-1">最近紀錄</h3>
            {inboundLogs.map((log, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? "bg-surface-container-lowest border-primary" : "bg-surface-container-low border-primary-container"} rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden border-l-[8px]`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-slate-500 text-[16px] font-medium mb-1">{log.date}</p>
                      <h2 className="text-[28px] font-black text-on-surface leading-tight">{log.title}</h2>
                    </div>
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded text-sm font-bold">進貨</span>
                  </div>
                  <div className={`${index % 2 === 0 ? "bg-surface-container-low" : "bg-surface-container-lowest"} rounded-lg p-5`}>
                    <div className="flex justify-between items-center text-[20px]">
                      <span className="text-on-surface-variant font-bold">批次 #{log.batch}</span>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
                        <span className="text-on-surface font-black">{log.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === "outbound" && (
        <div className="space-y-6">
          {outboundLogs.map((log, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"} rounded-xl shadow-sm overflow-hidden border-l-[8px] ${log.borderColor}`}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-outline text-[14px] font-medium mb-1">{log.date}</p>
                    <h2 className="text-[24px] font-black text-on-surface leading-tight">{log.company}</h2>
                  </div>
                  <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded text-xs font-bold whitespace-nowrap">{log.status}</span>
                </div>
                <div className={`${index % 2 === 0 ? "bg-surface-container-low" : "bg-surface-container-lowest"} rounded-lg p-4 space-y-3`}>
                  {log.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-[18px]">
                      <span className="text-on-surface-variant font-bold">{item.name}</span>
                      <span className="text-on-surface font-black">{item.amount}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex justify-between items-baseline border-t border-dashed border-outline-variant pt-4">
                  <span className="text-on-surface-variant font-bold text-[16px]">總計重量</span>
                  <span className="text-[28px] font-black text-primary">{log.total}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FAB: Export Report */}
      <button
        onClick={handleExport}
        className="fixed bottom-28 right-6 bg-primary text-on-primary w-20 h-20 rounded-2xl shadow-2xl flex flex-col items-center justify-center transition-transform hover:scale-105 active:scale-90 z-40 border-4 border-white"
      >
        <span className="material-symbols-outlined text-3xl">download</span>
        <span className="text-[12px] font-black uppercase tracking-tight">報表</span>
      </button>
    </main>
  );
}
