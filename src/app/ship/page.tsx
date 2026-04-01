"use client";

import { useState } from "react";

export default function ShipPage() {
  const [weight3, setWeight3] = useState("");
  const [weight4, setWeight4] = useState("");
  const [weight5, setWeight5] = useState("");

  const w3 = parseFloat(weight3) || 0;
  const w4 = parseFloat(weight4) || 0;
  const w5 = parseFloat(weight5) || 0;

  const totalWeight = w3 + w4 + w5;

  return (
    <main className="w-full p-6 space-y-8 pb-32">
      {/* Buyer Section */}
      <section className="space-y-4">
        <label className="block text-[20px] font-extrabold text-[#1E293B]">選擇客戶</label>
        <div className="relative">
          <input className="w-full h-[56px] px-6 text-[18px] bg-surface border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-primary transition-all placeholder:text-outline-variant font-medium text-[#1E293B]" placeholder="請輸入客戶名稱" type="text"/>
          <span className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">business</span>
        </div>
      </section>

      {/* Specifications List */}
      <section className="space-y-4">
        <div className="flex justify-between items-end mb-2">
          <h2 className="text-[20px] font-extrabold text-[#1E293B]">出貨明細</h2>
          <span className="text-[14px] font-bold text-outline uppercase tracking-widest">目前庫存與出貨量</span>
        </div>
        <div className="space-y-4">
          {/* Spec Card 1 */}
          <div className="bg-surface p-6 rounded-xl shadow-sm grid grid-cols-12 gap-4 items-center border border-border">
            <div className="col-span-3">
              <span className="block text-[32px] font-black text-primary tracking-tighter">3分</span>
              <span className="text-[14px] font-medium text-outline">規格</span>
            </div>
            <div className="col-span-4 px-2 py-2 bg-[#F1F5F9] rounded-lg flex flex-col items-center justify-center">
              <span className="text-[12px] font-bold text-outline uppercase">庫存量</span>
              <span className="text-[18px] font-bold text-success">1,240 kg</span>
            </div>
            <div className="col-span-5 relative">
              <input
                className="w-full h-[56px] pl-4 pr-12 text-[20px] font-bold bg-surface border border-border rounded-lg focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-center text-[#1E293B]"
                placeholder="0"
                type="number"
                value={weight3}
                onChange={(e) => setWeight3(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-outline">kg</span>
            </div>
          </div>

          {/* Spec Card 2 */}
          <div className="bg-surface p-6 rounded-xl shadow-sm grid grid-cols-12 gap-4 items-center border border-border">
            <div className="col-span-3">
              <span className="block text-[32px] font-black text-primary tracking-tighter">4分</span>
              <span className="text-[14px] font-medium text-outline">規格</span>
            </div>
            <div className="col-span-4 px-2 py-2 bg-[#F1F5F9] rounded-lg flex flex-col items-center justify-center">
              <span className="text-[12px] font-bold text-outline uppercase">庫存量</span>
              <span className="text-[18px] font-bold text-success">890 kg</span>
            </div>
            <div className="col-span-5 relative">
              <input
                className="w-full h-[56px] pl-4 pr-12 text-[20px] font-bold bg-surface border border-border rounded-lg focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-center text-[#1E293B]"
                placeholder="0"
                type="number"
                value={weight4}
                onChange={(e) => setWeight4(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-outline">kg</span>
            </div>
          </div>

          {/* Spec Card 3 */}
          <div className="bg-surface p-6 rounded-xl shadow-sm grid grid-cols-12 gap-4 items-center border border-border">
            <div className="col-span-3">
              <span className="block text-[32px] font-black text-primary tracking-tighter">5分</span>
              <span className="text-[14px] font-medium text-outline">規格</span>
            </div>
            <div className="col-span-4 px-2 py-2 bg-[#F1F5F9] rounded-lg flex flex-col items-center justify-center">
              <span className="text-[12px] font-bold text-outline uppercase">庫存量</span>
              <span className="text-[18px] font-bold text-warning">45 kg</span>
            </div>
            <div className="col-span-5 relative">
              <input
                className="w-full h-[56px] pl-4 pr-12 text-[20px] font-bold bg-surface border border-border rounded-lg focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-center text-[#1E293B]"
                placeholder="0"
                type="number"
                value={weight5}
                onChange={(e) => setWeight5(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-outline">kg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Total Weight Display */}
      <div className="bg-primary-container p-6 rounded-xl space-y-2 border border-[#BFDBFE]">
        <p className="text-[14px] font-bold text-on-primary-container uppercase tracking-widest text-center">本次出貨總重量</p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-[48px] font-black leading-none text-primary">{totalWeight.toLocaleString()}</span>
          <span className="text-[20px] font-bold text-primary/80">kg</span>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-[90px] left-1/2 -translate-x-1/2 w-full max-w-lg px-6 py-4 bg-background/90 backdrop-blur-md z-40">
        <button className="w-full h-[64px] bg-primary text-white font-bold text-[20px] rounded-xl shadow-sm active:translate-y-[-2px] hover:bg-primary-dark transition-all flex items-center justify-center gap-3">
          <span className="material-symbols-outlined">local_shipping</span>
          <span>確認出貨</span>
        </button>
      </div>
    </main>
  );
}
