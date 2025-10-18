const mongoose = require('mongoose') // impor mongoose

// skema untuk collection mahasiswa
const mahasiswaSchema = new mongoose.Schema({
  npm: {
    type: String,
    required: true, // wajib diisi
    trim: true, // untuk menghapus spasi diawal dan akhir input-an
  },
  nama: {
    type: String,
    required: true, // wajib diisi
    trim: true, // untuk menghapus spasi diawal dan akhir input-an
  },
  tempat_lahir: {
    type: String,
    required: true,
    trim: true
  },
  tanggal_lahir: {
    type: String,
    required: true,
    trim: true
  },
  prodi_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prodi",
    required: true,
  }
})

// sertakan skema mahasiswa ke dalam model Mahasiswa
const Mahasiswa = mongoose.model("Mahasiswa", mahasiswaSchema)

// expor model Mahasiswa
module.exports = Mahasiswa