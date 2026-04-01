import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-8 space-y-10">
      {/* Total Inventory Section */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-label-md uppercase tracking-widest text-on-surface-variant font-bold mb-1">鋼筋總庫存</p>
            <h2 className="text-[44px] font-black leading-none text-primary">1,248 公噸</h2>
          </div>
          <div className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-lg flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            <span className="font-bold text-sm uppercase tracking-wider">庫存充足</span>
          </div>
        </div>
      </section>

      {/* Primary Action Tiles */}
      <section className="grid grid-cols-1 gap-6">
        <Link href="/restock" className="h-[120px] w-full bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center px-8 shadow-lg active:scale-95 transition-transform text-left">
          <span className="material-symbols-outlined text-white text-5xl mr-6">inventory</span>
          <div>
            <span className="block text-white font-black text-2xl uppercase tracking-tight">進貨</span>
            <span className="block text-primary-fixed-dim text-lg">新增鋼材進貨</span>
          </div>
        </Link>
        <Link href="/ship" className="h-[120px] w-full bg-surface-container-lowest border-4 border-primary rounded-xl flex items-center px-8 shadow-md active:scale-95 transition-transform text-left">
          <span className="material-symbols-outlined text-primary text-5xl mr-6">local_shipping</span>
          <div>
            <span className="block text-primary font-black text-2xl uppercase tracking-tight">出貨</span>
            <span className="block text-on-surface-variant text-lg">訂單出貨處理</span>
          </div>
        </Link>
      </section>

      {/* Inventory List */}
      <section className="space-y-6">
        <h3 className="text-2xl font-black text-on-surface uppercase tracking-tight">各規格即時庫存</h3>
        <div className="space-y-4">
          {/* Size #3 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-6">
              <div className="bg-surface-container w-16 h-16 flex items-center justify-center rounded-lg border-2 border-outline-variant/20">
                <span className="text-2xl font-black text-primary">#3</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-on-surface">3/8&quot; 直徑</p>
                <p className="text-on-surface-variant text-xl">342 公噸</p>
              </div>
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-lg">
              <span className="font-bold text-sm uppercase tracking-wider">庫存正常</span>
            </div>
          </div>
          {/* Size #4 */}
          <div className="bg-surface-container-low p-6 rounded-xl flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-6">
              <div className="bg-surface-container w-16 h-16 flex items-center justify-center rounded-lg border-2 border-outline-variant/20">
                <span className="text-2xl font-black text-primary">#4</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-on-surface">1/2&quot; 直徑</p>
                <p className="text-on-surface-variant text-xl">412 公噸</p>
              </div>
            </div>
            <div className="bg-tertiary-container text-on-tertiary-container px-4 py-2 rounded-lg">
              <span className="font-bold text-sm uppercase tracking-wider">庫存正常</span>
            </div>
          </div>
          {/* Size #5 */}
          <div className="bg-surface-container-lowest p-6 rounded-xl flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-6">
              <div className="bg-surface-container w-16 h-16 flex items-center justify-center rounded-lg border-2 border-outline-variant/20">
                <span className="text-2xl font-black text-primary">#5</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-on-surface">5/8&quot; 直徑</p>
                <p className="text-on-surface-variant text-xl">12 公噸</p>
              </div>
            </div>
            <div className="bg-error-container text-on-error-container px-4 py-2 rounded-lg flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
              <span className="font-bold text-sm uppercase tracking-wider">庫存偏低</span>
            </div>
          </div>
          {/* Size #8 */}
          <div className="bg-surface-container-low p-6 rounded-xl flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-6">
              <div className="bg-surface-container w-16 h-16 flex items-center justify-center rounded-lg border-2 border-outline-variant/20">
                <span className="text-2xl font-black text-primary">#8</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-on-surface">1&quot; 直徑</p>
                <p className="text-error text-xl font-bold">0 公噸</p>
              </div>
            </div>
            <div className="bg-error text-on-error px-4 py-2 rounded-lg">
              <span className="font-bold text-sm uppercase tracking-wider">已斷貨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Visual */}
      <section className="rounded-2xl overflow-hidden relative h-[240px] shadow-xl">
        <img alt="Steel Rebar Warehouse" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdZ8PtFfaZ1BOYltbt2uIrekm3wn40zewUY0__-KheCdqoiXYsFaRjteA-1CAXfEiqhEj3j7vRoQs-TQD621xElfHtS7RXrw3m71FLHNlXyHuwncFNDwKeS8ZXpfJTGjT0pfU1Ky8lVqtvIzaIROM8FP1h8RGjq1ihy2yS4G2z5pgLAbIhQF1MVxDxGwiV6AKSZzR_hC6p0iZ4VZ9Q2UdtLjGMFa4EGb2KlJVkkkdvWp3j5WyITXovQqgoAw5O7j9c3djTvcT4yIo" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-8">
          <span className="text-white text-3xl font-black uppercase tracking-tight">第 4 號倉儲區 使用中</span>
          <span className="text-white/80 text-lg uppercase tracking-widest">最後掃描：今日 14:02</span>
        </div>
      </section>
    </main>
  );
}
