import { Sidebar as Side, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { ScrollArea } from './scroll';
import { Link } from 'react-router-dom';
import GroupUcerIcon from '../icon/groupuserIcon';
import AddUserIcon from '../icon/adduserIcon';
import AgendaIcon from '../icon/agendaIcon';
import AddAgendaIcon from '../icon/addagendaIcon';
import DataDesaIcon from '../icon/datadesaIcon';
import BantuanIcon from '../icon/bantuanIcon';
import PenerimaIcon from '../icon/penerimaIcon';
import ProfilDesaIcon from '../icon/profilDesaIcon';
import ApbdesIcon from '../icon/apbdesicon';
import DusunIcon from '../icon/dusunIcon';
import PemerintahIcon from '../icon/pemerintahIcon';
import PengumumanIcon from '../icon/pengumumanIcon';
import BeritaIcon from '../icon/beritaIcon';
import OrganisasiIcon from '../icon/organisasiIcon';
import AddIcon from '../icon/addIcon';
interface SidebarProps {
     handleLogout: () => void; // Type definition for handleLogout prop
   }
   
   export default function Sidebar({ handleLogout }: SidebarProps) {

   
     return (
          <>

               <ScrollArea className='h-screen'> {/* code ini untuk mengatur scroll view menu  */}
                    <Side rootStyles={{ //menu sidebar
                         [`.${sidebarClasses.container}`]: {
                              backgroundColor: 'white',
                         },
                    }}>
                         <Menu
                              className='p-2'
                         >
                              <MenuItem disabled={true} className='text-[20px]'>Desa Digital</MenuItem>
                              <br />
                              <MenuItem
                                  

                                   component={<Link to="/dashboard" />}
                              > Dashboard </MenuItem>
                              <SubMenu label='Penduduk'>
                                   <MenuItem component={<Link to="/data-penduduk" />} icon={<GroupUcerIcon size={18} color='black' />} >Data Penduduk</MenuItem>
                                   <MenuItem component={<Link to="/tambah-penduduk" />} icon={<AddUserIcon size={18} color='black' />}>Tambah Data Penduduk</MenuItem>
                                   <MenuItem component={<Link to='/bantuan' />} icon={<PenerimaIcon size={18} color='black' />}>Data Penerima Bantuan</MenuItem>
                                   <MenuItem component={<Link to='/tambah-bantuan' />} icon={<BantuanIcon size={18} color='black' />}>Daftar Bantuan</MenuItem>
                              </SubMenu>
                              <SubMenu label='Agenda Desa '>
                                   <MenuItem component={<Link to='/agenda-desa' />} icon={<AgendaIcon size={18} color='black' />}>Data Agenda</MenuItem>
                                   <MenuItem component={<Link to="/tambah-agenda" />} icon={<AddAgendaIcon size={18} color='black' />}>Tambah Agenda Desa</MenuItem>
                              </SubMenu>
                              <SubMenu label='Data Desa'>
                                   <MenuItem component={<Link to='/data-desa' />} icon={<ProfilDesaIcon size={18} color='black' />}>Profil Desa</MenuItem>
                                   <MenuItem component={<Link to='/dusun' />} icon={<DusunIcon size={18} color='black' />}>Dusun</MenuItem>

                              </SubMenu>
                              <SubMenu label='APBDes'>
                                   <MenuItem component={<Link to="/apbdes" />} icon={<ApbdesIcon size={18} color='black' />}>Data APBDes</MenuItem>
                                   {/* <MenuItem component={<Link to='/wisata' />}>Objek Wisata</MenuItem> */}
                              </SubMenu>
                              <SubMenu label="Pemerintahan Desa">
                                   <MenuItem component={<Link to='/pemerintahan' />} icon={<PemerintahIcon size={18} color='black' />}>Struktur Pemerintahan</MenuItem>
                                   <MenuItem component={<Link to='/tugas-wewenang' />} icon={<DataDesaIcon size={18} color='black' />}>Tugas dan Wewenang</MenuItem>


                              </SubMenu>
                              <SubMenu label="Informasi Publik">
                                   <MenuItem component={<Link to='/pengumuman' />} icon={<PengumumanIcon color='black' size={18} />}>Pengumuman</MenuItem>
                                   <MenuItem component={<Link to='/berita' />} icon={<BeritaIcon color='black' size={18} />}>Berita</MenuItem>

                              </SubMenu>
                              <SubMenu label='Organisasi Desa '>
                                   <MenuItem component={<Link to='/organisasi' />} icon={<OrganisasiIcon size={18} color='black' />}>Data Organisasi</MenuItem>
                                   <MenuItem component={<Link to="/tambah-organisasi" />} icon={<AddIcon size={18} color='black' />}>Tambah Organisasi Desa</MenuItem>
                              </SubMenu>

                              <MenuItem disabled className='mt-6'></MenuItem>
                              <MenuItem onClick={handleLogout} className='text-center rounded-[5px] bg-[#fdcece] text-[#f84444]'>
              Keluar
            </MenuItem>
                         </Menu>
                    </Side>
               </ScrollArea>


          </>
     )
}
