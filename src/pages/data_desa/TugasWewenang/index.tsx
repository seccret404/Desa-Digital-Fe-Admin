import SidebarLayout from '../../../components/layout/SidebarLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../../components/ui/input'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { useEffect, useState } from 'react'
import { Tugas } from '../../../interfaces/jabatan'
import { getTugas } from '../../../services/desaServices'

export default function TugasWewenang() {
     const [, setIsLoggedIn] = useState(false);
     const [tugas, setTugas] = useState<Tugas[]>([]);
     const [searchQuery, setSearchQuery] = useState("");
     useEffect(() =>{
          async function fetchTugas(){
               try{
                    const data = await getTugas();
                    setTugas(data);
               }catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
               }
          }
          fetchTugas();
     },[])

     const limitTextToPengumuman = (text: string) => {
          const words = text.split(' ');
          if (words.length > 7) {
               return words.slice(0, 7).join(' ') + '...';
          }
          return text;
     };
     const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        };
      

     const filteredTugas = tugas.filter((t) => 
          t.jabatan.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
     
     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="flex items-center justify-between">
                              <div className="relative w-[376px]">
                                   <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                                   <Input 
                placeholder="Ketikkan kata kunci..." 
                className="pl-[35px] rounded-[23px] border border-[2px] border-[#0B0B2A]" 
                value={searchQuery}
                onChange={handleSearchChange}
              />
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
                                            {filteredTugas.map((t, index) =>

                                              <TableRow key={t.id}>
                                                       <TableCell>{index+1}</TableCell>
                                                       <TableCell >{t.jabatan}</TableCell>
                                                       <TableCell dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(t.tugas) }}></TableCell>
                                                      
                                                       <TableCell dangerouslySetInnerHTML={{ __html: limitTextToPengumuman(t.wewenang) }}>
                                                            
                                                       </TableCell>
                                                       <TableCell>
                                                            <div className="flex justify-center ml-4 mr-4">

                                                                 <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                                                                      <Button>
                                                                           <Link to={`/tugas-wewenang/${t.id}`}>
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
