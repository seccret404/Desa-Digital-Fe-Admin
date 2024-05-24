import SidebarLayout from '../../../components/layout/SidebarLayout'
import { Input } from '../../../components/ui/input'
import HomeIcon from '../../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../../components/icon/arrowRightIcon'
import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react'
import { useToast } from '../../../components/ui/use-toast'
import { Pengumuman } from '../../../interfaces/pengumuman'
import { addPengumuman } from '../../../services/desaServices'
export default function TambahPengumuman() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pengumuman, setPengumuman] = useState<Pengumuman>({
    judul_pengumuman: '',
    deskripsi_pengumuman: '',
    cover_pengumuman: '',
    file_pengumuman: '',
    tgl_publikasi: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      !pengumuman.judul_pengumuman ||
      !pengumuman.deskripsi_pengumuman ||
      !pengumuman.cover_pengumuman ||
      !pengumuman.file_pengumuman 
      // !pengumuman.tgl_publikasiz
    ) {
      toast({ title: "Error", description: "Tolong isi semua kolom!" });
      return;
    }

    try {
      await addPengumuman(pengumuman);
      console.log(pengumuman);
      toast({
        title: "Pengumuman",
        description: "Pengumuman berhasil ditambahkan!"
      });
      navigate('/pengumuman');
    } catch (error) {
      console.error('Gagal menambahkan pengumuman:', error);
      toast({
        title: "Pengumuman",
        description: "Gagal menambahkan pengumuman!",
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (_event: any, editor: { getData: () => any }) => {
    const deskripsi_pengumuman = editor.getData();
    setPengumuman({ ...pengumuman, deskripsi_pengumuman });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (files) {
      setPengumuman({ ...pengumuman, [name]: files[0] });
    } else {
     setPengumuman({ ...pengumuman, [name]: value });
    }
  };


  const back = () => {
    navigate('/berita');
  }

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Form Tambah Pengumuman</div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRIghtIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">Tambah Pengumuman Desa</div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6 ">
            <form onSubmit={handleSubmit}>
              <div className="pl-6 pr-6 pt-6">
                <div className="">Judul Pengumuman</div>
                <div className="">
                  <Input
                    className=' h-[40px] font-bold'
                    placeholder='Judul Pengumuman'
                    name="judul_pengumuman"
                    value={pengumuman.judul_pengumuman}
                    onChange={handleChange}
                    
                  />
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">Isi Pengumuman</div>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={handleEditorChange}
                    data={pengumuman.deskripsi_pengumuman}
                    
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
                    onChange={(e) => setPengumuman({ ...pengumuman, cover_pengumuman: e.target.files ? e.target.files[0] : '' })}

                  />
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
                    onChange={(e) => setPengumuman({ ...pengumuman, file_pengumuman: e.target.files ? e.target.files[0] : '' })}

                  />
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
