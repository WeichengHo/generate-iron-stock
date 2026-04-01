"use client";

import { useState } from "react";

export default function HistoryPage() {
  const [activeTab, setActiveTab] = useState<"inbound" | "outbound">("inbound");

  return (
    <main className="flex-1 pb-32 overflow-y-auto w-full">
      {/* Tab Navigation */}
      <div className="bg-[#F1F5F9] flex px-6 py-4 sticky top-[72px] z-40 gap-4">
        <button
          onClick={() => setActiveTab("inbound")}
          className={`flex-1 py-3 px-2 text-[18px] text-center font-bold rounded-lg transition-all shadow-sm ${
            activeTab === "inbound" ? "text-white bg-primary" : "text-[#475569] bg-[#E2E8F0] hover:bg-[#CBD5E1]"
          }`}
        >
          進貨明細
        </button>
        <button
          onClick={() => setActiveTab("outbound")}
          className={`flex-1 py-3 px-2 text-[18px] text-center font-bold rounded-lg transition-all shadow-sm ${
            activeTab === "outbound" ? "text-white bg-primary" : "text-[#475569] bg-[#E2E8F0] hover:bg-[#CBD5E1]"
          }`}
        >
          出貨明細
        </button>
      </div>

      {activeTab === "inbound" && (
        <div className="p-6 space-y-8">
          {/* Data Cards: Machined Precision Style */}
          <div className="space-y-4">
            {/* Card 1: Detailed Entry */}
            <div className="bg-surface shadow-sm rounded-xl overflow-hidden group border border-border">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[14px] font-medium text-outline uppercase tracking-widest mb-1">PO# 20231025-001</p>
                    <h3 className="text-[20px] font-extrabold text-[#1E293B]">中龍鋼鐵股份有限公司</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[14px] font-medium text-outline">2023-10-25</span>
                    <div className="flex items-center justify-end text-success mt-1 bg-success/10 px-2 py-1 rounded-md">
                      <span className="material-symbols-outlined mr-1 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-[14px] font-bold">已入庫</span>
                    </div>
                  </div>
                </div>
                {/* Asymmetric Weight Display */}
                <div className="flex items-end justify-between bg-[#F8FAFC] p-4 rounded-lg border border-border">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-[16px] font-medium text-[#475569]">D13 x 12捆</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-[16px] font-medium text-[#475569]">D16 x 8捆</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[14px] font-bold text-primary uppercase">總重量</span>
                    <span className="text-[32px] font-black text-primary leading-none">24,500 <span className="text-[18px] font-bold">kg</span></span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F1F5F9] px-6 py-4 flex justify-between items-center border-t border-border">
                <span className="text-[16px] font-bold text-[#475569]">操作員：陳大明</span>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </div>

            {/* Card 2: Alternate Zebra Background */}
            <div className="bg-[#F8FAFC] shadow-sm rounded-xl overflow-hidden border border-border">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[14px] font-medium text-outline uppercase tracking-widest mb-1">PO# 20231024-042</p>
                    <h3 className="text-[20px] font-extrabold text-[#1E293B]">東和鋼鐵廠</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[14px] font-medium text-outline">2023-10-24</span>
                    <div className="flex items-center justify-end text-warning mt-1 bg-warning/10 px-2 py-1 rounded-md">
                      <span className="material-symbols-outlined mr-1 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                      <span className="text-[14px] font-bold">運輸中</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between bg-surface p-4 rounded-lg border border-border">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-warning rounded-full"></span>
                      <span className="text-[16px] font-medium text-[#475569]">D19 x 20捆</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[14px] font-bold text-primary uppercase">總重量</span>
                    <span className="text-[32px] font-black text-primary leading-none">18,200 <span className="text-[18px] font-bold">kg</span></span>
                  </div>
                </div>
              </div>
              <div className="bg-[#E2E8F0] px-6 py-4 flex justify-between items-center">
                <span className="text-[16px] font-bold text-[#475569]">操作員：李小華</span>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-surface shadow-sm rounded-xl overflow-hidden border border-border">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[14px] font-medium text-outline uppercase tracking-widest mb-1">PO# 20231022-015</p>
                    <h3 className="text-[20px] font-extrabold text-[#1E293B]">豐興鋼鐵</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[14px] font-medium text-outline">2023-10-22</span>
                    <div className="flex items-center justify-end text-success mt-1 bg-success/10 px-2 py-1 rounded-md">
                      <span className="material-symbols-outlined mr-1 text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-[14px] font-bold">已入庫</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-end justify-between bg-[#F8FAFC] p-4 rounded-lg border border-border">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-[16px] font-medium text-[#475569]">D13 x 15捆</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block text-[14px] font-bold text-primary uppercase">總重量</span>
                    <span className="text-[32px] font-black text-primary leading-none">12,450 <span className="text-[18px] font-bold">kg</span></span>
                  </div>
                </div>
              </div>
              <div className="bg-[#F1F5F9] px-6 py-4 flex justify-between items-center border-t border-border">
                <span className="text-[16px] font-bold text-[#475569]">操作員：陳大明</span>
                <span className="material-symbols-outlined text-primary">chevron_right</span>
              </div>
            </div>
          </div>

          {/* Pagination / Load More (Senior Friendly Button) */}
          <button className="w-full h-[64px] bg-[#F1F5F9] border-2 border-[#E2E8F0] hover:bg-[#E2E8F0] flex items-center justify-center gap-2 rounded-xl active:translate-y-[2px] transition-all text-[#1E293B]">
            <span className="material-symbols-outlined">expand_more</span>
            <span className="font-bold text-[18px] uppercase tracking-widest">查看更多歷史</span>
          </button>
        </div>
      )}

      {activeTab === "outbound" && (
        <div className="space-y-8 pb-8">
          {/* Summary Section */}
          <section className="px-6 pt-6">
            <div className="bg-surface rounded-xl p-6 shadow-sm border-l-8 border-primary border-y border-r border-[#E2E8F0]">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-outline font-bold text-[14px] tracking-widest uppercase mb-1">本月累計出貨</p>
                  <h2 className="text-[40px] font-black leading-none text-primary">24,500 <span className="text-[20px]">kg</span></h2>
                </div>
                <div className="bg-[#EFF6FF] p-3 rounded-lg">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                </div>
              </div>
            </div>
          </section>

          {/* Filters and Search */}
          <div className="px-6">
            <div className="relative">
              <input className="w-full h-[56px] pl-14 pr-4 bg-surface border border-[#E2E8F0] rounded-xl font-bold text-[18px] focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all placeholder:font-medium placeholder:text-[#94A3B8]" placeholder="搜尋公司名稱或規格..." type="text"/>
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-[#94A3B8]">search</span>
            </div>
          </div>

          {/* Shipment Detail List */}
          <div className="px-6 space-y-4">
            {/* List Header with Asymmetric Tension */}
            <div className="flex justify-between items-end mb-2">
              <h3 className="font-extrabold text-[20px] tracking-tight text-[#1E293B]">出貨明細</h3>
              <span className="text-outline font-bold text-[14px]">共 12 筆紀錄</span>
            </div>

            {/* Shipment Card 1 */}
            <div className="bg-surface rounded-[12px] p-6 shadow-sm flex flex-col gap-4 border-l-4 border-primary border-y border-r border-[#E2E8F0]">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-outline font-bold text-[14px] uppercase">2023.11.24</span>
                  <h4 className="text-[20px] font-extrabold text-[#1E293B]">大成營造股份有限公司</h4>
                </div>
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg space-y-3 border border-[#E2E8F0]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#475569]">3分筋 (D10)</span>
                  <span className="font-bold text-[18px] text-[#1E293B]">1,200 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#475569]">4分筋 (D13)</span>
                  <span className="font-bold text-[18px] text-[#1E293B]">3,500 kg</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-[14px] font-medium text-outline">單號: SH-20231124-082</p>
                <div className="flex items-center gap-2">
                  <span className="text-outline font-bold text-[14px]">總重:</span>
                  <span className="text-[20px] font-black text-primary">4,700 kg</span>
                </div>
              </div>
            </div>

            {/* Shipment Card 2 (Zebra Stripe Effect) */}
            <div className="bg-[#F8FAFC] rounded-[12px] p-6 shadow-sm flex flex-col gap-4 border-l-4 border-primary border-y border-r border-[#E2E8F0]">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-outline font-bold text-[14px] uppercase">2023.11.23</span>
                  <h4 className="text-[20px] font-extrabold text-[#1E293B]">建國工程開發案庫</h4>
                </div>
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <div className="bg-surface p-4 rounded-lg space-y-3 border border-[#E2E8F0]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#475569]">5分筋 (D16)</span>
                  <span className="font-bold text-[18px] text-[#1E293B]">8,800 kg</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-[14px] font-medium text-outline">單號: SH-20231123-015</p>
                <div className="flex items-center gap-2">
                  <span className="text-outline font-bold text-[14px]">總重:</span>
                  <span className="text-[20px] font-black text-primary">8,800 kg</span>
                </div>
              </div>
            </div>

            {/* Shipment Card 3 */}
            <div className="bg-surface rounded-[12px] p-6 shadow-sm flex flex-col gap-4 border-l-4 border-primary border-y border-r border-[#E2E8F0]">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-outline font-bold text-[14px] uppercase">2023.11.22</span>
                  <h4 className="text-[20px] font-extrabold text-[#1E293B]">三益建築工業</h4>
                </div>
                <span className="material-symbols-outlined text-primary">open_in_new</span>
              </div>
              <div className="bg-[#F8FAFC] p-4 rounded-lg space-y-3 border border-[#E2E8F0]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#475569]">3分筋 (D10)</span>
                  <span className="font-bold text-[18px] text-[#1E293B]">2,500 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-[#475569]">6分筋 (D19)</span>
                  <span className="font-bold text-[18px] text-[#1E293B]">11,000 kg</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-2">
                <p className="text-[14px] font-medium text-outline">單號: SH-20231122-104</p>
                <div className="flex items-center gap-2">
                  <span className="text-outline font-bold text-[14px]">總重:</span>
                  <span className="text-[20px] font-black text-primary">13,500 kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
