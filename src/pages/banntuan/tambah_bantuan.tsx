import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/ui/input';


export default function TambahDaftarBantuan() {
     const navigate = useNavigate();
     const Back = () => {
          navigate('/tambah-bantuan')
     }

     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah bantuan
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Bantuan
                                   </div>
                              </div>
                         </div>
                       <div className="flex justify-center items-center">
                       <div className="bg-white w-[600px] rounded-[15px] mt-6 flex justify-center">
                              <div className="p-2 mb-6" >
                                   <form action="">

                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Jenis Bantuan
                                             </div>
                                             <div className="w-[350px]">
                                                  <select name="" id="" className='w-[350px] h-[35px] border-[2px] rounded-[5px] text-[16px]'>
                                                       <option value="">Pilih Jenis</option>
                                                       <option value="">Pemerintahan Desa</option>
                                                       <option value="">Pemerintahan Pusat</option>
                                                  </select>
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Bantuan
                                             </div>
                                             <div className="w-[350px]">
                                                 <Input placeholder='Nama Bantuan'/>
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Bentuk Terima
                                             </div>
                                             <div className="w-[350px]">
                                                 <Input placeholder='Bentuk terima..'/>
                                             </div>
                                        </div>


                                        <div className="flex justify-end mt-6">
                                             <div className="mr-6">
                                                  <button onClick={Back} className='bg-[#F61616] text-white rounded-[5px] w-[142px] h-[30px]'>
                                                       Batal
                                                  </button>
                                             </div>
                                             <div className="">
                                                  <button className='bg-[#0890EA] text-white rounded-[5px] w-[142px] h-[30px]'>
                                                       simpan
                                                  </button>


                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                       </div>
                    </div>
               </div>
          </SidebarLayout >
     )
}
