"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { adminLogin } from "@/api/admin";

function Login() {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        Username: username.trim(),
        Password: password.trim(),
      };

      const res = await adminLogin(payload);

      if (res?.message === "Login Successfully") {
        router.push("/admin/dashboard");
      } else {
        alert("Login failed: " + (res?.message || "Invalid credentials"));
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="bg-teal-700 p-8 rounded-2xl shadow-2xl w-full max-w-sm mt-24">
        <h2 className="text-white text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-medium py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
