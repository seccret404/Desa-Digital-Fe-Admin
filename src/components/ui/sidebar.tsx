import { Sidebar as Side, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { ScrollArea } from './scroll';
import { useState } from 'react';
import HomeIcon from '../icon/homeIcon';
import { Link } from 'react-router-dom';
import GroupUcerIcon from '../icon/groupuserIcon';
import AddUserIcon from '../icon/adduserIcon';
import AgendaIcon from '../icon/agendaIcon';
import AddAgendaIcon from '../icon/addagendaIcon';
import DataDesaIcon from '../icon/datadesaIcon';
import PengumumanIcon from '../icon/pengumumanIcon';
import AddPengumumanIcon from '../icon/addpengumumanIcon';
export default function Sidebar() {

     const [isHovered, setIsHovered] = useState(false);
     const [isActive, setIsActive] = useState(false);

     const handleMouseEnter = () => {
          setIsHovered(true);
     };

     const handleMouseLeave = () => {
          setIsHovered(false);
     };

     const handleClick = () => {
          setIsActive(true);
     };
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
                                   style={{
                                        backgroundColor: isActive ? '#40A2E372' : (isHovered ? '#40A2E372' : 'initial'),
                                        color: isActive ? '#40A2E3' : (isHovered ? '#40A2E3' : 'initial'),
                                   }}
                                   onMouseEnter={handleMouseEnter}
                                   onMouseLeave={handleMouseLeave}
                                   onClick={handleClick}
                                   icon={<HomeIcon size={18} color='black' />}
                                   component={<Link to="/" />}
                              > Dashboard </MenuItem>
                              <SubMenu label='Penduduk'>
                                   <MenuItem component={<Link to="/data-penduduk" />} icon={<GroupUcerIcon size={18} color='black' />} >Data Penduduk</MenuItem>
                                   <MenuItem component={<Link to="/tambah-penduduk" />} icon={<AddUserIcon size={18} color='black' />}>Tambah Data Penduduk</MenuItem>
                              </SubMenu>
                              <SubMenu label='Agenda Desa '>
                                   <MenuItem component={<Link to='/agenda-desa' />} icon={<AgendaIcon size={18} color='black' />}>Data Agenda</MenuItem>
                                   <MenuItem component={<Link to="/tambah-agenda" />} icon={<AddAgendaIcon size={18} color='black' />}>Tambah Agenda Desa</MenuItem>
                              </SubMenu>
                              <SubMenu label='Data Desa'>
                                   <MenuItem component={<Link to='/data-desa' />} icon={<DataDesaIcon size={18} color='black' />}>Profil Desa</MenuItem>
                              </SubMenu>
                              <SubMenu label='APBDes'>
                                   <MenuItem component={<Link to="/apbdes" />}>Data APBDes</MenuItem>
                                   {/* <MenuItem component={<Link to='/wisata' />}>Objek Wisata</MenuItem> */}
                              </SubMenu>
                              {/* <SubMenu label='Layanan Surat'>
                                   <MenuItem>Surat Keterangan Usaha</MenuItem>
                                   <MenuItem>Pengaturan</MenuItem>
                              </SubMenu> */}
                              <SubMenu label="Organisasi Desa">
                                   <MenuItem component={<Link to='/organisasi' />} >Data Organisasi</MenuItem>

                              </SubMenu>
                              <SubMenu label='Pengumuman'>
                                   <MenuItem icon={<PengumumanIcon size={18} color='black' />}>Riwayat Pengumuman</MenuItem>
                                   <MenuItem icon={<AddPengumumanIcon size={18} color='black' />}>Tambah Pengumuman Pengumuman  </MenuItem>
                              </SubMenu>
                              <MenuItem disabled className='mt-6'></MenuItem>
                              <MenuItem className='text-center rounded-[5px] bg-[#fdcece] text-[#f84444]'>Keluar</MenuItem>
                         </Menu>
                    </Side>
               </ScrollArea>


          </>
     )
}
