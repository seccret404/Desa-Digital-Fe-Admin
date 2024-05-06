import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarLayout from '../../components/layout/SidebarLayout'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Link } from 'react-router-dom'
import PrintIcon from '../../components/icon/printIcon'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { getAgenda,getLaporanAgenda } from '../../services/desaServices'
import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx'
import { Agenda } from '../../interfaces/agenda';
import { Laporan } from '../../interfaces/laporan'

export default function AgendaPage() {
  const [agenda, setAgenda] = useState<Agenda[]>([]);
  const [laporanAgenda, setLaporanAgenda] = useState<Laporan[]>([]);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    async function fetchAgenda() {
      try {
        const data = await getAgenda();
        setAgenda(data);
      } catch (error) {
        console.error('Error fetching agenda:', error);
      }
    }
    fetchAgenda();
  }, []);

  useEffect(() => {
    async function fetchLaporanAgenda() {
      try {
        const data = await getLaporanAgenda();
        setLaporanAgenda(data);
      } catch (error) {
        console.error('Error fetching agenda report:', error);
      }
    }
    fetchLaporanAgenda();
  }, []);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setSelectedYear(currentYear.toString());
  }, []);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= currentYear - 10; i--) {
      years.push(i.toString());
    }
    return years;
  };

  const filteredAgenda = selectedYear ? agenda.filter(item => new Date(item.tanggal_kegiatan).getFullYear().toString() === selectedYear) : agenda;

  const exportToExcel = () => {
    let fileName = "Agenda.xlsx";
    if (selectedYear) {
      fileName = `Agenda_${selectedYear}.xlsx`;
    }
    const ws = XLSX.utils.json_to_sheet(filteredAgenda);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Agenda");
    XLSX.writeFile(wb, fileName);
  };

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="flex items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-[376px]">
              <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
              <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px]" />
            </div>
            {/* Add Agenda Button */}
            <div className="">
              <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                <Link to='/tambah-agenda'>
                  Tambah Data Agenda
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="">
              <div className="">Agenda Tahun</div>
              <div className="">
                <select onChange={handleYearChange} value={selectedYear || ''} className="w-[270px] bg-[#40A2E3] h-[40px] p-2 text-white">
                  <option value="">Tampilkan Semua</option>
                  <option value={currentYear.toString()}>{currentYear}</option>
                  {generateYearOptions().map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Export Button */}
            <div className="">
              <button onClick={exportToExcel} className='text-white bg-[#0D9276] w-[177px] rounded-[5px] h-[44px]'>
                <div className="flex p-2 justify-center">
                  <div className="">Export Agenda</div> <PrintIcon color='white' size={24} />
                </div>
              </button>
            </div>
          </div>
          {/* Agenda Table */}
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-4">
              <Table>
                <TableHeader style={{
                  borderBottom: '#0890EA solid',
                }}>
                  <TableHead>NO</TableHead>
                  <TableHead>Nama Kegiatan</TableHead>
                  <TableHead >Hari/Tanggal</TableHead>
                  <TableHead >Lokasi</TableHead>
                  <TableHead >Laporan</TableHead>
                  <TableHead className='text-center'>Aksi</TableHead>
                </TableHeader>
                <TableBody>
                  {filteredAgenda.map((p, index) => (
                    <TableRow key={p.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{p.nama_kegiatan}</TableCell>
                      <TableCell>{new Date(p.tanggal_kegiatan).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell>
                      <TableCell>{p.lokasi}</TableCell>
                      <TableCell>
                        {laporanAgenda.findIndex(item => item.id_agenda === p.id) !== -1 ? (
                          <Link to={`/laporan-detail/${p.id}`}>
                            Lihat Laporan
                          </Link>
                        ) : (
                         <Link to={`/laporan-agenda/${p.id}`}>
                         Buat Laporan
                       </Link>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-center ml-4 mr-4">
                          <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                            <Button>
                              <Link to={`/edit-agenda/${p.id}`}>
                                Edit
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}