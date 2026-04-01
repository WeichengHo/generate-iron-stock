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
    <main className="max-w-md mx-auto px-6 py-8 space-y-10">
      {/* Step 1: Select Supplier */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">1</span>
          <h2 className="text-xl font-bold text-on-surface">選擇廠商</h2>
        </div>
        <div className="relative">
          <select
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
            className="w-full h-[72px] bg-surface-container-lowest border-2 border-outline-variant/20 rounded-lg px-6 text-lg font-bold appearance-none focus:border-primary focus:ring-0 focus:bg-surface-container-lowest"
          >
            <option>Global Steel Dynamics</option>
            <option>Northern Foundry Co.</option>
            <option>Ironclad Materials Ltd.</option>
            <option>Titan Reinforcements</option>
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
            <span className="material-symbols-outlined text-primary scale-125">expand_more</span>
          </div>
        </div>
      </section>

      {/* Step 2: Choose Rebar Size */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">2</span>
          <h2 className="text-xl font-bold text-on-surface">選擇鋼筋尺寸</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => setSelectedSize(size.id)}
              className={`flex flex-col items-center justify-center h-32 rounded-xl transition-transform active:scale-95 ${
                selectedSize === size.id
                  ? "bg-primary-container text-white border-4 border-primary shadow-lg"
                  : "bg-surface-container-lowest text-on-surface-variant border-2 border-outline-variant/20"
              }`}
            >
              <span className="text-4xl font-black leading-none">{size.id}</span>
              <span className="text-sm font-bold uppercase tracking-widest mt-1">{size.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Step 3: Input Quantity */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">3</span>
          <h2 className="text-xl font-bold text-on-surface">輸入重量 (公斤)</h2>
        </div>
        <div className="flex items-center justify-between bg-surface-container p-3 rounded-2xl">
          <button
            onClick={() => handleWeightChange(-100)}
            className="w-20 h-20 bg-surface-container-lowest flex items-center justify-center rounded-xl border-2 border-outline-variant/20 text-primary active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[40px] font-black">remove</span>
          </button>
          <div className="text-center">
            <input
              className="w-32 bg-transparent border-none text-center text-[48px] font-black text-on-surface focus:ring-0"
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
              step="10"
            />
            <div className="text-sm font-bold uppercase tracking-tighter text-slate-500 -mt-2">公斤</div>
          </div>
          <button
            onClick={() => handleWeightChange(100)}
            className="w-20 h-20 bg-surface-container-lowest flex items-center justify-center rounded-xl border-2 border-outline-variant/20 text-primary active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-[40px] font-black">add</span>
          </button>
        </div>
      </section>

      {/* Step 4: Cost per Unit */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">4</span>
          <h2 className="text-xl font-bold text-on-surface">每公斤單價</h2>
        </div>
        <div className="relative">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">NT$</span>
          <input
            className="w-full h-[72px] bg-surface-container-lowest border-2 border-outline-variant/20 rounded-lg pl-16 pr-6 text-lg font-bold focus:border-primary focus:ring-0"
            placeholder="24.5"
            type="number"
            step="0.1"
            value={costPerKg}
            onChange={(e) => setCostPerKg(e.target.value)}
          />
        </div>
      </section>

      {/* Calculated Total */}
      <section className="bg-secondary-container/30 border-2 border-secondary p-6 rounded-2xl space-y-2">
        <p className="text-sm font-black uppercase tracking-widest text-on-secondary-container opacity-80">預估總金額</p>
        <div className="flex items-baseline justify-between">
          <span className="text-xl font-bold text-on-secondary-container">NT$</span>
          <span className="text-[44px] font-black leading-none text-secondary tracking-tight">
            {estimatedTotal.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </span>
        </div>
      </section>

      {/* Confirm Entry Button */}
      <button
        onClick={handleSubmit}
        className="w-full h-[80px] bg-primary text-on-primary rounded-xl flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <span className="text-lg font-black uppercase tracking-widest">確認存入</span>
      </button>
    </main>
  );
}
