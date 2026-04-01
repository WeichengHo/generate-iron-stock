"use client";

import { useState } from "react";

export default function SuppliersPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto pb-24">
      {/* Action Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl font-black text-on-surface tracking-tight">供應商管理</h2>
          <p className="text-on-surface-variant text-xl mt-1">管理您的鋼鐵鏈路合作夥伴</p>
        </div>
        <button className="h-[60px] bg-primary hover:bg-primary-container text-on-primary px-8 rounded-lg flex items-center justify-center gap-3 active:scale-95 transition-all shadow-md group">
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">add</span>
          <span className="text-xl font-bold">+ 新增供應商</span>
        </button>
      </div>

      {/* Supplier Grid (Bento Style Layout) */}
      <div className="grid grid-cols-1 gap-4">
        {/* Supplier Card 1 */}
        <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-lowest">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-md">
                <span className="material-symbols-outlined text-primary font-bold">factory</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">永力鋼鐵實業有限公司</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
                <span className="text-xl font-medium">聯繫人：陳大文 經理</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">call</span>
                <span className="text-xl font-medium">電話：(02) 2345-6789</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-[60px] px-6 bg-surface-container-high text-on-surface hover:bg-surface-container-highest rounded-md flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">edit</span>
              <span className="text-lg">編輯</span>
            </button>
            <button className="h-[60px] px-6 bg-error-container text-on-error-container hover:bg-error hover:text-on-error rounded-md flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">delete</span>
              <span className="text-lg">刪除</span>
            </button>
          </div>
        </div>

        {/* Supplier Card 2 */}
        <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-low">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-md">
                <span className="material-symbols-outlined text-secondary font-bold">local_shipping</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">宏泰工業材料行</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
                <span className="text-xl font-medium">聯繫人：林美玲</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">call</span>
                <span className="text-xl font-medium">電話：0912-345-678</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-[60px] px-6 bg-surface-container-high text-on-surface hover:bg-surface-container-highest rounded-md flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">edit</span>
              <span className="text-lg">編輯</span>
            </button>
            <button className="h-[60px] px-6 bg-error-container text-on-error-container hover:bg-error hover:text-on-error rounded-md flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">delete</span>
              <span className="text-lg">刪除</span>
            </button>
          </div>
        </div>

        {/* Supplier Card 3 */}
        <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 bg-surface-container-lowest">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-tertiary-container flex items-center justify-center rounded-md">
                <span className="material-symbols-outlined text-on-tertiary-container font-bold">handyman</span>
              </div>
              <h3 className="text-2xl font-bold text-primary">金屬力量科技有限公司</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 ml-2">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">person</span>
                <span className="text-xl font-medium">聯繫人：王小明 廠長</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant">call</span>
                <span className="text-xl font-medium">電話：(04) 7654-3210</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="h-[60px] px-6 bg-surface-container-high text-on-surface hover:bg-surface-container-highest rounded-md flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">edit</span>
              <span className="text-lg">編輯</span>
            </button>
            <button className="h-[60px] px-6 bg-error-container text-on-error-container hover:bg-error hover:text-on-error rounded-md flex items-center justify-center gap-2 font-bold transition-colors">
              <span className="material-symbols-outlined">delete</span>
              <span className="text-lg">刪除</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
