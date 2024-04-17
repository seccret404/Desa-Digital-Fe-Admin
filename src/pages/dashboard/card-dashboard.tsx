
import Button from '../../components/ui/button'

export default function CardDashboard() {
     return (
          <div className="">
               <div className="bg-white rounded-[15px] w-[601px]">
                    <div className="p-4">
                         <div className="font-medium text-[24px]">
                              Agenda Desa
                         </div>
                         <div className="bg-[#BBE2EC4F] rounded-[15px] mt-4">
                              <div className="flex justify-between p-2">
                                   <div className="font-bold text-[18px]">
                                        Pertemuan dengan Camat Simanindo
                                   </div>
                                   <div className="flex items-center">
                                        <div className="">
                                             Status : &nbsp;
                                        </div>
                                        <div className="h-[16px] bg-[#0D927563] rounded-[5px]">
                                             <div className="font-medium text-[10px] pl-2 pr-2   text-[#0D9276]">2 hari lagi</div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex justify-between p-2">
                                   <div className="text-[12px]">Hari : 25 Maret 2024</div>
                                   <div className="font-medium text-[12px]">Jam : 15.00 - 17.00 WIB</div>
                                   <div className="text-[10px]"><Button width={112} color='white' bgColor='#0890EA' rounded={5} height={23}> Detail Agenda</Button></div>
                              </div>
                         </div>
                         <div className="bg-[#BBE2EC4F] rounded-[15px] mt-4">
                              <div className="flex justify-between p-2">
                                   <div className="font-bold text-[18px]">
                                        Pertemuan dengan Pengurus UMKM Tomok
                                   </div>
                                   <div className="flex items-center">
                                        <div className="">
                                             Status : &nbsp;
                                        </div>
                                        <div className="h-[16px] bg-[#0890EA60] rounded-[5px]">
                                             <div className="font-medium text-[10px] pl-2 pr-2   text-[#0890EA]">2 hari lagi</div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex justify-between p-2">
                                   <div className="text-[12px]">Hari : 25 Maret 2024</div>
                                   <div className="font-medium text-[12px]">Jam : 15.00 - 17.00 WIB</div>
                                   <div className="text-[10px]"><Button width={112} color='white' bgColor='#0890EA' rounded={5} height={23}> Detail Agenda</Button></div>
                              </div>
                         </div>
                         <div className="text-[12px] flex justify-end pt-6">
                              <Button width={213} color='white' bgColor='#0890EA' rounded={5} height={38}>
                                   Lihat  Agenda Selengkapnya
                              </Button>
                         </div>
                         <div className="p-6">
                              <hr />
                         </div>
                         <div className="bg-[#BBE2EC4F] rounded-[15px] mt-4">
                              <div className="flex justify-between p-2">
                                   <div className="font-bold text-[18px]">
                                        Gotong-royong sepanjang Dusun Tomok
                                   </div>
                                   <div className="flex items-center">
                                        <div className="">
                                             Status : &nbsp;
                                        </div>
                                        <div className="h-[16px] bg-[#0D927563] rounded-[5px]">
                                             <div className="font-medium text-[10px] pl-2 pr-2   text-[#0D9276]">2 hari lagi</div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex justify-between p-2">
                                   <div className="text-[12px]">Terbit : 25 Maret 2024</div>
                                   <div className="text-[10px]"><Button width={112} color='white' bgColor='#0890EA' rounded={5} height={23}> Detail Pengumuman</Button></div>
                              </div>
                         </div>
                         <div className="bg-[#BBE2EC4F] rounded-[15px] mt-4">
                              <div className="flex justify-between p-2">
                                   <div className="font-bold text-[18px]">
                                        Gotong-royong sepanjang Dusun Tomok
                                   </div>
                                   <div className="flex items-center">
                                        <div className="">
                                             Status : &nbsp;
                                        </div>
                                        <div className="h-[16px] bg-[#0D927563] rounded-[5px]">
                                             <div className="font-medium text-[10px] pl-2 pr-2   text-[#0D9276]">2 hari lagi</div>
                                        </div>
                                   </div>
                              </div>
                              <div className="flex justify-between p-2">
                                   <div className="text-[12px]">Terbit : 25 Maret 2024</div>
                                   <div className="text-[10px]"><Button width={112} color='white' bgColor='#0890EA' rounded={5} height={23}> Detail Pengumuman</Button></div>
                              </div>
                         </div>
                         <div className="text-[12px] flex justify-end pt-6">
                              <Button width={213} color='white' bgColor='#0890EA' rounded={5} height={38}>
                                   Lihat  Pengumuman Selengkapnya
                              </Button>
                         </div>

                    </div>
               </div>
          </div>
     )
}
