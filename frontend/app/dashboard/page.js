
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      router.push("/login");
      return;
    }

    try {
      setUser(JSON.parse(storedUser));
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-red-200 border-t-red-600" />
          <p className="text-sm text-gray-500">
            Loading your dashboard...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-red-50 via-white to-rose-100 px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <p className="mb-1 text-sm font-medium text-red-600">
              Donor Dashboard
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Welcome, {user.name || "Donor"} 👋
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Thank you for being a blood donor. Your contribution can help
              save lives.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-red-200 bg-white px-5 py-2.5 text-sm font-semibold text-red-600 shadow-sm transition hover:bg-red-50"
          >
            Logout
          </button>
        </div>

        {/* ================= HERO CARD ================= */}
        <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-red-600 to-rose-600 p-6 text-white shadow-xl shadow-red-600/20 sm:p-8">

          {/* Decorative circles */}
          <div className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-20 right-28 h-40 w-40 rounded-full bg-white/10" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-5">

              {/* Avatar */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-3xl font-bold shadow-lg backdrop-blur-sm">
                {user.name
                  ? user.name.charAt(0).toUpperCase()
                  : "D"}
              </div>

              <div>
                <p className="text-sm text-red-100">
                  Registered Blood Donor
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {user.name || "Donor"}
                </h2>

                <p className="mt-1 text-sm text-red-100">
                  {user.email || "No email available"}
                </p>
              </div>
            </div>

            {/* Blood Group */}
            <div className="rounded-2xl bg-white px-6 py-5 text-center shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Blood Group
              </p>

              <p className="mt-1 text-4xl font-black text-red-600">
                {user.bloodGroup || "N/A"}
              </p>
            </div>
          </div>
        </section>

        {/* ================= QUICK STATS ================= */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {/* Name */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl">
              👤
            </div>

            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Donor Name
            </p>

            <p className="mt-1 truncate text-lg font-bold text-gray-800">
              {user.name || "Not provided"}
            </p>
          </div>

          {/* Blood */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl">
              🩸
            </div>

            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Blood Group
            </p>

            <p className="mt-1 text-lg font-bold text-red-600">
              {user.bloodGroup || "Not provided"}
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl">
              📱
            </div>

            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Phone
            </p>

            <p className="mt-1 truncate text-lg font-bold text-gray-800">
              {user.phone || "Not provided"}
            </p>
          </div>

          {/* Status */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-xl">
              ✓
            </div>

            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Account Status
            </p>

            <p className="mt-1 text-lg font-bold text-green-600">
              Active
            </p>
          </div>
        </div>

        {/* ================= DONOR INFORMATION ================= */}
        <section className="mb-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-600">
                Personal Information
              </p>

              <h2 className="mt-1 text-2xl font-bold text-gray-900">
                Donor Details
              </h2>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl sm:flex">
              ❤️
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {/* Full Name */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Full Name
              </p>

              <p className="mt-2 text-base font-semibold text-gray-800">
                {user.name || "Not provided"}
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Email Address
              </p>

              <p className="mt-2 break-all text-base font-semibold text-gray-800">
                {user.email || "Not provided"}
              </p>
            </div>

            {/* Phone */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Phone Number
              </p>

              <p className="mt-2 text-base font-semibold text-gray-800">
                {user.phone || "Not provided"}
              </p>
            </div>

            {/* Blood Group */}
            <div className="rounded-2xl bg-red-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-400">
                Blood Group
              </p>

              <p className="mt-2 text-2xl font-black text-red-600">
                {user.bloodGroup || "Not provided"}
              </p>
            </div>

            {/* User ID */}
            {user._id && (
              <div className="rounded-2xl bg-gray-50 p-5 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Donor ID
                </p>

                <p className="mt-2 break-all font-mono text-sm font-medium text-gray-700">
                  {user._id}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ================= ACTIONS ================= */}
        <section className="mb-6 grid gap-4 md:grid-cols-2">

          <Link
            href="/profile"
            className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-2xl transition group-hover:scale-110">
                👤
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-900">
                  Manage Profile
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  View and update your donor information.
                </p>
              </div>

              <span className="text-xl text-gray-400 transition group-hover:translate-x-1 group-hover:text-red-600">
                →
              </span>
            </div>
          </Link>

          <div className="rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 to-rose-50 p-6 shadow-sm">
            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
                🩸
              </div>

              <div>
                <h3 className="font-bold text-gray-900">
                  Ready to Save a Life?
                </h3>

                <p className="mt-1 text-sm leading-5 text-gray-500">
                  Keep your donor information updated so you can be contacted
                  when your blood group is needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER MESSAGE ================= */}
        <div className="rounded-2xl bg-white/70 p-6 text-center shadow-sm backdrop-blur">
          <div className="text-3xl">❤️ 🩸 ❤️</div>

          <h3 className="mt-3 text-lg font-bold text-gray-900">
            Every Donation Matters
          </h3>

          <p className="mx-auto mt-1 max-w-xl text-sm text-gray-500">
            Your willingness to donate blood can make a meaningful difference
            in someone&apos;s life.
          </p>
        </div>

      </div>
    </main>
  );
}
