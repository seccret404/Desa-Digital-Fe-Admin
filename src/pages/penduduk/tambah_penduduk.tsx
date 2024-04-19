import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { Input } from '../../components/ui/input'
import {
     Select,
     SelectContent,
     SelectItem,
     SelectTrigger,
     SelectValue,
} from "../../components/ui/select"
import { addPenduduk } from '../../services/desaServices'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../components/ui/use-toast'

export default function TambahPenduduk() {
     const [nik, setNik] = useState('');
     const [nama, setNama] = useState('');
     const [agama, setAgama] = useState('');
     const [alamat, setAlamat] = useState('');
     const [tanggalLahir, setTanggalLahir] = useState('');
     const [tempatLahir, setTempatLahir] = useState('');
     const [jenisKelamin, setJenisKelamin] = useState('');
     const [pekerjaan, setPekerjaan] = useState('');
     const [kewarganegaraan, setKewarganegaraan] = useState('');
     const [pendidikan, setPendidikan] = useState('');
     const [statusHidup, setStatusHidup] = useState('');
     const [statusPerkawinan, setStatusPerkawinan] = useState('');
     const [dusun, setDusun] = useState('');
     const [noKK, setNoKK] = useState('');
    
     const { toast } = useToast();

     const navigate = useNavigate();

     const handleSubmit = async (event: { preventDefault: () => void }) => {
          event.preventDefault();

          const pendudukData = {
               id: Date.now(),
               nik: Number(nik),
               nama: nama,
               agama: agama,
               alamat: alamat,
               tanggal_lahir: new Date(tanggalLahir).toISOString(),
               tempat_lahir: tempatLahir,
               jenis_kelamin: jenisKelamin,
               pekerjaan: pekerjaan,
               kewarganegaraan: kewarganegaraan,
               pendidikan: pendidikan,
               status_hidup: statusHidup,
               status_perkawinan: statusPerkawinan,
               dusun: dusun,
               no_kk: noKK,
               createdAt: new Date().toISOString(),
               id_dusun: 2
          };

          try {
               await addPenduduk(pendudukData);
               toast({
                    title: "Data Penduduk",
                    description: "Data berhasil Ditambah!"
               });
               console.log("Sending data to server:", pendudukData);
               navigate('/penduduk');

          } catch (error) {
              
                    console.error('Failed to add agenda:', error);
                    
               
               toast({
                    title: "Data Penduduk",
                    description: "Data Gagal Ditambah!",

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
                         <div className="bg-white mt-4 rounded-[15px]">
                              <form action="">
                                   <div className="p-6 flex justify-between">
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Nama Lengkap
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Nama lengkap' value={nama} onChange={(e) => setNama(e.target.value)} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 ">
                                                       Agama
                                                  </div>
                                                  <div className="">

                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Pilih agama" defaultValue={agama} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAgama(e.target.value)} />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="Kristen" onClick={() => setAgama('Kristen')}>Kristen</SelectItem>
                                                                 <SelectItem value="Khatolik" onClick={() => setAgama('Khatolik')}>Khatolik</SelectItem>
                                                                 <SelectItem value="Islam" onClick={() => setAgama('Islam')}>Islam</SelectItem>
                                                                 <SelectItem value="Hindu" onClick={() => setAgama('Hindu')}>Hindu</SelectItem>
                                                                 <SelectItem value="Budha" onClick={() => setAgama('Budha')}>Budha</SelectItem>
                                                                 <SelectItem value="Konghucu" onClick={() => setAgama('Konghucu')}>Konghucu</SelectItem>
                                                            </SelectContent>
                                                       </Select>


                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Alamat
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Alamat' value={alamat} onChange={(e) => setAlamat(e.target.value)}/>
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2">
                                                       Tempat Lahir
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Tempat Lahir' value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Pekerjaan
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Pekerjaan' value={pekerjaan} onChange={(e) => setPekerjaan(e.target.value)}/>
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Status Hidup
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Status Hidup" defaultValue={statusHidup}  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusHidup(e.target.value)}/>
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="hidup" onClick={() => setStatusHidup('Hdup')}>Hidup</SelectItem>
                                                                 <SelectItem value="wafat" onClick={() => setStatusHidup('Wafat')}>Wafat</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Nomor Kartu Keluarga
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' placeholder='no kk' value={noKK} onChange={(e) => setNoKK(e.target.value)}/>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       NIK
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='NIK' value={nik} onChange={(e) => setNik(e.target.value)}/>
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Jenis Kelamin
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Jenis Kelamin" defaultValue={jenisKelamin}  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setJenisKelamin(e.target.value)}/>
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="laki-laki" onClick={() => setJenisKelamin('Laki-laki')}>Laki-laki</SelectItem>
                                                                 <SelectItem value="Perempuan" onClick={() => setJenisKelamin('Perempuan')}>Perempuan</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2">
                                                       Status Perkawinan
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Status Perkawinan" defaultValue={statusPerkawinan} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusPerkawinan(e.target.value)}/>
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="Belum Kawin" onClick={() => setStatusPerkawinan('Belum Kawin')}>Belum Kawin</SelectItem>
                                                                 <SelectItem value="Kawin" onClick={() => setStatusPerkawinan('Kawin')}>Kawin</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Tanggal Lahir
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' type='date' value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)}/>
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Kewarganegaraan
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Pilih kewarganegaraan" defaultValue={kewarganegaraan} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setKewarganegaraan(e.target.value)} />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="WNI" onClick={() => setKewarganegaraan('WNI')}>Warga Negara Indonesia(WNI)</SelectItem>
                                                                 <SelectItem value="WNA" onClick={() => setKewarganegaraan('WNA')}>Warga Negara Asing(WNA)</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Pendidikan
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Pilih Pendidikan" defaultValue={pendidikan} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPendidikan(e.target.value)} />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value='SD' onClick={() => setPendidikan('SD')}>Sekolah Dasar(SD)</SelectItem>
                                                                 <SelectItem value='SMP' onClick={() => setPendidikan('SMP')}>Sekolah Menengah Pertama(SMP)</SelectItem>
                                                                 <SelectItem value='SMA' onClick={() => setPendidikan('SMA')}>Sekolah Menengah Atas(SMA)</SelectItem>
                                                                 <SelectItem value='D3' onClick={() => setPendidikan('D3')}>Diploma 3</SelectItem>
                                                                 <SelectItem value='S1' onClick={() => setPendidikan('S1')}>Sarjana</SelectItem>
                                                                 <SelectItem value='S2' onClick={() => setPendidikan('S2')}>Master</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Dusun
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Pilih Dusun" defaultValue={dusun} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setDusun(e.target.value)}/>
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value='Dusun Pagaran' onClick={() => setDusun('Pagaran')}>Dusun Pagaran</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>

                                        </div>

                                   </div>
                                   <div className="p-6 flex justify-end">
                                      
                                        <button className='text-white bg-[#0890EA] rounded-[5px] w-[200px] h-[40px]' onClick={handleSubmit}>
                                             Tambah Data Penduduk
                                        </button>
                                   </div>
                              </form>


                         </div>
                    </div>

               </div>
          </SidebarLayout>
     )
}
