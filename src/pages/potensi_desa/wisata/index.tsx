import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarLayout from '../../../components/layout/SidebarLayout'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input } from '../../../components/ui/input'
import { Link } from 'react-router-dom'
import Button from '../../../components/ui/button'
import LocationIcon from '../../../components/icon/locationIcon'

export default function WisataPage() {
  return (


    <SidebarLayout>
      <div className="bg-[#D9D9D98B] rounded-[15px]">

        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="relative w-[376px]">
              <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
              <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px]" />
            </div>
            <div className="">
              <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5} >
                <Link to='/tambah-wisata'>
                  Tambah Data Wisata
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <div className="p-4">

              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div className="bg-white p-4 rounded-[5px]">
                    <div key={index} className="umkm">
                      <div className="">
                        <img src='assets/umkm.png' className='' alt="Logo UMKM" />
                      </div>
                      <div className="text-[#0890EA] text-[16px] pt-1">
                        Pantai Boji
                      </div>
                      <div className="">
                        Objek Wisata memainkan peran penting dalam perekonomian karena mereka seringkali menjadi motor penggerak pertumbuhan ekonomi.
                      </div>
                      <div className="flex items-center pt-2">
                        <LocationIcon color='#0D9276' size={24} />
                        <div className="pl-2">Labuhan Batu</div>
                      </div>
                      <div className="flex justify-between pt-4">
                        <div className="">
                          <Button color='white' bgColor='#F61616' width={80} height={24} rounded={5}>
                            Hapus
                          </Button>
                        </div>
                        <div className="">
                          <Button color='white' bgColor='#0890EA' width={80} height={24} rounded={5}>
                            <Link to={'/detail-wisata'}>
                              Edit
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

      </div>
    </SidebarLayout>
  )
}

