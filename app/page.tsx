"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const userData = storedUser ? JSON.parse(storedUser) : null;

    if (!userData) {
      router.push("/login");
    } else {
      setUser(userData);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold text-gray-800">
        Welcome, {user?.name || "User"} 
      </h1>
      <p className="text-gray-600 mt-2">You are successfully logged in!</p>
    </div>
  );
}
