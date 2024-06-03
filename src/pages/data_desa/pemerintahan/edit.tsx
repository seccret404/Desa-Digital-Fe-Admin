import React, { useState, useEffect } from 'react';
import SidebarLayout from '../../../components/layout/SidebarLayout';
import { Input } from '../../../components/ui/input';
import HomeIcon from '../../../components/icon/homeIcon';
import ArrowRightIcon from '../../../components/icon/arrowRightIcon';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getPenduduk, getPemerintahById, updatePemerintah } from '../../../services/desaServices';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';
import { useToast } from '../../../components/ui/use-toast';
import { PendudukDesa } from '../../../interfaces/penduduk';

export default function EditPemerintah() {
  const [, setIsLoggedIn] = useState(false);
  const { id } = useParams();
  const [pendudukList, setPendudukList] = useState<PendudukDesa[]>([]);
  const [selectedPenduduk, setSelectedPenduduk] = useState<PendudukDesa | null>(null);

  const [selectedJabatan, setSelectedJabatan] = useState('');
  const [tanggalMulai, setTanggalMulai] = useState<Date>(new Date());
  const [tanggalSelesai, setTanggalSelesai] = useState<Date>(new Date());
  const [profil, setProfil] = useState<File | string>('');
  const { toast } = useToast();

  useEffect(() => {
    const fetchPenduduk = async () => {
      try {
        const pendudukData = await getPenduduk();
        setPendudukList(pendudukData);
      } catch (error) {
        console.error('Error fetching penduduk:', error);
      }
    };

    fetchPenduduk();
  }, []);

  useEffect(() => {
    const fetchPemerintahData = async () => {
      try {
        if (!id) return;
        const pemerintahData = await getPemerintahById(id);
        setSelectedPenduduk(pemerintahData as unknown as PendudukDesa);
        setSelectedJabatan(pemerintahData.jabatan);
        setTanggalMulai(new Date(pemerintahData.tahun_mulai));
        setTanggalSelesai(new Date(pemerintahData.tahun_selesai));
        setProfil(pemerintahData.profil);
      } catch (error) {
        console.error('Error fetching pemerintah:', error);
      }
    };

    fetchPemerintahData();
  }, [id]);

  const jabatanOptions = [
    'Kepala Desa', 'Sekretaris Desa', 'Bendahara', 'Kaur Umum dan Perencanaan', 
    'Kaur Keuangan', 'Kasi Pemerintahan', 'Kasi Kesejahteraan dan Pelayanan', 
    'Kadus I(Bonanidolok)', 'Kadus II(Lumban Bagas)'
  ];

  const formatDateForBackend = (date: Date): string => {
    const isoString = date.toISOString();
    const [year, month, day] = isoString.split('T')[0].split('-');
    return `${year}-${month}-${day}`;
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfil(e.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!selectedPenduduk || !selectedJabatan || !tanggalMulai || !tanggalSelesai) {
      toast({ title: "Error", description: "Tolong isi semua kolom!" });
      return;
    }
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {
      nama: selectedPenduduk.nama,
      nik: selectedPenduduk.nik,
      jabatan: selectedJabatan,
      tahun_mulai: formatDateForBackend(tanggalMulai),
      tahun_selesai: formatDateForBackend(tanggalSelesai),
    };
  

    if (profil instanceof File) {
      data.profil = profil;
    }
  
    try {
      if (!id) return;
      console.log("Data to be submitted:", data);
      await updatePemerintah(id, data);
      console.log("Data submitted successfully");
      toast({ title: "Success", description: "Data pemerintah berhasil diperbarui!" });
    } catch (error) {
      console.error('Error updating pemerintah:', error);
      toast({ title: "Error", description: "Gagal memperbarui data pemerintah!" });
    }
  };
  

  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-10">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">
              Form Tambah Data Struktur Pemerintah
            </div>
            <div className="flex">
              <HomeIcon color='#0890EA' size={16} />
              <ArrowRightIcon color='#000000' size={10}  />
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Tambah Data Struktur Pemerintah
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <form onSubmit={handleSubmit} className="pb-4">
              <div className="pl-6 pr-6 pt-6">
                <div className="text-[16px] mb-1 mt-2">NIK Anggota</div>
                <Autocomplete
                  disablePortal
                  options={pendudukList}
                  getOptionLabel={(option) => option.nik}
                  value={selectedPenduduk}
                  onChange={(_event, newValue) => setSelectedPenduduk(newValue)}
                  renderInput={(params) => <TextField {...params} label="NIK Anggota" />}
                />
              </div>
              <div className="pl-6 pr-6 pt-6">
                <div className="text-[16px] mb-1 mt-2">Nama Anggota</div>
                <Input
                  className="h-[40px] font-bold bg-[#EDECEC]"
                  placeholder="nama anggota"
                  value={selectedPenduduk ? selectedPenduduk.nama : ''}
                  readOnly
                />
              </div>
              <div className="pl-6 pr-6 pt-6">
                <div className="text-[16px] mb-1 mt-2">Jabatan</div>
                <Select
                  fullWidth
                  labelId="jabatan-label"
                  id="jabatan"
                  value={selectedJabatan}
                  onChange={(event) => setSelectedJabatan(event.target.value)}
                  input={<OutlinedInput label="Jabatan" className="text-black" />}
                >
                  {jabatanOptions.map((jabatan) => (
                    <MenuItem key={jabatan} value={jabatan}>
                      {jabatan}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="pl-6 pr-6 pt-6">
                <div className="text-[16px] mb-1 mt-2">Tanggal Mulai Menjabat</div>
                <Input
                  type="date"
                  className="h-[40px] font-bold bg-[#EDECEC]"
                  value={tanggalMulai.toISOString().split('T')[0]}
                  onChange={(e) => setTanggalMulai(new Date(e.target.value))}
                  name="tanggal_mulai"
                />
              </div>
              <div className="pl-6 pr-6 pt-6">
                <div className="text-[16px] mb-1 mt-2">Tanggal Selesai Menjabat</div>
                <Input
                  type="date"
                  className="h-[40px] font-bold bg-[#EDECEC]"
                  value={tanggalSelesai.toISOString().split('T')[0]}
                  onChange={(e) => setTanggalSelesai(new Date(e.target.value))}
                  name="tanggal_selesai"
                />
              </div>
              <div className="flex items-center mt-2 pl-6 pr-6">
                <div className="w-full">
                  <div className="text-[16px] mb-1 mt-2">Foto Profil Anggota</div>
                  <Input
                    type="file"
                    className="h-[40px] font-bold bg-[#EDECEC]"
                    name="profil"
                    onChange={handleProfileChange}
                    accept="image/*"
                  />
                  {profil && (
                    <><div className="">Profil Sebelumnya</div><img src={`https://desa-api.desajanggadolok.id/images/pemerintah/${profil}`} alt="Images" width={100} height={150} /></>
                  )}
                </div>
              </div>
              <div className="flex justify-end mt-6 pr-6 mb-10">
                <button type="button" className="text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px] mr-6">
                  Batal
                </button>
                <button type="submit" className="text-white bg-[#0890EA] rounded-[5px] w-[142px] h-[30px]">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
