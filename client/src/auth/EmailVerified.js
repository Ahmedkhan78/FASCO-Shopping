// src/pages/EmailVerified.js
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EmailVerified = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // optional: show a toast or loading here
    setTimeout(() => {
      navigate("/"); // 👈 Redirect to home after a few seconds
    }, 2000);
  }, [navigate]);

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">
          Email Verified ✅
        </h2>
        <p className="text-gray-700 text-center">Redirecting you to home...</p>
      </div>
    </div>
  );
};

export default EmailVerified;
