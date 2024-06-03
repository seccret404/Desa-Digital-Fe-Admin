import { Link } from 'react-router-dom';
import SidebarLayout from '../../components/layout/SidebarLayout';
import Button from '../../components/ui/button';
import MapIcon from '../../components/icon/mapIcon';
import { useEffect, useState } from 'react';
import { Profil } from '../../interfaces/profil';
import { getProfil } from '../../services/desaServices';

export default function DataDesa() {
     const [, setIsLoggedIn] = useState(false);
     const [profile, setProfile] = useState<Profil[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
          async function fetchProfile() {
               try {
                    const data = await getProfil();
                    setProfile(data);
                    setLoading(false);
               } catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
                    setLoading(false);
               }
          }
          fetchProfile();
     }, []);

     if (loading) {
          return <div>Loading...</div>;
     }

     if (profile.length === 0) {
          return (
               <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
                    <div className="bg-[#D9D9D98B] rounded-[15px]">
                         <div className="p-8">
                              <div className="flex items-center justify-between">
                                   <div className="">
                                        <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                             <Link to='/profil-desa'>
                                                  Tambah Profil
                                             </Link>
                                        </Button>
                                   </div>
                              </div>
                              <div className="bg-white rounded-[15px] mt-6">
                                   <div className="p-10 mb-6 border-b border-gray-200">
                                        <div className="font-bold text-[20px] mb-4">Data belum di set</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </SidebarLayout>
          )
     }


     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">

                         <div className="bg-white rounded-[15px] mt-6">
                              {profile.map((item, index) => (

                                   <div key={index} className="p-10 mb-6 border-b border-gray-200">
                                        <div className="flex items-end justify-end">
                                             <div className="mb-8">
                                                  <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                                                       <Link to={`/profil-desa/${item.id}`}>
                                                            Edit Profil
                                                       </Link>
                                                  </Button>
                                             </div>
                                        </div>
                                        <div className="flex justify-center">
                                             <img src={`https://desa-api.desajanggadolok.id/api/gambardesa/${item.gambar_desa}`} alt={item.nama_desa} className='rounded-[15px] ' />
                                        </div>
                                        <div className="mt-4">
                                             <div className="font-bold text-[20px]" >
                                                  {item.nama_desa}
                                             </div>
                                             <div className="mt-[1px] flex items-center text-[16px]">
                                                  <MapIcon size={20} color='black' />
                                                  <div className="ml-2">
                                                       {item.alamat_kantor} - Kecamatan {item.kecamatan}, {item.kabupaten}, {item.provinsi}
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="mt-4 w-[100px] text-[18px] font-bold">
                                             <div className="">Profil Desa</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: item.profil_singkat }} />

                                        <div className="mt-4 w-[100px] text-[18px] font-bold">
                                             <div className="">Visi</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: item.visi_desa }} />

                                        <div className="mt-4 w-[100px] text-[18px] font-bold">
                                             <div className="">Misi</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: item.misi_desa }} />

                                        <div className="mt-4 w-[120px] text-[18px] font-bold">
                                             <div className="">Sejarah Desa</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="text-[14px] text-justify" dangerouslySetInnerHTML={{ __html: item.sejarah_desa }} />

                                        <div className="mt-4 w-[150px] text-[18px] font-bold">
                                             <div className="">Letak Geografis</div>
                                             <div className="bg-[#0890EA] h-1"></div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Utara
                                             </div>
                                             <div className="">
                                                  : {item.batas_utara}
                                             </div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Timur
                                             </div>
                                             <div className="">
                                                  : {item.batas_timur}
                                             </div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Selatan
                                             </div>
                                             <div className="">
                                                  : {item.batas_selatan}
                                             </div>
                                        </div>
                                        <div className="flex text-[18px]">
                                             <div className="w-[150px]">
                                                  Sebelah Barat
                                             </div>
                                             <div className="">
                                                  : {item.batas_barat}
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     );
}
