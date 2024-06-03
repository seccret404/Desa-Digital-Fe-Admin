import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useNavigate } from 'react-router-dom'
import { addDusun, getDusun } from '../../services/desaServices'
import { useEffect, useState } from 'react'
import { useToast } from '../../components/ui/use-toast'
import { getPenduduk } from '../../services/desaServices'
import { PendudukDesa } from '../../interfaces/penduduk'
export default function TambahDusun() {
     const [, setIsLoggedIn] = useState(false);
     const navigate = useNavigate();
     const { toast } = useToast();
     const [dusun, setDusun] = useState('');
     const [ketua, setKetua] = useState('');
     const [suggestedKetua, setSuggestedKetua] = useState<PendudukDesa[]>([]);
     const [existingDusun, setExistingDusun] = useState<string[]>([]);

     useEffect(() => {

          const fetchPenduduk = async () => {
               try {
                    const data = await getPenduduk();
                    setSuggestedKetua(data);
               } catch (error) {
                    console.error('Error fetching penduduk data:', error);
               }
          };
          const fetchDusun = async () => {
               try {
                    const data = await getDusun(); // Assuming this function fetches the names of dusun
                    setExistingDusun(data.map(d => d.nama_dusun));
               } catch (error) {
                    console.error('Error fetching dusun data:', error);
               }
          };

          fetchPenduduk();
          fetchDusun();
     }, []);
     const handleSubmit = async (event: { preventDefault: () => void }) => {
          event.preventDefault();
          if (!dusun || !ketua) {
               toast({ title: "Error", description: "Tolong isi semua kolom!" });
               return;
          }

          if (existingDusun.includes(dusun)) {
               toast({ title: "Error", description: `Nama dusun ${dusun} sudah ada terdaftar!` });
               return;
          }
          const dusunData = {
               nama_dusun: dusun,
               nama_ketua: ketua
          };

          try {
               await addDusun(dusunData);
               toast({
                    title: "Data Dusun",
                    description: "Data berhasil ditambah!"
               });
               navigate('/dusun');
          } catch (error) {
               console.error("error :", error);
               toast({
                    title: "Data Dusun",
                    description: "Data gagal ditambah!",

               });
          }
     }
     const Back = () => {
          navigate('/dusun')
     }
     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data Dusun
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data Dusun
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6 flex justify-center">
                              <div className="p-2 mb-6" >
                                   <form action="">

                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Dusun
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='nama dusun' value={dusun} onChange={(e) => setDusun(e.target.value)} />
                                             </div>
                                        </div>

                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Ketua
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input
                                                       placeholder="nama ketua"
                                                       value={ketua}
                                                       onChange={(e) => setKetua(e.target.value)}
                                                       list="suggested-ketua" // Added list prop
                                                  />
                                                  <datalist id="suggested-ketua" style={{ maxHeight: "200px", overflowY: "auto" }}>
                                                       {suggestedKetua.slice(0, 10).map((penduduk, index) => (
                                                            <option key={index} value={penduduk.nama} /> // Accessing nama property
                                                       ))}
                                                  </datalist>
                                             </div>
                                        </div>


                                        <div className="flex justify-end mt-6">
                                             <div className="mr-6">
                                                  <button onClick={Back} className='bg-[#F61616] text-white rounded-[5px] w-[142px] h-[30px]'>
                                                       Batal
                                                  </button>
                                             </div>
                                             <div className="">
                                                  <button onClick={handleSubmit} className='bg-[#0890EA] text-white rounded-[5px] w-[142px] h-[30px]'>
                                                       simpan
                                                  </button>


                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout >
     )
}
