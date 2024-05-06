import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from '../../../components/layout/SidebarLayout';
import { Input } from '../../../components/ui/input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getPengumumanById, updatePengumuman } from '../../../services/desaServices';


export default function EditPengumuman() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [judulPengumuman, setJudul] = useState('');
  const [deskripsiPengumuman, setDeskripsi] = useState('');
  const [cover_pengumuman, setCover] = useState<File | null>(null);
  const [file_pengumuman, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        const berita = await getPengumumanById(id);
        setJudul(berita.judul_pengumuman);
        setDeskripsi(berita.deskripsi_pengumuman);
        // Assuming cover and file are strings containing the file names
        setCover(new File([], berita.cover_pengumuman));
        setFile(new File([], berita.file_pengumuman));
      } catch (error) {
        console.error('Error fetching berita:', error.message);
      }
    };

    fetchPengumuman();
  }, [id]);

  const back = () => {
    navigate('/pengumuman');
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
   
     try {
       let updatedData = {
         judul_berita: judulPengumuman,
         isi_berita: deskripsiPengumuman,
       };
   
       // Check if cover is changed
       if (cover_pengumuman) {
         updatedData = {
           ...updatedData,
           cover: cover_pengumuman,
         };
       }
   
       // Check if file is changed
       if (file_pengumuman) {
         updatedData = {
           ...updatedData,
           file: file_pengumuman,
         };
       }
   
       await updatePengumuman(id, updatedData);
       navigate('/pengumuman');
     } catch (error) {
       console.error('Error updating berita:', error.message);
     }
   };
   
   

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Form Edit Berita</div>
          </div>
          <div className="bg-white rounded-[15px] mt-6 ">
            <form onSubmit={handleSubmit}>
              <div className="pl-6 pr-6 pt-6">
                <div className="">Judul Berita</div>
                <div className="">
                  <Input
                    className=' h-[40px] font-bold'
                    placeholder='Judul berita'
                    name="judul_pengumuman"
                    value={judulPengumuman}
                    onChange={(e) => setJudul(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">Isi Berita</div>
                  <CKEditor
                    editor={ClassicEditor}
                    data={deskripsiPengumuman}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setDeskripsi(data);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">Cover</div>
                  <Input
                    type='file'
                    className=' h-[40px] font-bold'
                    name="cover_pengumuman"
                    onChange={(e) => setCover(e.target.files[0])}
                  />
                  {cover_pengumuman && <div className='bg-[#55C0E4] p-2 mt-1 rounded-[5px] text-white'><b>File sebelumnya : </b>{cover_pengumuman.name}</div>}
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">File</div>
                  <Input
                    type='file'
                    className=' h-[40px] font-bold'
                    placeholder='File'
                    name="file_pengumuman"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  {file_pengumuman && <div className='bg-[#55C0E4] p-2 mt-1 rounded-[5px] text-white'><b>File sebelumnya : </b>{file_pengumuman.name}</div>}
                </div>
              </div>
              <div className="flex justify-end mt-6">
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
    </SidebarLayout>
  )
}
