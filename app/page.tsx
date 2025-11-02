"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ✅ Define user type properly for TypeScript
interface User {
  name?: string;
  email?: string;
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // ✅ Check if window object is available (important for SSR)
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      const userData: User | null = storedUser ? JSON.parse(storedUser) : null;

      if (!userData) {
        router.push("/login");
      } else {
        setUser(userData);
      }
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-10 text-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, <span className="text-purple-600">{user?.name || "User"}</span> 
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          You are successfully logged in!
        </p>
      </div>
    </div>
  );
}
