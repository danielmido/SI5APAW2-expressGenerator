const express = require("express")
const router = express.Router()

// impor fakultasController
const fakultasController = require("../controllers/fakultasController")

// Mengimpor middleware untuk autentikasi dan pengecekan peran
const authMiddleware = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// route fakultas
router.get("/", authMiddleware, fakultasController.getAllFakultas);
router.post("/", authMiddleware, roleMiddleware("admin"), fakultasController.createFakultas);
router.get("/:id", authMiddleware, fakultasController.getFakultasById);
router.delete("/:id", authMiddleware, roleMiddleware("admin"), fakultasController.deleteFakultasById);
router.put("/:id", authMiddleware, roleMiddleware("admin"), fakultasController.updateFakultasById);

// export module
module.exports = router