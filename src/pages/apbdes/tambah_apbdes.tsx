import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import HomeIcon from '../../components/icon/homeIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'

export default function AddApbdes() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data APBDes
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data APBDes
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6" >
                              <div className="p-4">

                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
