import SidebarLayout from '../../components/layout/SidebarLayout';
import HomeIcon from '../../components/icon/homeIcon';
import { Input } from '../../components/ui/input';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDusun, getPendudukById, updatePenduduk } from '../../services/desaServices';
import { PendudukDesa } from '../../interfaces/penduduk';
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon';
import { useToast } from '../../components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { Dusun } from '../../interfaces/dusun';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
export default function EditPenduduk() {
     const { id } = useParams<{ id: string }>();
     const { toast } = useToast();
     const navigate = useNavigate();
     const [penduduk, setPenduduk] = useState<PendudukDesa>({
          nama: '',
          agama: '',
          alamat: '',
          tempat_lahir: '',
          pekerjaan: '',
          status_hidup: '',
          no_kk: '',
          nik: '',
          jenis_kelamin: '',
          status_perkawinan: '',
          tanggal_lahir: '',
          kewarganegaraan: '',
          pendidikan_terakhir: '',
          dusun: '',
          id_dusun: ''
     });
     const [dusunOptions, setDusunOptions] = useState<Dusun[]>([]);
     const [selectedDusun, setSelectedDusun] = useState<Dusun | null>(null);

     useEffect(() => {
          const fetchData = async () => {
               try {
                    if (!id) {
                         // Jika id adalah undefined, tidak perlu melanjutkan permintaan data
                         return;
                    }
                    const [pendudukData, dusunData] = await Promise.all([
                         getPendudukById(id),
                         getDusun()
                    ]);

                    if (pendudukData.tanggal_lahir) {
                         const formattedDate = new Date(pendudukData.tanggal_lahir).toISOString().split('T')[0];
                         pendudukData.tanggal_lahir = formattedDate;
                    }
                    setPenduduk(pendudukData);
                    setDusunOptions(dusunData);
                    setSelectedDusun(dusunData.find(dusun => dusun.id === pendudukData.id_dusun) || null);
               } catch (error) {
                    console.error('Error fetching data:', error);
               }
          };

          fetchData();
     }, [id]);

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const { name, value } = e.target;
          setPenduduk(prevState => ({
               ...prevState,
               [name]: value
          }));
     };

     const handleDusunChange = (_event: React.ChangeEvent<object>, value: Dusun | null) => {
          setSelectedDusun(value);
     };


     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
               if (!id) {

                    return;
               }
               await updatePenduduk(id, {
                    ...penduduk,
                    id_dusun: selectedDusun ? selectedDusun.id || '' : '',
                    dusun: selectedDusun ? selectedDusun.nama_dusun || '' : ''
               });

               console.log('Penduduk updated successfully');
               toast({
                    title: "Data Penduduk",
                    description: 'Data Penduduk Berhasil di Update'
               });
               navigate('/data-penduduk');
          } catch (error) {
               console.error('Error updating penduduk:', error);
               toast({
                    title: "Data Penduduk",
                    description: 'Data Penduduk Gagal di Update'
               });
          }
     };



     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-1 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Ubah Data Penduduk
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Ubah Data Penduduk
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white mt-4 rounded-[15px]">
                              <form action="" onSubmit={handleSubmit}>
                                   <div className="p-6 flex justify-between">
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Nama Lengkap
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Nama lengkap' name="nama" value={penduduk.nama} onChange={handleChange} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 ">
                                                       Agama
                                                  </div>
                                                  <div className="">

                                                       <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' name='agama' value={penduduk.agama} onChange={handleChange} >

                                                            <option>Pilih Agama</option>
                                                            <option value="Kristen Protestan">Kristen Protestan</option>
                                                            <option value="Kristen Khatolik">Kristen Khatolik</option>
                                                            <option value="Islam">Islam</option>
                                                            <option value="Budha">Budha</option>
                                                            <option value="Hindu">Hindu</option>
                                                            <option value="Khonghucu">Khonghucu</option>
                                                       </select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Alamat
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Alamat' name='alamat' value={penduduk.alamat} onChange={handleChange} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2">
                                                       Tempat Lahir
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Tempat Lahir' name='tempat_lahir' value={penduduk.tempat_lahir} onChange={handleChange} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Pekerjaan
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Pekerjaan' name='pekerjaan' value={penduduk.pekerjaan} onChange={handleChange} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Status Hidup
                                                  </div>
                                                  <div className="">
                                                       <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' name='status_hidup' value={penduduk.status_hidup} onChange={handleChange}>
                                                            <option >Pilih Status</option>
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
                                                       <Input type='number' className='w-[416px] h-[40px] font-bold ' placeholder='no kk' name='no_kk' value={penduduk.no_kk} onChange={handleChange} />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       NIK
                                                  </div>
                                                  <div className="">
                                                       <Input type='number' className='w-[416px] h-[40px] font-bold' placeholder='NIK' name='nik' value={penduduk.nik} onChange={handleChange} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Jenis Kelamin
                                                  </div>
                                                  <div className="">
                                                       <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' name='jenis_kelamin' value={penduduk.jenis_kelamin} onChange={handleChange}>
                                                            <option>Pilih Jenis</option>
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
                                                       <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' name='status_perkawinan' value={penduduk.status_perkawinan} onChange={handleChange}>
                                                            <option>Pilih Status</option>
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
                                                            name='tanggal_lahir' value={penduduk.tanggal_lahir}
                                                            onChange={handleChange}
                                                       />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Kewarganegaraan
                                                  </div>
                                                  <div className="">
                                                       <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' name='kewarganegaraan' value={penduduk.kewarganegaraan} onChange={handleChange}>
                                                            <option >Pilih Kewarganegaraan</option>
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
                                                       <select className='w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2' name='pendidikan_terakhir' value={penduduk.pendidikan_terakhir} onChange={handleChange}>
                                                            <option >Pilih Pendidikan</option>
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
                                                       <div className="">
                                                            <Autocomplete
                                                                 value={selectedDusun}
                                                                 onChange={handleDusunChange}
                                                                 options={dusunOptions}
                                                                 getOptionLabel={(option) => option.nama_dusun} // Mengambil nilai dari properti 'nama_dusun'
                                                                 renderInput={(params) => <TextField {...params} label="Pilih Dusun" variant="outlined" />}
                                                            />

                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="p-6 flex justify-end">

                                        <button type='submit' className='text-white bg-[#0890EA] rounded-[5px] w-[200px] h-[40px]' >
                                             Simpan
                                        </button>
                                   </div>
                              </form>
                         </div>
                    </div>

               </div>
          </SidebarLayout>
     )
}
