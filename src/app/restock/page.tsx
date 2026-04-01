export default function RestockPage() {
  return (
    <main className="max-w-md mx-auto px-6 py-8 space-y-10 pb-[120px]">
      {/* Step 1: Select Supplier */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">1</span>
          <h2 className="text-xl font-bold text-on-surface">選擇廠商</h2>
        </div>
        <div className="relative">
          <select className="w-full h-[72px] bg-surface-container-lowest border-2 border-outline-variant/20 rounded-lg px-6 text-lg font-bold appearance-none focus:border-primary focus:ring-0 focus:bg-surface-container-lowest">
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
          {/* Size Card Active */}
          <button className="flex flex-col items-center justify-center h-32 bg-primary-container text-white rounded-xl border-4 border-primary shadow-lg transition-transform active:scale-95">
            <span className="text-4xl font-black leading-none">#3</span>
            <span className="text-sm font-bold uppercase tracking-widest mt-1">10mm</span>
          </button>
          {/* Size Card Inactive */}
          <button className="flex flex-col items-center justify-center h-32 bg-surface-container-lowest text-on-surface-variant rounded-xl border-2 border-outline-variant/20 transition-transform active:scale-95">
            <span className="text-4xl font-black leading-none">#4</span>
            <span className="text-sm font-bold uppercase tracking-widest mt-1">13mm</span>
          </button>
          <button className="flex flex-col items-center justify-center h-32 bg-surface-container-lowest text-on-surface-variant rounded-xl border-2 border-outline-variant/20 transition-transform active:scale-95">
            <span className="text-4xl font-black leading-none">#5</span>
            <span className="text-sm font-bold uppercase tracking-widest mt-1">16mm</span>
          </button>
          <button className="flex flex-col items-center justify-center h-32 bg-surface-container-lowest text-on-surface-variant rounded-xl border-2 border-outline-variant/20 transition-transform active:scale-95">
            <span className="text-4xl font-black leading-none">#6</span>
            <span className="text-sm font-bold uppercase tracking-widest mt-1">19mm</span>
          </button>
        </div>
      </section>

      {/* Step 3: Input Quantity */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">3</span>
          <h2 className="text-xl font-bold text-on-surface">輸入重量 (公噸)</h2>
        </div>
        <div className="flex items-center justify-between bg-surface-container p-3 rounded-2xl">
          <button className="w-20 h-20 bg-surface-container-lowest flex items-center justify-center rounded-xl border-2 border-outline-variant/20 text-primary active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[40px] font-black">remove</span>
          </button>
          <div className="text-center">
            <input className="w-32 bg-transparent border-none text-center text-[48px] font-black text-on-surface focus:ring-0" type="number" defaultValue="12" />
            <div className="text-sm font-bold uppercase tracking-tighter text-slate-500 -mt-2">公噸</div>
          </div>
          <button className="w-20 h-20 bg-surface-container-lowest flex items-center justify-center rounded-xl border-2 border-outline-variant/20 text-primary active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[40px] font-black">add</span>
          </button>
        </div>
      </section>

      {/* Step 4: Cost per Ton */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-on-primary w-10 h-10 flex items-center justify-center font-black rounded-lg">4</span>
          <h2 className="text-xl font-bold text-on-surface">每噸單價</h2>
        </div>
        <div className="relative">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-lg font-bold text-slate-400">NT$</span>
          <input className="w-full h-[72px] bg-surface-container-lowest border-2 border-outline-variant/20 rounded-lg pl-16 pr-6 text-lg font-bold focus:border-primary focus:ring-0" placeholder="24,500" type="number" />
        </div>
      </section>

      {/* Calculated Total */}
      <section className="bg-secondary-container/30 border-2 border-secondary p-6 rounded-2xl space-y-2">
        <p className="text-sm font-black uppercase tracking-widest text-on-secondary-container opacity-80">預估總金額</p>
        <div className="flex items-baseline justify-between">
          <span className="text-xl font-bold text-on-secondary-container">NT$</span>
          <span className="text-[44px] font-black leading-none text-secondary tracking-tight">294,000</span>
        </div>
      </section>

      {/* Confirm Entry Button */}
      <button className="w-full h-[80px] bg-primary text-on-primary rounded-xl flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <span className="text-lg font-black uppercase tracking-widest">確認存入</span>
      </button>
    </main>
  );
}
