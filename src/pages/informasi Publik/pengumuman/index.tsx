import SidebarLayout from '../../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../../components/ui/input'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { useEffect, useState } from 'react'
import { Pengumuman } from '../../../interfaces/pengumuman'
import { getPengumuman } from '../../../services/desaServices'

export default function PengumumanPage() {
     const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);

     useEffect(() => {
          async function fetchPengumuman() {
               try {
                    const data = await getPengumuman();
                    setPengumuman(data);
               } catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
               }
          }
          fetchPengumuman();
     }, [])
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
                                        <Link to='/tambah-pengumuman'>
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
                                             <TableHead>Judul Pengumuman</TableHead>
                                             <TableHead> Tanggal Publikasi  </TableHead>
                                             <TableHead>Cover Pengumuman</TableHead>
                                             <TableHead className='text-center'>Aksi</TableHead>
                                        </TableHeader>
                                        <TableBody>
                                             {pengumuman.map((p, index) =>

                                                  <TableRow key={p.id}>
                                                       <TableCell>{index + 1}</TableCell>
                                                       <TableCell>{p.judul_pengumuman}</TableCell>
                                                       <TableCell className='text-[#0D9276] font-medium'>{new Date(p.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell>
                                                       <TableCell>
                                                            {p.cover_pengumuman && (
                                                                 p.cover_pengumuman.endsWith('.jpg') || p.cover_pengumuman.endsWith('.png') || p.cover_pengumuman.endsWith('.jpeg') ? (
                                                                      <img src={`http://localhost:3000/images/pengumuman/cover/${p.cover_pengumuman}`} alt="Cover Pengumuman" className="w-20 h-auto" />
                                                                 ) : (
                                                                      <a href={`http://localhost:3000/images/pengumuman/cover/${p.cover_pengumuman}`} target="_blank" rel="noopener noreferrer">{p.cover_pengumuman}</a>
                                                                 )
                                                            )}

                                                       </TableCell>
                                                       <TableCell>
                                                            <div className="flex justify-center ml-4 mr-4">

                                                                 <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                      <Button>
                                                                           <Link to={`/edit-pengumuman/${p.id}`}>
                                                                                Edit
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
