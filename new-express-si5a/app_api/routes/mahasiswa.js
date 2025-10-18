const express = require("express")
const router = express.Router()

// impor mahasiswaController
const mahasiswaController = require("../controllers/mahasiswaController")

// route
router.get("/", mahasiswaController.getAllMahasiswa);

// export module
module.exports = router