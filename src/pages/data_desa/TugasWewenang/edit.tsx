import React, { useEffect, useState } from 'react';
import SidebarLayout from '../../../components/layout/SidebarLayout';
import HomeIcon from '../../../components/icon/homeIcon';
import ArrowRightIcon from '../../../components/icon/arrowRightIcon';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '../../../components/ui/use-toast';
import { getTugasById, updateTugas,  getPemerintah } from '../../../services/desaServices';
import { Pemerintah } from '../../../interfaces/pemerintah';
import { Tugas } from '../../../interfaces/jabatan';

export default function EditTugasWewenang() {
  const [, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { id } = useParams(); 
  const [jabatan, setJabatan] = useState<Pemerintah[]>([]);
  const [selectedJabatan, setSelectedJabatan] = useState<Pemerintah | null>(null);
  const [tugas, setTugas] = useState<string>('');
  const [wewenang, setWewenang] = useState<string>('');
  const [fungsi, setFungsi] = useState<string>('');
  const [tugasId, setTugasId] = useState<string>('');

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

  useEffect(() => {
    const fetchTugasData = async () => {
      try {
        if (!id) {
          return;
        }
        const tugasData = await getTugasById(id); 
        setTugasId(tugasData.id || ''); 
        setTugas(tugasData.tugas);
        setWewenang(tugasData.wewenang);
        setFungsi(tugasData.fungsi);
        setSelectedJabatan(jabatan.find((item) => item.jabatan === tugasData.jabatan) || null);
      } catch (error) {
        console.error('Error fetching tugas:', error);
      }
    };
    fetchTugasData();
  }, [id, jabatan]); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedJabatan || !tugas || !wewenang || !fungsi || !tugasId) {
      toast({ title: "Error", description: "Tolong isi semua kolom!" });
      return;
    }
    try {
      const data: Tugas = {
        id: tugasId, 
        jabatan: selectedJabatan.jabatan,
        tugas: tugas,
        fungsi: fungsi,
        wewenang: wewenang,
      };
      await updateTugas(tugasId, data); 
      toast({
        title: 'Tugas dan Wewenang',
        description: 'Data berhasil diperbarui!',
      });
      navigate('/tugas-wewenang');
    } catch (error) {
      console.error('Error updating tugas:', error);
      toast({
        title: 'Tugas dan Wewenang',
        description: 'Gagal memperbarui data tugas!',
      });
    }
  };

  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-10">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">
              Form Edit Tugas Wewenang
            </div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Edit Tugas Wewenang
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
                      onChange={(_event, editor) => setTugas(editor.getData())}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Fungsi Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      data={fungsi}
                      onChange={(_event, editor) => setFungsi(editor.getData())}
                    />
                
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="text-[16px] mb-1 mt-2">Wewenang Jabatan</div>
                  <CKEditor
                    editor={ClassicEditor}
                    data={wewenang}
                    onChange={(_event, editor) => setWewenang(editor.getData())}
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


