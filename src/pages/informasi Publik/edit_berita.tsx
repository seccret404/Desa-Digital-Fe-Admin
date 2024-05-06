import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getBeritaById, updateBerita } from '../../services/desaServices';

export default function EditBerita() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [judulBerita, setJudulBerita] = useState('');
  const [isiBerita, setIsiBerita] = useState('');
  const [cover, setCover] = useState<File | null>(null);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const berita = await getBeritaById(id);
        setJudulBerita(berita.judul_berita);
        setIsiBerita(berita.isi_berita);
        // Assuming cover and file are strings containing the file names
        setCover(new File([], berita.cover));
        setFile(new File([], berita.file));
      } catch (error) {
        console.error('Error fetching berita:', error.message);
      }
    };

    fetchBerita();
  }, [id]);

  const back = () => {
    navigate('/berita');
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
   
     try {
       let updatedData = {
         judul_berita: judulBerita,
         isi_berita: isiBerita,
       };
   
       // Check if cover is changed
       if (cover) {
         updatedData = {
           ...updatedData,
           cover: cover,
         };
       }
   
       // Check if file is changed
       if (file) {
         updatedData = {
           ...updatedData,
           file: file,
         };
       }
   
       await updateBerita(id, updatedData);
       navigate('/berita');
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
                    name="judul_berita"
                    value={judulBerita}
                    onChange={(e) => setJudulBerita(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">Isi Berita</div>
                  <CKEditor
                    editor={ClassicEditor}
                    data={isiBerita}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      setIsiBerita(data);
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
                    name="cover"
                    onChange={(e) => setCover(e.target.files[0])}
                  />
                  {cover && <div className='bg-[#55C0E4] p-2 mt-1 rounded-[5px] text-white'><b>File sebelumnya : </b>{cover.name}</div>}
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">File</div>
                  <Input
                    type='file'
                    className=' h-[40px] font-bold'
                    placeholder='File'
                    name="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  {file && <div className='bg-[#55C0E4] p-2 mt-1 rounded-[5px] text-white'><b>File sebelumnya : </b>{file.name}</div>}
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
