"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /login when the page loads
    router.push("/login");
  }, [router]);

  return <div></div>;
}
