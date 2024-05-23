import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from '../../../components/layout/SidebarLayout';
import { Input } from '../../../components/ui/input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { getPengumumanById, updatePengumuman } from '../../../services/desaServices';
import { Pengumuman } from '../../../interfaces/pengumuman';
import { useToast } from '../../../components/ui/use-toast';


export default function EditPengumuman() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [judulPengumuman, setJudul] = useState('');
  const [deskripsiPengumuman, setDeskripsi] = useState('');
  const [cover_pengumuman, setCover] = useState<File | null>(null);
  const [file_pengumuman, setFile] = useState<File | null>(null);
  const { toast } = useToast();
  useEffect(() => {
    const fetchPengumuman = async () => {
      try {
        if(!id){
          return;
        }
        const berita = await getPengumumanById(id);
        setJudul(berita.judul_pengumuman);
        setDeskripsi(berita.deskripsi_pengumuman);
       
        const coverFile = berita.cover_pengumuman instanceof File ? berita.cover_pengumuman : null;
        setCover(coverFile);
  
        const fileFile = berita.file_pengumuman instanceof File ? berita.file_pengumuman : null;
        setFile(fileFile);
      } catch (error:unknown) {
        console.error('Error fetching berita:', error);
      }
    };

    fetchPengumuman();
  }, [id]);

  const back = () => {
    navigate('/pengumuman');
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
     e.preventDefault();
   
     try {
      if(!id){
        return;
      }
      const updatedData: Pengumuman = {
        judul_pengumuman: judulPengumuman,
        deskripsi_pengumuman: deskripsiPengumuman,
        cover_pengumuman: cover_pengumuman ?? '', 
        file_pengumuman: file_pengumuman ?? '',
        tgl_publikasi: '' 
      };
   
   
       await updatePengumuman(id, updatedData);
       navigate('/pengumuman');
       toast({
        title: "Pengumuman",
        description: 'Pengumuman Berhasil di Update'
    });
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     } catch (error:any) {
       console.error('Error updating berita:', error.message);
       toast({
        title: "Pengumuman",
        description: 'Pengumuman Gagal di Update'
    });
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
                    onChange={(_event, editor) => {
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
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        setCover(file);
                      }
                    }}
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
                    onChange={(e) => {
                      const file = e.target.files?.[0]; 
                      if (file) {
                        setFile(file);
                      }
                    }}
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
