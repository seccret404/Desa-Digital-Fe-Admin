import React from 'react'
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import Button from '../../components/ui/button'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'

export default function TambahAgenda() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Agenda
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Agenda Desa
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
                                                  <Input placeholder='nama kegiatan' />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Hari/Tanggal
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input type='date' placeholder='nama kegiatan' />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Lokasi
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='lokasi' />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Tujuan Kegitan
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='tujuan kegiatan' />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Deskripsi
                                             </div>
                                             <div className="w-[350px]">
                                                  <Textarea placeholder='deskripsi'>

                                                  </Textarea>
                                             </div>
                                        </div>
                                        <div className="flex justify-end mt-6">
                                             <div className="mr-6">
                                                  <Button color='white' bgColor='#F61616' rounded={5} width={142} height={30}>
                                                       Batal
                                                  </Button>
                                             </div>
                                             <div className="">

                                                  <Button color='white' bgColor='#0890EA' rounded={5} width={142} height={30}>
                                                       Simpan
                                                  </Button>

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
