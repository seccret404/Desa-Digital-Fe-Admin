import SidebarLayout from '../../components/layout/SidebarLayout'
import Button from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Textarea } from '../../components/ui/textarea'

export default function ProfilForm() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white rounded-[15px] mt-6">
                              <div className="p-4 text-[20px]">
                                   Data Desa
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6">
                              <div className=" flex justify-center items-center">
                                   <form action="">
                                        <Tabs defaultValue="profil" className="">

                                             <TabsContent value="profil">
                                                  <div className="p-2 w-[600px]">
                                                       <div className="flex mt-4 items-center">
                                                            <div className="w-[150px]">
                                                                 Nama Desa
                                                            </div>
                                                            <div className="w-[500px]">
                                                                 <Input placeholder='Nama desa' />
                                                            </div>
                                                       </div>
                                                       <div className="flex mt-4 items-center">
                                                            <div className="w-[150px]">
                                                                 Alamat Desa
                                                            </div>
                                                            <div className="w-[500px]">
                                                                 <Input placeholder='Alamat Desa' />
                                                            </div>
                                                       </div>
                                                       <div className="flex mt-4 items-center">
                                                            <div className="w-[150px]">
                                                                 Kecamatan
                                                            </div>
                                                            <div className="w-[500px]">
                                                                 <Input placeholder='Kecamatan' />
                                                            </div>
                                                       </div>
                                                       <div className="flex mt-4 items-center">
                                                            <div className="w-[150px]">
                                                                 Kabupaten
                                                            </div>
                                                            <div className="w-[500px]">
                                                                 <Input placeholder='Kabupaten' />
                                                            </div>
                                                       </div>
                                                       <div className="flex mt-4 items-center">
                                                            <div className="w-[150px]">
                                                                 Profil Desa
                                                            </div>
                                                            <div className="w-[500px]">
                                                                 <Textarea placeholder='Profil desa'>
                                                                 </Textarea>
                                                            </div>
                                                       </div>
                                                       <div className="flex mt-4 mt-4 items-center">
                                                            <div className="mb-2 text-[16px] w-[150px]">
                                                                 Gambar Desa
                                                            </div>
                                                            <div className="relative w-[500px]">

                                                                 <label htmlFor="fileInput" className="cursor-pointer flex">
                                                                      <Input className='w-[362px] h-[49px]' id="fileInput" placeholder='gambar desa' />
                                                                      <span className="ml-1 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                                                                           Pilih File
                                                                      </span>

                                                                 </label>
                                                                 <input className="absolute inset-0 w-[416px] h-[49px] opacity-0" type="file" placeholder="   " />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="mt-4  mb-8 flex justify-end">
                                                       <TabsList>
                                                            <TabsTrigger value="jabatan" hidden={true} className='bg-[#0890EA] w-[150px] h-[40px] text-white'>Selanjutnya</TabsTrigger>
                                                       </TabsList>
                                                  </div>
                                             </TabsContent>
                                             <TabsContent value="jabatan">
                                                  <div className="">
                                                       <div className="">
                                                            <div className=" bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kepala Desa
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama Kepala Desa' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>

                                                            </div>
                                                       </div>

                                                       {/* BPD */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Badan Permusyawaratan Rakyat
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* sekretaris desa */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Sekretaris Desa
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* Kaur pemerintahan */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kaur Pemerintahan
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* Kaur Pembangunan */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kaur Pembangunan
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* Kaur Pemberdayaan Masyarakat */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kaur Pemberdayaan Masyarakat
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* Kaur Kesejahteraan Rakyat */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kaur Kesejahteraan Rakyat
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* Kaur Umum */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kaur Umum
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       {/* Kaur Keuangan */}
                                                       <div className="mt-8">
                                                            <div className="bg-[#40A2E3] w-[250px] h-[40px] flex items-center justify-center rounded-[5px] text-[white] font-medium">
                                                                 Kaur Keuangan
                                                            </div>
                                                            <div className="grid grid-cols-3 gap-4 p-2">
                                                                 {/* kepala desa */}
                                                                 <div className="">
                                                                      <div className="">
                                                                           Nama
                                                                      </div>
                                                                      <Input placeholder='Nama' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           NIK
                                                                      </div>
                                                                      <Input placeholder='Nik' />
                                                                 </div>
                                                                 <div className="">
                                                                      <div className="">
                                                                           Jabatan
                                                                      </div>
                                                                      <Select>
                                                                           <SelectTrigger className="w-[270px]">
                                                                                <SelectValue placeholder="Pilih Jabatan" />
                                                                           </SelectTrigger>
                                                                           <SelectContent className='bg-white'>
                                                                                <SelectItem value="Kepala Desa">Kepala Desa</SelectItem>
                                                                                <SelectItem value="BPD">BPD</SelectItem>
                                                                                <SelectItem value="Sekretaris Desa">Sekretaris Desa</SelectItem>
                                                                                <SelectItem value="kaur Pemerintahan">Kaur Pemerintahan</SelectItem>
                                                                                <SelectItem value="Kaur Pembangunan">Kaur Pembangunan</SelectItem>
                                                                                <SelectItem value="Kaur Pemberdayaan Masyarakat">Kaur Pemberdayaan Masyarakat</SelectItem>
                                                                                <SelectItem value="Kaur Kesejahteraan Rakyat">Kaur Kesejahteraan Rakyat</SelectItem>
                                                                                <SelectItem value="Kaur Umum">Kaur Umum</SelectItem>
                                                                                <SelectItem value="Kaur Keuangan">Kaur Keuangan</SelectItem>
                                                                           </SelectContent>
                                                                      </Select>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="flex justify-between mt-10 mb-6">
                                                            <TabsList>
                                                                 <TabsTrigger value="profil" hidden={true} className='bg-[#676A6C] w-[150px] h-[40px] text-white'>Kembali</TabsTrigger>

                                                            </TabsList>
                                                            <Button bgColor='#0890EA' height={40} width={150} rounded={5} color='white'>
                                                                 Simpan
                                                            </Button>
                                                       </div>
                                                  </div>
                                             </TabsContent>
                                        </Tabs>
                                   </form>


                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
