import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import HomeIcon from '../../components/icon/homeIcon';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useToast } from '../../components/ui/use-toast';
import { getOrganisasiById, updateOrganisasi } from '../../services/desaServices';
import { Organisasi } from '../../interfaces/organisasi';

export default function EditOrganisasi() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const [organisasi, setOrganisasi] = useState<Organisasi | null>(null);

  useEffect(() => {
    if (id) {
      getOrganisasiById(id)
        .then((data: Organisasi) => {
          if (data) {
            if (data.tahun_berdiri) {
              const formattedDate = new Date(data.tahun_berdiri).toISOString().split('T')[0];
              data.tahun_berdiri = formattedDate;
            }
            setOrganisasi(data);
          } else {
            toast({ title: "Gagal", description: "Data organisasi tidak ditemukan!" });
          }
        })
        .catch(error => {
          toast({ title: "Gagal", description: "Gagal mengambil data organisasi!" });
          console.error('Error:', error);
        });
    }
  }, [id, toast]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEditorChange = (_event: any, editor: { getData: () => any; }) => {
    const data = editor.getData();
    if (organisasi && typeof organisasi === 'object') {
      setOrganisasi(prev => ({ ...(prev as Organisasi), deskripsi: data }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (organisasi) {
      if (name === 'logo_organisasi' && files) {
        setOrganisasi(prev => ({ ...(prev as Organisasi), [name]: files[0] }));
      } else {
        setOrganisasi(prev => ({ ...(prev as Organisasi), [name]: value }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (id && organisasi) {
      console.log('Data yang dikirim:', organisasi);  
      try {
        await updateOrganisasi(id, organisasi);
        toast({ title: "Sukses", description: "Data organisasi berhasil diperbarui!" });
        navigate('/organisasi'); 
      } catch (error) {
        toast({ title: "Gagal", description: "Gagal memperbarui data organisasi!" });
      }
    }
  };

  if (!organisasi) {
    return <div>Loading...</div>;
  }

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Form Ubah Data Organisasi</div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Ubah Data Organisasi
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="p-6 flex justify-between">
                  <div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Nama Organisasi</div>
                      <Input
                        name="nama_lembaga"
                        value={organisasi.nama_lembaga}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold' placeholder='Nama organisasi' />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Singkatan/Inisial</div>
                      <Input
                        name="singkatan"
                        value={organisasi.singkatan}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold' placeholder='Singkatan' />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2">Alamat Organisasi</div>
                      <Input
                        name="alamat_organisasi"
                        value={organisasi.alamat_organisasi}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold' placeholder='Alamat' />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Logo Organisasi</div>
                      <Input
                        type='file'
                        name="logo_organisasi"
                        className='w-[330px] h-[40px]'
                        onChange={handleInputChange}
                        placeholder='Pilih file'
                      />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Jumlah Anggota</div>
                      <Input
                        type='number'
                        name="jumlah_anggota"
                        value={organisasi.jumlah_anggota}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold'
                        placeholder='Jumlah anggota'
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Tahun Berdiri</div>
                      <Input
                        name="tahun_berdiri"
                        value={organisasi.tahun_berdiri}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold'
                        type='date'
                      />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Nama Ketua</div>
                      <Input
                        name="ketua"
                        value={organisasi.ketua}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold'
                        placeholder='Nama ketua'
                      />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Nama Wakil Ketua</div>
                      <Input
                        name="wakil_ketua"
                        value={organisasi.wakil_ketua}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold'
                        placeholder='Nama wakil ketua'
                      />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Nama Sekretaris</div>
                      <Input
                        name="sekretaris"
                        value={organisasi.sekretaris}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold'
                        placeholder='Nama sekretaris'
                      />
                    </div>
                    <div className="mt-4">
                      <div className="mb-2 text-[16px]">Nama Bendahara</div>
                      <Input
                        name="bendahara"
                        value={organisasi.bendahara}
                        onChange={handleInputChange}
                        className='w-[416px] h-[40px] font-bold'
                        placeholder='Nama bendahara'
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6 mb-8">
                  <div className="w-full">
                    <div>Deskripsi</div>
                    <CKEditor
                      editor={ClassicEditor}
                      data={organisasi.deskripsi}
                      onChange={handleEditorChange}
                    />
                  </div>
                </div>
                <div className="flex justify-end pr-6">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
