export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto flex h-screen max-w-6xl overflow-hidden rounded-xl border border-slate-200 shadow-xl">
        <section className="flex w-1/2 items-center justify-center bg-sky-500 p-10 sm:hidden md:flex">
          <div className="h-[360px] w-[360px] rounded-full bg-slate-200 p-6 shadow-inner">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-200">
              <div className="relative h-72 w-72 rounded-full bg-slate-200">
                <div className="absolute left-6 top-10 h-20 w-10 rotate-[-16deg] rounded-xl border-4 border-black bg-transparent"></div>
                <div className="absolute right-10 top-10 h-24 w-12 rotate-[-6deg] rounded-xl border-4 border-black bg-transparent"></div>
                <div className="absolute left-12 top-28 h-4 w-28 rounded-full border-4 border-black bg-transparent"></div>
                <div className="absolute left-16 top-36 h-10 w-24 rounded-full border-4 border-black bg-transparent"></div>
                <div className="absolute bottom-12 left-20 h-10 w-18 rounded-full border-4 border-black bg-transparent"></div>
                <div className="absolute bottom-20 left-6 h-8 w-24 rounded-full border-4 border-black bg-transparent"></div>
              </div>
            </div>
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
              Dont have an account ? <a href="#" className="font-medium text-sky-600">Sign up here</a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
