import React, { useState, useEffect } from 'react';
import SidebarLayout from '../../../components/layout/SidebarLayout';
import { Input } from '../../../components/ui/input';
import HomeIcon from '../../../components/icon/homeIcon';
import ArrowRightIcon from '../../../components/icon/arrowRightIcon';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { PendudukDesa } from '../../../interfaces/penduduk';
import { getPenduduk, addPemerintah } from '../../../services/desaServices';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useToast } from '../../../components/ui/use-toast';

export default function TambahPemerintah() {
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

  const jabatanOptions = ['Kepala Desa', 'Sekretaris', 'Bendahara'];

  const formatDateForBackend = (date: Date): string => {
    const isoString = date.toISOString();
    const parts = isoString.split('T')[0].split('-');
    const [year, month, day] = parts;
    return `${year}-${month}-${day}`;
  };

  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    if (!selectedPenduduk || !profil || !selectedJabatan || !tanggalMulai || !tanggalSelesai) {
      toast({ title: "Error", description: "Tolong isi semua kolom!"});
      return;
    }
  
 
  
    const data = {
      nama: selectedPenduduk.nama,
      nik: selectedPenduduk.nik,
      jabatan: selectedJabatan,
      tahun_mulai: formatDateForBackend(tanggalMulai),
      tahun_selesai: formatDateForBackend(tanggalSelesai),
      profil: profil,
    };
  
    try {
      console.log("Data to be submitted:", data); // Log the data before sending
      await addPemerintah(data);
      console.log("Data submitted successfully");
      toast({ title: "Success", description: "Data pemerintah berhasil ditambahkan!" });
    } catch (error) {
      console.error('Error adding pemerintah:', error);
      toast({ title: "Error", description: "Gagal menambahkan data pemerintah!" });
    }
  };
  

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-10">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">
              Form Tambah Jabatan Pemerintah
            </div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Tambah Jabatan
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="pb-4">
              <form onSubmit={handleSubmit}>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">NIK Anggota</div>
                  <div className="">
                    <Autocomplete
                      disablePortal
                      options={pendudukList}
                      getOptionLabel={(option) => option.nik}
                      onChange={(_event, newValue) => {
                        setSelectedPenduduk(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} label="NIK Anggota" />}
                    />
                  </div>
                </div>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Nama Anggota</div>
                  <div className="">
                    <Input
                      className=' h-[40px] font-bold bg-[#EDECEC]'
                      placeholder='nama anggota'
                      value={selectedPenduduk ? selectedPenduduk.nama : ''}
                      readOnly
                    />
                  </div>
                </div>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Jabatan</div>
                  <div className="">
                    <Select
                      fullWidth={true}
                      labelId="jabatan-label"
                      id="jabatan"

                      value={selectedJabatan}
                      onChange={(event) => setSelectedJabatan(event.target.value)}
                      input={<OutlinedInput label="Jabatan" className='text-black' />}
                    >
                      {jabatanOptions.map((jabatan) => (
                        <MenuItem key={jabatan} value={jabatan}>
                          {jabatan}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Tanggal Mulai Menjabat</div>
                  <div className="">
                    <Input
                      type='date'
                      className=' h-[40px] font-bold bg-[#EDECEC]'
                      value={tanggalMulai.toISOString().split('T')[0]}
                                                            onChange={(e) => setTanggalMulai(new Date(e.target.value))}
                      name="tanggal_mulai"
                    />
                  </div>
                </div>
                <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Tanggal Selesai Menjabat</div>
                  <div className="">
                    <Input
                      type='date'
                      className=' h-[40px] font-bold bg-[#EDECEC]'
                      value={tanggalSelesai.toISOString().split('T')[0]}
                                                            onChange={(e) => setTanggalSelesai(new Date(e.target.value))}
                      name="tanggal_selesai"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Foto Profil Anggota</div>
                    <Input
                      type='file'
                      className=' h-[40px] font-bold bg-[#EDECEC]'
                      name="profil"
                      onChange={(e) => setProfil(e.target.files ? e.target.files[0] : "null")}
                      accept="image/*" />
                  </div>
                </div>
                <div className="flex justify-end mt-6 pr-6 mb-10">
                  <div className="mr-6">
                    <button type="button" className='text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px]'>
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
  );
}
