
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Penerima } from '../../interfaces/penerimaBantuan'
import { getPenerimaBantuan } from '../../services/desaServices'

export default function BantuanPage() {
     const [bantuan, setBantuan] = useState<Penerima[]>([]);

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
                                        <Link to='/tambah-penerima'>
                                             Tambah Penerima
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
                                        <TableHead>Nama Penerima</TableHead>
                                        <TableHead >Nama bantuan</TableHead>
                                        <TableHead >Tanggal Mulai DI Terima</TableHead>
                                        <TableHead >Status</TableHead>
                                        <TableHead >Jumlah Penerimaan</TableHead>
                                        <TableHead className='text-center'>Aksi</TableHead>
                                   </TableHeader>
                                   <TableBody>
                                        {bantuan.map((d, index) =>
                                             <TableRow key={d.id}>
                                                  <TableCell>{index + 1}</TableCell>
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
                                                                      <Link to={`/edit-penerima/${d.id}`} >
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
          </SidebarLayout>

     )
}
