"use client";

import { useState } from "react";

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<"inbound" | "outbound">("inbound");

  return (
    <main className="flex-1 pb-24 overflow-y-auto w-full max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="bg-surface-container flex px-6 py-4 sticky top-[72px] z-40 gap-4">
        <button
          onClick={() => setActiveTab("inbound")}
          className={`flex-1 py-4 px-2 text-center font-bold rounded-xl transition-all ${activeTab === 'inbound' ? 'text-white bg-primary shadow-md' : 'text-neutral-600 bg-surface-container-high'}`}
        >
          進貨明細
        </button>
        <button
          onClick={() => setActiveTab("outbound")}
          className={`flex-1 py-4 px-2 text-center font-bold rounded-xl transition-all ${activeTab === 'outbound' ? 'text-white bg-primary shadow-md' : 'text-neutral-600 bg-surface-container-high'}`}
        >
          出貨明細
        </button>
      </div>

      {activeTab === "inbound" && (
        <div className="p-6 space-y-6">
          {/* Date Filter Label */}
          <div className="flex justify-between items-center border-l-4 border-primary pl-4">
            <h2 className="text-2xl font-black text-primary">2023年10月</h2>
            <span className="material-symbols-outlined text-outline">calendar_month</span>
          </div>

          {/* Data Cards: Machined Precision Style */}
          <div className="space-y-4">
            {/* Card 1: Detailed Entry */}
            <div className="bg-surface-container-lowest shadow-md rounded-md overflow-hidden group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-outline uppercase tracking-widest mb-1">PO# 20231025-001</p>
                    <h3 className="text-2xl font-bold text-on-surface">中龍鋼鐵股份有限公司</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-outline">2023-10-25</span>
                    <div className="flex items-center justify-end text-primary mt-1">
                      <span className="material-symbols-outlined mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-bold">已入庫</span>
                    </div>
                  </div>
                </div>
                {/* Asymmetric Weight Display */}
                <div className="flex items-end justify-between bg-surface-container-low p-4 rounded-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-xl font-medium text-on-surface-variant">D13 x 12捆</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-xl font-medium text-on-surface-variant">D16 x 8捆</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-primary uppercase">總重量</span>
                    <span className="text-4xl font-black text-primary">24,500 <small className="text-xl">kg</small></span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container px-6 py-3 flex justify-between items-center border-t border-outline-variant/10">
                <span className="text-lg font-bold text-on-surface-variant">操作員：陳大明</span>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </div>

            {/* Card 2: Alternate Zebra Background */}
            <div className="bg-surface-container-low shadow-sm rounded-md overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-outline uppercase tracking-widest mb-1">PO# 20231024-042</p>
                    <h3 className="text-2xl font-bold text-on-surface">東和鋼鐵廠</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-outline">2023-10-24</span>
                    <div className="flex items-center justify-end text-secondary mt-1">
                      <span className="material-symbols-outlined mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                      <span className="font-bold">運輸中</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between bg-surface-container-lowest p-4 rounded-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      <span className="text-xl font-medium text-on-surface-variant">D19 x 20捆</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-primary uppercase">總重量</span>
                    <span className="text-4xl font-black text-primary">18,200 <small className="text-xl">kg</small></span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-highest px-6 py-3 flex justify-between items-center">
                <span className="text-lg font-bold text-on-surface-variant">操作員：李小華</span>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface-container-lowest shadow-md rounded-md overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-outline uppercase tracking-widest mb-1">PO# 20231022-015</p>
                    <h3 className="text-2xl font-bold text-on-surface">豐興鋼鐵</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-outline">2023-10-22</span>
                    <div className="flex items-center justify-end text-primary mt-1">
                      <span className="material-symbols-outlined mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-bold">已入庫</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between bg-surface-container-low p-4 rounded-md">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-xl font-medium text-on-surface-variant">D13 x 15捆</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-bold text-primary uppercase">總重量</span>
                    <span className="text-4xl font-black text-primary">12,450 <small className="text-xl">kg</small></span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container px-6 py-3 flex justify-between items-center">
                <span className="text-lg font-bold text-on-surface-variant">操作員：陳大明</span>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Pagination / Load More (Senior Friendly Button) */}
          <button className="w-full h-[60px] bg-surface-container border-2 border-outline-variant/30 flex items-center justify-center gap-2 rounded-md active:scale-95 transition-transform mt-8">
            <span className="material-symbols-outlined">expand_more</span>
            <span className="font-bold text-xl uppercase tracking-widest">查看更多歷史</span>
          </button>
        </div>
      )}

      {activeTab === "outbound" && (
        <>
          {/* Summary Section */}
          <section className="p-6">
            <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border-l-8 border-primary">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-neutral-500 font-bold text-sm tracking-widest uppercase mb-1">本月累計出貨</p>
                  <h2 className="text-[44px] font-bold leading-none text-primary">24,500 <span className="text-xl">kg</span></h2>
                </div>
                <div className="bg-primary-fixed p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                </div>
              </div>
            </div>
          </section>

          {/* Filters and Search */}
          <div className="px-6 mb-6">
            <div className="relative">
              <input className="w-full h-16 pl-14 pr-4 bg-surface-container-lowest border-2 border-outline-variant/20 rounded-xl font-bold text-lg focus:ring-2 focus:ring-primary focus:border-primary" placeholder="搜尋公司名稱或規格..." type="text"/>
              <span className="material-symbols-outlined absolute left-5 top-5 text-neutral-400">search</span>
            </div>
          </div>

          {/* Shipment Detail List */}
          <div className="px-6 space-y-4">
            {/* List Header with Asymmetric Tension */}
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-bold text-2xl tracking-tight text-neutral-800">出貨明細</h3>
              <span className="text-neutral-500 font-bold text-sm">共 12 筆紀錄</span>
            </div>

            {/* Shipment Card 1 */}
            <div className="bg-surface-container-lowest rounded-[12px] p-6 shadow-sm flex flex-col gap-4 border-l-4 border-primary">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-neutral-500 font-bold text-sm uppercase">2023.11.24</span>
                  <h4 className="text-2xl font-bold text-on-surface">大成營造股份有限公司</h4>
                </div>
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-600">3分筋 (D10)</span>
                  <span className="font-bold text-xl text-on-surface">1,200 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-600">4分筋 (D13)</span>
                  <span className="font-bold text-xl text-on-surface">3,500 kg</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-sm font-bold text-neutral-400">單號: SH-20231124-082</p>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 font-bold text-sm">總重:</span>
                  <span className="text-2xl font-bold text-primary">4,700 kg</span>
                </div>
              </div>
            </div>

            {/* Shipment Card 2 (Zebra Stripe Effect) */}
            <div className="bg-surface-container rounded-[12px] p-6 shadow-sm flex flex-col gap-4 border-l-4 border-primary">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-neutral-500 font-bold text-sm uppercase">2023.11.23</span>
                  <h4 className="text-2xl font-bold text-on-surface">建國工程開發案庫</h4>
                </div>
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-600">5分筋 (D16)</span>
                  <span className="font-bold text-xl text-on-surface">8,800 kg</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-sm font-bold text-neutral-400">單號: SH-20231123-015</p>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 font-bold text-sm">總重:</span>
                  <span className="text-2xl font-bold text-primary">8,800 kg</span>
                </div>
              </div>
            </div>

            {/* Shipment Card 3 */}
            <div className="bg-surface-container-lowest rounded-[12px] p-6 shadow-sm flex flex-col gap-4 border-l-4 border-primary">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-neutral-500 font-bold text-sm uppercase">2023.11.22</span>
                  <h4 className="text-2xl font-bold text-on-surface">三益建築工業</h4>
                </div>
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-600">3分筋 (D10)</span>
                  <span className="font-bold text-xl text-on-surface">2,500 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-neutral-600">6分筋 (D19)</span>
                  <span className="font-bold text-xl text-on-surface">11,000 kg</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-sm font-bold text-neutral-400">單號: SH-20231122-104</p>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-500 font-bold text-sm">總重:</span>
                  <span className="text-2xl font-bold text-primary">13,500 kg</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
