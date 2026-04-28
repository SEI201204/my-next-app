"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaHome, FaHistory, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function ProfilePage() {
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
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-300 text-white font-semibold text-lg shadow-md">
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
        <div className="w-full max-w-md flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="relative flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-white border-4 border-sky-300 flex items-center justify-center shadow-md">
              <FaUser size={120} className="text-sky-400" />
            </div>
            <button className="absolute bottom-4 right-4 bg-white border border-sky-300 rounded-full p-2 shadow-md hover:bg-sky-100">
              <FaSignOutAlt size={28} className="text-sky-400" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
