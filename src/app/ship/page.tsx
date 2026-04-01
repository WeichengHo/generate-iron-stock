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
    <main className="max-w-3xl mx-auto p-6 space-y-8 pb-32">
      {/* Buyer Section */}
      <section className="space-y-4">
        <label className="block font-headline text-2xl font-bold tracking-tight text-on-surface">Buyer Company</label>
        <div className="relative">
          <input className="w-full h-16 px-6 text-xl bg-surface-container-lowest border-2 border-outline-variant/20 rounded-lg focus:outline-none focus:border-primary focus:ring-0 transition-all placeholder:text-on-surface-variant/40" placeholder="取引先名を入力" type="text"/>
          <span className="absolute right-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">business</span>
        </div>
      </section>

      {/* Specifications List */}
      <section className="space-y-4">
        <div className="flex justify-between items-end mb-2">
          <h2 className="font-headline text-2xl font-bold">品目詳細</h2>
          <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Stock & Weight</span>
        </div>
        <div className="space-y-3">
          {/* Spec Card 1 */}
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm grid grid-cols-12 gap-6 items-center">
            <div className="col-span-3">
              <span className="block text-3xl font-black text-primary tracking-tighter">3分</span>
              <span className="text-sm font-bold text-on-surface-variant/60">規格</span>
            </div>
            <div className="col-span-4 px-4 py-2 bg-surface-container rounded flex flex-col justify-center">
              <span className="text-xs font-bold text-on-surface-variant uppercase">在庫量</span>
              <span className="text-xl font-bold text-on-tertiary-fixed-variant">1,240 kg</span>
            </div>
            <div className="col-span-5 relative">
              <input
                className="w-full h-14 pl-4 pr-12 text-xl font-bold bg-surface-bright border-2 border-outline-variant/20 rounded focus:border-primary focus:ring-0 transition-all"
                placeholder="0"
                type="number"
                value={weight3}
                onChange={(e) => setWeight3(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">kg</span>
            </div>
          </div>

          {/* Spec Card 2 */}
          <div className="bg-surface-container-low p-6 rounded-lg shadow-sm grid grid-cols-12 gap-6 items-center">
            <div className="col-span-3">
              <span className="block text-3xl font-black text-primary tracking-tighter">4分</span>
              <span className="text-sm font-bold text-on-surface-variant/60">規格</span>
            </div>
            <div className="col-span-4 px-4 py-2 bg-surface-container-highest rounded flex flex-col justify-center">
              <span className="text-xs font-bold text-on-surface-variant uppercase">在庫量</span>
              <span className="text-xl font-bold text-on-tertiary-fixed-variant">890 kg</span>
            </div>
            <div className="col-span-5 relative">
              <input
                className="w-full h-14 pl-4 pr-12 text-xl font-bold bg-surface-bright border-2 border-outline-variant/20 rounded focus:border-primary focus:ring-0 transition-all"
                placeholder="0"
                type="number"
                value={weight4}
                onChange={(e) => setWeight4(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">kg</span>
            </div>
          </div>

          {/* Spec Card 3 */}
          <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm grid grid-cols-12 gap-6 items-center">
            <div className="col-span-3">
              <span className="block text-3xl font-black text-primary tracking-tighter">5分</span>
              <span className="text-sm font-bold text-on-surface-variant/60">規格</span>
            </div>
            <div className="col-span-4 px-4 py-2 bg-surface-container rounded flex flex-col justify-center">
              <span className="text-xs font-bold text-on-surface-variant uppercase">在庫量</span>
              <span className="text-xl font-bold text-on-error-container">45 kg</span>
            </div>
            <div className="col-span-5 relative">
              <input
                className="w-full h-14 pl-4 pr-12 text-xl font-bold bg-surface-bright border-2 border-outline-variant/20 rounded focus:border-primary focus:ring-0 transition-all"
                placeholder="0"
                type="number"
                value={weight5}
                onChange={(e) => setWeight5(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-on-surface-variant">kg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Total Weight Display */}
      <div className="bg-primary-container text-white p-8 rounded-xl shadow-lg border-l-8 border-primary flex flex-col items-center justify-center space-y-2">
        <span className="text-on-primary-container text-sm font-bold uppercase tracking-[0.2em]">Total Shipment Weight</span>
        <div className="flex items-baseline gap-2">
          <span className="text-[48px] font-black leading-none">{totalWeight.toLocaleString()}</span>
          <span className="text-2xl font-bold opacity-80">kg</span>
        </div>
      </div>

      {/* Bottom Action Button */}
      <div className="fixed bottom-[90px] left-0 w-full px-6 py-4 bg-surface/90 backdrop-blur-md z-40">
        <button className="w-full h-[56px] bg-primary text-on-primary font-black text-xl rounded-lg shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-3">
          <span className="material-symbols-outlined">local_shipping</span>
          <span>確認出貨</span>
        </button>
      </div>
    </main>
  );
}
