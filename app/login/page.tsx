import Image from "next/image";
import Link from "next/link";
import LoginImage from "@/assets/images/Login.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-slate-200 shadow-xl md:flex-row md:h-screen">
        <section className="hidden w-full items-center justify-center bg-sky-500 p-6 md:flex md:w-1/2">
          <div className="h-[280px] w-full max-w-[320px] rounded-full bg-white p-6 shadow-inner md:h-[360px] md:max-w-[360px]">
            <Image
              src={LoginImage}
              alt="Login"
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="flex w-full flex-1 items-center justify-center bg-white p-6 md:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Account Login</h1>
              <p className="mt-2 text-sm text-slate-500">เข้าสู่ระบบเพื่อจัดการบัญชีของคุณ</p>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm outline-none ring-sky-500/40 transition focus:border-sky-500 focus:ring"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm outline-none ring-sky-500/40 transition focus:border-sky-500 focus:ring"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                Login
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-slate-500">
              Dont have an account ? <Link href="/register" className="font-medium text-sky-600">Sign up here</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
