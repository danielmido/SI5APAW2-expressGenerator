var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', layout: 'main' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Us', layout: 'main' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us', layout: 'main' });
});

/* GET prodi page. */
router.get('/prodi', function(req, res, next) {
  const prodi = [
    { kode: 24, namaProdi: "Sistem Informasi", singkatan: "SI", namaFakultas: "Fakultas Ilmu Komputer an Rekayasa" },
    { kode: 25, namaProdi: "Informatika", singkatan: "IF", namaFakultas: "Fakultas Ilmu Komputer dan Rekayasa" },
    { kode: 11, namaProdi: "Manajemen Informatika", singkatan: "MI", namaFakultas: "Fakultas Ilmu domputer Dan Rekayasa" },
    { kode: 27, namaProdi: "Teknik Elektro", singkatan: "TE", namaFakultas: "Fakultas Ilmu Komputer dan Rekayasa" },
    { kode: 20, namaProdi: "Akuntansi", singkatan: "AK", namaFakultas: "Fakultas Ekonomi dan Bisnis" },
    { kode: 21, namaProdi: "Manajemen", singkatan: "MJ", namaFakultas: "Fakultas Ekonomi dan Bisnis" }
  ];

  res.render('prodi', { prodi, title: 'Prodi', layout: 'main' });
});

module.exports = router;
