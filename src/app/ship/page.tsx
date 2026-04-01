export default function ShipPage() {
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
          <button className="w-[72px] h-[72px] bg-surface-container-highest flex items-center justify-center rounded-lg active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-4xl font-bold">remove</span>
          </button>
          <div className="flex-grow relative h-[72px] bg-surface-container-lowest border-2 border-primary rounded-lg overflow-hidden">
            <input className="w-full h-full text-center text-[32px] font-black text-primary bg-transparent border-none focus:ring-0" type="number" defaultValue="12.0" />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-bold">噸</span>
          </div>
          <button className="w-[72px] h-[72px] bg-surface-container-highest flex items-center justify-center rounded-lg active:scale-95 transition-transform">
            <span className="material-symbols-outlined text-4xl font-bold">add</span>
          </button>
        </div>
      </section>

      {/* Stock Batches List */}
      <section className="space-y-6">
        <div className="flex justify-between items-end px-2">
          <h3 className="text-[24px] font-bold">選擇批次</h3>
          <span className="text-[14px] font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full uppercase">3 個可用</span>
        </div>
        <div className="space-y-4">
          {/* Batch Card 1 (Selected) */}
          <div className="bg-surface-container-lowest rounded-xl p-6 border-2 border-primary shadow-lg flex justify-between items-center transition-all duration-150">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">inventory</span>
                <span className="font-black text-[22px]">#S-99218</span>
              </div>
              <p className="text-[20px] text-on-surface-variant leading-none">42.5 噸 <span className="mx-2 opacity-30">|</span> 10月12日</p>
              <div className="inline-flex items-center gap-2 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg">
                <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-[14px] font-bold uppercase tracking-wider">FIFO 優先</span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white">check</span>
              </div>
              <span className="text-[12px] font-black uppercase text-primary">已選擇</span>
            </div>
          </div>

          {/* Batch Card 2 */}
          <div className="bg-surface-container-low rounded-xl p-6 flex justify-between items-center border border-transparent">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">inventory</span>
                <span className="font-black text-[22px]">#S-99245</span>
              </div>
              <p className="text-[20px] text-on-surface-variant leading-none">18.2 噸 <span className="mx-2 opacity-30">|</span> 10月28日</p>
            </div>
            <div className="w-10 h-10 border-4 border-outline-variant rounded-lg"></div>
          </div>

          {/* Batch Card 3 (Zebra shift) */}
          <div className="bg-surface-container-lowest rounded-xl p-6 flex justify-between items-center border border-transparent">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface-variant">inventory</span>
                <span className="font-black text-[22px]">#S-99301</span>
              </div>
              <p className="text-[20px] text-on-surface-variant leading-none">35.0 噸 <span className="mx-2 opacity-30">|</span> 11月04日</p>
            </div>
            <div className="w-10 h-10 border-4 border-outline-variant rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Shipment Summary */}
      <section className="bg-surface-container-high rounded-xl p-6 space-y-4">
        <h4 className="text-[18px] font-bold uppercase tracking-widest text-on-surface-variant">出貨明細</h4>
        <div className="flex justify-between items-center">
          <span className="text-[20px]">當前重量</span>
          <span className="text-[24px] font-black text-primary">12.0 噸</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[20px]">已選批次</span>
          <span className="text-[24px] font-black text-on-surface">1</span>
        </div>
      </section>

      {/* Final Action Button */}
      <button className="w-full h-[80px] bg-gradient-to-br from-[#003178] to-[#0d47a1] text-white rounded-lg flex items-center justify-center gap-4 shadow-xl active:scale-95 transition-transform group">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
        <span className="font-black text-[22px] uppercase tracking-wide">確認出貨</span>
      </button>
    </main>
  );
}
