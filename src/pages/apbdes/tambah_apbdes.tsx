import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import HomeIcon from '../../components/icon/homeIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Input } from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { addAnggaran } from '../../services/desaServices'
import { Anggaran } from '../../interfaces/anggaran'
import { useToast } from '../../components/ui/use-toast'
import { useNavigate } from 'react-router-dom'


export default function AddApbdes() {
     const [, setIsLoggedIn] = useState(false);
     const [judulAnggaran, setJudulAnggaran] = useState<string>('');
     const currentYear = new Date().getFullYear();
     const [selectedYear, setSelectedYear] = useState<string>(currentYear.toString());
      const [rencanaHasilAset, setRencanaHasilAset] = useState ('');
     const [realisasiHasilAset, setRealisasiHasilAset] = useState ('');
     const [rencanaHasilUsaha, setRencanaHasilUsaha] = useState ('');
     const [realisasiHasilUsaha, setRealisasiHasilUsaha] = useState ('');
     const [rencanaSwadia, setRencanaSwadia] = useState ('');
     const [realisasiSwadia, setRealisasiSwadia] = useState ('');
     const [rencanaDanaDesa, setRencanaDanaDesa] = useState ('');
     const [realisasiDanaDesa, setRealisasiDanaDesa] = useState ('');
     const [rencanaHasilPajak, setRencanaHasilPajak] = useState ('');
     const [realisasiHasilPajak, setRealisasiHasilPajak] = useState ('');
     const [rencanaAlokasiDana, setRencanaAlokasiDana] = useState ('');
     const [realisasiAlokasiDana, setRealisasiAlokasiDana] = useState ('');
     const [rencanaBantuanKabupaten, setRencanaBantuanKabupaten] = useState ('');
     const [realisasiBantuanKabupaten, setRealisasiBantuanKabupaten] = useState ('');
     const [rencanaBantuanProvinsi, setRencanaBantuanProvinsi] = useState ('');
     const [realisasiBantuanProvinsi, setRealisasiBantuanProvinsi] = useState ('');
     const [rencanaHibah, setRencanaHibah] = useState ('');
     const [realisasiHibah, setRealisasiHibah] = useState ('');
     const [rencanaSumbangan, setRencanaSumbangan] = useState ('');
     const [realisasiSumbangan, setRealisasiSumbangan] = useState ('');
     const [rencanaPendapatanLain, setRencanaPendapatanLain] = useState ('');
     const [realisasiPendapatanLain, setRealisasiPendapatanLain] = useState ('');
     const [rencanaPenyelenggaraanPemerintah, setRencanaPenyelenggaraanPemerintah] = useState ('');
     const [realisasiPenyelenggaraanPemerintah, setRealisasiPenyelenggaraanPemerintah] = useState ('');
     const [rencanaPembangunanDesa, setRencanaPembangunanDesa] = useState ('');
     const [realisasiPembangunanDesa, setRealisasiPembangunanDesa] = useState ('');
     const [rencanaPembinaanMasyarakat, setRencanaPembinaanMasyarakat] = useState ('');
     const [realisasiPembinaanMasyarakat, setRealisasiPembinaanMasyarakat] = useState ('');
     const [rencanaPemerdayaanMasyarakat, setRencanaPemerdayaanMasyarakat] = useState ('');
     const [realisasiPemerdayaanMasyarakat, setRealisasiPemerdayaanMasyarakat] = useState ('');
     const [rencanaBelanjaTakterduga, setRencanaBelanjaTakterduga] = useState ('');
     const [realisasiBelanjaTakterduga, setRealisasiBelanjaTakterduga] = useState ('');
     const [rencanaSilpa, setRencanaSilpa] = useState ('');
     const [realisasiSilpa, setRealisasiSilpa] = useState ('');
     const [rencanaPencairanCadangan, setRencanaPencairanCadangan] = useState ('');
     const [realisasiPencairanCadangan, setRealisasiPencairanCadangan] = useState ('');
     const [rencanaHasilPenjualan, setRencanaHasilPenjualan] = useState ('');
     const [realisasiHasilPenjualan, setRealisasiHasilPenjualan] = useState ('');
     const [rencanaPembentukanCadangan, setRencanaPembentukanCadangan] = useState ('');
     const [realisasiPembentukanCadangan, setRealisasiPembentukanCadangan] = useState ('');
     const [rencanaPenyertaanModal, setRencanaPenyertaanModal] = useState ('');
     const [realisasiPenyertaanModal, setRealisasiPenyertaanModal] = useState ('');
     const { toast } = useToast();
     const navigate = useNavigate();

     useEffect(() => {
          setSelectedYear(currentYear.toString());
     }, [currentYear]);//[]

     const generateYearOptions = () => {
          const years = [];
          for (let i = currentYear; i >= currentYear - 10; i--) {
               years.push(i.toString());
          }
          return years;
     };

     const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          setSelectedYear(event.target.value);
     };

     const handleJudulChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setJudulAnggaran(event.target.value);
     };

     const handleSaveData = async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault(); // Menghentikan perilaku form HTML bawaan
          try {
              const data: Anggaran = {
                   judul: judulAnggaran,
                   tahun_anggaran: selectedYear.toString(),
                   rencana_hasilusaha: rencanaHasilUsaha,
                   realisasi_hasilusaha: realisasiHasilUsaha,
                   rencana_hasilaset: rencanaHasilAset,
                   realisasi_hasilaset: realisasiHasilAset,
                   rencana_swadia: rencanaSwadia,
                   realisasi_swadia: realisasiSwadia,
                   rencana_danadesa: rencanaDanaDesa,
                   realisasi_danadesa: realisasiDanaDesa,
                   rencana_hasilpajak: rencanaHasilPajak,
                   realisasi_hasilpajak: realisasiHasilPajak,
                   rencana_alokasidana: rencanaAlokasiDana,
                   realisasi_alokasidana: realisasiAlokasiDana,
                   rencana_bantuankeuangankabupaten: rencanaBantuanKabupaten,
                   realisasi_bantuankeuangankabupaten: realisasiBantuanKabupaten,
                   rencana_bantuankeuanganprovinsi: rencanaBantuanProvinsi,
                   realisasi_bantuankeuanganprovinsi: realisasiBantuanProvinsi,
                   rencana_hibah: rencanaHibah,
                   realisasi_hibah: realisasiHibah,
                   rencana_sumbanganpihakketiga: rencanaSumbangan,
                   realisasi_sumbanganpihakketiga: realisasiSumbangan,
                   rencana_pendapatanlain: rencanaPendapatanLain,
                   realisasi_pendapatanlain: realisasiPendapatanLain,
                   rencana_penyelenggaraanpemerintah: rencanaPenyelenggaraanPemerintah,
                   realisasi_penyelenggaraanpemerintah: realisasiPenyelenggaraanPemerintah,
                   rencana_pembangunandesa: rencanaPembangunanDesa,
                   realisasi_pembangunandesa: realisasiPembangunanDesa,
                   rencana_pembinaanmasyarakat: rencanaPembinaanMasyarakat,
                   realisasi_pembinaanmasyarakat: realisasiPembinaanMasyarakat,
                   rencana_pemerdayaanmasyarakat: rencanaPemerdayaanMasyarakat,
                   realisasi_pemerdayaanmasyarakat: realisasiPemerdayaanMasyarakat,
                   rencana_belanjatakterduga: rencanaBelanjaTakterduga,
                   realisasi_rencanatakterduga: realisasiBelanjaTakterduga,
                   rencana_silpa: rencanaSilpa,
                   realisasi_silpa: realisasiSilpa,
                   rencana_pencairandanacadangan: rencanaPencairanCadangan,
                   realisasi_pencairandanacadangan: realisasiPencairanCadangan,
                   rencana_hasilpenjualan: rencanaHasilPenjualan,
                   realisasi_hasilpenjualan: realisasiHasilPenjualan,
                   rencana_pembentukandanacadangan: rencanaPembentukanCadangan,
                   realisasi_pembentukandanacadangan: realisasiPembentukanCadangan,
                   rencana_penyertaanmodaldesa: rencanaPenyertaanModal,
                   realisasi_penyertaanmodaldesa: realisasiPenyertaanModal,
               
              };
              await addAnggaran(data);
              console.log(data)
              toast({
                  title: "Angggaran Desa",
                  description: "Data berhasil Ditambah!",
                  color:'#00BE68'
              });
              navigate('/apbdes');

          } catch (error) {
              console.error('Error:', error);
              toast({
                  title: "Error",
                  description: "Terjadi kesalahan saat menyimpan data.",
                  duration: 5000, // durasi toast dalam milidetik
                  color:'#EB0F0F'
                
              });
          }
      }
      
     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Tambah Data APBDes
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />

                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Tambah Data APBDes
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6" >
                              <div className="p-4">
                                   <form action="" onSubmit={handleSaveData}>
                                   <div className="mb-4">
                                                  <div className="">Tahun Anggaran</div>
                                                  <select onChange={handleYearChange} value={selectedYear || ''} className="w-[200px] rounded bg-[#40A2E3] h-[40px] p-2 text-white">
                                                       <option value={currentYear.toString()}>{currentYear}</option>
                                                       {generateYearOptions().map((year) => (
                                                            <option key={year} value={year}>{year}</option>
                                                       ))}
                                                  </select>
                                                  <div className="mt-2">Judul Anggaran</div>
                                                  <Input value={judulAnggaran} onChange={handleJudulChange} className='bg-[#E6E5E5] w-[450px]' placeholder='Masukkan Judul...'/>
                                             </div>
                                        <Tabs defaultValue="pendapatan" className="w-full">
                                             <TabsList className='bg-[#F7F6F6] w-full'>
                                                  <TabsTrigger className='w-[300px]' value="pendapatan">Pendapatan Desa</TabsTrigger>
                                                  <TabsTrigger className='w-[300px]' value="belanja">Belanja Desa</TabsTrigger>
                                                  <TabsTrigger className='w-[300px]' value="pembiayaan">Pembiayaan Desa</TabsTrigger>
                                             </TabsList>
                                            

                                             <TabsContent value="pendapatan">
                                                  <div className="">
                                                       <div className="">
                                                            <Table className='border border-2 border-[#0890EA]'>
                                                                 <TableHeader className='text-white bg-[#0890EA] text-center' style={{
                                                                      borderBottom: '#0890EA solid',
                                                                 }}>
                                                                      <TableHead >Jenis Pendapatan</TableHead>
                                                                      <TableHead className='text-center'>Rencana Anggaran</TableHead>
                                                                      <TableHead className='text-center'> Realisasi Anggaran</TableHead>

                                                                 </TableHeader>
                                                                 <TableBody>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Hasil Usaha</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Aset</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaHasilAset} onChange={(e) => setRencanaHasilAset(e.target.value)} /></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiHasilAset} onChange={(e) => setRealisasiHasilAset(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Usaha</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaHasilUsaha} onChange={(e) => setRencanaHasilUsaha(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number'  placeholder='Rp.' value={realisasiHasilUsaha} onChange={(e) => setRealisasiHasilUsaha(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Swadiya, Partisipasi, Gotong Royong</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaSwadia} onChange={(e) => setRencanaSwadia(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiSwadia} onChange={(e) => setRealisasiSwadia(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Transfer</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>

                                                                      <TableRow >
                                                                           <TableCell>Dana Desa</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaDanaDesa} onChange={(e) => setRencanaDanaDesa(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiDanaDesa} onChange={(e) => setRealisasiDanaDesa(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bagi Hasil Pajak & Retribusi</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaHasilPajak} onChange={(e) => setRencanaHasilPajak(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiHasilPajak} onChange={(e) => setRealisasiHasilPajak(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Alokasi Dana Desa</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaAlokasiDana} onChange={(e) => setRencanaAlokasiDana(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiAlokasiDana} onChange={(e) => setRealisasiAlokasiDana(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Kabupaten</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaBantuanKabupaten} onChange={(e) => setRencanaBantuanKabupaten(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiBantuanKabupaten} onChange={(e) => setRealisasiBantuanKabupaten(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Provinsi</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaBantuanProvinsi} onChange={(e) => setRencanaBantuanProvinsi(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiBantuanProvinsi} onChange={(e) => setRealisasiBantuanProvinsi(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Lain-lain</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hibah</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaHibah} onChange={(e) => setRencanaHibah(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiHibah} onChange={(e) => setRealisasiHibah(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Sumbangan Pihak ketiga</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaSumbangan} onChange={(e) => setRencanaSumbangan(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.'value={realisasiSumbangan} onChange={(e) => setRealisasiSumbangan(e.target.value)} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Pendapatan Lain-lain</TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={rencanaPendapatanLain} onChange={(e) => setRencanaPendapatanLain(e.target.value)}/></TableCell>
                                                                           <TableCell><Input type='number' placeholder='Rp.' value={realisasiPendapatanLain} onChange={(e) => setRealisasiPendapatanLain(e.target.value)}/></TableCell>
                                                                      </TableRow>
                                                                 </TableBody>
                                                            </Table>
                                                       </div>
                                                  </div>
                                             </TabsContent>
                                             <TabsContent value="belanja">
                                                  <Table className='border border-2 border-[#0890EA]'>
                                                       <TableHeader className='text-white bg-[#0890EA] text-center' style={{
                                                            borderBottom: '#0890EA solid',
                                                       }}>
                                                            <TableHead >Jenis Pendapatan</TableHead>
                                                            <TableHead className='text-center'>Rencana Anggaran</TableHead>
                                                            <TableHead className='text-center'> Realisasi Anggaran</TableHead>

                                                       </TableHeader>
                                                       <TableBody>

                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PENYELENGGARAAN PEMERINTAHAN DESA</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPenyelenggaraanPemerintah} onChange={(e) => setRencanaPenyelenggaraanPemerintah(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPenyelenggaraanPemerintah} onChange={(e) => setRealisasiPenyelenggaraanPemerintah(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PELAKSANAAN PEMBANGUNAN DESA</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPembangunanDesa} onChange={(e) => setRencanaPembangunanDesa(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPembangunanDesa} onChange={(e) => setRealisasiPembangunanDesa(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBINAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPembinaanMasyarakat} onChange={(e) => setRencanaPembinaanMasyarakat(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPembinaanMasyarakat} onChange={(e) => setRealisasiPembinaanMasyarakat(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBERDAYAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPemerdayaanMasyarakat} onChange={(e) => setRencanaPemerdayaanMasyarakat(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPemerdayaanMasyarakat} onChange={(e) => setRealisasiPemerdayaanMasyarakat(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>BELANJA TAK TERDUGA</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaBelanjaTakterduga} onChange={(e) => setRencanaBelanjaTakterduga(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiBelanjaTakterduga} onChange={(e) => setRealisasiBelanjaTakterduga(e.target.value)}/></TableCell>
                                                            </TableRow>


                                                       </TableBody>
                                                  </Table>
                                             </TabsContent>
                                             <TabsContent value="pembiayaan">
                                                  <Table className='border border-2 border-[#0890EA]'>
                                                       <TableHeader className='text-white bg-[#0890EA] text-center' style={{
                                                            borderBottom: '#0890EA solid',
                                                       }}>
                                                            <TableHead >Jenis Pendapatan</TableHead>
                                                            <TableHead className='text-center'>Rencana Anggaran</TableHead>
                                                            <TableHead className='text-center'> Realisasi Anggaran</TableHead>

                                                       </TableHeader>
                                                       <TableBody>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PENERIMAAN PEMBIAYAAN</TableCell>
                                                                 <TableCell></TableCell>
                                                                 <TableCell></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>SiLPA</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaSilpa} onChange={(e) => setRencanaSilpa(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiSilpa} onChange={(e) => setRealisasiSilpa(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pencairan Dana Cadangan</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPencairanCadangan} onChange={(e) => setRencanaPencairanCadangan(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPencairanCadangan} onChange={(e) => setRealisasiPencairanCadangan(e.target.value)} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Hasil penjualan kekayaan Desa yang dipisahkan</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaHasilPenjualan} onChange={(e) => setRencanaHasilPenjualan(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiHasilPenjualan} onChange={(e) => setRealisasiHasilPenjualan(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>Pendapatan Transfer</TableCell>
                                                                 <TableCell></TableCell>
                                                                 <TableCell></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pembentukan Dana Cadangan</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPembentukanCadangan} onChange={(e) => setRencanaPembentukanCadangan(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPembentukanCadangan} onChange={(e) => setRealisasiPembentukanCadangan(e.target.value)}/></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Penyertaan Modal Desa</TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={rencanaPenyertaanModal} onChange={(e) => setRencanaPenyertaanModal(e.target.value)}/></TableCell>
                                                                 <TableCell><Input type='number' placeholder='Rp.' value={realisasiPenyertaanModal} onChange={(e) => setRealisasiPenyertaanModal(e.target.value)}/></TableCell>
                                                            </TableRow>


                                                       </TableBody>
                                                  </Table>
                                             </TabsContent>

                                             <div className="flex justify-end mt-8 mb-8">
                                                  <div className="mr-8">
                                                       <Button bgColor="#F61616" rounded={5} width={128} height={34} color="white">
                                                            <Link to={'/apbdes'}>Kembali</Link>
                                                       </Button>
                                                  </div>
                                                  <div className="">
                                                       <button
                                                       type='submit'
                                                     
                                                       className='bg-[#0890EA] rounded-[5px] w-[128px] h-[34px] text-white'>
                                                            Simpan Data
                                                       </button>
                                                  </div>
                                             </div>
                                        </Tabs>
                                   </form>


                              </div>
                         </div>
                    </div>
               </div>
          </SidebarLayout>
     )
}
