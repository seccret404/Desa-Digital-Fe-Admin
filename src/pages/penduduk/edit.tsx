import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { Input } from '../../components/ui/input'
import { useToast } from '../../components/ui/use-toast'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPendudukById, updatePenduduk } from '../../services/desaServices';
import { PendudukDesa } from '../../interfaces/penduduk';

export default function EditPenduduk() {
     const { id } = useParams<{ id: string }>();
     const [penduduk, setPenduduk] = useState<PendudukDesa | null>(null);
     const { toast } = useToast();

     useEffect(() => {
          async function fetchPendudukData() {
               try {
                    const data = await getPendudukById(id);
                    setPenduduk(data);
               } catch (error) {
                    console.error('Error:', error);
                    // Handle error
               }
          }
          fetchPendudukData();
     }, [id]);

     const handleUpdate = async () => {
          console.log('Update button clicked');
          console.log('Updated penduduk:', penduduk);
          if (!penduduk) return;
     
          try {
               await updatePenduduk(id, penduduk);
               console.log('Penduduk berhasil diperbarui');
               toast({
                    title: "Data Penduduk",
                    description: "Data Berhasil Diperbarui!",
               });
          } catch (error) {
               console.error('Error updating penduduk:', error);
               toast({
                    title: "Data Penduduk",
                    description: "Data Gagal Diupdate!",
               });
          }
     };
     

     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-1 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data Penduduk
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data Penduduk
                                   </div>
                              </div>
                         </div>
                         {penduduk ? (
                              <div className="bg-white mt-4 rounded-[15px]">
                                   <form action="">
                                        <div className="p-6 flex justify-between">
                                             <div className="">
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px] ">
                                                            Nama Lengkap
                                                       </div>
                                                       <div className="">
                                                            <Input className='w-[416px] h-[40px] font-bold' placeholder='Nama lengkap'
                                                                 value={penduduk.nama}
                                                                 onChange={(e) => setPenduduk({ ...penduduk, nama: e.target.value })}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 ">
                                                            Agama
                                                       </div>
                                                       <div className="">
                                                            <select 
                                                            value={penduduk ? penduduk.agama : ''}
                                                            onChange={(e) => setPenduduk({ ...penduduk, agama: e.target.value })}
                                                            className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2'>

                                                                 <option value="">Pilih Agama</option>
                                                                 <option value="Kristen Protestan">Kristen Protestan</option>
                                                                 <option value="Kristen Khatolik">Kristen Khatolik</option>
                                                                 <option value="Islam">Islam</option>
                                                                 <option value="Budha">Budha</option>
                                                                 <option value="Hindu">Hindu</option>
                                                                 <option value="Konghucu">Konghucu</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Alamat
                                                       </div>
                                                       <div className="">
                                                            <Input className='w-[416px] h-[40px] font-bold' placeholder='Alamat' value={penduduk.alamat} onChange={(e) => setPenduduk({ ...penduduk, alamat: e.target.value })} />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2">
                                                            Tempat Lahir
                                                       </div>
                                                       <div className="">
                                                            <Input className='w-[416px] h-[40px] font-bold' placeholder='Tempat Lahir' value={penduduk.tempat_lahir} onChange={(e) => setPenduduk({ ...penduduk, tempat_lahir: e.target.value })} />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Pekerjaan
                                                       </div>
                                                       <div className="">
                                                            <Input className='w-[416px] h-[40px] font-bold' placeholder='Pekerjaan' value={penduduk.pekerjaan} onChange={(e) => setPenduduk({ ...penduduk, pekerjaan: e.target.value })} />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Status Hidup
                                                       </div>
                                                       <div className="">
                                                            <select value={penduduk ? penduduk.status_hidup : ''} onChange={(e) => setPenduduk({ ...penduduk, status_hidup: e.target.value })} className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2'>
                                                                 <option value="Hidup">Hidup</option>
                                                                 <option value="Wafat">Wafat</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Nomor Kartu Keluarga
                                                       </div>
                                                       <div className="">
                                                            <Input className='w-[416px] h-[40px] font-bold ' placeholder='no kk' value={penduduk.no_kk} onChange={(e) => setPenduduk({ ...penduduk, no_kk: e.target.value })} />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="">
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            NIK
                                                       </div>
                                                       <div className="">
                                                            <Input className='w-[416px] h-[40px] font-bold' placeholder='NIK' value={penduduk.nik} onChange={(e) => setPenduduk({ ...penduduk, nik: e.target.value })} />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Jenis Kelamin
                                                       </div>
                                                       <div className="">
                                                            <select value={penduduk ? penduduk.jenis_kelamin : ''} onChange={(e) => setPenduduk({ ...penduduk, jenis_kelamin: e.target.value })} className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2'>
                                                                 <option value="Laki-laki">Laki-laki</option>
                                                                 <option value="Perempuan">Perempuan</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2">
                                                            Status Perkawinan
                                                       </div>
                                                       <div className="">
                                                            <select value={penduduk ? penduduk.status_perkawinan : ''} onChange={(e) => setPenduduk({ ...penduduk, status_perkawinan: e.target.value })} className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2'>
                                                                 <option value="Kawin">Kawin</option>
                                                                 <option value="Belum Kawin">Belum Kawin</option>
                                                                 <option value="Cerai Hidup">Cerai Hidup</option>
                                                                 <option value="Cerai Mati">Cerai Mati</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Tanggal Lahir
                                                       </div>
                                                       <div className="">
                                                            <Input
                                                                 className='w-[416px] h-[40px] font-bold'
                                                                 type='date'
                                                                 value={penduduk.tanggal_lahir ? new Date(penduduk.tanggal_lahir).toISOString().split('T')[0] : ''}
                                                                 onChange={(e) => setPenduduk({ ...penduduk, tanggal_lahir: e.target.value })}
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Kewarganegaraan
                                                       </div>
                                                       <div className="">
                                                            <select  className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' value={penduduk ? penduduk.kewarganegaraan : ''} onChange={(e) => setPenduduk({ ...penduduk, kewarganegaraan: e.target.value })}>
                                                                 <option value="WNI">Warga Negara Indonesia</option>
                                                                 <option value="WNA">Warga Negara Asing</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Pendidikan
                                                       </div>
                                                       <div className="">
                                                            <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' value={penduduk ? penduduk.pendidikan_terakhir : ''} onChange={(e) => setPenduduk({ ...penduduk, pendidikan_terakhir: e.target.value })}>
                                                                 <option value="SD">Sekolah Dasar</option>
                                                                 <option value="SMP">Sekolah Mengengah Pertama</option>
                                                                 <option value="SMA">Sekolah Mengengah Atas</option>
                                                                 <option value="D4">Diploma</option>
                                                                 <option value="S1">Sarjana</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[16px]">
                                                            Dusun
                                                       </div>
                                                       <div className="">
                                                            <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' value={penduduk.dusun} onChange={(e) => setPenduduk({ ...penduduk, dusun: e.target.value })}>
                                                                 <option value="Dusun Pagaran">Dusun Pagaran</option>
                                                            </select>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="p-6 flex justify-end">

                                             <button onClick={handleUpdate} className='text-white bg-[#0890EA] rounded-[5px] w-[200px] h-[40px]'>
                                                  Simpan Perubahan
                                             </button>
                                        </div>
                                   </form>
                              </div>
                         ) : (
                              <div>Loading...</div>
                         )}

                    </div>

               </div>
          </SidebarLayout>
     )
}
