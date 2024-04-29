
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

     useEffect(() => {
          async function fetchPenduduk() {
               try {
                    const data = await getPenduduk();
                    setPenduduk(data);
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
                                        <Link to='/tambah-penduduk'>
                                             Tambah Data Penduduk
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6">
                              <Table>
                                   <TableHeader style={{
                                        borderBottom: '#0890EA solid',
                                   }}>
                                        <TableHead>NO</TableHead>
                                        <TableHead>Nama</TableHead>
                                        <TableHead >NIK</TableHead>
                                        <TableHead >Alamat</TableHead>
                                        <TableHead >Status</TableHead>
                                        <TableHead className='text-center'>Aksi</TableHead>
                                   </TableHeader>
                                   <TableBody>
                                        {penduduk.map((p, index) => (
                                             <TableRow key={p.id}>
                                                  <TableCell>{index + 1}</TableCell>
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
                         </div>
                    </div>
               </div>
          </SidebarLayout>

     )
}
