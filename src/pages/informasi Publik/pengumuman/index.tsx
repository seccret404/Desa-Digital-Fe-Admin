import SidebarLayout from '../../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../../components/ui/input'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { useEffect, useState } from 'react'
import { Pengumuman } from '../../../interfaces/pengumuman'
import {  deletePengumuman, getPengumuman } from '../../../services/desaServices'
import { useToast } from '../../../components/ui/use-toast';
export default function PengumumanPage() {
     const [, setIsLoggedIn] = useState(false);
     const [pengumuman, setPengumuman] = useState<Pengumuman[]>([]);
     const [searchQuery, setSearchQuery] = useState("");
     const { toast } = useToast();

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
     const handleDelete = async (id: string) => {
          try {
            if (!id) {
              return;
            }
            await deletePengumuman(id);
            toast({ title: "Success", description: "Pengumuman berhasil dihapus!" });
            setPengumuman(pengumuman.filter(d => d.id !== id));
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } catch (error: any) {
            toast({ title: "Error", description: error.message });
          }
        };

        const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
      };
  
      const filteredBerita = pengumuman.filter((b) =>
          b.judul_pengumuman.toLowerCase().includes(searchQuery.toLowerCase())
      );
     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#] rounded-[15px]">
                    <div className="p-8">
                         <div className="flex items-center justify-between">
                              <div className="relative w-[376px]">
                                   <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                                   <Input 
                                placeholder="Ketikkan kata kunci..." 
                                className="pl-[35px] rounded-[23px] border border-[2px] border-[#0B0B2A]" 
                                value={searchQuery}
                                onChange={handleSearchChange}
                            /></div>
                              <div className="">
                                   <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                        <Link to='/tambah-pengumuman'>
                                             Tambah Data Pengumuman
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
                                             {filteredBerita.map((p, index) =>

                                                  <TableRow key={p.id}>
                                                       <TableCell>{index + 1}</TableCell>
                                                       <TableCell>{p.judul_pengumuman}</TableCell>
                                                       <TableCell className='text-[#0D9276] font-medium'>{new Date(p.tgl_publikasi).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })}</TableCell>
                                                       <TableCell>
                                                       {p.file_pengumuman && typeof p.file_pengumuman === 'string' && (
                                                    p.file_pengumuman.endsWith('.jpg') || p.file_pengumuman.endsWith('.png') || p.file_pengumuman.endsWith('.jpeg') ? (
                                                        <img src={`https://desa-api.desajanggadolok.id/api/pengumuman_cover/${p.file_pengumuman}`} alt="Cover Pengumuman" className="w-20 h-auto" />
                                                    ) : (
                                                        <a href={`https://desa-api.desajanggadolok.id/api/pengumuman_cover/${p.file_pengumuman}`} target="_blank" rel="noopener noreferrer">{p.file_pengumuman}</a>
                                                    )
                                                )}
                                                       </TableCell>
                                                       <TableCell>
                                                            <div className="flex justify-center ml-4 mr-4">

                                                                 <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                      <Button>
                                                                           <Link to={`/edit-pengumuman/${p.id}`}>
                                                                                Ubah
                                                                           </Link>
                                                                      </Button>
                                                                 </div>
                                                                 <div className="flex ml-4 justify-center text-[#EA081F] text-[12px] bg-[#EA083160] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                 <button onClick={() => p.id && handleDelete(p.id)}>Hapus</button>
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
