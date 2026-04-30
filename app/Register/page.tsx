"use client";

import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RegisterImage from "@/assets/images/register.png";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert("สมัครสำเร็จ! เช็คอีเมลยืนยัน");
      console.log(data);
    }
  };
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <main className="flex h-screen w-full flex-col overflow-hidden bg-white md:flex-row">
        <section className="hidden w-full items-center justify-center bg-sky-500 p-6 md:flex md:w-1/2">
          <div className="h-[280px] w-full max-w-[320px] rounded-full bg-white p-6 shadow-inner md:h-[360px] md:max-w-[360px]">
            <Image
              src={RegisterImage}
              alt="Register"
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </section>

        <section className="flex w-full flex-1 flex-col justify-center bg-white p-6 md:p-12">
          <div className="mx-auto w-full max-w-md">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700"
            >
              <span className="text-xl">←</span> Back
            </Link>

            <div className="mt-6 mb-8">
              <h1 className="text-3xl font-bold text-slate-900">Account Signup</h1>
              <p className="mt-2 text-sm text-slate-500">Create your free account to continue.</p>
            </div>

            <form className="space-y-4" onSubmit={handleRegister}>
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">
                  User Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm outline-none ring-sky-500/40 transition focus:border-sky-500 focus:ring"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm outline-none ring-sky-500/40 transition focus:border-sky-500 focus:ring"
                />
              </div>
              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 h-11 w-full rounded-md border border-slate-300 px-3 text-sm shadow-sm outline-none ring-sky-500/40 transition focus:border-sky-500 focus:ring"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">🔒</span>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
              >
                Continue
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account? <Link href="/login" className="font-medium text-sky-600 hover:text-sky-700">Login</Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
