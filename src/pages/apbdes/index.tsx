import SidebarLayout from '../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { useEffect, useState } from 'react'
import { Anggaran } from '../../interfaces/anggaran'
import { getAnggaran } from '../../services/desaServices'

export default function ApbdesPage() {
  const [anggaran, setAnggaran] = useState<Anggaran[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchAnggaran() {
      try {
        const data = await getAnggaran();
        setAnggaran(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('error:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    }
    fetchAnggaran();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const filteredAnggaran = anggaran.filter(item =>
    item.judul.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAnggaran.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
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
                <Link to='/tambah-apbdes'>
                  Tambah Data
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-4">
              <Table>
                <TableHeader className='text-[#0467AA] text-center' style={{ borderBottom: '#0890EA solid' }}>
                  <TableHead>NO</TableHead>
                  <TableHead>Judul</TableHead>
                  <TableHead>Tahun Anggaran</TableHead>
                  <TableHead>Tanggal Publikasi</TableHead>
                  <TableHead>Aksi</TableHead>
                </TableHeader>
                <TableBody>
                  {currentItems.map((a, index) => (
                    <TableRow key={a.id}>
                      <TableCell>{indexOfFirstItem + index + 1}</TableCell>
                      <TableCell>{a.judul}</TableCell>
                      <TableCell>{a.tahun_anggaran}</TableCell>
                      <TableCell>{new Date(a.createdAt).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell>
                      <TableCell>
                        <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                          <Button>
                            <Link to={`/anggaran/${a.id}`}>
                              Edit
                            </Link>
                          </Button>
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
                  disabled={indexOfLastItem >= filteredAnggaran.length}
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="bg-[#0890EA] text-white px-4 py-2 rounded"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}
