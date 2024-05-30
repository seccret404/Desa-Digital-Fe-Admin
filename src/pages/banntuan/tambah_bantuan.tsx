import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useNavigate } from 'react-router-dom'
import { Input } from '../../components/ui/input';
import {SetStateAction, useState } from 'react';
import { useToast } from '../../components/ui/use-toast';
import { addBantuan } from '../../services/desaServices';


export default function TambahDaftarBantuan() {
     const [, setIsLoggedIn] = useState(false);
     const navigate = useNavigate();
     const {toast} = useToast();
     const Back = () => {
          navigate('/tambah-bantuan')
     }
     const [jenisBantuan, setJenisbantuan] = useState('');
     const [namaBantuan, setNamabantuan] = useState('');

     const handleJenisBantuanChange = (e: { target: { value: SetStateAction<string>; }; }) => {
          setJenisbantuan(e.target.value);
     }

     const handleSubmit = async (event: { preventDefault: () => void }) => {
          event.preventDefault();
          const dataBantuan = {
               jenis_bantuan: jenisBantuan,
               nama_bantuan: namaBantuan
          };

          try {
               await addBantuan(dataBantuan);
               toast({
                    title: "Data Bantuan",
                    description: "Data berhasil ditambah!"
               });
               navigate('/tambah-bantuan');
          } catch (error) {
               console.error("error :", error);
               toast({
                    title: "Data Bantuan",
                    description: "Data gagal ditambah!",

               });
          }

     }
     
     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#] rounded-[5px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data bantuan
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data Bantuan
                                   </div>
                              </div>
                         </div>
                       <div className="flex justify-center items-center">
                       <div className="bg-white w-[600px] rounded-[5px] mt-6 flex justify-center">
                              <div className="p-2 mb-6" >
                                   <form action="">

                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Jenis Bantuan
                                             </div>
                                             <div className="w-[350px]">
                                                  <select value={jenisBantuan} onChange={handleJenisBantuanChange} name="" id="" className='w-[350px] h-[35px] border-[2px] rounded-[5px] text-[16px]'>
                                                       <option value="">Pilih Jenis</option>
                                                       <option value="Desa">Pemerintahan Desa</option>
                                                       <option value="Pemerintah">Pemerintahan Pusat</option>
                                                  </select>
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Bantuan
                                             </div>
                                             <div className="w-[350px]">
                                                 <Input placeholder='Nama Bantuan' 
                                                 value={namaBantuan}
                                                 onChange={(e) => setNamabantuan(e.target.value)}
                                                 />
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
               </div>
          </SidebarLayout >
     )
}
