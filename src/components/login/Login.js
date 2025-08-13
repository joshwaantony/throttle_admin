



"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { adminLogin } from "@/api/admin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const router = useRouter();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        Username: username.trim(),
        Password: password.trim(),
      };

      const res = await adminLogin(payload);

      if (res?.message === "Login Successfully") {
        toast.success("✅ Login successful!", {
          style: { backgroundColor: "#005E5A", color: "#FFFFFF" }
        });
        setTimeout(() => router.push("/admin/dashboard"), 1500);
      } else {
        toast.error(`❌ ${res?.message || "Invalid credentials"}`, {
          style: { backgroundColor: "#13B8A6", color: "#FFFFFF" }
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("⚠️ Login error. Please try again.", {
        style: { backgroundColor: "#13B8A6", color: "#FFFFFF" }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #005E5A 0%, #13B8A6 100%)"
      }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="rounded-full p-3 flex items-center justify-center shadow-md">
            <img
              src="/throttle-point-tittle-create-a-logo-for-using-bike.png"
              alt="Admin Logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <h2 className="text-2xl font-bold mt-3" style={{ color: "#005E5A" }}>
            Admin Login
          </h2>
          <p className="text-sm" style={{ color: "#13B8A6" }}>
            Welcome back! Please log in.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: "#005E5A" }}
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              style={{
                borderColor: "#13B8A6",
                color: "#005E5A"
              }}
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: "#005E5A" }}
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#13B8A6",
                  color: "#005E5A"
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                style={{ color: "#13B8A6" }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 rounded-lg text-white font-semibold shadow-md transition-all duration-200"
            style={{
              background: loading
                ? "#13B8A6"
                : "linear-gradient(to right, #005E5A, #13B8A6)"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-center mt-5" style={{ color: "#13B8A6" }}>
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </p>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default Login;
