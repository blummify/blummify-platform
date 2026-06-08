"use client";

import { useState } from "react";
import {
  IconMail,
  IconLock,
  IconEye,
  IconEyeOff,
  IconCheck,
  IconArrowRight,
  IconAlertCircle,
} from "@tabler/icons-react";

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // TODO: replace with real auth request
    console.log("Sign in attempt:", { email, remember });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-6 relative overflow-x-hidden bg-[#F8FAF9]">

      {/* Top-right atmospheric bloom */}
      <svg
        className="admin-bloom-top fixed pointer-events-none z-0 animate-bloom-slow"
        style={{ top: "-120px", right: "-120px", width: "380px", height: "380px", opacity: 0.4 }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="60" fill="none" stroke="#7AD0A4" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="80" fill="none" stroke="#7AD0A4" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="100" fill="none" stroke="#7AD0A4" strokeWidth="0.5" />
        <g transform="translate(100,100)">
          <ellipse cx="0" cy="-35" rx="14" ry="32" fill="#7AD0A4" fillOpacity="0.35" />
          <ellipse cx="0" cy="-35" rx="14" ry="32" fill="#7AD0A4" fillOpacity="0.35" transform="rotate(60)" />
          <ellipse cx="0" cy="-35" rx="14" ry="32" fill="#7AD0A4" fillOpacity="0.35" transform="rotate(120)" />
          <ellipse cx="0" cy="-35" rx="14" ry="32" fill="#7AD0A4" fillOpacity="0.35" transform="rotate(180)" />
          <ellipse cx="0" cy="-35" rx="14" ry="32" fill="#7AD0A4" fillOpacity="0.35" transform="rotate(240)" />
          <ellipse cx="0" cy="-35" rx="14" ry="32" fill="#7AD0A4" fillOpacity="0.35" transform="rotate(300)" />
          <circle cx="0" cy="0" r="10" fill="#2BA56F" />
        </g>
      </svg>

      {/* Bottom-left atmospheric bloom */}
      <svg
        className="fixed pointer-events-none z-0 animate-bloom-slower max-[480px]:hidden"
        style={{ bottom: "-140px", left: "-140px", width: "320px", height: "320px", opacity: 0.3 }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g transform="translate(100,100)">
          <ellipse cx="0" cy="-30" rx="12" ry="28" fill="#7AD0A4" fillOpacity="0.4" />
          <ellipse cx="0" cy="-30" rx="12" ry="28" fill="#7AD0A4" fillOpacity="0.4" transform="rotate(72)" />
          <ellipse cx="0" cy="-30" rx="12" ry="28" fill="#7AD0A4" fillOpacity="0.4" transform="rotate(144)" />
          <ellipse cx="0" cy="-30" rx="12" ry="28" fill="#7AD0A4" fillOpacity="0.4" transform="rotate(216)" />
          <ellipse cx="0" cy="-30" rx="12" ry="28" fill="#7AD0A4" fillOpacity="0.4" transform="rotate(288)" />
          <circle cx="0" cy="0" r="8" fill="#2BA56F" />
        </g>
      </svg>

      {/* Brand row */}
      <header className="relative z-10 flex items-center gap-[10px] mb-9 max-[480px]:mb-6">
        <div
          className="w-8 h-8 rounded-[8px] bg-[#2BA56F] text-white font-medium text-[15px] flex items-center justify-center"
          aria-hidden="true"
        >
          B
        </div>
        <span className="font-medium text-[15px] text-[#0F1A14]">Blummify</span>
        <span className="ml-1 text-[10px] px-[7px] py-[2px] bg-[#EAF7F0] text-[#197A4F] rounded-[4px] font-medium tracking-[0.04em]">
          ADMIN
        </span>
      </header>

      {/* Auth card */}
      <main
        className="relative z-10 w-full max-w-[420px] bg-white border-[0.5px] border-[#E6ECE8] rounded-[16px] px-10 py-9 max-[480px]:px-6 max-[480px]:py-7 max-[480px]:rounded-[12px]"
        role="main"
      >
        <form onSubmit={handleSubmit} noValidate>

          {/* Heading */}
          <div className="mb-[26px]">
            <h1 className="text-[22px] font-medium text-[#0F1A14] tracking-[-0.01em] mt-0 mb-1.5">
              Welcome back
            </h1>
            <p className="text-[13px] text-[#5B6760] leading-[1.55] m-0">
              Sign in to manage daily activity and content.
            </p>
          </div>

          {/* Error alert */}
          {error && (
            <div
              role="alert"
              className="flex items-center gap-2 px-3 py-[10px] bg-[#FDECEC] border-[0.5px] border-[#F4C7C7] rounded-[8px] text-[#D94B4B] text-xs mb-[14px]"
            >
              <IconAlertCircle size={15} aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col gap-1.5 mb-[14px]">
            <label className="text-xs font-medium text-[#0F1A14]" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <IconMail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8E9A93] pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@blummify.com"
                autoComplete="email"
                required
                className="w-full h-[42px] pl-[38px] pr-3 border-[0.5px] border-[#E6ECE8] rounded-[8px] text-[13px] text-[#0F1A14] bg-white outline-none transition-[border-color,box-shadow] duration-150 hover:border-[#8E9A93] focus:border-[#2BA56F] focus:shadow-[0_0_0_3px_#EAF7F0]"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5 mb-[14px]">
            <div className="flex justify-between items-center">
              <label className="text-xs font-medium text-[#0F1A14]" htmlFor="password">
                Password
              </label>
              <a
                href="#forgot"
                className="text-[11px] text-[#2BA56F] font-medium no-underline hover:text-[#197A4F] transition-colors duration-150"
              >
                Forgot?
              </a>
            </div>
            <div className="relative">
              <IconLock
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8E9A93] pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full h-[42px] pl-[38px] pr-[38px] border-[0.5px] border-[#E6ECE8] rounded-[8px] text-[13px] text-[#0F1A14] bg-white outline-none transition-[border-color,box-shadow] duration-150 hover:border-[#8E9A93] focus:border-[#2BA56F] focus:shadow-[0_0_0_3px_#EAF7F0]"
                style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8E9A93] hover:text-[#5B6760] cursor-pointer transition-colors duration-150"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IconEyeOff size={16} /> : <IconEye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <label
            className="flex items-center gap-[9px] mt-1.5 mb-5 select-none cursor-pointer"
            onClick={(e) => { e.preventDefault(); setRemember((v) => !v); }}
          >
            <span
              className={`w-4 h-4 rounded-[4px] border-[0.5px] flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
                remember ? "bg-[#2BA56F] border-[#2BA56F]" : "bg-white border-[#E6ECE8]"
              }`}
            >
              <IconCheck
                size={10}
                color="white"
                className={`transition-opacity duration-150 ${remember ? "opacity-100" : "opacity-0"}`}
                aria-hidden="true"
              />
            </span>
            <span className="text-xs text-[#5B6760]">Keep me signed in for 30 days</span>
            <input type="checkbox" className="sr-only" checked={remember} readOnly />
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-11 bg-[#2BA56F] text-white border-none rounded-[8px] text-[13px] font-medium cursor-pointer flex items-center justify-center gap-1.5 transition-[background-color] duration-150 hover:bg-[#197A4F] active:scale-[0.99]"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Sign in
            <IconArrowRight size={15} aria-hidden="true" />
          </button>

        </form>
      </main>

      {/* Trust strip */}
      <div
        className="relative z-10 max-w-[420px] w-full mt-[22px] flex items-center justify-center gap-6 px-5 py-[14px] border-[0.5px] border-[#E6ECE8] rounded-[12px]"
        style={{ background: "rgba(234, 247, 240, 0.5)" }}
        aria-hidden="true"
      >
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-medium text-[#0E4A30]">5.0</span>
          <span className="text-[11px] text-[#5B6760]">client rating</span>
        </div>
        <span className="w-px h-[14px] bg-[#7AD0A4] opacity-60" />
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-medium text-[#0E4A30]">100%</span>
          <span className="text-[11px] text-[#5B6760]">on-time delivery</span>
        </div>
      </div>

      {/* Page footer */}
      <footer className="relative z-10 mt-8 flex items-center gap-4 text-[11px] text-[#8E9A93]">
        <span>© 2026 Blummify</span>
        <span className="w-[2px] h-[2px] rounded-full bg-[#8E9A93]" />
        <a href="#privacy" className="text-[#8E9A93] no-underline hover:text-[#5B6760] transition-colors duration-150">Privacy</a>
        <a href="#terms" className="text-[#8E9A93] no-underline hover:text-[#5B6760] transition-colors duration-150">Terms</a>
        <a href="#support" className="text-[#8E9A93] no-underline hover:text-[#5B6760] transition-colors duration-150">Support</a>
      </footer>

    </div>
  );
}
