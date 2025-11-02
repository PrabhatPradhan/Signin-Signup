"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-semibold">
        MyApp
      </Link>
      <div className="flex gap-4">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-200"
          >
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/signup" className="hover:underline">
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
