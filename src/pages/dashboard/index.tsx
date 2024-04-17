import ArrowIcon from '../../components/icon/arrowIcon'
import FileIcon from '../../components/icon/fileIcon'
import UmkmIcon from '../../components/icon/umkmIcon'
import UserIcon from '../../components/icon/userIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'
// import CardDashboard from './card-dashboard'
// import CardKapal from './card-kapal'
export default function Dashboard() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="flex flex-wrap justify-between">
                              <div className="bg-[#40A2E3] rounded-[15px] md:w-[288px]">
                                   <div className="p-4">
                                        <div className="flex justify-between">
                                             <div className="">
                                                  <UserIcon size={40} color='white' />
                                             </div>
                                             <div className="">
                                                  <ArrowIcon size={40} color='white' />
                                             </div>
                                        </div>
                                        <div className="text-[24px] text-white">
                                             125.089 Jiwa
                                        </div>
                                        <div className="mt-4 text-[16px] text-white">
                                             Total Jumlah Penduduk
                                        </div>
                                   </div>
                              </div>
                              <div className="bg-[#0D9276] rounded-[15px] md:w-[288px]">
                                   <div className="p-4">
                                        <div className="flex justify-between">
                                             <div className="">
                                                  <FileIcon size={40} color='white' />
                                             </div>
                                             <div className="">
                                                  <ArrowIcon size={40} color='white' />
                                             </div>
                                        </div>
                                        <div className="text-[24px] text-white">12 Layanan Surat</div>
                                        <div className="mt-4 text-[16px] text-white">Total layanan aktif</div>
                                   </div>
                              </div>
                              <div className="">
                                   <div className="bg-[#0D9276] rounded-[15px] md:w-[288px]">
                                        <div className="flex p-5 items-center justify-center">
                                             <div className="mr-2">
                                                  <UmkmIcon size={30} color='white' />
                                             </div>
                                             <div className="text-white text-[18px]">
                                                  12 UMKM Aktif
                                             </div>
                                        </div>
                                   </div>
                                   <div className="bg-white rounded-[15px] md:w-[288px] mt-5">
                                        <div className="flex p-5 items-center justify-center">
                                             <div className="mr-2">
                                                  <UserIcon size={30} color='#0D9276' />
                                             </div>
                                             <div className="text-[#0D9276] text-[18px]">
                                                  20 Kelompok Tani
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="flex mt-6 justify-between">
                              {/* <div className="">
                                   <CardDashboard />
                              </div>
                              <div className="">
                                   <CardKapal />
                              </div> */}
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
