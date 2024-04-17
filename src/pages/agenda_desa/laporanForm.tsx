import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'

export default function LaporanAgenda() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Laporan
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Lapooran
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6 flex justify-center">
                              <div className="p-2 mb-6" >
                                   <form action="">
                                        <div className="flex justify-between">
                                             <div className="">
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">
                                                            Jumlah Peserta
                                                       </div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input placeholder='Jumlah Peserta' />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">
                                                            Lokasi Kegiatan
                                                       </div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input placeholder='Lokasi' />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">
                                                            Dana Eksternal/Donasi
                                                       </div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input placeholder='Sumbangan' />
                                                       </div>
                                                  </div>
                                                  <div className="mt-4">
                                                       <div className="mb-2 text-[]">
                                                            Dokumentasi Kegiatan
                                                       </div>
                                                       <div className="relative">

                                                            <label htmlFor="fileInput" className="cursor-pointer flex">
                                                                 <Input className='w-[320px] h-[49px]' id="fileInput" placeholder='Dokumentasi kegitan' />
                                                                 <span className="ml-1 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                                                                      Pilih File
                                                                 </span>

                                                            </label>
                                                            <input className="absolute inset-0 w-[416px] h-[49px] opacity-0" type="file" placeholder="Nama UMKM" />
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="ml-8">
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">
                                                            Hari/Tanggal
                                                       </div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input placeholder='Jumlah Peserta' />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">
                                                            Anggaran Desa
                                                       </div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Input placeholder='Lokasi' />
                                                       </div>
                                                  </div>
                                                  <div className="flex mt-4 items-center">
                                                       <div className="w-[160px]">
                                                            Status Kegiatan
                                                       </div>
                                                       <div className="w-[250px] h-[50px]">
                                                            <Select>
                                                                 <SelectTrigger className=" bg-[#40A2E3] text-white">
                                                                      <SelectValue placeholder="Pilih Status" />
                                                                 </SelectTrigger>
                                                                 <SelectContent className='bg-white'>
                                                                      <SelectItem value="selesai">Selesai</SelectItem>
                                                                      <SelectItem value="batal">Batal</SelectItem>

                                                                 </SelectContent>
                                                            </Select>
                                                       </div>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="flex justify-end mt-20">
                                             <div className="mr-6">
                                                  <Button color='white' bgColor='#F61616' rounded={5} width={142} height={40}>
                                                       <Link to='/agenda-desa   '>
                                                            Batal
                                                       </Link>
                                                  </Button>
                                             </div>
                                             <div className="">

                                                  <Button color='white' bgColor='#0890EA' rounded={5} width={142} height={40}>
                                                       Simpan
                                                  </Button>

                                             </div>
                                        </div>
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
