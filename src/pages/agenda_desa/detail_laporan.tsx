import React from 'react'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'

export default function DetailLaporan() {
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
                         <div className="flex justify-end mt-4">
                              <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                   <Link to='/laporan-agenda'>
                                        Tambah Lporan
                                   </Link>
                              </Button>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6 ">
                              <div className="p-6 mb-6" >
                                   <div className="text-[20px] font-medium">
                                        Kegiatan Natal
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium mt-8">
                                             Dokumentasi
                                        </div>
                                        <div className="grid grid-cols-4 gap-4">
                                             {[...Array(4)].map((_, index) => (
                                                  <div className="" key={index}>
                                                       <img src="assets/laporan.png" alt="" />
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium mt-8">
                                             Hari/Tanggal
                                        </div>
                                        <div className="">
                                             Sabtu 13 Maret 2023
                                        </div>
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium mt-8">
                                             Jumlah Peserta
                                        </div>
                                        <div className="">
                                             134 orang
                                        </div>
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium mt-8">
                                             Lokasi
                                        </div>
                                        <div className="">
                                             Aula Desa
                                        </div>
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium mt-8">
                                             Anggaran Desa
                                        </div>
                                        <div className="">
                                             Rp. 5.000.000
                                        </div>
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium">
                                             Donasi
                                        </div>
                                        <div className="">
                                             Rp. 5.000.000
                                        </div>
                                   </div>
                                   <div className="">
                                        <div className="text-[18px] font-medium mt-8">
                                             Status Kegiatan
                                        </div>
                                        <div className="">
                                             Selesai
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
