"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      router.push("/signin");
    }
  }, [router]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        {children}
      </div>
      <Footer />
    </>
  );
}