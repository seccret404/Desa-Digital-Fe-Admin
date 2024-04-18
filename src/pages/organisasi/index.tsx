import SidebarLayout from '../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { useState, useEffect } from 'react'
import { getOrganisasi } from '../../services/desaServices'
import { Organisasi } from '../../interfaces/organisasi'



export default function OrganisasiPage() {
     const [organisasi, setOrganisasi] = useState<Organisasi[]>([]);

  useEffect(() => {
    async function fetchOrganisasi() {
      try {
        const data = await getOrganisasi();
        setOrganisasi(data); 
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
    fetchOrganisasi();
  }, []);
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="flex items-center justify-between">
                              <div className="relative w-[376px]">
                                   <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                                   <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px]" />
                              </div>
                              <div className="">
                                   <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                        <Link to='/tambah-organisasi'>
                                             Tambah Data
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6">
                              <div className="p-4">
                                   <Table>
                                        <TableHeader className='text-[#0467AA] text-center' style={{
                                             borderBottom: '#0890EA solid',
                                        }}>
                                             <TableHead>NO</TableHead>
                                             <TableHead>Nama Organisasi</TableHead>
                                             <TableHead>Tahun Berdiri</TableHead>
                                             <TableHead>Alamat Organisasi</TableHead>
                                             <TableHead>Nama Ketua</TableHead>
                                             <TableHead>Aksi</TableHead>
                                        </TableHeader>
                                        <TableBody>
                                        {organisasi.map((p, index) => (
                                    <TableRow key={p.id}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{p.nama_lembaga}</TableCell>
                                        <TableCell>{p.tahun_berdiri}</TableCell>
                                        <TableCell>{p.alamat_organisasi}</TableCell>
                                        <TableCell>{p.ketua}</TableCell>
                                        <TableCell>
                                             <div className="flex justify-center ml-4 mr-4">

                                                  <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                       <Button>
                                                            Edit
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
