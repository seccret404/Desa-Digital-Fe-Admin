import { Link } from 'react-router-dom'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import HomeIcon from '../../components/icon/homeIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'
import Button from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { ChangeEvent, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function AddOrganisasi() {
     const [selectedFile, setSelectedFile] = useState<File | null>(null);

     const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
               setSelectedFile(e.target.files[0]);
           }
     }
     const handleEditorChange = (event) => {
          //
        };
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
                                   <div className="p-6 flex justify-between">
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Nama Organisasi
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Nama organisasi    ' />
                                                  </div>
                                             </div>

                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Singkatan/Inisial
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='singkatan' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2">
                                                       Alamat Organisasi
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Alamat' />
                                                  </div>
                                             </div>

                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Logo Organisasi
                                                  </div>
                                                  <div className="relative">

                                                       <label htmlFor="produk" className="cursor-pointer flex">
                                                            <Input className='w-[330px] h-[40px]' id="produk" placeholder='Pilih file  ' value={selectedFile ? selectedFile.name : ''} readOnly />
                                                            <span className="ml-1 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                                                                 Pilih File
                                                            </span>

                                                       </label>
                                                       <input className="absolute inset-0 w-[416px] h-[40px] opacity-0" type="file" placeholder="" onChange={handleFileChange} />
                                                  </div>
                                             </div>

                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Jumlah Anggota
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' placeholder='no kk' />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Tahun Berdiri
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' type='date' />
                                                  </div>
                                             </div>


                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Nama Ketua
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' placeholder='nama ketua' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Nama Wakil Ketua
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold' placeholder='Pekerjaan' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Nama Sekretaris
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' placeholder='nama sekretaris' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Nama Bendahara
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[40px] font-bold ' placeholder='nama bendahara' />
                                                  </div>
                                             </div>
                                        </div>

                                   </div>
                                   <div className="flex items-center mt-2 pl-6 pr-6 mb-8">
                <div className="w-full">
                  <div className="">Deskripsi</div>
                  <CKEditor
                    editor={ClassicEditor}
                   
                  />
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
