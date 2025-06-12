import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import bannerImage from "../assets/images/Simage2.png";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await API.post("/auth/signin", {
        email: formData.email,
        password: formData.password,
      });

      setSuccess("Login successful!");
      setError("");

      setUser({
        email: res.data.session.user.email,
        name: res.data.session.user.user_metadata?.name || "",
      });

      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
      setSuccess("");
    }
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-xl rounded overflow-hidden max-h-[90vh]">
        {/* Left Image Section */}
        <div className="hidden lg:block lg:w-1/2 h-auto">
          <img
            src={bannerImage}
            alt="Fashion"
            className="w-full h-full object-cover"
            style={{ maxHeight: "90vh" }}
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between overflow-y-auto max-h-[90vh]">
          <div className="w-full max-w-md mx-auto">
            <h1
              className="text-3xl font-bold text-gray-800 mb-6 cursor-pointer"
              onClick={handleHome}
            >
              FASCO
            </h1>

            {/* Section Title + Auth Buttons */}
            <div className="mb-6">
              <p className="text-xl font-semibold mb-4 text-gray-800">
                Login to <span className="text-black font-bold">FASCO</span>
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={handleGoogleSignIn}
                  className="flex-1 flex items-center justify-center border border-gray-300 bg-white py-2 rounded shadow-sm hover:bg-gray-100 transition"
                >
                  <FcGoogle size={20} className="mr-2" />
                  Google Sign In
                </button>
                <div className="flex-1 flex items-center justify-center bg-white py-2 border border-gray-300 rounded shadow-sm">
                  <MdEmail size={20} className="mr-2 text-gray-700" />
                  Email Sign In
                </div>
              </div>
            </div>

            <p className="font-bold text-2xl text-center mb-4">--OR--</p>

            {/* Login Form */}
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded mb-4"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border rounded mb-4"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={6}
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Log In
              </button>
            </form>

            {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
            {success && (
              <p className="text-green-600 mt-3 text-center">{success}</p>
            )}

            <div className="flex justify-between mt-4 text-sm text-gray-700 max-w-md mx-auto">
              <p>
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Register now
                </span>
              </p>

              <p
                onClick={() => navigate("/forgot-password")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Forgot password?
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-gray-500 text-right mt-8">
            FASCO © Terms & Conditions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
