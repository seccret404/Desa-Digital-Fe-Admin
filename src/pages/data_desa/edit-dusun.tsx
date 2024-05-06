import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useNavigate, useParams } from 'react-router-dom'
import {getDusunById, updateDusun } from '../../services/desaServices'
import { useEffect, useState } from 'react'
import { useToast } from '../../components/ui/use-toast'
import { Dusun } from '../../interfaces/dusun'
export default function EditDusun() {
     const navigate = useNavigate();
     const {toast} = useToast();
     const {id} = useParams<{id: string}>();
     const [dusun, setDusun] = useState<Dusun>({
          nama_dusun:'',
          nama_ketua:''
     });

     useEffect(() =>{
          async function fetchDusunData(){
               try{
                    const data = await getDusunById(id);
                    setDusun(data);
               }catch (error) {
                    console.error('Error fetching dusun:', error);
                }
          }
          fetchDusunData();
     },[id])
    


     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const { name, value } = e.target;
          setDusun(prevState => ({
              ...prevState,
              [name]: value
          }));
      };

      const handleSubmit = async (e: React.FormEvent) =>{
          e.preventDefault();
          try{
               await updateDusun(id, dusun);
               toast({
                    title:"Data Dusun",
                    description:"Data berhasil di update!"
               });
               navigate('/dusun')
          }catch (error) {
               console.error('Error updating penduduk:', error);
               toast({
                  title:"Data Penduduk",
                  description:'Data Penduduk Gagal di Update'
               })
           }
      }

     const Back = () => {
          navigate('/dusun')
     }
   
     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Dusun
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Dusun
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6 flex justify-center">
                              <div className="p-2 mb-6" >
                                   <form action="" onSubmit={handleSubmit}>

                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Dusun
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='nama dusun' name='nama_dusun' value={dusun.nama_dusun} onChange={handleChange} />
                                             </div>
                                        </div>
                                        
                                        <div className="flex items-center mt-4">
                                             <div className="w-[150px] text-[16px]">
                                                  Nama Ketua
                                             </div>
                                             <div className="w-[350px]">
                                                  <Input placeholder='nama ketua' name='nama_ketua' value={dusun.nama_ketua} onChange={handleChange}/>
                                             </div>
                                        </div>
                                        
                                        
                                        <div className="flex justify-end mt-6">
                                             <div className="mr-6">
                                             <button onClick={Back} className='bg-[#F61616] text-white rounded-[5px] w-[142px] h-[30px]'>
                                                       Batal
                                                  </button>
                                             </div>
                                             <div className="">
                                                  <button type='submit' className='bg-[#0890EA] text-white rounded-[5px] w-[142px] h-[30px]'>
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
