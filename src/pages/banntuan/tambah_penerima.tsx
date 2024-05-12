import { Link } from 'react-router-dom'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import HomeIcon from '../../components/icon/homeIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'
import Button from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function TambahPenerimaBantuan() {


     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data Organisasi
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data Organisasi
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6" >
                              <div className="p-4">
                                   <div className="p-6 ">
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Nama Penerima
                                                  </div>
                                                  <div className="">
                                                       <Input className='h-[40px] font-bold' placeholder='Nama penerima    ' />
                                                  </div>
                                             </div>

                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       NIK Penerima
                                                  </div>
                                                  <div className="">
                                                       <Input className='h-[40px] font-bold' placeholder='singkatan' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2">
                                                       Nama Bantuan
                                                  </div>
                                                  <div className="">
                                                       <Input className='h-[40px] font-bold' placeholder='nama bantuan' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Bentuk Terima
                                                  </div>
                                                  <div className="">
                                                       <CKEditor
                                                            editor={ClassicEditor}
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex justify-end">
                                        <div className="mr-8">
                                             <Button bgColor='#F61616' rounded={5} width={128} height={34} color='white'>
                                                  <Link to={'/organisasi'}>
                                                       Kembali
                                                  </Link>
                                             </Button>
                                        </div>
                                        <div className="">
                                             <Button bgColor='#0890EA' rounded={5} width={128} height={34} color='white'>
                                                  Tambah Data
                                             </Button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
