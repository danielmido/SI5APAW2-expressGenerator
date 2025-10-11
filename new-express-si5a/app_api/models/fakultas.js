const mongoose = require('mongoose') // impor mongoose

// skema untuk collection fakultas
const fakultasSchema = new mongoose.Schema({
  nama: {
    type: String,
    required: true, // wajib diisi
    trim: true, // untuk menghapus spasi diawal dan akhir input-an
  },
  singkatan: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// sertakan skema fakultas ke dalam model Fakultas
const Fakultas = mongoose.model("Fakultas", fakultasSchema)

// expor model Fakultas
module.exports = Fakultas