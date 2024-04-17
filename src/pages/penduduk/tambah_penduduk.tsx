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
import Button from '../../components/ui/button'
import AddUserIcon from '../../components/icon/adduserIcon'


export default function TambahPenduduk() {
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
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Nama lengkap' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 ">
                                                       Agama
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Pilih agama" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="Kristen">Kristen</SelectItem>
                                                                 <SelectItem value="Khatolik">Khatolik</SelectItem>
                                                                 <SelectItem value="Islam">Islam</SelectItem>
                                                                 <SelectItem value="Hindu">Hindu</SelectItem>
                                                                 <SelectItem value="Budha">Budha</SelectItem>
                                                                 <SelectItem value="Konghucu">Konghucu</SelectItem>
                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Alamat
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Alamat' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2">
                                                       Tempat Lahir
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Tempat Lahir' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Pekerjaan
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Pekerjaan' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Status Hidup
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Status Hidup" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="hidup">Hidup</SelectItem>
                                                                 <SelectItem value="wafat">Wafat</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Nomor Kartu Keluarga
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' placeholder='no kk' />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       NIK
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='NIK' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Jenis Kelamin
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Jenis Kelamin" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="laki-laki">Laki-laki</SelectItem>
                                                                 <SelectItem value="Perempuan">Perempuan</SelectItem>

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
                                                                 <SelectValue placeholder="Jenis Kelamin" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="Belum Kawin">Belum Kawin</SelectItem>
                                                                 <SelectItem value="Kawin">Kawin</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Tanggal Lahir
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' type='date' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Kewarganegaraan
                                                  </div>
                                                  <div className="">
                                                       <Select>
                                                            <SelectTrigger className="w-[416px] h-[40px] font-bold">
                                                                 <SelectValue placeholder="Pilih kewarganegaraan" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value="WNI">Warga Negara Indonesia(WNI)</SelectItem>
                                                                 <SelectItem value="WNA">Warga Negara Asing(WNA)</SelectItem>

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
                                                                 <SelectValue placeholder="Pilih Pendidikan" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value='SD'>Sekolah Dasar(SD)</SelectItem>
                                                                 <SelectItem value='SMP'>Sekolah Menengah Pertama(SMP)</SelectItem>
                                                                 <SelectItem value='SMA'>Sekolah Menengah Atas(SMA)</SelectItem>
                                                                 <SelectItem value='D3'>Diploma 3</SelectItem>
                                                                 <SelectItem value='S1'>Sarjana</SelectItem>
                                                                 <SelectItem value='S2'>Master</SelectItem>

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
                                                                 <SelectValue placeholder="Pilih Dusun" />
                                                            </SelectTrigger>
                                                            <SelectContent className='bg-white'>
                                                                 <SelectItem value='Dusun Pagaran'>Dusun Pagaran</SelectItem>

                                                            </SelectContent>
                                                       </Select>

                                                  </div>
                                             </div>

                                        </div>

                                   </div>
                                   <div className="p-6 flex justify-end">
                                        <Button color='white' bgColor='#0890EA' rounded={5} width={284} height={59}>
                                             <div className="flex items-center justify-center">
                                                  <AddUserIcon color='white' size={20} />
                                                  <div className=" text-[16px] ml-2">
                                                       Tambah Data Penduduk
                                                  </div>
                                             </div>
                                        </Button>
                                   </div>
                              </form>


                         </div>
                    </div>

               </div>
          </SidebarLayout>
     )
}
