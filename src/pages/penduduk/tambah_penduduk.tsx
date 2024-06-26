import SidebarLayout from '../../components/layout/SidebarLayout'
import HomeIcon from '../../components/icon/homeIcon'
import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import { Input } from '../../components/ui/input'
import { addPenduduk, getDusun, getPenduduk } from '../../services/desaServices'
import { SetStateAction, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../../components/ui/use-toast'
import { Dusun } from '../../interfaces/dusun'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function TambahPenduduk() {
    const [, setIsLoggedIn] = useState(false);
    const [nik, setNik] = useState('');
    const [nama, setNama] = useState('');
    const [agama, setAgama] = useState('');
    const [alamat, setAlamat] = useState('');
    const [tanggalLahir, setTanggalLahir] = useState<Date>(new Date());
    const [tempatLahir, setTempatLahir] = useState('');
    const [jenisKelamin, setJenisKelamin] = useState('');
    const [pekerjaan, setPekerjaan] = useState('');
    const [kewarganegaraan, setKewarganegaraan] = useState('');
    const [pendidikan_terakhir, setPendidikan] = useState('');
    const [statusHidup, setStatusHidup] = useState('');
    const [statusPerkawinan, setStatusPerkawinan] = useState('');
    const [noKK, setNoKK] = useState('');
    const [dusun, setDusun] = useState<Dusun | null>(null);
    const [dusunOptions, setDusunOptions] = useState<Dusun[]>([]);
    const [existingNiks, setExistingNiks] = useState<string[]>([]);
    const { toast } = useToast();
    const navigate = useNavigate();

    const formatDateForBackend = (date: Date): string => {
        const isoString = date.toISOString();
        const parts = isoString.split('T')[0].split('-');
        const [year, month, day] = parts;
        return `${year}-${month}-${day}`;
    };

 
    useEffect(() => {
        const fetchDusunData = async () => {
            try {
                const dusun = await getDusun();
                setDusunOptions(dusun);
                const penduduk = await getPenduduk();
                const existingNiks = penduduk.map((p: { nik: string }) => p.nik);
                setExistingNiks(existingNiks);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDusunData();
    }, []);

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        if (nik.length !== 16) {
            toast({ title: "Error", description: "NIK harus 16 karakter!" });
            return;
        }
        if (existingNiks.includes(nik)) {
            toast({ title: "Error", description: "NIK sudah ada, gunakan NIK yang berbeda!" });
            return;
        }
        const today = new Date();
        const inputTanggalLahir = new Date(tanggalLahir);

        if (inputTanggalLahir > today) {
            toast({
                title: "Data Penduduk",
                description: 'Tanggal lahir tidak boleh melebihi tanggal sekarang'
            });
            return;
        }
        if (!nik || !nama || !agama || !alamat || !tanggalLahir || !tempatLahir ||
            !jenisKelamin || !pekerjaan || !kewarganegaraan || !pendidikan_terakhir ||
            !statusHidup || !statusPerkawinan || !noKK || !dusun || !dusunOptions
        ) {
            toast({ title: "Error", description: "Tolong isi semua kolom!" });
            return;
        }

        const pendudukData = {

            nik: nik,
            nama: nama,
            agama: agama,
            alamat: alamat,
            tanggal_lahir: formatDateForBackend(tanggalLahir),
            tempat_lahir: tempatLahir,
            jenis_kelamin: jenisKelamin,
            pekerjaan: pekerjaan,
            kewarganegaraan: kewarganegaraan,
            pendidikan_terakhir: pendidikan_terakhir,
            status_hidup: statusHidup,
            status_perkawinan: statusPerkawinan,
            dusun: dusun ? dusun.nama_dusun : '',
            no_kk: noKK,
            id_dusun: dusun && dusun.id ? dusun.id.toString() : ''
        };

        try {
            await addPenduduk(pendudukData);
            toast({
                title: "Data Penduduk",
                description: "Data berhasil Ditambah!"
            });
            console.log("Sending data to server:", pendudukData);
            navigate('/data-penduduk');
        } catch (error) {
            console.error('Failed to add agenda:', error);
            toast({
                title: "Data Penduduk",
                description: "Data Gagal Ditambah!",
            });
        }
    };

    const handleChangeAgama = (event: { target: { value: SetStateAction<string> } }) => {
        setAgama(event.target.value);
    };

    const handleChangeSh = (event: { target: { value: SetStateAction<string> } }) => {
        setStatusHidup(event.target.value);
    }

    const handleKawin = (event: { target: { value: SetStateAction<string> } }) => {
        setStatusPerkawinan(event.target.value);
    }

    const handleWarga = (event: { target: { value: SetStateAction<string> } }) => {
        setKewarganegaraan(event.target.value);
    }

    const handleJk = (event: { target: { value: SetStateAction<string> } }) => {
        setJenisKelamin(event.target.value);
    }

    const handlePendidikan = (event: { target: { value: SetStateAction<string> } }) => {
        setPendidikan(event.target.value);
    }
    const handlePekerjaan = (event: { target: { value: SetStateAction<string> } }) => {
        setPekerjaan(event.target.value);
    }
    return (
        <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
            <div className="bg-[#] rounded-[5px]">
                <div className="p-8">
                    <div className="bg-white flex justify-between p-2 rounded-[7px]">
                        <div className="text-[16px]">
                            Form Tambah Data Penduduk
                        </div>
                        <div className="flex ">
                            <div className="flex">
                                <HomeIcon color='#0890EA' size={16} />
                            </div>
                            <div className="ml-4 flex">
                                <ArrowRIghtIcon color='#000000' size={10} />
                            </div>
                            <div className="text-[#D9D9D9] text-[16px] ml-4">
                                Tambah Data Penduduk
                            </div>
                        </div>
                    </div>
                    <div className="bg-white mt-4 rounded-[5px]">
                        <form action="">
                            <div className="p-6 flex justify-between">
                                <div className="">
                                    <div className="mt-4">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Nama Lengkap
                                        </div>
                                        <div className="">
                                            <Input className='w-[416px] bg-[#D9D9D92C] h-[40px] border border-[1px]' placeholder='Nama lengkap' value={nama} onChange={(e) => setNama(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 font-medium">
                                            Agama
                                        </div>
                                        <div className="">
                                            <select value={agama} onChange={handleChangeAgama} className='w-[416px] h-[40px]  border border-gray-300 rounded-md px-2 bg-[#D9D9D92C]'>
                                                <option>Pilih Agama</option>
                                                <option value="Kristen Protestan">Kristen Protestan</option>
                                                <option value="Kristen Khatolik">Kristen Khatolik</option>
                                                <option value="Islam">Islam</option>
                                                <option value="Budha">Budha</option>
                                                <option value="Hindu">Hindu</option>
                                                <option value="Khonghucu">Khonghucu</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Alamat
                                        </div>
                                        <div className="">
                                            <Input className='w-[416px] h-[40px] bg-[#D9D9D92C]' placeholder='Alamat' value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 font-medium">
                                            Tempat Lahir
                                        </div>
                                        <div className="">
                                            <Input className='w-[416px] h-[40px] bg-[#D9D9D92C]' placeholder='Tempat Lahir' value={tempatLahir} onChange={(e) => setTempatLahir(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Pekerjaan
                                        </div>
                                        <div className="">
                                        <select value={pekerjaan} onChange={handlePekerjaan} className='w-[416px] h-[40px]  border border-gray-300 rounded-md px-2 bg-[#D9D9D92C]'>
                                                <option>Pilih Pekerjaan</option>
                                                <option value="PNS">Pegawai Negeri Sipil</option>
                                                <option value="Petani">Petani</option>
                                                <option value="Wiraswata">Wiraswata</option>
                                                
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Status Hidup
                                        </div>
                                        <div className="">
                                            <select value={statusHidup} onChange={handleChangeSh} className='bg-[#D9D9D92C] w-[416px] h-[40px] font-bold border border-gray-300 rounded-md px-2'>
                                                <option>Pilih Status</option>
                                                <option value="Hidup">Hidup</option>
                                                <option value="Wafat">Wafat</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Nomor Kartu Keluarga
                                        </div>
                                        <div className="">
                                            <Input type='number' className='w-[416px] h-[40px] bg-[#D9D9D92C]' placeholder='no kk' value={noKK} onChange={(e) => setNoKK(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            NIK
                                        </div>
                                        <div className="">
                                            <Input type='number' className='w-[416px] h-[40px] bg-[#D9D9D92C]' placeholder='NIK' value={nik} onChange={(e) => setNik(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Jenis Kelamin
                                        </div>
                                        <div className="">
                                            <select value={jenisKelamin} onChange={handleJk} className='w-[416px] bg-[#D9D9D92C] h-[40px]  border border-gray-300 rounded-md px-2'>
                                                <option>Pilih Jenis</option>
                                                <option value="Laki-laki">Laki-laki</option>
                                                <option value="Perempuan">Perempuan</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 font-medium">
                                            Status Perkawinan
                                        </div>
                                        <div className="">
                                            <select value={statusPerkawinan} onChange={handleKawin} className='w-[416px] bg-[#D9D9D92C] h-[40px]  border border-gray-300 rounded-md px-2'>
                                                <option>Pilih Status</option>
                                                <option value="Kawin">Kawin</option>
                                                <option value="Belum Kawin">Belum Kawin</option>
                                                <option value="Cerai Hidup">Cerai Hidup</option>
                                                <option value="Cerai Mati">Cerai Mati</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium ">
                                            Tanggal Lahir
                                        </div>
                                        <div className="">
                                            <Input
                                                className='w-[416px] h-[40px] bg-[#D9D9D92C]'
                                                type='date'
                                                value={tanggalLahir.toISOString().split('T')[0]}
                                                onChange={(e) => setTanggalLahir(new Date(e.target.value))}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Kewarganegaraan
                                        </div>
                                        <div className="">
                                            <select value={kewarganegaraan} onChange={handleWarga} className='w-[416px] h-[40px] border border-gray-300 rounded-md bg-[#D9D9D92C] px-2'>
                                                <option>Pilih Kewarganegaraan</option>
                                                <option value="WNI">Warga Negara Indonesia</option>
                                                <option value="WNA">Warga Negara Asing</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Pendidikan
                                        </div>
                                        <div className="">
                                            <select value={pendidikan_terakhir} onChange={handlePendidikan} className='bg-[#D9D9D92C] w-[416px] h-[40px] border border-gray-300 rounded-md px-2'>
                                                <option>Pilih Pendidikan</option>
                                                <option value="SD">Sekolah Dasar</option>
                                                <option value="SMP">Sekolah Mengengah Pertama</option>
                                                <option value="SMA">Sekolah Mengengah Atas</option>
                                                <option value="D4">Diploma</option>
                                                <option value="S1">Sarjana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-2 text-[16px] font-medium">
                                            Dusun
                                        </div>
                                        <div className="">
                                            <Autocomplete
                                                disablePortal
                                                options={dusunOptions}
                                                getOptionLabel={(option) => option.nama_dusun}
                                                value={dusun}
                                                onChange={(_event, newValue) => {
                                                    setDusun(newValue);
                                                }}
                                                renderInput={(params) => <TextField {...params} label="Nama Dusun" />}
                                                isOptionEqualToValue={(option, value) => option.id_dusun === value.id_dusun}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 flex justify-end">
                                <button className='text-white bg-[#0890EA] rounded-[5px] w-[200px] h-[40px]' onClick={handleSubmit}>
                                    Tambah Data Penduduk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </SidebarLayout>
    )
}
