import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Penduduk from './pages/penduduk'
import TambahPenduduk from './pages/penduduk/tambah_penduduk'
import UmkmPage from './pages/potensi_desa/umkm'
import AddUmkm from './pages/potensi_desa/umkm/tambahUmkm'
import DetailUmkm from './pages/potensi_desa/umkm/detail'
import WisataPage from './pages/potensi_desa/wisata'
import AddWisata from './pages/potensi_desa/wisata/tambahWisata'
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
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/data-penduduk' element={<Penduduk />} />
        <Route path='/tambah-penduduk' element={<TambahPenduduk />} />
        <Route path='/umkm' element={<UmkmPage />} />
        <Route path='/tambah-umkm' element={<AddUmkm />} />
        <Route path='/detail-umkm' element={<DetailUmkm />} />
        <Route path='/wisata' element={<WisataPage/>}/>
        <Route path='/tambah-wisata' element={<AddWisata/>}/>
        <Route path='detail-wisata' element={<DetailWisata/>}/>
        <Route path='/data-desa' element={<DataDesa/>}/>
        <Route path='/profil-desa' element={<ProfilForm/>}/>
        <Route path='/agenda-desa' element={<AgendaPage/>}/>
        <Route path='/tambah-agenda' element={<TambahAgenda/>}/>
        <Route path='/laporan-agenda' element={<LaporanAgenda/>}/>
        <Route path='/apbdes' element={<ApbdesPage/>} />
        <Route path='/laporan-detail' element={<DetailLaporan/>}/>
        <Route path='/tambah-apbdes' element={<AddApbdes/>} />
        <Route path='/organisasi' element={<OrganisasiPage/>} />
        <Route path='/tambah-organisasi' element={<AddOrganisasi/>} />

      </Routes> 
    </Router>
  )
}
