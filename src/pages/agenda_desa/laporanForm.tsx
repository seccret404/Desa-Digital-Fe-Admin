import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRightIcon from '../../components/icon/arrowRightIcon'
import { Input } from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Agenda } from '../../interfaces/agenda'
import { addLaporan, getAgendaById } from '../../services/desaServices'
import { Laporan } from '../../interfaces/laporan'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../components/ui/use-toast'
export default function LaporanAgenda() {
     const { id } = useParams<{ id?: string }>(); 
     const navigate = useNavigate();
     const { toast } = useToast();

     const [agenda, setAgenda] = useState<Agenda | null>(null);
     const [laporan, setLaporan] = useState<Laporan>({
          id_agenda: id || '',
          jumlah_peserta: '',
          lokasi_kegiatan: '',
          donasi: '',
          anggaran_desa: '',
          status_kegiatan: '',
          dokumentasi: '',
          koordinator: '',
          tgl_realisasi: ''
     });

     useEffect(() => {
          async function fetchAgenda() {
               try {
                    if (id) {
                         const data = await getAgendaById(id);
                         setAgenda(data);

                         // Memperbarui nilai laporan setelah mendapatkan data agenda
                         setLaporan(prevLaporan => ({
                              ...prevLaporan,
                              lokasi_kegiatan: data?.lokasi || '',
                              tgl_realisasi: data?.tanggal_kegiatan || '',
                         }));
                    }
               } catch (err) {
                    console.error('error :', err);
               }
          }
          fetchAgenda();
     }, [id]);


     const formatDate = (dateString: string): string => {
          const date = new Date(dateString);
          const year = date.getFullYear();
          let month: string | number = date.getMonth() + 1;
          let day: string | number = date.getDate();

          if (month < 10) {
               month = '0' + month;
          }
          if (day < 10) {
               day = '0' + day;
          }

          return `${year}-${month}-${day}`;
     };

     const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          try {
               // Sesuaikan data laporan sesuai format yang diperlukan
               const laporanData = {
                    ...laporan,
                    tgl_realisasi: formatDate(laporan.tgl_realisasi),
               };
               await addLaporan(laporanData);
               console.log('Laporan berhasil ditambahkan!');
               navigate('/agenda-desa')
               toast({
                    title: "Laporan Agenda",
                    description: "Laporan berhasil Ditambah!"
               });
          } catch (error) {
               console.error('Error adding report:', error);
               console.log('Data yang diinput:', laporan);
               toast({
                    title: "Laporan Agenda",
                    description: "Laporan gagal Ditambah!"
               });
          }
     };


     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const { name, value } = event.target;
          if (event.target.type === 'file') {
               const file = (event.target as HTMLInputElement).files?.[0];
               setLaporan({ ...laporan, [name]: file });
               console.log('Nama File:', file?.name);
          } else {
               setLaporan({ ...laporan, [name]: value });
          }
     };


     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">Form Tambah Laporan</div>
                              <div className="flex">
                                   <div className="flex">
                                        <HomeIcon color="#0890EA" size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRightIcon color="#000000" size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">Tambah Laporan</div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6 flex justify-center">
                              <div className="p-2 mb-6">
                                   <form onSubmit={handleSubmit}>
                                        <div className="flex justify-between">
                                             <div className="">
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Jumlah Peserta</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input
                                                                 type="number"
                                                                 placeholder="Jumlah Peserta"
                                                                 value={laporan.jumlah_peserta}
                                                                 name='jumlah_peserta'
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Lokasi Kegiatan</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input
                                                                 value={agenda?.lokasi || ''}
                                                                 placeholder="Lokasi"
                                                                 name='lokasi_kegiatan'
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Dana Eksternal/Donasi</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input
                                                                 type="number"
                                                                 placeholder="Sumbangan"
                                                                 value={laporan.donasi}
                                                                 name='donasi'
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[]">Dokumentasi Kegiatan</div>
                                                       <div className="relative">
                                                            <input
                                                                 type="file"
                                                                 multiple
                                                                 className="w-[320px] h-[49px]"
                                                                 id="fileInput"
                                                                 placeholder="Dokumentasi kegiatan"
                                                                 name='dokumentasi'
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="ml-8">
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Hari/Tanggal</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input
                                                                 type="date"
                                                                 name="tanggal_kegiatan"
                                                                 placeholder="Tanggal Kegiatan"
                                                                 value={agenda ? formatDate(agenda.tanggal_kegiatan || '') : ''}
                                                            // Tambah onChange jika perlu menangkap perubahan
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Anggaran Desa</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input
                                                                 type="number"
                                                                 placeholder="anggaran"
                                                                 name='anggaran_desa'
                                                                 value={laporan.anggaran_desa}
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Status Kegiatan</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <select
                                                                 className="bg-[#40A2E3] text-white w-[250px] h-[35px] rounded-[5px]"
                                                                 name="status_kegiatan"
                                                                 value={laporan.status_kegiatan}
                                                                 onChange={handleChange}
                                                            >
                                                                 <option value="">Pilih Status</option>
                                                                 <option value="Selesai">Selesai</option>
                                                                 <option value="Batal">Batal</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">Koordinator</div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input
                                                                 type="text"
                                                                 placeholder="koordinator"
                                                                 name='koordinator'
                                                                 value={laporan.koordinator}
                                                                 onChange={handleChange}
                                                            />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="flex justify-end mt-20">
                                             <div className="mr-6">
                                                  <Button color="white" bgColor="#F61616" rounded={5} width={142} height={40}>
                                                       <Link to="/agenda-desa">Batal</Link>
                                                  </Button>
                                             </div>
                                             <div>
                                                  <button type="submit" className='text-white bg-[#0890EA] rounded-[5px] w-[142px] h-[30px]'>
                                                       Simpan
                                                  </button>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     );
}


