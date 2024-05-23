import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLaporanById, getAgenda } from '../../services/desaServices';
import SidebarLayout from '../../components/layout/SidebarLayout';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { Laporan } from '../../interfaces/laporan';

export default function DetailLaporan() {
  const { id } = useParams<{ id: string }>(); 
  const [laporan, setLaporan] = useState<Laporan | null>(null); 
  const [namaKegiatan, setNamaKegiatan] = useState<string>(''); 
  useEffect(() => {
    async function fetchLaporan() {
      try {
        const data = await getLaporanById(id!); 
        setLaporan(data);
      } catch (error) {
        console.error('Error fetching laporan:', error);
      }
    }
    fetchLaporan();
  }, [id]); 

  useEffect(() => {
    async function fetchAgendaData() {
      try {
        const agendaData = await getAgenda();
        const agendaTerkait = agendaData.find(agenda => agenda.id === laporan?.id_agenda); 
        if (agendaTerkait) {
          setNamaKegiatan(agendaTerkait.nama_kegiatan); 
        }
      } catch (error) {
        console.error('Error fetching agenda data:', error);
      }
    }
    if (laporan) {
      fetchAgendaData();
    }
  }, [laporan]); 

  if (!laporan || !namaKegiatan) {
    return <div>Loading...</div>; 
  }

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Detail Laporan</div>
            <div className="flex">
              <HomeIcon color="#0890EA" size={16} />
              <div className="ml-4 flex">
                <ArrowRightIcon color="#000000" size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">Detail Laporan</div>
            </div>
          </div>
          <div className="flex justify-end mt-4"></div>
          <div className="bg-white rounded-[15px] mt-6 ">
            <div className="p-6 mb-6">
              <div className="text-[20px] font-medium">{namaKegiatan}</div>
              <div>
                <div className="text-[18px] font-medium mt-8">Dokumentasi</div>
                <div className="grid grid-cols-4 gap-4">
                
                <img src={`https://desa-digital-bakend-production.up.railway.app/api/dokumentasir/${laporan.dokumentasi}`} alt="" />
                </div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Hari/Tanggal</div>
                <div>{new Date(laporan.tgl_realisasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Jumlah Peserta</div>
                <div>{laporan.jumlah_peserta} orang</div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Lokasi</div>
                <div>{laporan.lokasi_kegiatan}</div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Anggaran Desa</div>
                <div>Rp. {laporan.anggaran_desa}</div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Donasi</div>
                <div>Rp. {laporan.donasi}</div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Status Kegiatan</div>
                <div>{laporan.status_kegiatan}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
