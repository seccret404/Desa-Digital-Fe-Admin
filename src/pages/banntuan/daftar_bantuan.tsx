
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from '../../components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Bantuan } from '../../interfaces/bantuan'
import { deleteBantuan, getBantuan } from '../../services/desaServices'
import { useToast } from '../../components/ui/use-toast';
export default function DaftarBantuanPage() {
     const [, setIsLoggedIn] = useState(false);
     const [bantuan, setBantuan] = useState<Bantuan[]>([]);
     const [searchQuery, setSearchQuery] = useState<string>('');

     const { toast } = useToast();


     useEffect(() => {
          async function fetchBantuan() {
               try {
                    const data = await getBantuan();
                    setBantuan(data);
               } catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
               }
          }
          fetchBantuan();
     }, [])

     const handleDelete = async (id: string) => {
          try {
            if (!id) {
              return;
            }
            await deleteBantuan(id);
            toast({ title: "Success", description: "Bantuan berhasil dihapus!" });
            setBantuan(bantuan.filter(d => d.id !== id));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            toast({ title: "Error", description: error.message });
          }
        };

        const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(event.target.value);
        };

        const filteredBantuan = bantuan.filter(item =>
          item.nama_bantuan.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        

     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">

                    <div className="p-8">
                         <div className="flex items-center justify-between">
                              <div className="relative w-[376px]">
                                   <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                                   <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px]" onChange={handleSearchChange} />
                              </div>
                              <div className="">
                                   <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                        <Link to='/tambah-daftar'>
                                             Tambah Data Bantuan
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

                                        {filteredBantuan.map((b, index) =>
                                             <TableRow key={b.id}>
                                                  <TableCell>{index + 1}</TableCell>
                                                  <TableCell>{b.nama_bantuan}</TableCell>
                                                  <TableCell>{b.jenis_bantuan}</TableCell>
                                                  <TableCell>
                                                       <div className="flex justify-center ml-4 mr-4">

                                                       <div className="flex ml-4 justify-center text-[#EA081F] text-[12px] bg-[#EA083160] w-[70px] h-[23px] text-center rounded-[5px]">
                          <button onClick={() => {
                            if (b.id !== undefined) {
                              handleDelete(b.id);
                            }
                          }}>Hapus</button>
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
