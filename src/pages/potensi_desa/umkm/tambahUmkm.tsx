
import SidebarLayout from '../../../components/layout/SidebarLayout'
import HomeIcon from '../../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../../components/icon/arrowRightIcon'
import { Input } from '../../../components/ui/input'
import { Textarea } from '../../../components/ui/textarea'
import Button from '../../../components/ui/button'

export default function AddUmkm() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah UMKM
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah UMKM
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white mt-4 rounded-[15px]">
                              <form action="">
                                   <div className="p-6 flex justify-between">
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Nama UMKM
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[49px]' placeholder='Nama umkm' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Pemilik UMKM
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[49px]' placeholder='Nama ' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Alamat UMKM
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[49px]' placeholder='alamat umkm' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Gambar UMKM
                                                  </div>
                                                  <div className="relative">

                                                       <label htmlFor="fileInput" className="cursor-pointer flex">
                                                            <Input className='w-[330px] h-[49px]' id="fileInput" placeholder='gambar umkm' />
                                                            <span className="ml-1 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                                                                 Pilih File
                                                            </span>

                                                       </label>
                                                       <input className="absolute inset-0 w-[416px] h-[49px] opacity-0" type="file" placeholder="Nama UMKM" />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Deskripsi UMKM
                                                  </div>
                                                  <div className="">
                                                       <Textarea placeholder='Deskripsi umkm' />

                                                  </div>
                                             </div>
                                        </div>
                                        <div className="">
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       No.Telp UMKM
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[49px]' placeholder='telpon umkm' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Nama Produk
                                                  </div>
                                                  <div className="">
                                                       <Input className='w-[416px] h-[49px]' placeholder='Nama Produk' />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px]">
                                                       Gambar Produk
                                                  </div>
                                                  <div className="relative">

                                                       <label htmlFor="produk" className="cursor-pointer flex">
                                                            <Input className='w-[330px] h-[49px]' id="produk" placeholder='gambar produk' />
                                                            <span className="ml-1 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ease-in-out cursor-pointer">
                                                                 Pilih File
                                                            </span>

                                                       </label>
                                                       <input className="absolute inset-0 w-[416px] h-[49px] opacity-0" type="file" placeholder="" />
                                                  </div>
                                             </div>
                                             <div className="mt-4">
                                                  <div className="mb-2 text-[16px] ">
                                                       Deskripsi Produk
                                                  </div>
                                                  <div className="">
                                                       <Textarea placeholder='Deskripsi produk' />

                                                  </div>
                                             </div>
                                             <div className="mt-12 flex justify-end">
                                                  <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                                       Tambah UMKM
                                                  </Button>
                                             </div>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
