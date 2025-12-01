// Import hooks dari React untuk state management dan side effects
import { useState, useEffect } from "react";
// Import axios untuk melakukan HTTP request ke API
import axios from "axios";
// Import sweetalert2
import Swal from "sweetalert2";

import { NavLink } from "react-router-dom";

export default function MahasiswaList() {
  // State untuk menyimpan data mahasiswa dari API
  const [mahasiswa, setMahasiswa] = useState([]);
  // State untuk menandakan proses loading data
  const [loading, setLoading] = useState(true);
  // State untuk menyimpan pesan error jika terjadi kesalahan
  const [error, setError] = useState(null);

  // useEffect akan dijalankan sekali saat komponen pertama kali di-render
  useEffect(() => {
    // Fungsi async untuk fetch data dari API
    const fetchMahasiswa = async () => {
      try {
        // Set loading true sebelum fetch data
        setLoading(true);
        // Mengambil data dari API menggunakan axios
        const response = await axios.get(
          "https://newexpresssi5a-weld.vercel.app/api/mahasiswa"
        );
        // Simpan data yang diterima ke state mahasiswa
        setMahasiswa(response.data);
        // Reset error jika fetch berhasil
        setError(null);
      } catch (err) {
        // Jika terjadi error, simpan pesan error ke state
        setError(err.message);
        console.error("Error fetching mahasiswa:", err);
      } finally {
        // Set loading false setelah proses selesai (berhasil atau gagal)
        setLoading(false);
      }
    };

    // Panggil fungsi fetchMahasiswa
    fetchMahasiswa();
  }, []); // Dependency array kosong = hanya dijalankan sekali saat mount

  // Tampilkan pesan loading jika data masih diambil
  if (loading) return <div>Loading...</div>;
  // Tampilkan pesan error jika ada kesalahan
  if (error) return <div>Error: {error}</div>;

  // handleDelete
  const handleDelete = (id, nama) => {
    Swal.fire({
      title: `Yakin mau hapus mhs an. ${nama}`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      // panggil endpoint API express pakai axios.delete()
      if (result.isConfirmed) {
        axios.delete(`https://newexpresssi5a-weld.vercel.app/api/mahasiswa/${id}`)
          .then((response) => {
            // hapus baris pada tabel sesuai id / refresh state
            setMahasiswa(mahasiswa.filter((f) => f._id !== id))

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }); // akhir swal
          })
      } // akhir if
    });
  }

  // Render tabel mahasiswa jika data sudah tersedia
  return (
    <div>
      <h1>Mahasiswa List</h1>

      {/* NavLink */}
      <NavLink to="/mahasiswa/create" className="btn btn-primary mb-3">
        Tambah Mahasiswa
      </NavLink>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>NPM</th>
            <th>Nama</th>
            <th>Tempat Lahir</th>
            <th>Tanggal Lahir</th>
            <th>Prodi</th>
          </tr>
        </thead>
        <tbody>
          {/* Loop data mahasiswa dan tampilkan dalam baris tabel */}
          {mahasiswa.map((mah) => (
            // key={mah._id} untuk identifikasi unik setiap baris
            <tr key={mah._id}>
              <td>{mah.npm}</td>
              <td>{mah.nama}</td>
              <td>{mah.tempat_lahir}</td>
              <td>{new Date(mah.tanggal_lahir).toLocaleDateString('id-ID')}</td>
              <td>{mah.prodi_id ? mah.prodi_id.nama : null}</td>
              <td>
                <button 
                  className="btn btn-danger" 
                  onClick={
                    () => handleDelete(mah._id, mah.nama)
                  }
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
