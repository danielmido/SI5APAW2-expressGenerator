const express = require("express")
const router = express.Router()

// impor prodiController
const prodiController = require("../controllers/prodiController")

// route
router.get("/", prodiController.getAllProdi);

// export module
module.exports = router