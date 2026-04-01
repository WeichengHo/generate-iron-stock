"use client";

import { useState, useMemo } from "react";

export default function RestockPage() {
  const [supplier, setSupplier] = useState("Global Steel Dynamics");
  const [selectedSize, setSelectedSize] = useState("3分");
  const [weight, setWeight] = useState(1200);
  const [costPerKg, setCostPerKg] = useState("");

  const sizes = [
    { id: "3分", label: "10mm" },
    { id: "4分", label: "13mm" },
    { id: "5分", label: "16mm" },
    { id: "6分", label: "19mm" },
  ];

  const handleWeightChange = (delta: number) => {
    setWeight((prev) => Math.max(0, prev + delta));
  };

  const estimatedTotal = useMemo(() => {
    const cost = parseFloat(costPerKg);
    if (isNaN(cost) || cost <= 0) return 0;
    return weight * cost;
  }, [weight, costPerKg]);

  const handleSubmit = () => {
    alert(`進貨資料已提交！\n供應商: ${supplier}\n尺寸: ${selectedSize}\n重量: ${weight} 公斤\n單價: $${costPerKg || 0}\n總金額: $${estimatedTotal.toLocaleString()}`);
  };

  return (
    <main className="w-full px-6 py-8 space-y-8">
      {/* Step 1: Select Supplier */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center font-black rounded-lg">1</span>
          <h2 className="text-[20px] font-extrabold text-[#1E293B]">選擇廠商</h2>
        </div>
        <div className="relative">
          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full h-[56px] bg-surface border border-border rounded-lg px-6 text-[18px] font-medium appearance-none focus:border-primary focus:ring-4 focus:ring-primary/20 hover:bg-[#F0F7FF] hover:border-primary transition-colors"
          >
            <option>Global Steel Dynamics</option>
            <option>Northern Foundry Co.</option>
            <option>Ironclad Materials Ltd.</option>
            <option>Titan Reinforcements</option>
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <span className="material-symbols-outlined text-outline">expand_more</span>
          </div>
        </div>
      </section>

      {/* Step 2: Choose Rebar Size */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center font-black rounded-lg">2</span>
          <h2 className="text-[20px] font-extrabold text-[#1E293B]">選擇鋼筋尺寸</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`flex flex-col items-center justify-center h-28 rounded-xl transition-transform active:scale-[0.98] ${
                selectedSize === size.id
                  ? "bg-primary text-white shadow-md border-2 border-primary"
                  : "bg-surface text-[#475569] border border-border hover:border-primary hover:bg-[#F0F7FF]"
              }`}
            >
              <span className="text-[32px] font-black leading-none">{size.id}</span>
              <span className={`text-[14px] mt-2 font-bold uppercase tracking-widest ${selectedSize === size.id ? 'text-white/80' : 'text-outline'}`}>規格 {size.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Step 3: Input Quantity */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center font-black rounded-lg">3</span>
          <h2 className="text-[20px] font-extrabold text-[#1E293B]">輸入重量 (kg)</h2>
        </div>
        <div className="flex items-center justify-between bg-surface border border-border p-4 rounded-xl shadow-sm">
          <button
            onClick={() => handleWeightChange(-100)}
            className="w-12 h-12 bg-[#F1F5F9] active:bg-[#E2E8F0] flex items-center justify-center rounded-lg text-[#1E293B] transition-colors"
          >
            <span className="material-symbols-outlined text-[32px] font-bold">remove</span>
          </button>
          <div className="text-center">
            <input
              className="w-32 bg-transparent border-none text-center text-[40px] font-black text-[#1E293B] focus:ring-0"
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
              step="10"
            />
            <div className="text-[14px] font-medium text-outline">kg</div>
          </div>
          <button
            onClick={() => handleWeightChange(100)}
            className="w-12 h-12 bg-[#F1F5F9] active:bg-[#E2E8F0] flex items-center justify-center rounded-lg text-[#1E293B] transition-colors"
          >
            <span className="material-symbols-outlined text-[32px] font-bold">add</span>
          </button>
        </div>
      </section>

      {/* Step 4: Cost per Unit */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-white w-10 h-10 flex items-center justify-center font-black rounded-lg">4</span>
          <h2 className="text-[20px] font-extrabold text-[#1E293B]">每公斤單價</h2>
        </div>
        <div className="relative">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[18px] font-medium text-outline">$</span>
          <input
            className="w-full h-[56px] bg-surface border border-border rounded-lg pl-12 pr-6 text-[18px] font-medium focus:border-primary focus:ring-4 focus:ring-primary/20 hover:bg-[#F0F7FF] hover:border-primary transition-colors"
            placeholder="24.5"
            type="number"
            step="0.1"
            value={costPerKg}
            onChange={(e) => setCostPerKg(e.target.value)}
          />
        </div>
      </section>

      {/* Calculated Total */}
      <section className="bg-primary-container p-6 rounded-xl space-y-2 border border-[#BFDBFE]">
        <p className="text-[14px] font-bold text-on-primary-container uppercase tracking-widest">預估總金額</p>
        <div className="flex items-baseline justify-between">
          <span className="text-[20px] font-bold text-on-primary-container">$</span>
          <span className="text-[40px] font-black leading-none text-primary">
            {estimatedTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
      </section>

      {/* Confirm Entry Button */}
      <button
        onClick={handleSubmit}
        className="w-full h-[64px] bg-primary text-white rounded-xl flex items-center justify-center gap-3 hover:bg-primary-dark active:translate-y-[-2px] transition-all shadow-sm"
      >
        <span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <span className="text-[20px] font-bold">確認存入</span>
      </button>
    </main>
  );
}
