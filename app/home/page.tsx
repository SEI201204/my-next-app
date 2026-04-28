"use client";


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaHome, FaHistory, FaUser, FaSignOutAlt, FaCamera } from "react-icons/fa";
import LoginImage from "@/assets/images/Login.png";
import RegisterImage from "@/assets/images/register.png";

export default function HomePage() {
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
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-lg hover:bg-sky-300 transition">
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
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="grid grid-cols-2 gap-8 max-w-3xl w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-8 min-h-55">
            <span className="text-xl font-semibold text-slate-800 mb-4">ปริมาณขยะของวันนี้</span>
            <div className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-gray-300 mb-4">
              <span className="text-4xl font-bold text-slate-900">50</span>
            </div>
            <Image src={LoginImage} alt="login" width={60} height={60} className="rounded-full" />
          </div>
          {/* Card 2 (Camera) */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-8 min-h-55">
            <Image src={RegisterImage} alt="register" width={60} height={60} className="rounded-full mb-4" />
            <FaCamera size={48} className="text-gray-400" />
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-8 min-h-55">
            <span className="text-xl font-semibold text-slate-800 mb-4">ขยะที่เก็บได้</span>
            <div className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-gray-300">
              <span className="text-4xl font-bold text-slate-900">36</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-8 min-h-55">
            <span className="text-xl font-semibold text-slate-800 mb-4">ขยะที่เก็บไม่ได้</span>
            <div className="flex items-center justify-center w-32 h-32 rounded-full border-2 border-gray-300">
              <span className="text-4xl font-bold text-slate-900">14</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
