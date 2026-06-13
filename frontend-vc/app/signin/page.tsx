"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Eye, EyeOff, Zap } from "lucide-react";


export default function Signin() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (
    formData.email === "vaibhavknw1@gmail.com" &&
    formData.password === "Vaibhav@123"
  ) {
    localStorage.setItem("isLoggedIn", "true");

    router.push("/dashboard");
  } else {
    alert("Invalid Email or Password");
  }
};

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        <div
          className="col-lg-7 d-none d-lg-flex flex-column justify-content-center text-white p-5"
          style={{
            background:
              "linear-gradient(145deg, #1565c0 0%, #1e88e5 40%, #42a5f5 100%)",
          }}
        >
          <h1 className="fw-bold">
            Welcome to MeetFlow!
          </h1>

          <p>
            MeetFlow connects people and helps them stay in touch.
          </p>
        </div>

        <div className="col-lg-5 d-flex align-items-center justify-content-center bg-light">
          <div
            className="card shadow border-0"
            style={{
              width: "400px",
              borderRadius: "20px",
            }}
          >
            <div className="card-body p-4">
              <div className="d-flex align-items-center mb-4">
                <Zap className="me-2" />
                <h4 className="mb-0">MeetFlow</h4>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="mb-3 position-relative">
                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Password"
                  />

                  <button
                    type="button"
                    className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  LOGIN
                </button>
              </form>

              <div className="text-center mt-4">
                <small>
                  Don't have an account?{" "}
                  <Link href="#">
                    Sign up free
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}