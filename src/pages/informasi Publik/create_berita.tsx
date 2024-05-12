import SidebarLayout from '../../components/layout/SidebarLayout'
import { Input } from '../../components/ui/input'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react'
import { addBerita } from '../../services/desaServices'
import { useToast } from '../../components/ui/use-toast'
import { Berita } from '../../interfaces/berita'
export default function TambahBerita() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [berita, setBerita] = useState<Berita>({
    judul_berita: '',
    isi_berita: '',
    cover: '',
    file: '',
    tgl_publikasi: ''
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await addBerita(berita);
      toast({
        title: "Berita",
        description: "Berita berhasil ditambahkan!"
      });
      navigate('/berita');
    } catch (error) {
      console.error('Gagal menambahkan berita:', error);
      toast({
        title: "Berita",
        description: "Gagal menambahkan berita!",
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (_event: any, editor: { getData: () => any }) => {
    const isi_berita = editor.getData();
    setBerita({ ...berita, isi_berita });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (files) {
      setBerita({ ...berita, [name]: files[0] });
    } else {
      setBerita({ ...berita, [name]: value });
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
            <div className="text-[16px]">Form Tambah Agenda</div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRIghtIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">Tambah Berita Desa</div>
            </div>
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
                    value={berita.judul_berita}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="">Isi Berita</div>
                  <CKEditor
                    editor={ClassicEditor}
                    onChange={handleEditorChange}
                    data={berita.isi_berita}
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
                    onChange={(e) => setBerita({ ...berita, cover: e.target.files ? e.target.files[0] : '' })}

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
                    name="file"
                    onChange={(e) => setBerita({ ...berita, file: e.target.files ? e.target.files[0] : '' })}

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
