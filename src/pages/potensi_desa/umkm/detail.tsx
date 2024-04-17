
import SidebarLayout from '../../../components/layout/SidebarLayout'
import HomeIcon from '../../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../../components/icon/arrowRightIcon'
import Button from '../../../components/ui/button'
import { Link } from 'react-router-dom'

export default function DetailUmkm() {

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
                                   <div className="">
                                        <img src="assets/umkm.png" alt="" className='w-screen h-[200px]' />
                                   </div>
                                   <div className="text-[24px]">
                                        UMKM Musik Tradisional
                                   </div>
                                   <div className="text-[#676A6C] text-[16px] mt-[-5px]">
                                        Edward Tua Panjaitan
                                   </div>
                                   <div className="text-[16px] mt-4">
                                        UMKM kami, bernama "Warisan Batak", secara kreatif menghasilkan alat musik tradisional Batak yang menggabungkan keahlian
                                        tangan para pengrajin lokal dengan keunikan budaya Batak. Produk-produk kami, seperti gondang sabangunan, taganing, dan siteran,
                                        mengusung nilai-nilai warisan budaya yang kaya dan autentik. Kami berkomitmen untuk mempertahankan keaslian dan kualitas dalam
                                        setiap pembuatan alat musik kami, serta mendukung pemberdayaan masyarakat lokal di Sumatera Utara. Melalui "Warisan Batak",
                                        kami berupaya memperkenalkan keindahan dan keistimewaan musik tradisional Batak kepada dunia secara luas, sambil turut
                                        melestarikan warisan budaya yang berharga. Dengan dukungan pelanggan dan komunitas,
                                        kami berharap dapat terus berkembang dan memberikan kontribusi positif bagi industri kreatif dan budaya di Indonesia.
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
                                        Kami berkomitmen untuk mempertahankan keaslian dan kualitas dalam
                                        setiap pembuatan alat musik kami, serta mendukung pemberdayaan masyarakat lokal di Sumatera Utara. Melalui "Warisan Batak",
                                        kami berupaya memperkenalkan keindahan dan keistimewaan musik tradisional Batak kepada dunia secara luas, sambil turut
                                        melestarikan warisan budaya yang berharga. Dengan dukungan pelanggan dan komunitas,
                                        kami berharap dapat terus berkembang dan memberikan kontribusi positif bagi industri kreatif dan budaya di Indonesia.
                                   </div>
                                   <div className="mt-4">
                                        <div className="text-[24px]">
                                             Alamat UMKM
                                        </div>
                                        <div className="text-[20px] text-[#676A6C]">
                                             Desa Sosor Dolok
                                        </div>
                                   </div>
                                   <div className="mt-4">
                                        <div className="text-[24px]">
                                             Telepon UMKM
                                        </div>
                                        <div className="text-[20px] text-[#676A6C]">
                                             +62 6453 65275
                                        </div>
                                   </div>
                                   <div className="flex justify-end">
                                        <div className="mr-8">
                                             <Button bgColor='#F61616' rounded={5} width={128} height={34} color='white'>
                                                  <Link to={'/umkm'}>
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
