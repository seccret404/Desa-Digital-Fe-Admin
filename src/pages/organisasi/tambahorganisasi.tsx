import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import HomeIcon from '../../components/icon/homeIcon';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { addOrganisasi } from '../../services/desaServices';
import { useToast } from '../../components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
export default function AddOrganisasi() {
  const [, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [singkatan, setSingkatan] = useState('');
  const [alamat, setAlamat] = useState('');
  const [tahun, setTahun] = useState(new Date());
  const [ketua, setKetua] = useState('');
  const [wakil, setWakil] = useState('');
  const [sekretaris, setSekretaris] = useState('');
  const [bendahara, setBendahara] = useState('');
  const [logo, setLogo] = useState<File | string>('');
  const [anggota, setAnggota] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const formatDateForBackend = (date: Date): string => {
    const isoString = date.toISOString();
    const parts = isoString.split('T')[0].split('-');
    const [year, month, day] = parts;
    return `${year}-${month}-${day}`;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (_event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    setDeskripsi(data);
    console.log("Editor data:", data); // Log untuk memastikan data editor benar
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = {
      nama_lembaga: nama,
      singkatan: singkatan,
      alamat_organisasi: alamat,
      tahun_berdiri: formatDateForBackend(tahun),
      ketua: ketua,
      wakil_ketua: wakil,
      sekretaris: sekretaris,
      bendahara: bendahara,
      logo_organisasi: logo,
      jumlah_anggota: anggota,
      deskripsi: deskripsi // Pastikan deskripsi tidak kosong atau NULL
    };

    console.log("Data to be submitted:", data); // Log untuk memastikan semua data benar

    try {
      await addOrganisasi(data);
      console.log("Data submitted successfully");
      toast({ title: "Berhasil", description: "Data organisasi berhasil ditambahkan!" });
      navigate('/organisasi')
    } catch (error) {
      console.error('Error adding organisasi:', error);
      toast({ title: "Gagal", description: "Gagal menambahkan data organisasi!" });
    }
  };

  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">
              Form Tambah Data Organisasi
            </div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Tambah Data Organisasi
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-4">
              <div className="p-6 flex justify-between">
                <div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Nama Organisasi
                    </div>
                    <div>
                      <Input
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Nama organisasi' />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Singkatan/Inisial
                    </div>
                    <div>
                      <Input
                        value={singkatan}
                        onChange={(e) => setSingkatan(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Singkatan' />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2">
                      Alamat Organisasi
                    </div>
                    <div>
                      <Input
                        value={alamat}
                        onChange={(e) => setAlamat(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Alamat' />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Logo Organisasi
                    </div>
                    <div className="relative">
                      <Input type='file'
                        onChange={(e) => setLogo(e.target.files ? e.target.files[0] : '')}
                        className='w-[330px] h-[40px]' id="logo" placeholder='Pilih file' readOnly />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Jumlah Anggota
                    </div>
                    <div>
                      <Input 
                        type='number'
                        value={anggota}
                        onChange={(e) => setAnggota(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Jumlah anggota' />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Tahun Berdiri
                    </div>
                    <div>
                      <Input
                        value={tahun.toISOString().split('T')[0]}
                        onChange={(e) => setTahun(new Date(e.target.value))}
                        className='w-[416px] h-[40px] font-bold' type='date' />
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Nama Ketua
                    </div>
                    <div>
                      <Input
                        value={ketua}
                        onChange={(e) => setKetua(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Nama ketua' />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Nama Wakil Ketua
                    </div>
                    <div>
                      <Input
                        value={wakil}
                        onChange={(e) => setWakil(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Nama wakil ketua' />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Nama Sekretaris
                    </div>
                    <div>
                      <Input
                        value={sekretaris}
                        onChange={(e) => setSekretaris(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Nama sekretaris' />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">
                      Nama Bendahara
                    </div>
                    <div>
                      <Input
                        value={bendahara}
                        onChange={(e) => setBendahara(e.target.value)}
                        className='w-[416px] h-[40px] font-bold' placeholder='Nama bendahara' />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6 mb-8">
                <div className="w-full">
                  <div>Deskripsi</div>
                  <CKEditor
                    editor={ClassicEditor}
                    data={deskripsi}
                    onChange={handleEditorChange}
                  />
                </div>
              </div>
              <div className="flex justify-end pr-6">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
