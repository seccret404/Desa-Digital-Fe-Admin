import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Penerima } from '../../interfaces/penerimaBantuan'
import {  getPenerimaBantuan } from '../../services/desaServices'

export default function BantuanPage() {
  const [, setIsLoggedIn] = useState(false);
  const [bantuan, setBantuan] = useState<Penerima[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchPenerimaBantuan() {
      try {
        const data = await getPenerimaBantuan();
        setBantuan(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('error:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    }
    fetchPenerimaBantuan();
  }, []);

 

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredBantuan = bantuan.filter(item =>
    item.nama_penerima.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.nama_bantuan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBantuan.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="bg-[#D9D9D98B] rounded-[5px]">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="relative w-[376px]">
              <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
              <Input
                placeholder="Ketikkan kata kunci..."
                className="pl-[35px] rounded-[23px] border border-[2px] border-[#0B0B2A]"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <div className="">
              <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5}>
                <Link to='/tambah-penerima'>
                  Tambah Data Penerima Bantuan
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-[5px] mt-6">
            <Table>
              <TableHeader style={{ borderBottom: '#0890EA solid' }}>
                <TableHead>NO</TableHead>
                <TableHead>Nama Penerima</TableHead>
                <TableHead>Nama bantuan</TableHead>
                <TableHead>Tanggal Mulai Diterima</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Jumlah Penerimaan</TableHead>
                <TableHead className='text-center'>Aksi</TableHead>
              </TableHeader>
              <TableBody>
                {currentItems.map((d, index) => (
                  <TableRow key={d.id}>
                    <TableCell>{indexOfFirstItem + index + 1}</TableCell>
                    <TableCell>{d.nama_penerima}</TableCell>
                    <TableCell>{d.nama_bantuan}</TableCell>
                    <TableCell>{new Date(d.tgl_terima).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell>
                    <TableCell>{d.status_bantuan}</TableCell>
                    <TableCell className='text-center bg-[#1FC7BF] text-white font-bold text-[16px]'>
                      {d.jumlah_terima}
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center ml-4 mr-4">
                        <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                          <Button>
                            <Link to={`/edit-penerima/${d.id}`}>
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
            <div className="flex justify-between mt-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="bg-[#0890EA] text-white px-4 py-2 rounded"
              >
                Kembali
              </button>
              <button
                disabled={indexOfLastItem >= filteredBantuan.length}
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="bg-[#0890EA] text-white px-4 py-2 rounded"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}
