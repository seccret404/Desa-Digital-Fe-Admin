import SidebarLayout from '../../../components/layout/SidebarLayout';
import HomeIcon from '../../../components/icon/homeIcon';
import ArrowRightIcon from '../../../components/icon/arrowRightIcon';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../../components/ui/use-toast';
import { useEffect, useState } from 'react';
import { Pemerintah } from '../../../interfaces/pemerintah';
import { addTugas, getPemerintah } from '../../../services/desaServices';
import { Tugas } from '../../../interfaces/jabatan';

export default function TambahTugasWewenang() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [jabatan, setJabatan] = useState<Pemerintah[]>([]);
  const [selectedJabatan, setSelectedJabatan] = useState<Pemerintah | null>(null);
  const [tugas, setTugas] = useState<string>('');
  const [wewenang, setWewenang] = useState<string>('');
  const [fungsi, setFungsi] = useState<string>('');

  useEffect(() => {
    const fetchPemerintah = async () => {
      try {
        const data = await getPemerintah();
        const uniqueJabatan = data.filter((item, index, self) =>
          index === self.findIndex((t) => (
            t.jabatan === item.jabatan
          ))
        );
        setJabatan(uniqueJabatan);
      } catch (error) {
        console.error('Error fetching penduduk:', error);
      }
    };
    fetchPemerintah();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTugasChange = (_event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    setTugas(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleWewenangChange = (_event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    setWewenang(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFungsiChange = (_event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    setFungsi(data);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (selectedJabatan && tugas && fungsi && wewenang) {
        const data: Tugas = {
          jabatan: selectedJabatan.jabatan,
          tugas: tugas,
          fungsi: fungsi,
          wewenang: wewenang,
        };
        await addTugas(data);
        console.log('Penerima added successfully:', data);
        toast({
          title: 'Tugas dan Wewenang',
          description: 'Data berhasil ditambahkan!',
        });
        navigate('/tugas-wewenang');
      } else {
        console.error('Please fill all fields');
      }
    } catch (error) {
      console.error('Error adding penerima:', error);
      toast({
        title: 'Tugas dan Wewenang',
        description: 'Data gagal ditambahkan!',
      });
      navigate('/tugas-wewenang');
    }
  };

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-10">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">
              Form Tambah Tugas Wewenang
            </div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Tambah Tugas Wewenang
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="pb-4">
              <form onSubmit={handleSubmit}>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Jabatan</div>
                  <div>
                    <Autocomplete
                      disablePortal
                      options={jabatan}
                      value={selectedJabatan}
                      getOptionLabel={(option) => option.jabatan}
                      renderInput={(params) => <TextField {...params} label="Pilih Jabatan" />}
                      onChange={(_event, newValue) => setSelectedJabatan(newValue)}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Tugas Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      data={tugas}
                      onChange={handleTugasChange}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Fungsi Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      data={fungsi}
                      onChange={handleFungsiChange}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Wewenang Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      data={wewenang}
                      onChange={handleWewenangChange}
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6 pr-6 mb-10">
                  <div className="mr-6">
                    <button type="button" className="text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px]" onClick={() => navigate('/tugas-wewenang')}>
                      Batal
                    </button>
                  </div>
                  <div>
                    <button type="submit" className="text-white bg-[#0890EA] rounded-[5px] w-[142px] h-[30px]">
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
