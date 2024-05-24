import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Penduduk from './pages/penduduk'
import TambahPenduduk from './pages/penduduk/tambah_penduduk'
// import UmkmPage from './pages/potensi_desa/umkm'
import AddUmkm from './pages/potensi_desa/umkm/tambahUmkm'
import DetailUmkm from './pages/potensi_desa/umkm/detail'
import DetailWisata from './pages/potensi_desa/wisata/detail'
import DataDesa from './pages/data_desa'
import ProfilForm from './pages/data_desa/profilDesa_form'
import AgendaPage from './pages/agenda_desa'
import TambahAgenda from './pages/agenda_desa/tambah'
import LaporanAgenda from './pages/agenda_desa/laporanForm'
import DetailLaporan from './pages/agenda_desa/detail_laporan'
import ApbdesPage from './pages/apbdes'
import AddApbdes from './pages/apbdes/tambah_apbdes'
import OrganisasiPage from './pages/organisasi'
import AddOrganisasi from './pages/organisasi/tambahorganisasi'
import EditPenduduk from './pages/penduduk/edit'
import TambahDusun from './pages/data_desa/tambah-dusun'
import DusunPage from './pages/data_desa/dusun'
import EditDusun from './pages/data_desa/edit-dusun'
import BeritaPage from './pages/informasi Publik/berita'
import TambahBerita from './pages/informasi Publik/create_berita'
import EditBerita from './pages/informasi Publik/edit_berita'
import TambahPengumuman from './pages/informasi Publik/pengumuman/tambah_pengumuman'
import EditPengumuman from './pages/informasi Publik/pengumuman/edit'
import PengumumanPage from './pages/informasi Publik/pengumuman'
import EditAgenda from './pages/agenda_desa/editAgenda'
import BantuanPage from './pages/banntuan'
import DaftarBantuanPage from './pages/banntuan/daftar_bantuan'
import TambahDaftarBantuan from './pages/banntuan/tambah_bantuan'
import TambahPenerimaBantuan from './pages/banntuan/tambah_penerima'
import Pemerintahan from './pages/data_desa/pemerintahan'
import TambahPemerintah from './pages/data_desa/pemerintahan/tambah'
import TugasWewenang from './pages/data_desa/TugasWewenang'
import TambahTugasWewenang from './pages/data_desa/TugasWewenang/tambah'
import ProfilEdit from './pages/data_desa/editdesa'
import EditPenerimaBantuan from './pages/banntuan/edit_penerima'
import EditOrganisasi from './pages/organisasi/edit'
import EditAddApbdes from './pages/apbdes/edit'
import Login from './pages/auth/login'
import Logout from './pages/auth/logout'
import { useState } from 'react'
import PrivateRoute from './components/privateRoute'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <Router>
          <Routes>
              <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route path="/dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard /></PrivateRoute>} />
              <Route path="/logout" element={<PrivateRoute isLoggedIn={isLoggedIn}><Logout /></PrivateRoute> } />
              <Route path="/data-penduduk" element={<PrivateRoute isLoggedIn={isLoggedIn}><Penduduk /></PrivateRoute>} />
              <Route path="/tambah-penduduk" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahPenduduk /></PrivateRoute>} />
              <Route path="/edit-penduduk/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditPenduduk /></PrivateRoute>} />
              <Route path="/dusun" element={<PrivateRoute isLoggedIn={isLoggedIn}><DusunPage /></PrivateRoute>} />
              <Route path="/tambah-dusun" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahDusun /></PrivateRoute>} />
              <Route path="/edit-dusun/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditDusun /></PrivateRoute>} />
              <Route path="/tambah-umkm" element={<PrivateRoute isLoggedIn={isLoggedIn}><AddUmkm /></PrivateRoute>} />
              <Route path="/detail-umkm" element={<PrivateRoute isLoggedIn={isLoggedIn}><DetailUmkm /></PrivateRoute>} />
              <Route path="/berita" element={<PrivateRoute isLoggedIn={isLoggedIn}><BeritaPage /></PrivateRoute>} />
              <Route path="/edit-berita/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditBerita /></PrivateRoute>} />
              <Route path="/tambah-berita" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahBerita /></PrivateRoute>} />
              <Route path="/detail-wisata" element={<PrivateRoute isLoggedIn={isLoggedIn}><DetailWisata /></PrivateRoute>} />
              <Route path="/data-desa" element={<PrivateRoute isLoggedIn={isLoggedIn}><DataDesa /></PrivateRoute>} />
              <Route path="/profil-desa" element={<PrivateRoute isLoggedIn={isLoggedIn}><ProfilForm /></PrivateRoute>} />
              <Route path="/profil-desa/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><ProfilEdit /></PrivateRoute>} />
              <Route path="/pemerintahan" element={<PrivateRoute isLoggedIn={isLoggedIn}><Pemerintahan /></PrivateRoute>} />
              <Route path="/tambah-pemerintah" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahPemerintah /></PrivateRoute>} />
              <Route path="/tugas-wewenang" element={<PrivateRoute isLoggedIn={isLoggedIn}><TugasWewenang /></PrivateRoute>} />
              <Route path="/tambah-tugas-wewenang" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahTugasWewenang /></PrivateRoute>} />
              <Route path="/agenda-desa" element={<PrivateRoute isLoggedIn={isLoggedIn}><AgendaPage /></PrivateRoute>} />
              <Route path="/tambah-agenda" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahAgenda /></PrivateRoute>} />
              <Route path="/edit-agenda/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditAgenda /></PrivateRoute>} />
              <Route path="/laporan-agenda/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><LaporanAgenda /></PrivateRoute>} />
              <Route path="/apbdes" element={<PrivateRoute isLoggedIn={isLoggedIn}><ApbdesPage /></PrivateRoute>} />
              <Route path="/anggaran/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditAddApbdes /></PrivateRoute>} />
              <Route path="/laporan-detail/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><DetailLaporan /></PrivateRoute>} />
              <Route path="/tambah-apbdes" element={<PrivateRoute isLoggedIn={isLoggedIn}><AddApbdes /></PrivateRoute>} />
              <Route path="/organisasi" element={<PrivateRoute isLoggedIn={isLoggedIn}><OrganisasiPage /></PrivateRoute>} />
              <Route path="/organisasi/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditOrganisasi /></PrivateRoute>} />
              <Route path="/tambah-organisasi" element={<PrivateRoute isLoggedIn={isLoggedIn}><AddOrganisasi /></PrivateRoute>} />
              <Route path="/pengumuman" element={<PrivateRoute isLoggedIn={isLoggedIn}><PengumumanPage /></PrivateRoute>} />
              <Route path="/tambah-pengumuman" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahPengumuman /></PrivateRoute>} />
              <Route path="/edit-pengumuman/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditPengumuman /></PrivateRoute>} />
              <Route path="/bantuan" element={<PrivateRoute isLoggedIn={isLoggedIn}><BantuanPage /></PrivateRoute>} />
              <Route path="/tambah-bantuan" element={<PrivateRoute isLoggedIn={isLoggedIn}><DaftarBantuanPage /></PrivateRoute>} />
              <Route path="/tambah-daftar" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahDaftarBantuan /></PrivateRoute>} />
              <Route path="/tambah-penerima" element={<PrivateRoute isLoggedIn={isLoggedIn}><TambahPenerimaBantuan /></PrivateRoute>} />
              <Route path="/edit-penerima/:id" element={<PrivateRoute isLoggedIn={isLoggedIn}><EditPenerimaBantuan /></PrivateRoute>} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
      </Router>
  );
}


