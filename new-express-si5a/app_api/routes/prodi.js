const express = require("express")
const router = express.Router()

// impor prodiController
const prodiController = require("../controllers/prodiController")

// route prodi
router.get("/", prodiController.getAllProdi);
router.post("/", prodiController.createProdi);

// export module
module.exports = router