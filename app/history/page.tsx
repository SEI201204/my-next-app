"use client";

import DashboardShell from "../components/DashboardShell";

const HistoryPage = () => {
  return (
    <DashboardShell
      pageTitle="ประวัติ"
      pageDescription="ดูสรุปการเก็บขยะย้อนหลังและสถิติการจัดการของคุณในแต่ละสัปดาห์"
    >
      <div className="grid gap-6">
        <div className="grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-sky-500">สรุปสัปดาห์</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900">19 - 25 เม.ย.</h2>
              </div>
              <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">296 ชิ้น</span>
            </div>
            <div className="mt-6 h-72 rounded-[2rem] bg-slate-200 p-6">
              <div className="flex h-full items-center justify-center text-slate-500">กราฟสรุปการจัดเก็บ</div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500">สถิติหลัก</p>
              <div className="mt-4 grid gap-4">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">ขยะที่เก็บได้</p>
                  <p className="mt-2 text-4xl font-bold text-slate-900">219</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">ขยะที่เก็บไม่ได้</p>
                  <p className="mt-2 text-4xl font-bold text-slate-900">77</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-500">แนวโน้ม</p>
              <ul className="mt-5 space-y-4">
                <li className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">สัปดาห์ก่อนหน้า</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">+12% การจัดเก็บได้ดีขึ้น</p>
                </li>
                <li className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">อัตราส่วนขยะ</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">72% เก็บได้ / 28% ไม่ได้</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-500">ไทม์ไลน์</p>
          <div className="mt-6 space-y-4">
            {[
              { label: "24 เม.ย.", detail: "เก็บขยะได้ 48 ชิ้น" },
              { label: "22 เม.ย.", detail: "เก็บขยะได้ 52 ชิ้น" },
              { label: "20 เม.ย.", detail: "เก็บขยะไม่ได้ 14 ชิ้น" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-3xl bg-slate-50 p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-semibold">
                  {item.label}
                </span>
                <p className="text-slate-700">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
};

export default HistoryPage;