import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAgendaById, getLaporanAgenda } from '../../services/desaServices';
import SidebarLayout from '../../components/layout/SidebarLayout';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { Agenda } from '../../interfaces/agenda';
import { Laporan } from '../../interfaces/laporan';
import Button from '../../components/ui/button';

export default function DetailAgenda() {
  const [, setIsLoggedIn] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [agenda, setAgenda] = useState<Agenda | null>(null);
  const [laporan, setLaporan] = useState<Laporan[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!id) {
          return;
        }
        // Fetch agenda by ID
        const agendaData = await getAgendaById(id);
        setAgenda(agendaData);
        const allLaporan = await getLaporanAgenda();

        // Filter laporan based on id_agenda
        const filteredLaporan = allLaporan.filter((lap: Laporan) => lap.id_agenda === agendaData.id);
        setLaporan(filteredLaporan);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (id) {
      fetchData();
    }
  }, [id]);

  if (!agenda) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn} >
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Detail Agenda</div>
            <div className="flex">
              <HomeIcon color="#0890EA" size={16} />
              <div className="ml-4 flex">
                <ArrowRightIcon color="#000000" size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">Detail Agenda</div>
            </div>
          </div>
          <div className="flex justify-end mt-4"></div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-6 mb-6 ">
             <div className="flex justify-end">
             <div className="flex justify-center items-end text-[#ffffff] text-[12px] bg-[#0890EA] w-[70px] h-[23px] text-end rounded-[5px]">
              {laporan.length > 0 && (
                  <Button>
                    <Link to={`/edit-laporan/${laporan[0].id}`}> {/* Adjust this line to navigate to the edit page */}
                      Ubah
                    </Link>
                  </Button>
                )}
              </div>
             </div>
              <div className="text-[20px] font-medium">{agenda.nama_kegiatan}</div>
              <div>
                <div className="text-[18px] font-medium mt-8">Hari/Tanggal</div>
                <div>{new Date(agenda.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</div>
              </div>
              <div>
                <div className="text-[18px] font-medium mt-8">Lokasi</div>
                <div>{agenda.lokasi}</div>
              </div>
              {laporan.length > 0 && (
                <div>
                  <div className="text-[20px] font-medium mt-8">Dokumentasi</div>
                  {laporan.map((lap: Laporan) => (
                    <div key={lap.id}>
                      <div className=""><img src={`https://desa-api.desajanggadolok.id//api/dokumentasi/${lap.dokumentasi}`} alt="Dokumentasi" /></div>
                    </div>
                  ))}
                </div>
              )}
              {laporan.length > 0 && (
                <div>
                  <div className="text-[20px] font-medium mt-8">Koordinator</div>
                  {laporan.map((lap: Laporan) => (
                    <div key={lap.id}>
                      <div className="">{lap.koordinator}</div>
                    </div>
                  ))}
                </div>
              )}
              {laporan.length > 0 && (
                <div>
                  <div className="text-[20px] font-medium mt-8">Jumlah Peserta</div>
                  {laporan.map((lap: Laporan) => (
                    <div key={lap.id}>
                      <div className="">{lap.jumlah_peserta} Peserta</div>
                    </div>
                  ))}
                </div>
              )}
               {laporan.length > 0 && (
                <div>
                  <div className="text-[20px] font-medium mt-8">Anggaran Desa</div>
                  {laporan.map((lap: Laporan) => (
                    <div key={lap.id}>
                      <div className="">{lap.anggaran_desa}</div>
                    </div>
                  ))}
                </div>
              )}
              {laporan.length > 0 && (
                <div>
                  <div className="text-[20px] font-medium mt-8">Donasi</div>
                  {laporan.map((lap: Laporan) => (
                    <div key={lap.id}>
                      <div className="">{lap.donasi}</div>
                    </div>
                  ))}
                </div>
              )}
               {laporan.length > 0 && (
                <div>
                  <div className="text-[20px] font-medium mt-8">Status Kegiatan</div>
                  {laporan.map((lap: Laporan) => (
                    <div key={lap.id}>
                      <div className="">{lap.status_kegiatan}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>  
        </div>
      </div>
    </SidebarLayout>
  );
}
