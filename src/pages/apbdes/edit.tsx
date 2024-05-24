import ArrowRIghtIcon from '../../components/icon/arrowRightIcon'
import HomeIcon from '../../components/icon/homeIcon'
import SidebarLayout from '../../components/layout/SidebarLayout'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Input } from '../../components/ui/input'
import Button from '../../components/ui/button'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Anggaran } from '../../interfaces/anggaran'
import { getAnggaranById, updateAnggaran } from '../../services/desaServices'
import { useToast } from '../../components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
export default function EditAddApbdes() {
     const { id } = useParams<{ id: string }>();
     const { toast } = useToast();
     const navigate = useNavigate();
     const [anggaran, setAnggaran] = useState<Anggaran>({
          judul: '',
          tahun_anggaran: '',
          rencana_hasilusaha: '',
          realisasi_hasilusaha: '',
          rencana_hasilaset: '',
          realisasi_hasilaset: '',
          rencana_swadia: '',
          realisasi_swadia: '',
          rencana_danadesa: '',
          realisasi_danadesa: '',
          rencana_hasilpajak: '',
          realisasi_hasilpajak: '',
          rencana_alokasidana: '',
          realisasi_alokasidana: '',
          rencana_bantuankeuangankabupaten: '',
          realisasi_bantuankeuangankabupaten: '',
          rencana_bantuankeuanganprovinsi: '',
          realisasi_bantuankeuanganprovinsi: '',
          rencana_hibah: '',
          realisasi_hibah: '',
          rencana_sumbanganpihakketiga: '',
          realisasi_sumbanganpihakketiga: '',
          rencana_pendapatanlain: '',
          realisasi_pendapatanlain: '',
          rencana_penyelenggaraanpemerintah: '',
          realisasi_penyelenggaraanpemerintah: '',
          rencana_pembangunandesa: '',
          realisasi_pembangunandesa: '',
          rencana_pembinaanmasyarakat: '',
          realisasi_pembinaanmasyarakat: '',
          rencana_pemerdayaanmasyarakat: '',
          realisasi_pemerdayaanmasyarakat: '',
          rencana_belanjatakterduga: '',
          realisasi_rencanatakterduga: '',
          rencana_silpa: '',
          realisasi_silpa: '',
          rencana_pencairandanacadangan: '',
          realisasi_pencairandanacadangan: '',
          rencana_hasilpenjualan: '',
          realisasi_hasilpenjualan: '',
          rencana_pembentukandanacadangan: '',
          realisasi_pembentukandanacadangan: '',
          rencana_penyertaanmodaldesa: '',
          realisasi_penyertaanmodaldesa: '',
      
     });

     const [selectedYear, setSelectedYear] = useState<string | null>(null);
     const currentYear = new Date().getFullYear();

     useEffect(() => {
          async function fetchAnggaran() {
               try {
                    if(!id){
                         return;
                    }
                    const data = await getAnggaranById(id);
                    console.log("Fetched Anggaran:", data);
                    setAnggaran(data);
                    setSelectedYear(data.tahun_anggaran || new Date().getFullYear().toString());
                    console.log("Selected Year:", data.tahun_anggaran || new Date().getFullYear().toString());
               } catch (error) {
                    console.error('Error fetching anggaran:', error);
               }
          }
          fetchAnggaran();
     }, [id]);

     const generateYearOptions = () => {
          const currentYear = new Date().getFullYear();
          const years = [];
          for (let i = currentYear; i >= currentYear - 10; i--) {
               years.push(i.toString());
          }
          return years;
     };

     const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          setSelectedYear(event.target.value);
     };

     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
          const { name, value } = e.target;
          setAnggaran(prevState => ({
               ...prevState,
               [name]: value
          }));
     };



     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          try {
               if(!id){
                    return;
               }
              await updateAnggaran(id, anggaran);
              console.log('Anggaran updated successfully', anggaran);
              toast({
                  title: "Anggaran Desa",
                  description: 'Data Anggaran Berhasil di Perbaharui'
              });
              navigate('/apbdes');
          } catch (error) {
              console.error('Error updating anggaran:', error);
              toast({
                  title: "Anggaran Desa",
                  description: 'Data Anggaran Gagal di Perbaharui'
              });
          }
      };
      


     return (
          <SidebarLayout>
               <div className="bg-[#D9D9D98B] rounded-[15px]">
                    <div className="p-8">
                         <div className="bg-white flex justify-between p-4 rounded-[7px]">
                              <div className="text-[16px]">
                                   Form Ubah Data APBDes
                              </div>
                              <div className="flex ">
                                   <div className="flex">
                                        <HomeIcon color='#0890EA' size={16} />
                                   </div>
                                   <div className="ml-4 flex">
                                        <ArrowRIghtIcon color='#000000' size={10} />
                                   </div>
                                   <div className="text-[#D9D9D9] text-[16px] ml-4">
                                        Ubah Data APBDes
                                   </div>
                              </div>
                         </div>
                         <div className="bg-white rounded-[15px] mt-6" >
                              <div className="p-4">
                                   <form action="">
                                        <div className="mb-4">
                                             <div className="">Tahun Anggaran</div>
                                             <select name='tahun_anggaran' onChange={handleYearChange} value={selectedYear || anggaran.tahun_anggaran} className="w-[200px] rounded bg-[#40A2E3] h-[40px] p-2 text-white">
                                                  <option value={currentYear.toString()}>{currentYear}</option>
                                                  {generateYearOptions().map((year) => (
                                                       <option key={year} value={year}>{year}</option>
                                                  ))}
                                             </select>
                                             <div className="mt-2">Judul Anggaran</div>
                                             <Input name='judul' onChange={handleChange} className='bg-[#E6E5E5] w-[450px]' value={anggaran.judul} placeholder='Masukkan Judul...' />
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
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_hasilaset' placeholder='Rp.' value={anggaran.rencana_hasilaset} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_hasilaset' placeholder='Rp.' value={anggaran.realisasi_hasilaset} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hasil Usaha</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_hasilusaha' placeholder='Rp.' value={anggaran.rencana_hasilusaha} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_hasilusaha' placeholder='Rp.' value={anggaran.realisasi_hasilusaha} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Swadiya, Partisipasi, Gotong Royong</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_swadia' placeholder='Rp.' value={anggaran.rencana_swadia} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_swadia' placeholder='Rp.' value={anggaran.realisasi_swadia} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapata Transfer</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Dana Desa</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_danadesa' placeholder='Rp.' value={anggaran.rencana_danadesa} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_danadesa' placeholder='Rp.' value={anggaran.realisasi_danadesa} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bagi Hasil Pajak & Retribusi</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_hasilpajak' placeholder='Rp.' value={anggaran.rencana_hasilpajak} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_hasilpajak' placeholder='Rp.' value={anggaran.realisasi_hasilpajak} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Alokasi Dana Desa</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_alokasidana' placeholder='Rp.' value={anggaran.rencana_alokasidana} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_alokasidana' placeholder='Rp.' value={anggaran.realisasi_alokasidana} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Kabupaten</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_bantuankeuangankabupaten' placeholder='Rp.' value={anggaran.rencana_bantuankeuangankabupaten} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_bantuankeuangankabupaten' placeholder='Rp.' value={anggaran.realisasi_bantuankeuangankabupaten} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Bantuan Keuangan Provinsi</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_bantuankeuanganprovinsi' placeholder='Rp.' value={anggaran.rencana_bantuankeuanganprovinsi} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_bantuankeuanganprovinsi' placeholder='Rp.' value={anggaran.realisasi_bantuankeuanganprovinsi} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell className='text-[#0890ea] font-bold'>Pendapatan Lain-lain</TableCell>
                                                                           <TableCell></TableCell>
                                                                           <TableCell></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Hibah</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_hibah' placeholder='Rp.' value={anggaran.rencana_hibah} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_hibah' placeholder='Rp.' value={anggaran.realisasi_hibah} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Sumbangan Pihak ketiga</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_sumbanganpihakketiga' placeholder='Rp.' value={anggaran.rencana_sumbanganpihakketiga} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_sumbanganpihakketiga' placeholder='Rp.' value={anggaran.realisasi_sumbanganpihakketiga} /></TableCell>
                                                                      </TableRow>
                                                                      <TableRow >
                                                                           <TableCell>Pendapatan Lain-lain</TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='rencana_pendapatanlain' placeholder='Rp.' value={anggaran.rencana_pendapatanlain} /></TableCell>
                                                                           <TableCell><Input type='number' onChange={handleChange} name='realisasi_pendapatanlain' placeholder='Rp.' value={anggaran.realisasi_pendapatanlain} /></TableCell>
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
                                                                 <TableCell><Input type='number' onChange={handleChange} name='rencana_penyelenggaraanpemerintah' placeholder='Rp.' value={anggaran.rencana_penyelenggaraanpemerintah} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange} name='realisasi_penyelenggaraanpemerintah' placeholder='Rp.' value={anggaran.realisasi_penyelenggaraanpemerintah} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PELAKSANAAN PEMBANGUNAN DESA</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange} name='rencana_pembangunandesa' placeholder='Rp.' value={anggaran.rencana_pembangunandesa} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange} name='realisasi_pembangunandesa' placeholder='Rp.' value={anggaran.realisasi_pembangunandesa} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBINAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange} name='rencana_pembinaanmasyarakat' placeholder='Rp.' value={anggaran.rencana_pembinaanmasyarakat} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange} name='realisasi_pembinaanmasyarakat' placeholder='Rp.' value={anggaran.realisasi_pembinaanmasyarakat} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>PEMBERDAYAAN KEMASYARAKATAN DESA</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}   name='rencana_pemerdayaanmasyarakat' placeholder='Rp.' value={anggaran.rencana_pemerdayaanmasyarakat} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='realisasi_pemerdayaanmasyarakat' placeholder='Rp.' value={anggaran.realisasi_pemerdayaanmasyarakat} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>BELANJA TAK TERDUGA</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='rencana_belanjatakterduga' placeholder='Rp.' value={anggaran.rencana_belanjatakterduga} /></TableCell>
                                                                 <TableCell><Input  onChange={handleChange} name='realisasi_rencanatakterduga' placeholder='Rp.' value={anggaran.realisasi_rencanatakterduga} /></TableCell>
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
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='rencana_silpa' placeholder='Rp.' value={anggaran.rencana_silpa} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='realisasi_silpa' placeholder='Rp.' value={anggaran.realisasi_silpa} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pencairan Dana Cadangan</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='rencana_pencairandanacadangan' placeholder='Rp.' value={anggaran.rencana_pencairandanacadangan} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='realisasi_pencairandanacadangan' placeholder='Rp.' value={anggaran.realisasi_pencairandanacadangan} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Hasil penjualan kekayaan Desa yang dipisahkan</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='rencana_hasilpenjualan' placeholder='Rp.' value={anggaran.rencana_hasilpenjualan} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='realisasi_hasilpenjualan' placeholder='Rp.' value={anggaran.realisasi_hasilpenjualan} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell className='text-[#0890ea] font-bold'>Pendapatan Transfer</TableCell>
                                                                 <TableCell></TableCell>
                                                                 <TableCell></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Pembentukan Dana Cadangan</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='rencana_pembentukandanacadangan' placeholder='Rp.' value={anggaran.rencana_pembentukandanacadangan} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='realisasi_pembentukandanacadangan' placeholder='Rp.' value={anggaran.realisasi_pembentukandanacadangan} /></TableCell>
                                                            </TableRow>
                                                            <TableRow >
                                                                 <TableCell>Penyertaan Modal Desa</TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='rencana_penyertaanmodaldesa' placeholder='Rp.' value={anggaran.rencana_penyertaanmodaldesa} /></TableCell>
                                                                 <TableCell><Input type='number' onChange={handleChange}  name='realisasi_penyertaanmodaldesa' placeholder='Rp.' value={anggaran.realisasi_penyertaanmodaldesa} /></TableCell>
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
                                                       <button type='submit' onClick={handleSubmit} className='bg-[#0890EA] rounded-[5px] w-[128px] h-[34px] text-white'>
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
