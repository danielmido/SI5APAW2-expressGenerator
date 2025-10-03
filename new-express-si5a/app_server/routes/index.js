var express = require('express');
var router = express.Router();

// controller import
const mainController = require('../controllers/mainController');

/* GET home page */
router.get('/', mainController.index);

/* GET about page */
router.get('/about', mainController.about);

/* GET contact page. */
router.get('/contact', mainController.contact);

/* GET prodi page. */
router.get('/prodi', mainController.prodi);

module.exports = router;
