import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Dusun } from '../../interfaces/dusun';
import { deleteDusun, getDusun } from '../../services/desaServices';
import { useToast } from '../../components/ui/use-toast';

export default function DusunPage() {
  const [, setIsLoggedIn] = useState(false);
  const [dusun, setDusun] = useState<Dusun[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchDusun() {
      try {
        const data = await getDusun();
        setDusun(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('error:', error.message);
        } else {
          console.error('An unexpected error occurred:', error);
        }
      }
    }
    fetchDusun();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      if (!id) {
        return;
      }
      await deleteDusun(id);
      toast({ title: "Success", description: "Dusun berhasil dihapus!" });
      setDusun(dusun.filter(d => d.id !== id));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({ title: "Error", description: error.message });
    }
  };

  return (
    <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="bg-[#D9D9D98B] rounded-[15px]">
        <div className="p-8">
          <div className="flex items-center justify-between">
            <div className="relative w-[376px]">
              <FontAwesomeIcon icon={faSearch} className="absolute top-[10px] left-[10px]" />
              <Input placeholder="Ketikkan kata kunci..." className="pl-[35px] rounded-[23px]" />
            </div>
            <div className="">
              <Button width={249} height={47} color='white' bgColor='#0890EA' rounded={5}>
                <Link to='/tambah-dusun'>
                  Tambah Dusun
                </Link>
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-[15px] mt-6">
            <Table>
              <TableHeader style={{
                borderBottom: '#0890EA solid',
              }}>
                <TableHead>NO</TableHead>
                <TableHead>Nama Dusun</TableHead>
                <TableHead>Ketua</TableHead>
                <TableHead className='text-center'>Aksi</TableHead>
              </TableHeader>
              <TableBody>
                {dusun.map((d, index) =>
                  <TableRow key={d.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{d.nama_dusun}</TableCell>
                    <TableCell>{d.nama_ketua}</TableCell>
                    <TableCell>
                      <div className="flex justify-center">
                        <div className="flex justify-center text-[#0890EA] text-[12px] bg-[#0890EA60] w-[70px] h-[23px] text-center rounded-[5px]">
                          <Button>
                            <Link to={`/edit-dusun/${d.id}`}>
                              Ubah
                            </Link>
                          </Button>

                        </div>
                        <div className="flex ml-4 justify-center text-[#EA081F] text-[12px] bg-[#EA083160] w-[70px] h-[23px] text-center rounded-[5px]">
                          <button onClick={() => {
                            if (d.id !== undefined) {
                              handleDelete(d.id);
                            }
                          }}>Hapus</button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </SidebarLayout>
  )
}
