const express = require("express")
const router = express.Router()

// impor fakultasController
const fakultasController = require("../controllers/fakultasController")

// route
router.get("/", fakultasController.getAllFakultas);

// export module
module.exports = router