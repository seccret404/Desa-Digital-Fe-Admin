
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import Button from '../../components/ui/button'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useState } from 'react'
import { addAgenda } from '../../services/desaServices'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../components/ui/use-toast'
export default function TambahAgenda() {
   
          const [namaKegiatan, setNamaKegiatan] = useState('');
          const [tanggalKegiatan, setTanggalKegiatan] = useState('');
          const [lokasi, setLokasi] = useState('');
          const [tujuan, setTujuan] = useState('');
          const [deskripsi, setDeskripsi] = useState('');
          const navigate = useNavigate();
          const {toast }= useToast();

          const handleSave = async (event: { preventDefault: () => void }) => {
               event.preventDefault();
           
               // validasi 
               if (!namaKegiatan || !tanggalKegiatan || !lokasi || !tujuan || !deskripsi) {
                   alert('Please fill in all required fields.');
                   return; 
               }
           
               try {
                   const agendaData = {
                       id: Date.now(),  
                       nama_kegiatan: namaKegiatan,
                       tanggal_kegiatan: new Date(tanggalKegiatan).toISOString(),  
                       lokasi: lokasi,
                       tujuan: tujuan,
                       deskripsi: deskripsi,
                       status_laporan: 'pending',  
                       createdAt: new Date().toISOString(),  
                      
                   };
                   await addAgenda(agendaData);
                   toast({
                    title:"Agenda desa",
                    description:"Data berhasil Ditambahkan"
                   });
                   console.log("Sending data to server:", agendaData);

                   navigate('/agenda-desa');
           
               } catch (error) {
                   console.error('Failed to add agenda:', error);
               }
           }
           


      
     
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Agenda
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Agenda Desa
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6 flex justify-center">
                              <div className="p-2 mb-6" >
                                   <form action="">

                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Kegitan
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='nama kegiatan' value={namaKegiatan} onChange={(e) => setNamaKegiatan(e.target.value)}/>
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Hari/Tanggal
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input type='date' placeholder='nama kegiatan' value={tanggalKegiatan} onChange={(e) => setTanggalKegiatan(e.target.value)}/>
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Lokasi
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='lokasi' value={lokasi} onChange={(e) => setLokasi(e.target.value)} />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Tujuan Kegitan
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='tujuan kegiatan' value={tujuan} onChange={(e) => setTujuan(e.target.value)} />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Deskripsi
                                             </div>
                                             <div className="w-[350px]">
                                                  <Textarea placeholder='deskripsi' 
                                                  value={deskripsi}
                                                  onChange={(e) => setDeskripsi(e.target.value)}
                                                  >

                                                  </Textarea>
                                             </div>
                                        </div>
                                        
                                        <div className="flex justify-end mt-6">
                                             <div className="mr-6">
                                                  <Button color='white' bgColor='#F61616' rounded={5} width={142} height={30}>
                                                       Batal
                                                  </Button>
                                             </div>
                                             <div className="">
                                                  <button onClick={handleSave} className='text-white rounded-[5px] w-[142px] h-[30px]'>
                                                       simpan
                                                  </button>
                                                 

                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout >
     )
}
