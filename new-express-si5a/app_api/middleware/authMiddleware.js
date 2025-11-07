// middleware/authMiddleware.js
const jwt = require("jsonwebtoken"); // Mengimpor jsonwebtoken untuk memverifikasi token

// Middleware untuk memverifikasi JWT token
const authMiddleware = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers ? req.headers.authorization || req.headers.Authorization : null;
  const token = authHeader ? authHeader.split(" ")[1] : null;

  if (!token) {
    // Jika token tidak ada
    return res.status(401).json({ message: "No token, authorization denied" }); // Kirim respons tidak ada token
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifikasi token dengan secret
    req.user = decoded; // Menyimpan payload token ke req.user
    next(); // Lanjutkan ke middleware berikutnya
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" }); // Kirim respons jika token tidak valid
  }
};

module.exports = authMiddleware; // Mengekspor middleware
