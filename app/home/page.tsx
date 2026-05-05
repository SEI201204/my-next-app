"use client";

import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import DashboardShell from "../components/DashboardShell";
import LoginImage from "@/assets/images/Login.png";
import RegisterImage from "@/assets/images/register.png";

export default function HomePage() {
  return (
    <DashboardShell
      pageTitle="หน้าแรก"
      pageDescription="สรุปข้อมูลขยะรายวันและภาพรวมการเก็บขยะของคุณในรูปแบบที่ทันสมัยและเป็นเอกภาพ"
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">วันนี้</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">ปริมาณขยะทั้งหมด</h2>
            <p className="mt-3 text-slate-600">ข้อมูลล่าสุดของขยะที่จัดการในวันนี้</p>
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
                <p className="text-sm text-slate-500">เก็บได้</p>
                <p className="mt-3 text-4xl font-bold text-slate-900">36</p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-center shadow-sm">
                <p className="text-sm text-slate-500">ไม่ได้เก็บ</p>
                <p className="mt-3 text-4xl font-bold text-slate-900">14</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-500">ภาพรวม</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-900">สถิติโดยรวม</h2>
              </div>
              <div className="rounded-3xl bg-sky-500 p-4 text-white shadow-md">
                <FaCamera size={26} />
              </div>
            </div>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">ขยะวันนี้</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">50 ชิ้น</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm text-slate-500">เป้าหมายการเก็บ</p>
                <p className="mt-2 text-3xl font-bold text-slate-900">70%</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">สรุปด่วน</p>
            <div className="mt-6 flex items-center justify-center gap-6 rounded-3xl bg-slate-100 p-8">
              <div className="text-center">
                <p className="text-sm text-slate-500">ขยะที่เก็บได้</p>
                <p className="mt-3 text-5xl font-bold text-slate-900">36</p>
              </div>
              <div className="h-24 w-24 rounded-full border-4 border-sky-300 bg-white flex items-center justify-center">
                <Image src={LoginImage} alt="Summary" width={56} height={56} />
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">เพิ่มเติม</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 rounded-3xl bg-slate-100 p-8">
              <div className="h-24 w-24 rounded-full bg-white p-4 shadow-sm">
                <Image src={RegisterImage} alt="Camera" width={56} height={56} />
              </div>
              <p className="text-center text-slate-600">ระบบพร้อมบันทึกข้อมูลขยะและจัดการรายงานอย่างเป็นระบบ</p>
            </div>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
