import { Link } from 'react-router-dom'
import SidebarLayout from '../../components/layout/SidebarLayout'
import Button from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import {
     Select, SelectContent,
     SelectGroup,
     SelectItem,
     SelectLabel,
     SelectTrigger,
     SelectValue,
} from '../../components/ui/select'

export default function DataDesa() {
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
                              <div className="p-4">
                                   <div className="flex">
                                        <div className="">
                                             <img src="assets/desa.jpeg" alt="" className='rounded-[15px] w-[900px]' />
                                        </div>
                                        <div className="ml-12">
                                             <div className="font-bold text-[20px]" >
                                                  Desa Sosor  Dolok.
                                             </div>
                                             <div className="mt-[-5px] text-[12px]">
                                                  Telp : +62 8574 2342 2342
                                             </div>
                                             <div className="mt-[-5px] text-[12px]">
                                                  Jln Efrata, Kec. Harian, Kabupaten Samosir, Provinsi Sumatera Utara
                                             </div>
                                             <div className="mt-4 text-justify">
                                                  Desa Sosor Dolok merupakan kawasan pariwisata diSumatera Utara yang masuk dalam administratif  Kecamatan Harian,
                                                  Kabupaten Samosir. Perdesaan di pesisir Danau Toba ini memiliki satu
                                                  destinasi wisata alam yang masih jarang dikunjungi, Air Terjun Efrat.
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-[#EDECEC] p-3 rounded-[15px] mt-4 text-[16px]">
                                        Struktur Organisasi
                                   </div>
                                   <div className="flex items-center justify-end mt-4" >
                                        <div className="text-[18px] text-[#40A2E3]">
                                             Tahun Pemerintahan
                                        </div>
                                        <div className="ml-4">
                                             <Select>
                                                  <SelectTrigger className="w-[180px] bg-[#40A2E3] text-white">
                                                       <SelectValue placeholder="Pilih Tahun" />
                                                  </SelectTrigger>
                                                  <SelectContent>
                                                       <SelectGroup className='bg-[#40A2E3] text-white'>
                                                            <SelectLabel>Pilih Tahun</SelectLabel>
                                                            <SelectItem value="2003">2003</SelectItem>
                                                            <SelectItem value="2004">2004</SelectItem>
                                                            <SelectItem value="2005">2005</SelectItem>

                                                       </SelectGroup>
                                                  </SelectContent>
                                             </Select>
                                        </div>
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kepala Desa
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Badan Permusyawaratan Desa
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama  Sekretaris Desa
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kaur Pemerintahan
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kaur Pembangunan
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kaur Pemberdayaan Masyarakat
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kaur Kesejahteraan Rakyat
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kaur Umum
                                        </div>
                                        <Input disabled />
                                   </div>
                                   <div className="mt-5">
                                        <div className="text-[16px] font-medium">
                                             Nama Kaur  Keuangan
                                        </div>
                                        <Input disabled />
                                   </div>

                                   <div className="flex justify-end mt-4" >
                                        <Button rounded={5} height={40} bgColor='#0890EA' color='white' width={170}>
                                             <Link to='/profil-desa'>
                                                  Edit Data
                                             </Link>
                                        </Button>
                                   </div>



                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
