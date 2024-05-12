import SidebarLayout from '../../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../../components/ui/input'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'

export default function TugasWewenang() {
     
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
                                        <Link to='/tambah-tugas-wewenang'>
                                             Tambah Tugas Jabatan
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
                                             <TableHead>Jabatan</TableHead>
                                             <TableHead>Tugas</TableHead>
                                             <TableHead>Wewenang</TableHead>
                                             <TableHead className='text-center'>Aksi</TableHead>
                                        </TableHeader>
                                        <TableBody>
                                            
                                                  <TableRow >
                                                       <TableCell></TableCell>
                                                       <TableCell></TableCell>
                                                       <TableCell></TableCell>
                                                       {/* <TableCell className='text-[#0D9276] font-medium'>{new Date(b.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell> */}
                                                       <TableCell>
                                                            {/* {b.cover && (
                                                                 b.cover.endsWith('.jpg') || b.cover.endsWith('.png') || b.cover.endsWith('.jpeg') ? (
                                                                      <img src={`http://localhost:3000/images/cover/${b.cover}`} alt="Cover Berita" className="w-20 h-auto" />
                                                                 ) : (
                                                                      <a href={`http://localhost:3000/images/cover/${b.cover}`} target="_blank" rel="noopener noreferrer">{b.cover}</a>
                                                                 )
                                                            )} */}
                                                       </TableCell>
                                                       <TableCell>
                                                            <div className="flex justify-center ml-4 mr-4">

                                                                 <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                      <Button>
                                                                           <Link to={''}>
                                                                                Edit
                                                                           </Link>
                                                                      </Button>
                                                                 </div>
                                                            </div>
                                                       </TableCell>
                                                  </TableRow>
                                         


                                        </TableBody>
                                   </Table>
                              </div>
                         </div>

                    </div>
               </div>
          </SidebarLayout>
     )
}
