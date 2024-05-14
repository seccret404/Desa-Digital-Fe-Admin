import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/data-penduduk' element={<Penduduk />} />
        <Route path='/tambah-penduduk' element={<TambahPenduduk />} />
        <Route path='/edit-penduduk/:id' element={<EditPenduduk />} />
        <Route path='/dusun' element={<DusunPage />} />
        <Route path='/tambah-dusun' element={<TambahDusun />} />
        <Route path='/edit-dusun/:id' element={<EditDusun />} />
        <Route path='/tambah-umkm' element={<AddUmkm />} />
        <Route path='/detail-umkm' element={<DetailUmkm />} />
        <Route path='/berita' element={<BeritaPage/>}/>
        <Route path='/edit-berita/:id' element={<EditBerita/>}/>
        <Route path='/tambah-berita' element={<TambahBerita/>}/>
        <Route path='detail-wisata' element={<DetailWisata/>}/>
        <Route path='/data-desa' element={<DataDesa/>}/>
        <Route path='/profil-desa' element={<ProfilForm/>}/>
        <Route path='/profil-desa/:id' element={<ProfilEdit/>}/>
        <Route path='/pemerintahan' element={<Pemerintahan/>}/>
        <Route path='/tambah-pemerintah' element={<TambahPemerintah/>}/>
        <Route path='/tugas-wewenang' element={<TugasWewenang/>}/>
        <Route path='/tambah-tugas-wewenang' element={<TambahTugasWewenang/>}/>
        <Route path='/agenda-desa' element={<AgendaPage/>}/>
        <Route path='/tambah-agenda' element={<TambahAgenda/>}/>
        <Route path='/edit-agenda/:id' element={<EditAgenda/>}/>
        <Route path='/laporan-agenda/:id' element={<LaporanAgenda/>}/>
        <Route path='/apbdes' element={<ApbdesPage/>} />
        <Route path='/laporan-detail/:id' element={<DetailLaporan/>}/>
        <Route path='/tambah-apbdes' element={<AddApbdes/>} />
        <Route path='/organisasi' element={<OrganisasiPage/>} />
        <Route path='/tambah-organisasi' element={<AddOrganisasi/>} />
        <Route path='/pengumuman' element={<PengumumanPage/>} />
        <Route path='/tambah-pengumuman' element={<TambahPengumuman/>} />
        <Route path='/edit-pengumuman/:id' element={<EditPengumuman/>} />
        <Route path='/bantuan' element={<BantuanPage/>} />
        <Route path='/tambah-bantuan' element={<DaftarBantuanPage/>} />
        <Route path='/tambah-daftar' element={<TambahDaftarBantuan/>} />
        <Route path='/tambah-penerima' element={<TambahPenerimaBantuan/>} />
        <Route path='/edit-penerima/:id' element={<EditPenerimaBantuan/>} />

      </Routes> 
    </Router>
  )
}
