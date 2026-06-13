"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/signin");
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <Link href="/dashboard" className="navbar-brand">
          MeetFlow
        </Link>

        <div>
          <Link href="/dashboard" className="btn btn-link text-white">
            Dashboard
          </Link>

          <Link href="/meetings" className="btn btn-link text-white">
            Meetings
          </Link>

          <button
            className="btn btn-light btn-sm ms-2"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}