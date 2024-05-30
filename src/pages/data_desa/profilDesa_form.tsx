import React, { useState, useEffect } from 'react';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Profil } from '../../interfaces/profil';
import { addProfil } from '../../services/desaServices';
import { useToast } from '../../components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface Location {
  id: string;
  nama: string;
}

export default function ProfilForm() {
  const [, setIsLoggedIn] = useState(false);
  const [provinsiList, setProvinsiList] = useState<Location[]>([]);
  const [kabupatenList, setKabupatenList] = useState<Location[]>([]);
  const [kecamatanList, setKecamatanList] = useState<Location[]>([]);
  const { toast } = useToast();
  const navigate = useNavigate();
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
    gambar_desa: '',
    batas_barat: '',
    batas_timur: '',
    batas_utara: '',
    batas_selatan: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await addProfil(profil);
      toast({
        title: "Berita",
        description: "Berita berhasil ditambahkan!"
      });
      navigate('/data-desa');
    } catch (error) {
      console.error('Gagal menambahkan berita:', error);
      toast({
        title: "Berita",
        description: "Gagal menambahkan berita!",
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (field: string) => (_event: any, editor: { getData: () => any }) => {
    const data = editor.getData();
    setProfil({ ...profil, [field]: data });
  }

  useEffect(() => {
    // Fetch provinsi data
    fetch('https://ibnux.github.io/data-indonesia/provinsi.json')
      .then(response => response.json())
      .then(data => setProvinsiList(data));
  }, []);

  const handleProvinsiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinsiId = e.target.value;
    // Fetch kabupaten data based on selected provinsi
    fetch(`https://ibnux.github.io/data-indonesia/kabupaten/${provinsiId}.json`)
      .then(response => response.json())
      .then(data => setKabupatenList(data));
    
    // Set provinsi to profil
    setProfil({...profil, provinsi: e.target.selectedOptions[0].text });
  };

  const handleKabupatenChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const kabupatenId = e.target.value;
    // Fetch kecamatan data based on selected kabupaten
    fetch(`https://ibnux.github.io/data-indonesia/kecamatan/${kabupatenId}.json`)
      .then(response => response.json())
      .then(data => setKecamatanList(data));
    
    // Set kabupaten to profil
    setProfil({...profil, kabupaten: e.target.selectedOptions[0].text });
  };

  const handleKecamatanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Set kecamatan to profil
    setProfil({...profil, kecamatan: e.target.selectedOptions[0].text });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (files) {
      setProfil({ ...profil, [name]: files[0] });
    } else {
      setProfil({ ...profil, [name]: value });
    }
  };

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
              <form onSubmit={handleSubmit}>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Nama Desa</div>
                  <div className="">
                    <Input
                      className=' h-[40px] font-bold bg-[#EDECEC]'
                      placeholder='nama desa'
                      name="nama_desa"
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    <select onChange={handleKecamatanChange} className='w-full border h-[40px] p-3 rounded bg-[#EDECEC]'>
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
                      onChange={handleEditorChange('profil_singkat')}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Visi Desa</div>
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={handleEditorChange('visi_desa')}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Misi Desa</div>
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={handleEditorChange('misi_desa')}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Sejarah Desa</div>
                    <CKEditor
                      editor={ClassicEditor}
                      onChange={handleEditorChange('sejarah_desa')}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-6 pr-6 mb-10">
                  <div className="mr-6">
                    <button className='text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px]'>
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
  )
}
