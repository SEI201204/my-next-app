"use client";

import { FaSignOutAlt } from "react-icons/fa";
import DashboardShell from "../components/DashboardShell";

export default function ProfilePage() {
  return (
    <DashboardShell
      pageTitle="โปรไฟล์"
      pageDescription="ดูข้อมูลส่วนตัวของคุณและสถิติการใช้งานระบบจัดการขยะทั้งหมด"
    >
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-xl">
              <span className="text-6xl font-semibold text-sky-500">A</span>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">สมชาย ใจดี</h2>
              <p className="mt-2 text-slate-600">ผู้ใช้งานระดับ Silver</p>
            </div>
            <div className="grid w-full gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 text-left shadow-sm">
                <p className="text-sm text-slate-500">อีเมล</p>
                <p className="mt-2 font-semibold text-slate-900">samchai@example.com</p>
              </div>
              <div className="rounded-3xl bg-white p-5 text-left shadow-sm">
                <p className="text-sm text-slate-500">เบอร์โทร</p>
                <p className="mt-2 font-semibold text-slate-900">098-765-4321</p>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 rounded-3xl bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700">
              <FaSignOutAlt size={18} /> ออกจากระบบ
            </button>
          </div>
        </section>

        <section className="grid gap-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500">สถิติการจัดการ</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-sm text-slate-500">สัปดาห์นี้</p>
                <p className="mt-3 text-4xl font-bold text-slate-900">52</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center">
                <p className="text-sm text-slate-500">สัปดาห์ก่อน</p>
                <p className="mt-3 text-4xl font-bold text-slate-900">48</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-500">รายการล่าสุด</p>
            <ul className="mt-6 space-y-4">
              <li className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">เก็บขยะได้สำเร็จ</p>
                <p className="mt-1 text-sm text-slate-600">วันที่ 5 พ.ค. 2569</p>
              </li>
              <li className="rounded-3xl bg-slate-50 p-4">
                <p className="font-semibold text-slate-900">รายงานใหม่</p>
                <p className="mt-1 text-sm text-slate-600">วันที่ 3 พ.ค. 2569</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </DashboardShell>
  );
}
