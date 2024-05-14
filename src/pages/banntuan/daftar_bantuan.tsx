
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Bantuan } from '../../interfaces/bantuan'
import { getBantuan } from '../../services/desaServices'

export default function DaftarBantuanPage() {
     const [bantuan, setBantuan] = useState<Bantuan[]>([]);

     useEffect(()=>{
          async function fetchBantuan(){
               try{
                    const data = await getBantuan();
                    setBantuan(data);
               }catch(error){
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
               }
          }
          fetchBantuan();
     },[])
    
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
                                        <Link to='/tambah-daftar'>
                                             Tambah Bantuan
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
                                        <TableHead >Nama bantuan</TableHead>
                                        <TableHead >Jenis bantuan</TableHead>
                                        <TableHead className='text-center'>Aksi</TableHead>
                                   </TableHeader>
                                   <TableBody>
                                     
                                 {bantuan.map((b, index) =>
                               <TableRow key={b.id}>
                                                  <TableCell>{index + 1}</TableCell>
                                                  <TableCell>{b.nama_bantuan}</TableCell>
                                                  <TableCell>{b.jenis_bantuan}</TableCell>
                                                  <TableCell>
                                                       <div className="flex justify-center ml-4 mr-4">

                                                            <div className="flex justify-center text-[#FFFFFF] text-[12px] bg-[#FF0909EC] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                 <Button>
                                                                      <Link to={''} >
                                                                           Hapus
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
