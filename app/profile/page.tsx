"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import HomeIcon from "@/assets/images/home.png";
import HistoryIcon from "@/assets/images/history.png";
import ProfileIcon from "@/assets/images/profile.png";
import LogoutIcon from "@/assets/images/logout.png";
import CameraIcon from "@/assets/images/camera.png";
import MailIcon from "@/assets/images/mail.png";
import PencilIcon from "@/assets/images/pencil.png";

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
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-lg hover:bg-sky-300 transition">
              <Image src={HomeIcon} alt="Home" width={28} height={28} /> Home
            </div>
          </Link>
          <Link href="/history">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-semibold text-lg hover:bg-sky-300 transition">
              <Image src={HistoryIcon} alt="History" width={28} height={28} /> History
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-300 text-white font-semibold text-lg shadow-md">
              <Image src={ProfileIcon} alt="Profile" width={28} height={28} /> Profile
            </div>
          </Link>
        </nav>
        <div className="flex-grow" />
        <button
          className="flex items-center gap-2 px-6 py-3 mt-8 rounded-xl bg-white text-red-500 font-semibold text-lg shadow-md border border-sky-200 hover:bg-red-50 transition"
          onClick={handleLogout}
        >
          <Image src={LogoutIcon} alt="Logout" width={22} height={22} /> <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-md flex flex-col items-center gap-8">
          {/* Profile Image */}
          <div className="relative flex flex-col items-center">
            <div className="w-40 h-40 rounded-full bg-white border-4 border-sky-300 flex items-center justify-center shadow-md">
              <Image src={ProfileIcon} alt="Profile" width={120} height={120} />
            </div>
            <button className="absolute bottom-4 right-4 bg-white border border-sky-300 rounded-full p-2 shadow-md hover:bg-sky-100">
              <Image src={CameraIcon} alt="Camera" width={28} height={28} />
            </button>
          </div>
          {/* Name and Edit */}
          <div className="w-full flex items-center bg-white rounded-2xl shadow-md px-6 py-4 text-2xl font-semibold">
            <span className="flex-1">Test</span>
            <button className="ml-2 p-2 hover:bg-sky-100 rounded-full">
              <Image src={PencilIcon} alt="Edit" width={24} height={24} />
            </button>
          </div>
          {/* Email */}
          <div className="w-full flex items-center bg-white rounded-2xl shadow-md px-6 py-4 text-lg">
            <span className="flex items-center gap-2 font-medium">Email <Image src={MailIcon} alt="Mail" width={20} height={20} /></span>
            <span className="ml-4">:</span>
            <span className="ml-4">s65194100xx@sau.ac.th</span>
          </div>
        </div>
      </main>
    </div>
  );
}
