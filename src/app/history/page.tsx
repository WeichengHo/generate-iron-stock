export default function HistoryPage() {
  return (
    <main className="max-w-md mx-auto px-4 pt-6 pb-32 space-y-8">
      {/* Section: Price Trends Chart */}
      <section className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-headline font-bold text-2xl tracking-tight text-on-surface">價格趨勢</h2>
          <span className="text-sm font-bold uppercase tracking-widest text-secondary">最近 6 個月</span>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6">
          {/* Simple Bar Chart Visualization */}
          <div className="flex items-end justify-between h-48 gap-2">
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[40%] transition-all"></div>
              <span className="text-[12px] font-bold text-outline">9月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[55%]"></div>
              <span className="text-[12px] font-bold text-outline">10月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[45%]"></div>
              <span className="text-[12px] font-bold text-outline">11月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-primary w-full rounded-t-lg h-[75%]"></div>
              <span className="text-[12px] font-bold text-on-surface">12月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[65%]"></div>
              <span className="text-[12px] font-bold text-outline">1月</span>
            </div>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className="bg-surface-container-high w-full rounded-t-lg h-[85%]"></div>
              <span className="text-[12px] font-bold text-outline">2月</span>
            </div>
          </div>
          <div className="flex justify-between items-center p-4 bg-surface-container-low rounded-lg">
            <span className="text-lg font-bold text-on-surface">目前平均</span>
            <span className="text-3xl font-black text-primary">$1,240</span>
          </div>
        </div>
      </section>

      {/* Section: Navigation Tabs */}
      <div className="flex gap-2 p-1 bg-surface-container rounded-xl">
        <button className="flex-1 py-4 px-2 bg-surface-container-lowest text-primary font-bold rounded-lg shadow-sm border-2 border-primary transition-transform active:scale-95">進貨明細</button>
        <button className="flex-1 py-4 px-2 text-on-surface-variant font-bold rounded-lg hover:bg-surface-container-high transition-transform active:scale-95">出貨明細</button>
      </div>

      {/* Section: High-Contrast Log List */}
      <div className="space-y-4">
        <h3 className="font-headline font-bold text-xl text-on-surface ml-1">最近紀錄</h3>
        <div className="flex flex-col space-y-3">
          {/* Log Card 1 */}
          <div className="bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center shadow-sm">
            <div className="space-y-1">
              <p className="text-lg font-bold text-on-surface">熱軋鋼捲</p>
              <p className="text-sm font-medium text-outline uppercase tracking-wider">2月 24 • 批次 #882</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <span className="text-2xl font-black text-secondary">+12.5t</span>
            </div>
          </div>

          {/* Log Card 2 (Zebra stripe effect) */}
          <div className="bg-surface-container-low p-5 rounded-xl flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-lg font-bold text-on-surface">結構工字鋼</p>
              <p className="text-sm font-medium text-outline uppercase tracking-wider">2月 22 • 批次 #901</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <span className="text-2xl font-black text-secondary">+48.0t</span>
            </div>
          </div>

          {/* Log Card 3 */}
          <div className="bg-surface-container-lowest p-5 rounded-xl flex justify-between items-center shadow-sm">
            <div className="space-y-1">
              <p className="text-lg font-bold text-on-surface">鋼筋</p>
              <p className="text-sm font-medium text-outline uppercase tracking-wider">2月 20 • 批次 #742</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <span className="text-2xl font-black text-secondary">+5.2t</span>
            </div>
          </div>

          {/* Log Card 4 */}
          <div className="bg-surface-container-low p-5 rounded-xl flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-lg font-bold text-on-surface">鍍鋅板</p>
              <p className="text-sm font-medium text-outline uppercase tracking-wider">2月 18 • 批次 #112</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary font-black" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <span className="text-2xl font-black text-secondary">+22.0t</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAB: Export Report */}
      <button className="fixed bottom-28 right-6 bg-primary text-on-primary w-20 h-20 rounded-full shadow-2xl flex flex-col items-center justify-center transition-transform active:scale-90 z-40 border-4 border-white">
        <span className="material-symbols-outlined text-3xl">download</span>
        <span className="text-[10px] font-black uppercase tracking-tighter">匯出報表</span>
      </button>
    </main>
  );
}
