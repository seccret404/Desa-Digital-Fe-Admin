import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { PendudukDesa } from '../../interfaces/penduduk';
import { useEffect, useState } from 'react';
import { getBantuan, getPenduduk, getPenerimaById, updatePenerima } from '../../services/desaServices'; // Update import statement
import SidebarLayout from '../../components/layout/SidebarLayout';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { Input } from '../../components/ui/input';
import Button from '../../components/ui/button';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link, useParams } from 'react-router-dom'; // Add useParams
import { Bantuan } from '../../interfaces/bantuan';
import { Penerima } from '../../interfaces/penerimaBantuan';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../components/ui/use-toast';

export default function EditPenerimaBantuan() {
  const [, setIsLoggedIn] = useState(false);
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedPenduduk, setSelectedPenduduk] = useState<PendudukDesa | null>(null);
  const [pendudukOptions, setPendudukOptions] = useState<PendudukDesa[]>([]);
  const [jenisBantuan, setJenisBantuan] = useState('');
  const [selectedBantuan, setSelectedBantuan] = useState<Bantuan | null>(null);
  const [bantuanOptions, setBantuanOptions] = useState<Bantuan[]>([]);
  const [tglTerima, setTglTerima] = useState<Date | string>(new Date()); 
  const [bentukTerima, setBentukTerima] = useState<string>('');
  const [jumlahTerima, setJumlahTerima] = useState<number | null>(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          return;
        }
        const penerimaData = await getPenerimaById(id);
        const pendudukData = await getPenduduk();
        const bantuanData = await getBantuan();
        setSelectedPenduduk(
          pendudukData.find((penduduk) => penduduk.id === penerimaData.id_penduduk) || null
        );
        setPendudukOptions(pendudukData);
        setJenisBantuan(penerimaData.jenis_bantuan);
        setSelectedBantuan(bantuanData.find((bantuan) => bantuan.id === penerimaData.id_bantuan) || null);
        setBantuanOptions(bantuanData);
        setTglTerima(
          penerimaData.tgl_terima 
            ? formatDateForBackend(new Date(penerimaData.tgl_terima)) 
            : penerimaData.tgl_terima ?? ''
        );
        setBentukTerima(penerimaData.bentuk_terima);
        setJumlahTerima(parseInt(penerimaData.jumlah_terima));
        setStatus(penerimaData.status_bantuan);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        // Handle error
      }
    };
    

    fetchData();
  }, [id]);

  const handleJenisBantuanChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJenisBantuan(event.target.value);
    setSelectedBantuan(null);
  };

  const handleTanggalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(event.target.value);
    const formattedDate = formatDateForBackend(selectedDate);
    setTglTerima(formattedDate); 
  };
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (_event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    setBentukTerima(data);
  };

  const handleSubmit = async () => {
  try {
    if (!id) {
      return;
    }
    if (
      selectedPenduduk &&
      selectedBantuan &&
      status &&
      jenisBantuan &&
      tglTerima &&
      bentukTerima &&
      jumlahTerima !== null
    ) {
      const data: Penerima = {
        id_penduduk: selectedPenduduk?.id ?? '',
        id_bantuan: selectedBantuan?.id ?? '',
        nama_penerima: selectedPenduduk?.nama ?? '',
        jenis_bantuan: jenisBantuan,
        nama_bantuan: selectedBantuan?.nama_bantuan ?? '',
        status_bantuan: status,
        tgl_terima: tglTerima?.toLocaleString(),
        jumlah_terima: jumlahTerima.toString(),
        bentuk_terima: bentukTerima,
        
      };
      await updatePenerima(id, data); // Update penerima data
      toast({
        title: "Penerima Bantuan",
        description: "Penerima berhasil diperbarui!"
      });
      console.log(data)
      navigate('/bantuan');
    } else {
      console.error('Please fill all fields');
    }
  } catch (error) {
    console.error('Error updating penerima:', error);
    toast({
      title: "Penerima Bantuan",
      description: "Penerima Gagal diperbarui!"
    });
    navigate('/pengumuman');
  }
};

  const formatDateForBackend = (date: Date): string => {
    const isoString = date.toISOString();
    const [year, month, day] = isoString.split('T')[0].split('-');
    return `${year}-${month}-${day}`;
  };


  if (loading) {
    return <div>Loading...</div>;
  }



  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Form Edit Data Penerima Bantuan</div>
            <div className="flex ">
              <div className="flex">
                <HomeIcon color="#0890EA" size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color="#000000" size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">Edit Data Penerima Bantuan</div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-4">
              <div className="p-6">
                <div className="">
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Nama Penerima</div>
                    <div className="">
                      <Autocomplete
                        disablePortal
                        options={pendudukOptions}
                        getOptionLabel={(option) => option.nama}
                        value={selectedPenduduk}
                        onChange={(_event, newValue) => {
                          setSelectedPenduduk(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Nama Penerima" />}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Jenis Bantuan</div>
                    <div className="">
                      <select onChange={handleJenisBantuanChange} value={jenisBantuan} className="h-[40px] font-bold w-full border rounded" >
                        <option value="" disabled>Pilih jenis bantuan</option>
                        <option value="Pemerintah">Pemerintah</option>
                        <option value="Desa">Desa</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Nama Bantuan</div>
                    <div className="">
                      <Autocomplete
                        disablePortal
                        options={bantuanOptions.filter(bantuan => bantuan.jenis_bantuan === jenisBantuan)}
                        getOptionLabel={(option) => option.nama_bantuan}
                        value={selectedBantuan}
                        onChange={(_event, newValue) => {
                          setSelectedBantuan(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="Nama Bantuan" />}
                        isOptionEqualToValue={(option, value) => option?.nama_bantuan === value?.nama_bantuan} // Custom equality test
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Tanggal Mulai Diterima</div>
                    <div className="">
                    <Input type="date" className="h-[40px] font-bold" value={tglTerima instanceof Date ? formatDateForBackend(tglTerima) : tglTerima} onChange={handleTanggalChange} />

                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Status Penerima Bantuan</div>
                    <div className="flex">
                      <label className="mr-4">
                        <input
                          type="radio"
                          value="Lanjut"
                          checked={status === 'Lanjut'}
                          onChange={() => setStatus('Lanjut')}
                        />
                        Lanjut
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Berhenti"
                          checked={status === 'Berhenti'}
                          onChange={() => setStatus('Berhenti')}
                        />
                        Berhenti
                      </label>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Bentuk Terima</div>
                    <div className="">
                      <CKEditor
                        editor={ClassicEditor}
                        onChange={handleEditorChange}
                        data={bentukTerima}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Total Menerima Bantuan</div>
                    <div className="">
                      <TextField
                        id="outlined-number"
                        label="Total Penerimaan"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        value={jumlahTerima}
                        onChange={(event) => setJumlahTerima(parseInt(event.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="mr-8">
                  <Button bgColor="#F61616" rounded={5} width={128} height={34} color="white">
                    <Link to={'/bantuan'}>Kembali</Link>
                  </Button>
                </div>
                <div className="">
                  <button onClick={handleSubmit} className='bg-[#0890EA] rounded-[5px] w-[128px] h-[34px] text-white'>
                    Simpan Perubahan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}


