import React, { useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import bannerImage from "../assets/images/Simage1.png";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await API.post("/auth/signup", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
      });

      setSuccess(res.data.message);
      navigate("/email-verified");
      setError("");
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
          {/* Form Content */}
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
                Create Account in{" "}
                <span className="text-black font-bold">FASCO</span>
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
                  Email Sign Up
                </div>
              </div>
            </div>

            <p className="font-bold text-2xl text-center mb-4">--OR--</p>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:space-x-3 mb-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full sm:w-1/2 p-2 border rounded mb-4 sm:mb-0"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full sm:w-1/2 p-2 border rounded"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

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
                name="phone"
                type="tel"
                placeholder="Phone Number (optional)"
                className="w-full p-2 border rounded mb-4"
                value={formData.phone}
                onChange={handleChange}
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

              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border rounded mb-4"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={6}
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Create Account
              </button>
            </form>

            {error && <p className="text-red-600 mt-3 text-center">{error}</p>}
            {success && (
              <p className="text-green-600 mt-3 text-center">{success}</p>
            )}

            <p className="mt-4 text-center text-sm text-gray-700">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/signin")}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>
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

export default SignUp;
