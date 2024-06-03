import React, { useState, useEffect } from 'react';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Profil } from '../../interfaces/profil';
import { getProfilById, updateProfil } from '../../services/desaServices';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/ui/use-toast';
interface Location {
     id: string;
     nama: string;
}

export default function ProfilEdit() {
     const [, setIsLoggedIn] = useState(false);
     const { id } = useParams<{ id: string }>();
     const navigate = useNavigate();
     const {toast} = useToast();
     const [provinsiList, setProvinsiList] = useState<Location[]>([]);
     const [kabupatenList, setKabupatenList] = useState<Location[]>([]);
     const [kecamatanList, setKecamatanList] = useState<Location[]>([]);
     const [profil, setProfil] = useState<Profil>({
          nama_desa: '',
          alamat_kantor: '',
          kecamatan: '',
          kabupaten: '',
          provinsi: '',
          profil_singkat: '',
          visi_desa: '',
          misi_desa: '',
          sejarah_desa: '',
          batas_barat: '',
          batas_utara: '',
          batas_selatan: '',
          batas_timur: '',
          gambar_desa: ''
     });


     useEffect(() => {
          async function fetchProfil() {
               try {
                    if(!id){
                         return;
                    }
                    const data = await getProfilById(id);
                    setProfil(data);
               } catch (error) {
                    console.error('Error fetching profil:', error);
               }
          }
          fetchProfil();
     }, [id]);

     useEffect(() => {
          fetch('https://ibnux.github.io/data-indonesia/provinsi.json')
               .then(response => response.json())
               .then(data => setProvinsiList(data));
     }, []);

     const handleProvinsiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const provinsiId = e.target.value;
          fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${provinsiId}.json`)
               .then(response => response.json())
               .then(data => setKabupatenList(data));
     };

     const handleKabupatenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const kabupatenId = e.target.value;
          fetch(`https://ibnux.github.io/data-indonesia/kecamatan/${kabupatenId}.json`)
               .then(response => response.json())
               .then(data => setKecamatanList(data));
     };

     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          try {
              if (!id) {
                  return;
              }
              const target = e.target as typeof e.target & {
                  gambar_desa: { files: FileList };
              };
              const updatedData = { ...profil };
              if (target.gambar_desa.files.length) {
                  // Jika ada file baru yang dipilih, gunakan file gambar baru
                  updatedData.gambar_desa = target.gambar_desa.files[0];
              }
      
              await updateProfil(id, updatedData);
              navigate('/data-desa');
              toast({
                  title: 'Update profil',
                  description: 'Berhasil Update profil!'
              });
          } catch (error) {
              console.error('Error updating profil:', error);
              toast({
                  title: 'Update profil',
                  description: 'Gagal Update profil!'
              });
          }
      };
      

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value, files } = e.target;
        
          if (name === "gambar_desa" && files && files.length > 0) {
            setProfil(prevState => ({
              ...prevState,
              [name]: files[0] 
            }));
          } else {
            setProfil(prevState => ({
              ...prevState,
              [name]: value
            }));
          }
        };
        


     const handleCKEditorChange = (editorData: string, field: string) => {
          setProfil(prevState => ({
               ...prevState,
               [field]: editorData
          }));
     };

     const back = () =>{
          navigate('/data-desa');
     }


     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-10">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Edit Profil Desa
                              </div>
                              <div className="flex">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRightIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Edit Profil Desa
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6">
                              <div className="pb-4">
                                   <form onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="pl-6 pr-6 pt-6">
                                             <div className="text-[16px] mb-1 mt-2">Nama Desa</div>
                                             <div className="">
                                                  <Input
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       placeholder='nama desa'
                                                       name="nama_desa"
                                                       value={profil?.nama_desa || ''}
                                                       onChange={handleInputChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="pl-6 pr-6 pt-6">
                                             <div className="text-[16px] mb-1 mt-2">Alamat Kantor Desa</div>
                                             <div className="">
                                                  <Input
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       placeholder='alamat '
                                                       name="alamat_kantor"
                                                       value={profil?.alamat_kantor || ''}
                                                       onChange={handleInputChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="pl-6 pr-6 pt-6">
                                             <div className="text-[16px] mb-1 mt-2">Provinsi</div>
                                             <div className="">
                                                  <select onChange={handleProvinsiChange} className='w-full border h-[40px] p-3 rounded bg-[#EDECEC]'>
                                                       <option value="">Pilih Provinsi</option>
                                                       {provinsiList.map((provinsi: Location) => (
                                                            <option key={provinsi.id} value={provinsi.id}>{provinsi.nama}</option>
                                                       ))}
                                                  </select>
                                             </div>
                                        </div>
                                        <div className="pl-6 pr-6 pt-6">
                                             <div className="text-[16px] mb-1 mt-2">Kabupaten</div>
                                             <div className="">
                                                  <select onChange={handleKabupatenChange} className='w-full border h-[40px] p-3 rounded bg-[#EDECEC]'>
                                                       <option value="">Pilih Kabupaten</option>
                                                       {kabupatenList.map((kabupaten: Location) => (
                                                            <option key={kabupaten.id} value={kabupaten.id}>{kabupaten.nama}</option>
                                                       ))}
                                                  </select>
                                             </div>
                                        </div>
                                        <div className="pl-6 pr-6 pt-6">
                                             <div className="text-[16px] mb-1 mt-2">Kecamatan</div>
                                             <div className="">
                                                  <select className='w-full border h-[40px] p-3 rounded bg-[#EDECEC]'>
                                                       <option value="">Pilih Kecamatan</option>
                                                       {kecamatanList.map((kecamatan: Location) => (
                                                            <option key={kecamatan.id} value={kecamatan.id}>{kecamatan.nama}</option>
                                                       ))}
                                                  </select>
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Profil Singkat Desa</div>
                                                  <CKEditor
                                                       editor={ClassicEditor}
                                                       data={profil?.profil_singkat || ''}
                                                       onChange={(_event, editor) => handleCKEditorChange(editor.getData(), 'profil_singkat')}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Visi Desa</div>
                                                  <CKEditor
                                                       editor={ClassicEditor}
                                                       data={profil?.visi_desa || ''}
                                                       onChange={(_event, editor) => handleCKEditorChange(editor.getData(), 'visi_desa')}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Misi Desa</div>
                                                  <CKEditor
                                                       editor={ClassicEditor}
                                                       data={profil?.misi_desa || ''}
                                                       onChange={(_event, editor) => handleCKEditorChange(editor.getData(), 'misi_desa')}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Sejarah Desa</div>
                                                  <CKEditor
                                                       editor={ClassicEditor}
                                                       data={profil?.sejarah_desa || ''}
                                                       onChange={(_event, editor) => handleCKEditorChange(editor.getData(), 'sejarah_desa')}
                                                  />
                                             </div>
                                        </div>
                                        <div className="p-4 text-center text-[16px] font-bold">Letak Geografis Desa</div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Sebelah Utara</div>
                                                  <Input
                                                       type='text'
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       name="batas_utara"
                                                       value={profil?.batas_utara || ''}
                                                       onChange={handleInputChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Sebelah Timur</div>
                                                  <Input
                                                       type='text'
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       name="batas_timur"
                                                       value={profil?.batas_timur || ''}
                                                       onChange={handleInputChange}
                                                  />

                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Sebelah Selatan</div>
                                                  <Input
                                                       type='text'
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       name="batas_selatan"
                                                       value={profil?.batas_selatan || ''}
                                                       onChange={handleInputChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Sebelah Barat</div>
                                                  <Input
                                                       type='text'
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       name="batas_barat"
                                                       value={profil?.batas_barat || ''}
                                                       onChange={handleInputChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <div className="w-full">
                                                  <div className="text-[16px] mb-1 mt-2">Gambar Desa</div>
                                                  <Input
                                                       type='file'
                                                       className=' h-[40px] font-bold bg-[#EDECEC]'
                                                       name="gambar_desa"
                                                       onChange={handleInputChange}
                                                  />
                                             </div>
                                        </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">Gambar Sebelumnya : </div>
                                        <div className="flex items-center mt-2 pl-6 pr-6">
                                             <img src={`https://desa-api.desajanggadolok.id/images/profile/${profil?.gambar_desa}`} alt="" />
                                        </div>
                                        <div className="flex justify-end mt-6 pr-6 mb-10">
                                             <div className="mr-6">
                                                  <button onClick={back} className='text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px]'>
                                                       Batal
                                                  </button>
                                             </div>
                                             <div className="">
                                                  <button type="submit" className='text-white bg-[#0890EA] rounded-[5px] w-[142px] h-[30px]'>
                                                       Simpan
                                                  </button>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     );
}
