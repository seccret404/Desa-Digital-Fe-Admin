// import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SidebarLayout from '../../components/layout/SidebarLayout';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { Input } from '../../components/ui/input';
import Button from '../../components/ui/button';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Link } from 'react-router-dom';

export default function EditPenerimaBantuan() {
 

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">Form Ubah Data Penerima Bantuan</div>
            <div className="flex ">
              <div className="flex">
                <HomeIcon color="#0890EA" size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color="#000000" size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">Ubah Data Penerima Bantuan</div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="p-4">
              <div className="p-6 ">
                <div className="">
                  <div className="mt-4">
                    <div className="mb-2 text-[16px] ">Nama Penerima</div>
                    <div className="">
                      {/* <Autocomplete
                        disablePortal
                        options={}
                        renderInput={(params) => <TextField {...params} label="Nama Penerima" />}
                      /> */}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Jenis Bantuan</div>
                    <div className="">
                      <select  className="h-[40px] font-bold w-full border rounded" >
                        <option value="" disabled>Pilih jenis bantuan</option>
                        <option value="Pemerintah">Pemerintah</option>
                        <option value="Desa">Desa</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Nama Bantuan</div>
                    <div className="">
                      {/* <Autocomplete
                          options={''}
                        disablePortal
                        renderInput={(params) => <TextField {...params} label="Nama Bantuan" />}
                        
                      /> */}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Tanggal Mulai Diterima</div>
                    <div className="">
                      <Input type="date" className="h-[40px] font-bold"  />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Status Penerima Bantuan</div>
                    <div className="flex">
                      <label className="mr-4">
                        <input
                          type="radio"
                          value="Lanjut"
                          
                        />
                        Lanjut
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="Berhenti"
                          
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
                        
                      />

                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-2 text-[16px]">Total Penerimaan Bantuan</div>
                    <div className="">
                      <TextField
                        id="outlined-number"
                        label="Total Penerimaan"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
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
                  <button className='bg-[#0890EA] rounded-[5px] w-[128px] h-[34px] text-white'>
                    Tambah Data
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
