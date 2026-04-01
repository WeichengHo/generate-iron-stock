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
            <h2 className="text-[44px] font-black leading-none text-primary">1,248 公斤</h2>
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
                <p className="text-on-surface-variant text-xl">342 公斤</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-tertiary-container text-on-tertiary-container rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
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
                <p className="text-on-surface-variant text-xl">412 公斤</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-tertiary-container text-on-tertiary-container rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
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
                <p className="text-on-surface-variant text-xl">12 公斤</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-error-container text-on-error-container rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
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
                <p className="text-error text-xl font-bold">0 公斤</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-error text-on-error rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
