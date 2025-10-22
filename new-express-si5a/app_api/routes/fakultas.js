const express = require("express")
const router = express.Router()

// impor fakultasController
const fakultasController = require("../controllers/fakultasController")

// route fakultas
router.get("/", fakultasController.getAllFakultas);
router.post("/", fakultasController.createFakultas);

// export module
module.exports = router