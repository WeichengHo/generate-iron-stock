"use client";

import { useState } from "react";

type Batch = {
  id: string;
  weight: number;
  date: string;
  isFifo?: boolean;
};

export default function ShipPage() {
  const [shipmentWeight, setShipmentWeight] = useState(12.0);
  const [selectedBatches, setSelectedBatches] = useState<string[]>(["S-99218"]);

  const availableBatches: Batch[] = [
    { id: "S-99218", weight: 42.5, date: "10月12日", isFifo: true },
    { id: "S-99245", weight: 18.2, date: "10月28日" },
    { id: "S-99301", weight: 35.0, date: "11月04日" },
  ];

  const handleWeightChange = (delta: number) => {
    setShipmentWeight((prev) => Math.max(0, parseFloat((prev + delta).toFixed(1))));
  };

  const toggleBatch = (batchId: string) => {
    setSelectedBatches((prev) =>
      prev.includes(batchId)
        ? prev.filter((id) => id !== batchId)
        : [...prev, batchId]
    );
  };

  const handleSubmit = () => {
    if (selectedBatches.length === 0) {
      alert("請選擇至少一個批次！");
      return;
    }
    if (shipmentWeight <= 0) {
      alert("出貨重量必須大於0！");
      return;
    }
    alert(`出貨已確認！\n重量: ${shipmentWeight} 噸\n已選批次: ${selectedBatches.join(', ')}`);
  };

  return (
    <main className="flex-grow pt-8 pb-32 px-4 max-w-xl mx-auto w-full space-y-8">
      {/* FIFO Banner */}
      <section className="bg-primary-container text-on-primary-container rounded-xl p-6 flex items-start gap-4 shadow-sm border-l-8 border-primary">
        <span className="material-symbols-outlined text-4xl mt-1">priority_high</span>
        <div>
          <p className="font-bold text-[14px] uppercase tracking-wider mb-1 opacity-80">優先消耗最早庫存 (FIFO)</p>
          <h2 className="text-[24px] font-black leading-tight">批次 #S-99218</h2>
          <p className="text-[20px] font-medium mt-1">入庫時間：2023年10月12日 • 42.5 噸</p>
        </div>
      </section>

      {/* Main Input Section: Weight */}
      <section className="space-y-4">
        <label className="block text-[24px] font-bold text-on-surface pl-2">出貨重量 (噸)</label>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleWeightChange(-1)}
            className="w-[72px] h-[72px] bg-surface-container-highest flex items-center justify-center rounded-lg active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-4xl font-bold">remove</span>
          </button>
          <div className="flex-grow relative h-[72px] bg-surface-container-lowest border-2 border-primary rounded-lg overflow-hidden">
            <input
              className="w-full h-full text-center text-[32px] font-black text-primary bg-transparent border-none focus:ring-0"
              type="number"
              value={shipmentWeight}
              onChange={(e) => setShipmentWeight(parseFloat(e.target.value) || 0)}
              step="0.1"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">噸</span>
          </div>
          <button
            onClick={() => handleWeightChange(1)}
            className="w-[72px] h-[72px] bg-surface-container-highest flex items-center justify-center rounded-lg active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-4xl font-bold">add</span>
          </button>
        </div>
      </section>

      {/* Stock Batches List */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <h3 className="text-[24px] font-bold">選擇批次</h3>
          <span className="text-[14px] font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full uppercase">{availableBatches.length} 個可用</span>
        </div>
        <div className="space-y-4">
          {availableBatches.map((batch, index) => {
            const isSelected = selectedBatches.includes(batch.id);
            return (
              <div
                key={batch.id}
                onClick={() => toggleBatch(batch.id)}
                className={`cursor-pointer rounded-xl p-6 flex justify-between items-center transition-all duration-150 ${
                  isSelected
                    ? "bg-surface-container-lowest border-2 border-primary shadow-lg"
                    : `border border-transparent hover:bg-surface-container-high ${index % 2 === 0 && !isSelected ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${isSelected ? 'text-primary' : 'text-on-surface-variant'}`}>inventory</span>
                    <span className="font-black text-[22px]">#{batch.id}</span>
                  </div>
                  <p className="text-[20px] text-on-surface-variant leading-none">{batch.weight} 噸 <span className="mx-2 opacity-30">|</span> {batch.date}</p>

                  {batch.isFifo && (
                    <div className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg">
                      <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-[14px] font-bold uppercase tracking-wider">FIFO 優先</span>
                    </div>
                  )}
                </div>

                {isSelected ? (
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-white">check</span>
                    </div>
                    <span className="text-[12px] font-black uppercase text-primary">已選擇</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 border-4 border-outline-variant rounded-lg"></div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Shipment Summary */}
      <section className="bg-surface-container-high rounded-xl p-6 space-y-4">
        <h4 className="text-[18px] font-bold uppercase tracking-widest text-on-surface-variant">出貨明細</h4>
        <div className="flex justify-between items-center">
          <span className="text-[20px]">當前重量</span>
          <span className="text-[24px] font-black text-primary">{shipmentWeight.toFixed(1)} 噸</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[20px]">已選批次</span>
          <span className="text-[24px] font-black text-on-surface">{selectedBatches.length}</span>
        </div>
      </section>

      {/* Final Action Button */}
      <button
        onClick={handleSubmit}
        className="w-full h-[80px] bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white rounded-lg flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-transform group"
      >
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
        <span className="font-black text-[22px] uppercase tracking-wide">確認出貨</span>
      </button>
    </main>
  );
}
