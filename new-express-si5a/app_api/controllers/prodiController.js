// import model Prodi
const prodiSchema = require("../models/prodi")

// fungsi untuk mengambil semua isi collection prodi
const getAllProdi = async (req, res) => {
  try {
    // GET collection prodi
    const result = await prodiSchema.find().populate("fakultas_id", "nama singkatan")
    res.status(200).json(result)
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

const createProdi = async(req, res) => {
  // buat instance
  const prodi = new prodiSchema({
    nama: req.body.nama,
    singkatan: req.body.singkatan
  })

  // simpan data prodi ke dalam collection
  const hasil = await prodi.save();

  // beri response json HTTP_CREATED
  res.status(201).json(hasil);
}

// export
module.exports = { getAllProdi, createProdi }