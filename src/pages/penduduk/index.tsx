import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PendudukDesa } from '../../interfaces/penduduk';
import { getPenduduk } from '../../services/desaServices'

export default function Penduduk() {
    const [penduduk, setPenduduk] = useState<PendudukDesa[]>([]);
    const [searchKeyword, setSearchKeyword] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10;
    const [totalPopulation, setTotalPopulation] = useState<number>(0);
    const [totalMan, setTotalMan] = useState<number>(0);
    const [totalWoman, setTotalWoman] = useState<number>(0);
    useEffect(() => {
        async function fetchPenduduk() {
            try {
                const data = await getPenduduk();
                setPenduduk(data);
                const totalPop = data.length;
                const totalM = data.filter(p => p.jenis_kelamin === 'Laki-laki').length;
                const totalW = data.filter(p => p.jenis_kelamin === 'Perempuan').length;


                setTotalPopulation(totalPop);
                setTotalMan(totalM);
                setTotalWoman(totalW);
            } catch (error) {
                if (error instanceof Error) {
                    console.error('error:', error.message);
                } else {
                    console.error('An unexpected error occurred:', error);
                }
            }
        }
        fetchPenduduk();
    }, []);

    const filteredPenduduk = penduduk.filter((p) =>
        p.nama.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredPenduduk.slice(startIndex, startIndex + itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => (startIndex + itemsPerPage < filteredPenduduk.length ? prevPage + 1 : prevPage));
    };

    return (
        <SidebarLayout>
             <div className="bg-[#ffffff] rounded-[8px] mt-4">
                    <div className="p-4 flex justify-between items-center">
                         <div className="">
                              <div className="text-[16px] font-bold">Total Penduduk</div>
                              <div className="text-center text-[#146ADC] font-medium text-[20px] mt-2">{totalPopulation} Jiwa</div>
                         </div>
                         <div className="h-12 border border-gray-300 mx-4"></div>
                         <div className="">
                              <div className="text-[16px] font-bold">Total Laki-laki</div>
                              <div className="text-center mt-2 text-[#146ADC] font-medium text-[20px]">{totalMan} Jiwa</div>
                         </div>
                         <div className="h-12 border border-gray-300 mx-4"></div>
                         <div className="">
                              <div className="text-[16px] font-bold">Total Perempuan</div>
                              <div className="text-center mt-2 text-[#146ADC] font-medium text-[20px]">{totalWoman} Jiwa</div>
                         </div>
                    </div>
               </div>
            <div className="bg-[#ffffff] rounded-[5px] mt-4">
                <div className="p-4">
                    <div className="flex items-center justify-between">
                        <div className="relative w-[376px]">
                            <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                            <Input
                                placeholder="Ketikkan kata kunci..."
                                className="pl-[35px] rounded-[23px] border border-[2px] border-[#0B0B2A]"
                                value={searchKeyword}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="">
                            <Button width={249} height={47} color='white' bgColor='#0B0B2A' rounded={5} >
                                <Link to='/tambah-penduduk'>
                                    Tambah Data Penduduk
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[5px] mt-6">
                        <Table>
                            <TableHeader style={{
                                borderBottom: '#0890EA solid',
                            }}>
                                <TableHead>NO</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>NIK</TableHead>
                                <TableHead>Alamat</TableHead>
                                <TableHead>Status Perkawinan</TableHead>
                                <TableHead className='text-center'>Aksi</TableHead>
                            </TableHeader>
                            <TableBody>
                                {currentData.map((p, index) => (
                                    <TableRow key={p.id}>
                                        <TableCell>{startIndex + index + 1}</TableCell>
                                        <TableCell>{p.nama}</TableCell>
                                        <TableCell>{p.nik}</TableCell>
                                        <TableCell>{p.alamat}</TableCell>
                                        <TableCell>{p.status_perkawinan}</TableCell>
                                        <TableCell>
                                            <div className="flex justify-center ml-4 mr-4">
                                                <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                    <Button>
                                                        <Link to={`/edit-penduduk/${p.id}`} >
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
                        <div className="flex justify-between p-4">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="bg-[#0890EA] text-white px-4 py-2 rounded"
                            >
                                Kembali
                            </button>
                            <button
                                onClick={handleNextPage}
                                disabled={startIndex + itemsPerPage >= filteredPenduduk.length}
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
