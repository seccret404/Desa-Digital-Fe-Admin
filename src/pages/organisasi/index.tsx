import SidebarLayout from '../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader } from '../../components/ui/table'

export default function OrganisasiPage() {
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
                                             <TableCell>1</TableCell>
                                             <TableCell>Karang Taruna</TableCell>
                                             <TableCell>21 Maret2023</TableCell>
                                             <TableCell>Jln 54 Pagaran</TableCell>
                                             <TableCell>Edward Tua Panjaitan</TableCell>
                                             <TableCell>
                                                  <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                       <Button>
                                                            Edit
                                                       </Button>
                                                  </div>
                                             </TableCell>
                                        </TableBody>
                                   </Table>
                              </div>
                         </div>

                    </div>
               </div>
          </SidebarLayout>
     )
}
