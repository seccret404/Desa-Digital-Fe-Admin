import { Link } from 'react-router-dom'
import SidebarLayout from '../../components/layout/SidebarLayout'
import Button from '../../components/ui/button'
import MapIcon from '../../components/icon/mapIcon'

// import HomeIcon from '../../components/icon/homeIcon'
// import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function DataDesa() {
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="flex items-center justify-between">
                              {/* <div className="relative w-[376px]">
                                   <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
                                   <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px]" />
                              </div> */}
                              <div className="">
                                   <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                        <Link to='/profil-desa'>
                                             Edit Profil
                                        </Link>
                                   </Button>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6">
                              <div className="p-10 ">
                                   <div className="mb-10">
                                        <div className="">
                                             <img src="assets/desa.jpeg" alt="" className='rounded-[15px] w-full h-[300px]' />
                                        </div>
                                        <div className="mt-4">
                                             <div className="font-bold text-[20px]" >
                                                  Desa Sosor  Dolok.
                                             </div>
                                             <div className="mt-[1px] flex items-center text-[16px]">
                                                  <MapIcon size={20} color='black' />
                                                  <div className="ml-2">
                                                       Jln Efrata, Kec. Harian, Kabupaten Samosir, Provinsi Sumatera Utara
                                                  </div>
                                             </div>
                                             <div className="mt-4 text-justify">
                                                  Desa Sosor Dolok merupakan kawasan pariwisata diSumatera Utara yang masuk dalam administratif  Kecamatan Harian,
                                                  Kabupaten Samosir. Perdesaan di pesisir Danau Toba ini memiliki satu
                                                  destinasi wisata alam yang masih jarang dikunjungi, Air Terjun Efrat.
                                             </div>
                                        </div>
                                        <div className="mt-4 w-[100px] text-[18px] font-bold">
                                             <div className="">Profil Desa</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify">
                                             Desa Sosor Dolok terletak di daerah dataran tinggi, menawarkan pemandangan alam yang menakjubkan dengan latar belakang pegunungan yang megah dan udara yang sejuk. Desa ini terkenal dengan kebun teh yang membentang luas, menciptakan panorama hijau yang menyejukkan mata. Penduduk desa yang mayoritas adalah petani teh, menjalani hidup dengan ritme yang tenang dan penuh kesederhanaan, jauh dari hiruk-pikuk kota.
                                             Keunikan Desa Sosor Dolok tidak hanya terletak pada keindahan alamnya, tetapi juga pada kekayaan budayanya. Warga desa masih memegang teguh adat istiadat dan tradisi yang turun-temurun, termasuk upacara-upacara yang berkaitan dengan pertanian dan kepercayaan lokal. Di sini, pengunjung dapat menyaksikan langsung berbagai festival budaya yang diadakan dengan penuh warna dan keceriaan. Selain itu, keramahan penduduk lokal menjadikan setiap pengalaman kunjungan menjadi lebih berkesan dan autentik.
                                        </div>
                                        <div className="mt-4 w-[100px] text-[18px] font-bold">
                                             <div className="">Visi</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify">
                                             Visi Desa Sosor Dolok adalah menjadi desa wisata yang berkelanjutan, yang memadukan kearifan lokal dengan inovasi modern untuk mewujudkan kesejahteraan dan kebahagiaan bagi seluruh warganya serta memberikan pengalaman yang unik dan berkesan bagi para pengunjung. Desa ini berkomitmen untuk mengembangkan ekonomi lokal melalui pemanfaatan sumber daya alam dan budaya yang berkelanjutan, sekaligus melestarikan lingkungan dan adat istiadat yang ada.
                                        </div>
                                        <div className="mt-4 w-[100px] text-[18px] font-bold">
                                             <div className="">Misi</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify">
                                             Visi Desa Sosor Dolok adalah menjadi desa wisata yang berkelanjutan, yang memadukan kearifan lokal dengan inovasi modern untuk mewujudkan kesejahteraan dan kebahagiaan bagi seluruh warganya serta memberikan pengalaman yang unik dan berkesan bagi para pengunjung. Desa ini berkomitmen untuk mengembangkan ekonomi lokal melalui pemanfaatan sumber daya alam dan budaya yang berkelanjutan, sekaligus melestarikan lingkungan dan adat istiadat yang ada.
                                        </div>
                                        <div className="mt-4 w-[120px] text-[18px] font-bold">
                                             <div className="">Sejarah Desa</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify">
                                             Desa Sosor Dolok terletak di daerah dataran tinggi, menawarkan pemandangan alam yang menakjubkan dengan latar belakang pegunungan yang megah dan udara yang sejuk. Desa ini terkenal dengan kebun teh yang membentang luas, menciptakan panorama hijau yang menyejukkan mata. Penduduk desa yang mayoritas adalah petani teh, menjalani hidup dengan ritme yang tenang dan penuh kesederhanaan, jauh dari hiruk-pikuk kota.
                                             Keunikan Desa Sosor Dolok tidak hanya terletak pada keindahan alamnya, tetapi juga pada kekayaan budayanya. Warga desa masih memegang teguh adat istiadat dan tradisi yang turun-temurun, termasuk upacara-upacara yang berkaitan dengan pertanian dan kepercayaan lokal. Di sini, pengunjung dapat menyaksikan langsung berbagai festival budaya yang diadakan dengan penuh warna dan keceriaan. Selain itu, keramahan penduduk lokal menjadikan setiap pengalaman kunjungan menjadi lebih berkesan dan autentik.
                                        </div>
                                        <div className="mt-4 w-[150px] text-[18px] font-bold">
                                             <div className="">Letak Geografis</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Utara
                                             </div>
                                             <div className="">
                                                  : Desa Partungko Naginjang Kecamatan Harian
                                             </div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Timur
                                             </div>
                                             <div className="">
                                                  : Desa Turpuk Malau/Turpuk Sagala Kecamatan Harian
                                             </div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Selatan
                                             </div>
                                             <div className="">
                                                  : Desa Partungko Naginjang Kecamatan Harian 
                                             </div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Barat
                                             </div>
                                             <div className="">
                                                  : Desa Partungko Naginjang Kecamatan Harian
                                             </div>
                                        </div>
                                   </div>




                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
