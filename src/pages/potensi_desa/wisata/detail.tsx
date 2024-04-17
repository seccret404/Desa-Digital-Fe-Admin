import SidebarLayout from '../../../components/layout/SidebarLayout'
import HomeIcon from '../../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../../components/icon/arrowRightIcon'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'

export default function DetailWisata() {

     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   DetailUMKM
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Detail UMKM
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white mt-4 rounded-[15px]">
                              <div className="p-4">
                                   <div className="text-[24px] mt-4">
                                        Gambar Objek Wisata
                                   </div>
                                   <div className="grid grid-cols-4 gap-3">
                                        {[...Array(4)].map((_, index) => (
                                             <div className="" key={index}>
                                                  <img src="assets/umkm.png" alt="" />
                                             </div>
                                        ))}
                                   </div>
                                   <div className="text-[24px]">
                                        Pantai Boji
                                   </div>
                                   <div className="text-[#676A6C] text-[16px] mt-[-5px]">
                                        BumnDes Sosor Dolok
                                   </div>
                                   <div className="text-[16px] mt-4">
                                        Objek wisata adalah tempat atau area yang menarik minat pengunjung, yang biasanya memiliki daya tarik alami, budaya, sejarah, atau rekreasional,
                                        dan seringkali menjadi tujuan utama bagi para wisatawan untuk dikunjungi dan dieksplorasi.
                                        Ini mencakup berbagai tempat seperti taman nasional, museum, situs bersejarah, pantai, gunung, dan atraksi lainnya yang menawarkan
                                        pengalaman unik kepada pengunjung.
                                   </div>
                                   <div className="text-[24px] mt-4   ">
                                        Gambar Produk
                                   </div>
                                   <div className="grid grid-cols-4 gap-3">
                                        {[...Array(4)].map((_, index) => (
                                             <div className="" key={index}>
                                                  <img src="assets/umkm.png" alt="" />
                                             </div>
                                        ))}
                                   </div>
                                   <div className="text-[24px] mt-4">
                                        Deskripsi Produk
                                   </div>
                                   <div className="">
                                        Objek wisata adalah tempat atau area yang menarik minat pengunjung, yang biasanya memiliki daya tarik alami, budaya, sejarah, atau rekreasional,
                                        dan seringkali menjadi tujuan utama bagi para wisatawan untuk dikunjungi dan dieksplorasi.
                                        Ini mencakup berbagai tempat seperti taman nasional, museum, situs bersejarah, pantai, gunung, dan atraksi lainnya yang menawarkan
                                        pengalaman unik kepada pengunjung.
                                   </div>
                                   <div className="mt-4">
                                        <div className="text-[24px]">
                                             Lokasi Objek Wisata
                                        </div>
                                        <div className="text-[20px] text-[#676A6C]">
                                             Desa Sosor Dolok
                                        </div>
                                   </div>
                                   <div className="mt-4">
                                        <div className="text-[24px]">
                                             Telepon Pengelola
                                        </div>
                                        <div className="text-[20px] text-[#676A6C]">
                                             +62 6453 65275
                                        </div>
                                   </div>
                                   <div className="flex justify-end">
                                        <div className="mr-8">
                                             <Button bgColor='#F61616' rounded={5} width={128} height={34} color='white'>
                                                  <Link to={'/wisata'}>
                                                       Kembali
                                                  </Link>
                                             </Button>
                                        </div>
                                        <div className="">
                                             <Button bgColor='#0890EA' rounded={5} width={128} height={34} color='white'>
                                                  Edit
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
