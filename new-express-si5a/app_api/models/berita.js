const mongoose = require('mongoose') // impor mongoose

// skema untuk collection fakultas
const beritaSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true, // wajib diisi
    trim: true, // untuk menghapus spasi diawal dan akhir input-an
  },
  deskripsi: {
    type: String,
    required: true,
    trim: true
  },
  isi: {
    type: String,
    required: true,
    trim: true
  },
  tanggal: {
    type: Date,
    default: Date.now
  }
})

// sertakan skema Berita ke dalam model Berita
const Berita = mongoose.model("Berita", beritaSchema)

// expor model Berita
module.exports = Berita