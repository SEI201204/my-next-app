"use client";

import React from 'react';
import Link from 'next/link';
import { FaHome, FaHistory, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

const HistoryPage = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen w-full bg-[#f2f6fb] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-sky-400 flex flex-col items-center py-8 px-4 min-h-screen">
        <nav className="flex flex-col gap-4 w-full">
          <Link href="/home">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-300 text-white font-semibold text-lg shadow-md">
              <FaHome size={24} /> Home
            </div>
          </Link>
          <Link href="/history">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-300 text-white font-semibold text-lg shadow-md">
              <FaHistory size={24} /> History
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-lg hover:bg-sky-300 transition">
              <FaUser size={24} /> Profile
            </div>
          </Link>
        </nav>
        <div className="grow" />
        <button
          className="flex items-center gap-2 px-6 py-3 mt-8 rounded-xl bg-white text-red-500 font-semibold text-lg shadow-md border border-sky-200 hover:bg-red-50 transition"
          onClick={handleLogout}
        >
          <FaSignOutAlt size={22} /> <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <div className="w-3/4 bg-gray-100 p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-4">ปริมาณขยะวันที่ 19-25 เม.ย. 296 ชิ้น</h2>
        <div className="bg-white p-4 rounded shadow-md mb-8">
          {/* Bar Chart Placeholder */}
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <span>Bar Chart</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-800 mb-2">ขยะที่เก็บได้</h3>
            <div className="text-4xl font-bold text-slate-900">219</div>
          </div>
          <div className="bg-white p-4 rounded shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold text-slate-800 mb-2">ขยะที่เก็บไม่ได้</h3>
            <div className="text-4xl font-bold text-slate-900">77</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;