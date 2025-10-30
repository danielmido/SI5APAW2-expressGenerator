// import model Fakultas
const fakultasSchema = require("../models/fakultas")

// fungsi untuk mengambil semua isi collection fakultas
const getAllFakultas = async (req, res) => {
  try {
    // GET collection fakultas
    const result = await fakultasSchema.find()
    res.status(200).json(result)
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

// fungsi untuk mengambil isi collection fakultas berdasarkan parameter id
const getFakultasById = async(req, res) => {
  try {
    // GET collection fakultas berdasarkan parameter id
    const result = await fakultasSchema.findById(req.params.id)
    if(!result) {
      // jika data fakultas tidak ada pada MongoDB
      res.status(404).json({ message: "Fakultas tidak ditemukan "})
    } else {
      // jika data fakultas ada
      res.status(200).json(result)
    }
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

// fungsi untuk meng-update isi collection fakultas berdasarkan parameter id
const updateFakultasById = async(req, res) => {
  try {
    // GET collection fakultas berdasarkan parameter id
    const result = await fakultasSchema.findById(req.params.id)
    if(!result) {
      // jika data fakultas tidak ada pada MongoDB
      res.status(404).json({ message: "Fakultas tidak ditemukan "})
    } else {
      // jika data fakultas ada
      // jika ada request perubahan nama
      if(req.body.nama != null) {
        result.nama = req.body.nama
      }

      // jika ada request perubahan singkatan
      if(req.body.singkatan != null) {
        result.singkatan = req.body.singkatan
      }

      // update data fakultas
      const updateFakultas = await result.save()
      res.status(200).json(result)
    }
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

// fungsi delete fakultas
const deleteFakultasById = async(req, res) => {
  try {
    // GET collection fakultas berdasarkan parameter id
    const result = await fakultasSchema.findById(req.params.id)
    if(!result) {
      // jika data fakultas tidak ada pada MongoDB
      res.status(404).json({ message: "Fakultas tidak ditemukan "})
    } else {
      // jika data fakultas ada
      await result.deleteOne()
      res.status(200).json({ message: "Fakultas berhasil dihapus" })
    }
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
}

const createFakultas = async(req, res) => {
  // buat instance
  const fakultas = new fakultasSchema({
    nama: req.body.nama,
    singkatan: req.body.singkatan
  })

  // simpan data fakultas ke dalam collection
  const hasil = await fakultas.save();

  // beri response json HTTP_CREATED
  res.status(201).json(hasil);
}

// export
module.exports = { getAllFakultas, createFakultas, getFakultasById, deleteFakultasById, updateFakultasById }