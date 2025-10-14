const express = require("express")
const router = express.Router()

// impor beritaController
const beritaController = require("../controllers/beritaController")

// route
router.get("/", beritaController.getAllBerita);

// export module
module.exports = router