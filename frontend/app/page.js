
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-red-50 via-white to-rose-50 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24">
        {/* Background Decorations */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-red-200/30 blur-3xl" />
        <div className="absolute top-20 -right-24 h-80 w-80 rounded-full bg-rose-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-6">
              <span className="animate-pulse">❤️</span>
              Every Donation Can Save A Life
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
              Give Blood.
              <span className="block text-red-600">
                Give Hope.
              </span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-8 text-gray-600">
              Aap ki ek choti si madad kisi ki zindagi bacha sakti hai.
              Donate blood today and become someone's reason to live.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-bold text-white shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
              >
                Become a Donor
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border-2 border-red-200 bg-white px-7 py-3.5 font-bold text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-50"
              >
                Login
              </Link>
            </div>

            {/* Contact Info */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+923001234567"
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-xl">
                  📞
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Call Us</p>
                  <p className="font-bold text-gray-800">
                    +92 300 1234567
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@blooddonation.com"
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 text-xl">
                  ✉️
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Email Us</p>
                  <p className="font-bold text-gray-800">
                    info@blooddonation.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Donation Card */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-red-600 to-red-800 p-8 md:p-10 text-white shadow-2xl shadow-red-200">
                {/* Decorative circles */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/10" />
                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10" />

                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-4xl backdrop-blur">
                      🩸
                    </div>

                    <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                      Blood Donation
                    </div>
                  </div>

                  <p className="text-red-100 text-sm font-medium">
                    YOUR DONATION MATTERS
                  </p>

                  <h2 className="mt-2 text-3xl md:text-4xl font-black">
                    One Donation
                    <br />
                    Can Save Lives
                  </h2>

                  <p className="mt-5 leading-7 text-red-100">
                    Help patients, accident victims and families in
                    emergency situations by becoming a blood donor.
                  </p>

                  <Link
                    href="/register"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3.5 font-bold text-red-700 transition hover:bg-red-50"
                  >
                    Start Your Donation Journey
                  </Link>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-5 md:-left-8 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-2xl">
                    ❤️
                  </div>
                  <div>
                    <p className="text-xl font-black text-gray-900">100%</p>
                    <p className="text-xs text-gray-500">
                      Humanity First
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Blood Drop */}
              <div className="absolute -right-4 -top-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-xl">
                🩸
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="border-y border-red-100 bg-white/70 px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-red-50 p-6 text-center transition hover:-translate-y-1">
              <div className="text-3xl">🩸</div>
              <h3 className="mt-3 text-2xl font-black text-gray-900">
                1 Donation
              </h3>
              <p className="mt-1 text-gray-500">
                Can help save lives
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-6 text-center transition hover:-translate-y-1">
              <div className="text-3xl">👥</div>
              <h3 className="mt-3 text-2xl font-black text-gray-900">
                Every Donor
              </h3>
              <p className="mt-1 text-gray-500">
                Makes a real difference
              </p>
            </div>

            <div className="rounded-2xl bg-red-50 p-6 text-center transition hover:-translate-y-1">
              <div className="text-3xl">❤️</div>
              <h3 className="mt-3 text-2xl font-black text-gray-900">
                Be A Hero
              </h3>
              <p className="mt-1 text-gray-500">
                Donate blood today
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">
          Your Blood Can Make A Difference
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-black text-gray-900">
          Ready to Become a Blood Donor?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Register today and take the first step toward helping someone
          who needs you.
        </p>

        <Link
          href="/register"
          className="mt-7 inline-flex rounded-xl bg-red-600 px-8 py-4 font-bold text-white shadow-lg shadow-red-200 transition hover:-translate-y-1 hover:bg-red-700"
        >
          Register as a Donor ❤️
        </Link>
      </section>
    </main>
  );
}
