
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useState } from 'react'
import { addAgenda } from '../../services/desaServices'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../components/ui/use-toast'
export default function TambahAgenda() {
     const [, setIsLoggedIn] = useState(false);
     const [namaKegiatan, setNamaKegiatan] = useState('');
     const [tanggalKegiatan, setTanggalKegiatan] = useState<Date>(new Date());
     const [lokasi, setLokasi] = useState('');
     const [tujuan, setTujuan] = useState('');
     const [deskripsi, setDeskripsi] = useState('');
     const navigate = useNavigate();
     const { toast } = useToast();

     const formatDateForBackend = (date: Date): string => {
          const isoString = date.toISOString();
          const parts = isoString.split('T')[0].split('-');
          const [year, month, day] = parts;
          return `${year}-${month}-${day}`;
     };
     const handleSave = async (event: { preventDefault: () => void }) => {
          event.preventDefault();
          const currentDate = new Date();
          if (!namaKegiatan || !tanggalKegiatan || !lokasi || !tujuan || !deskripsi) {
               toast({ title: "Error", description: "Please fill in all required fields" });
               return;
          }

          if (tanggalKegiatan < currentDate) {
               toast({ title: "Error", description: "Tanggal kegiatan tidak boleh waktu yang lampau" });
               return;
          }

          const agendaData = {

               nama_kegiatan: namaKegiatan,
               tanggal_kegiatan: formatDateForBackend(tanggalKegiatan),
               lokasi: lokasi,
               tujuan_kegiatan: tujuan,
               deskripsi_kegiatan: deskripsi,
               status_laporan: 'Pending',

          }
          try {

               await addAgenda(agendaData);
               toast({
                    title: "Agenda desa",
                    description: "Data berhasil Ditambahkan"
               });
               console.log("Sending data to server:", agendaData);

               navigate('/agenda-desa');

          } catch (error) {
               console.error('Failed to add agenda:', error);
          }
     }


     const back = () => {
          navigate('/agenda-desa')
     }


     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data Agenda
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data Agenda
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
                                                  <Input placeholder='nama kegiatan' value={namaKegiatan} onChange={(e) => setNamaKegiatan(e.target.value)} />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Hari/Tanggal
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input type='date' placeholder='nama kegiatan' value={tanggalKegiatan.toISOString().split('T')[0]} onChange={(e) => setTanggalKegiatan(new Date(e.target.value))} />
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
                                                  <button onClick={back} className='text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px]'>
                                                       Batal
                                                  </button>
                                             </div>
                                             <div className="">
                                                  <button onClick={handleSave} className='text-white bg-[#0890EA] rounded-[5px] w-[142px] h-[30px]'>
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
