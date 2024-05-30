import SidebarLayout from '../../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../../components/ui/input'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { useEffect, useState } from 'react'
import { Pemerintah } from '../../../interfaces/pemerintah'
import { getPemerintah } from '../../../services/desaServices'

export default function Pemerintahan() {
     const [, setIsLoggedIn] = useState(false);
     const [pemerintah, setPemerintah] = useState<Pemerintah[]>([]);

     useEffect(() => {
          async function fetchPemerintah() {
               try {
                    const data = await getPemerintah();
                    setPemerintah(data);
               } catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
               }
          }
          fetchPemerintah();
     }, [])

     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="flex items-center justify-between">
                              <div className="relative w-[376px]">
                                   <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                                   <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px] border border-[2px] border-[#0B0B2A]" />
                              </div>
                              <div className="">
                                   <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                        <Link to='/tambah-pemerintah'>
                                             Tambah Data Struktur Pemerintahan
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
                                             <TableHead>Nama Anggota</TableHead>
                                             <TableHead>NIK</TableHead>
                                             <TableHead>Jabatan</TableHead>
                                             <TableHead>Profil</TableHead>
                                             <TableHead className='text-center'>Aksi</TableHead>
                                        </TableHeader>
                                        <TableBody>
                                             {pemerintah.map((p, index) =>
                                                  <TableRow key={p.id} >
                                                       <TableCell>{index + 1}</TableCell>
                                                       <TableCell>{p.nama}</TableCell>
                                                       <TableCell>{p.nik}</TableCell>
                                                       <TableCell>{p.jabatan}</TableCell>
                                                       {/* <TableCell className='text-[#0D9276] font-medium'>{new Date(b.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell> */}
                                                       <TableCell>
                                                            <a href={`https://desa-digital-bakend-production.up.railway.app/images/pemerintah/${p.profil}`}>
                                                                 <img src={`https://desa-digital-bakend-production.up.railway.app/images/pemerintah/${p.profil}`} alt="Images" width={100} height={150} />

                                                            </a>
                                                       </TableCell>
                                                       <TableCell>
                                                            <div className="flex justify-center ml-4 mr-4">

                                                                 <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                      <Button>
                                                                           <Link to={`/pemerintahan/${p.id}`}>
                                                                                Ubah
                                                                           </Link>
                                                                      </Button>
                                                                 </div>
                                                            </div>
                                                       </TableCell>
                                                  </TableRow>

                                             )}



                                        </TableBody>
                                   </Table>
                              </div>
                         </div>

                    </div>
               </div>
          </SidebarLayout>
     )
}
