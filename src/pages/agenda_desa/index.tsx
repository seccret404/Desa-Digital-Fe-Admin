import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarLayout from '../../components/layout/SidebarLayout'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Link } from 'react-router-dom'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import PrintIcon from '../../components/icon/printIcon'
import { Table, TableBody, TableCell, TableHead, TableHeader } from '../../components/ui/table'

export default function AgendaPage() {
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
                                        <Select>
                                             <SelectTrigger className="w-[270px] bg-[#40A2E3] text-white">
                                                  <SelectValue placeholder="Pilih Tahun" />
                                             </SelectTrigger>
                                             <SelectContent className='bg-white'>
                                                  <SelectItem value="2023">2023</SelectItem>
                                             </SelectContent>
                                        </Select>
                                   </div>
                              </div>
                              <div className="">
                                   <Button color='white' bgColor='#0D9276' width={177} rounded={5} height={44}>
                                        <div className="flex p-2 justify-center">
                                             <div className="">Export Agenda</div> <PrintIcon color='white' size={24} />
                                        </div>
                                   </Button>
                              </div>
                         </div>
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
                                             <TableCell>1</TableCell>
                                             <TableCell>Natal Oikumene</TableCell>
                                             <TableCell>13 Maret 2022</TableCell>
                                             <TableCell>Pagaran</TableCell>
                                             <TableCell>
                                                  <Link to='/laporan-detail' className='text-[#40A2E3] '>
                                                       Lihat Laporan
                                                  </Link>
                                             </TableCell>
                                             <TableCell>
                                                  <div className="flex justify-between ml-4 mr-4">
                                                       <div className="flex justify-center text-[#F61616] text-[12px] bg-[#fdcece] w-[70px] h-[23px] text-center rounded-[5px]"><Button>
                                                            Hapus
                                                       </Button></div>
                                                       <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                            <Button>
                                                                 Edit
                                                            </Button>
                                                       </div>
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
