import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="px-6 py-8 space-y-8 w-full">
      {/* Total Inventory Section */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[14px] uppercase tracking-widest text-outline font-bold mb-1">鋼筋總庫存</p>
            <h2 className="text-[48px] font-black leading-none text-primary">1,248 <span className="text-xl">kg</span></h2>
          </div>
          <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center justify-center gap-2 mb-2 w-10 h-10">
            <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>
      </section>

      {/* Main Action Buttons */}
      <section className="grid grid-cols-1 gap-4">
        <Link href="/restock" className="h-[120px] w-full bg-primary hover:bg-primary-dark rounded-xl flex items-center px-8 shadow-sm active:translate-y-[-2px] transition-transform text-left group border border-border">
          <span className="material-symbols-outlined text-white text-5xl mr-6">inventory</span>
          <div>
            <span className="block text-white font-black text-24px uppercase tracking-tight">進貨</span>
            <span className="block text-white/80 text-lg">新增鋼材進貨</span>
          </div>
        </Link>
        <Link href="/ship" className="h-[120px] w-full bg-surface border-2 border-primary rounded-xl flex items-center px-8 shadow-sm active:translate-y-[-2px] transition-transform text-left">
          <span className="material-symbols-outlined text-primary text-5xl mr-6">local_shipping</span>
          <div>
            <span className="block text-primary font-black text-24px uppercase tracking-tight">出貨</span>
            <span className="block text-outline-variant text-lg">訂單出貨處理</span>
          </div>
        </Link>
      </section>

      {/* Inventory Breakdown List */}
      <section className="space-y-4">
        <h3 className="text-[20px] font-extrabold text-[#1E293B] uppercase tracking-tight">各規格即時庫存</h3>
        <div className="space-y-4">

          <div className="bg-surface p-6 rounded-xl flex justify-between items-center shadow-sm border border-border">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg border-2 border-border">
                <span className="text-2xl font-black text-primary">3分</span>
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#475569]">規格 3/8&quot;</p>
                <p className="text-[20px] font-bold text-[#1E293B]">342 kg</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-xl flex justify-between items-center shadow-sm border border-border">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg border-2 border-border">
                <span className="text-2xl font-black text-primary">4分</span>
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#475569]">規格 1/2&quot;</p>
                <p className="text-[20px] font-bold text-[#1E293B]">412 kg</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-xl flex justify-between items-center shadow-sm border border-border">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg border-2 border-border">
                <span className="text-2xl font-black text-primary">5分</span>
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#475569]">規格 5/8&quot;</p>
                <p className="text-[20px] font-bold text-[#1E293B]">12 kg</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-500 rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            </div>
          </div>

          <div className="bg-surface p-6 rounded-xl flex justify-between items-center shadow-sm border border-border">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-lg border-2 border-border">
                <span className="text-2xl font-black text-primary">8分</span>
              </div>
              <div>
                <p className="text-[18px] font-medium text-[#475569]">規格 1&quot;</p>
                <p className="text-danger text-[20px] font-bold">0 kg</p>
              </div>
            </div>
            <div className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-600 rounded-full">
              <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
