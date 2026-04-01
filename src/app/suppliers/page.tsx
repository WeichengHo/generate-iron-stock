"use client";

import { useState } from "react";

export default function SuppliersPage() {
  return (
    <main className="w-full px-6 py-8 space-y-8 pb-32">
      {/* Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-4">
        <div>
          <h2 className="text-[24px] font-bold text-[#1E293B] tracking-tight">供應商管理</h2>
          <p className="text-outline text-[16px] mt-1">管理您的鋼鐵鏈路合作夥伴</p>
        </div>
        <button className="h-[56px] bg-primary hover:bg-primary-dark text-white px-8 rounded-lg flex items-center justify-center gap-3 active:translate-y-[-2px] transition-all shadow-sm group">
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
          <span className="text-[18px] font-bold">+ 新增供應商</span>
        </button>
      </div>

      {/* Supplier Grid (Bento Style Layout) */}
      <div className="grid grid-cols-1 gap-4">
        {/* Supplier Card 1 */}
        <div className="bg-surface p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-primary-container flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-primary font-bold">factory</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-[#1E293B]">永力鋼鐵實業有限公司</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">person</span>
                <span className="text-[16px] font-medium text-[#475569]">聯繫人：陳大文 經理</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">call</span>
                <span className="text-[16px] font-medium text-[#475569]">電話：(02) 2345-6789</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-[56px] px-6 bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0] rounded-lg flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">edit</span>
              <span className="text-[16px]">編輯</span>
            </button>
            <button className="h-[56px] px-6 bg-error-container text-error hover:bg-error hover:text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">delete</span>
              <span className="text-[16px]">刪除</span>
            </button>
          </div>
        </div>

        {/* Supplier Card 2 */}
        <div className="bg-surface p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-success/20 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-success font-bold">local_shipping</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-[#1E293B]">宏泰工業材料行</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">person</span>
                <span className="text-[16px] font-medium text-[#475569]">聯繫人：林美玲</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">call</span>
                <span className="text-[16px] font-medium text-[#475569]">電話：0912-345-678</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-[56px] px-6 bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0] rounded-lg flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">edit</span>
              <span className="text-[16px]">編輯</span>
            </button>
            <button className="h-[56px] px-6 bg-error-container text-error hover:bg-error hover:text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">delete</span>
              <span className="text-[16px]">刪除</span>
            </button>
          </div>
        </div>

        {/* Supplier Card 3 */}
        <div className="bg-surface p-6 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 border border-border">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-warning/20 flex items-center justify-center rounded-lg">
                <span className="material-symbols-outlined text-warning font-bold">handyman</span>
              </div>
              <h3 className="text-[20px] font-extrabold text-[#1E293B]">金屬力量科技有限公司</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">person</span>
                <span className="text-[16px] font-medium text-[#475569]">聯繫人：王小明 廠長</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-outline">call</span>
                <span className="text-[16px] font-medium text-[#475569]">電話：(04) 7654-3210</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-[56px] px-6 bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0] rounded-lg flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">edit</span>
              <span className="text-[16px]">編輯</span>
            </button>
            <button className="h-[56px] px-6 bg-error-container text-error hover:bg-error hover:text-white rounded-lg flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">delete</span>
              <span className="text-[16px]">刪除</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
