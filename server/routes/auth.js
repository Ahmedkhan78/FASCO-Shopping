// backend/routes/auth.js
const express = require("express");
const router = express.Router();
const supabase = require("../supabaseClient"); // apna supabase client file

// Signup route
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: "http://localhost:3000/email-verified",
      user_metadata: {
        first_name: firstName,
        last_name: lastName,
        phone: phone || null,
      },
    },
  });

  if (error) return res.status(400).json({ error: error.message });

  res.status(200).json({
    message: "Signup successful! Please verify your email.",
    user: data.user,
  });
});

// Signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const { data: signInData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return res.status(401).json({ error: error.message });

  const { data: userData, error: userError } = await supabase.auth.getUser(
    signInData.session.access_token
  );

  if (userError) return res.status(401).json({ error: userError.message });

  res.status(200).json({
    message: "Signin successful!",
    session: signInData.session,
    user: userData.user,
  });
});

module.exports = router;
