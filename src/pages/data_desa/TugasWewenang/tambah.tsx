import SidebarLayout from '../../../components/layout/SidebarLayout';
import HomeIcon from '../../../components/icon/homeIcon';
import ArrowRightIcon from '../../../components/icon/arrowRightIcon';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default function TambahTugasWewenang() {

  return (
    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-10">
          <div className="bg-white flex justify-between p-4 rounded-[7px]">
            <div className="text-[16px]">
              Form Tambah Tugas Wewenang
            </div>
            <div className="flex">
              <div className="flex">
                <HomeIcon color='#0890EA' size={16} />
              </div>
              <div className="ml-4 flex">
                <ArrowRightIcon color='#000000' size={10} />
              </div>
              <div className="text-[#D9D9D9] text-[16px] ml-4">
                Tambah Tugas Wewenang 
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <div className="pb-4">
              <form>
        
              <div className="pl-6 pr-6 pt-6">
                  <div className="text-[16px] mb-1 mt-2">Jabatan</div>
                  <div className="">
                    <select className='w-full border h-[40px] p-3 rounded bg-[#EDECEC]'>
                      <option value="">Pilih Jabatan</option>
                      
                    </select>
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Tugas Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Fungsi Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      
                    />
                  </div>
                </div>
                <div className="flex items-center mt-2 pl-6 pr-6">
                  <div className="w-full">
                    <div className="text-[16px] mb-1 mt-2">Wewenang Jabatan</div>
                    <CKEditor
                      editor={ClassicEditor}
                      
                    />
                  </div>
                </div>
               
                <div className="flex justify-end mt-6  pr-6 mb-10">
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
