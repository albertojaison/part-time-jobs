import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex-1 text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className="font-semibold select-none text-2xl sm:text-4xl uppercase">
        Choose a category
      </h1>
      <Link
        href="/user/login"
        className="text-center w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">User</h2>
      </Link>
      <Link
        href="/admin/login"
        className="text-center w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"
      >
        <h2 className="relative z-20">Admin</h2>
      </Link>
    </div>
  );
}
