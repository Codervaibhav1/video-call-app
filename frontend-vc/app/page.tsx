import Link from "next/link";

export default function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>MeetFlow</h1>

      <p className="lead">
        Video Conferencing Platform
      </p>

      <Link href="/signin" className="btn btn-primary">
        Sign In
      </Link>
    </div>
  );
}