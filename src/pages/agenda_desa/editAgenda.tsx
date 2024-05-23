import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidebarLayout from '../../components/layout/SidebarLayout';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import HomeIcon from '../../components/icon/homeIcon';
import ArrowRightIcon from '../../components/icon/arrowRightIcon';
import { getAgendaById, updateAgenda } from '../../services/desaServices';
import { Agenda } from '../../interfaces/agenda';
import { useToast } from '../../components/ui/use-toast';

export default function EditAgenda() {
        const { id } = useParams<{ id: string }>();
        const navigate = useNavigate();
        const { toast } = useToast();
        const [agendaData, setAgendaData] = useState<Agenda | null>(null);

        useEffect(() => {
            async function fetchAgenda() {
                try {
                    if(!id)
{
    return;
}                    const data = await getAgendaById(id);
                setAgendaData(data);
            } catch (error) {
                console.error('Error fetching agenda:', error);
            }
        }
        fetchAgenda();
    }, [id]);

    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        let month: string | number = date.getMonth() + 1;
        let day: string | number = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        return `${year}-${month}-${day}`;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (agendaData) {
            setAgendaData({
                ...agendaData,
                [name]: value,
            });
        }
    };

    const handleUpdate = async () => {
        try {
            if (agendaData) {
                const formattedDate = formatDate(agendaData.tanggal_kegiatan!);
                await updateAgenda(agendaData.id!, { ...agendaData, tanggal_kegiatan: formattedDate });
                toast({
                    title: "Agenda Desa",
                    description: 'Data Berhasil di Update'
                });
                navigate('/agenda-desa'); 
            }
        } catch (error) {
            console.error('Error updating agenda:', error);
            toast({
                title: "Agenda Desa",
                description: 'Data Gagal di Update'
            });
        }
    };
    
    
 
 

    if (!agendaData) {
        return <div>Loading...</div>;
    }

    const back = () =>{
     navigate('/agenda-desa');
    }

    return (
        <SidebarLayout>
            <div className="bg-[#D9D9D98B] rounded-[15px]">
                <div className="p-8">
                    <div className="bg-white flex justify-between p-4 rounded-[7px]">
                        <div className="text-[16px]">Form Edit Agenda</div>
                        <div className="flex">
                            <div className="flex">
                                <HomeIcon color="#0890EA" size={16} />
                            </div>
                            <div className="ml-4 flex">
                                <ArrowRightIcon color="#000000" size={10} />
                            </div>
                            <div className="text-[#D9D9D9] text-[16px] ml-4">Edit Agenda Desa</div>
                        </div>
                    </div>
                    <div className="bg-white rounded-[15px] mt-6 flex justify-center">
                        <div className="p-2 mb-6">
                            <form>
                                <div className="flex items-center mt-4">
                                    <div className="w-[150px] text-[16px]">Nama Kegiatan</div>
                                    <div className="w-[350px]">
                                        <Input
                                            name="nama_kegiatan"
                                            value={agendaData.nama_kegiatan}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="w-[150px] text-[16px]">Hari/Tanggal</div>
                                    <div className="w-[350px]">
                                        <Input
                                            type="date"
                                            name="tanggal_kegiatan"
                                            value={formatDate(agendaData.tanggal_kegiatan)}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="w-[150px] text-[16px]">Lokasi</div>
                                    <div className="w-[350px]">
                                        <Input
                                            name="lokasi"
                                            value={agendaData.lokasi}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="w-[150px] text-[16px]">Tujuan Kegitan</div>
                                    <div className="w-[350px]">
                                        <Input
                                            name="tujuan_kegiatan"
                                            value={agendaData.tujuan_kegiatan}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="w-[150px] text-[16px]">Deskripsi</div>
                                    <div className="w-[350px]">
                                        <Textarea
                                            name="deskripsi_kegiatan"
                                            value={agendaData.deskripsi_kegiatan}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end mt-6">
                                    <div className="mr-6">
                                        <button onClick={back} className="text-white bg-[#F61616] rounded-[5px] w-[142px] h-[30px]">
                                            Batal
                                        </button>
                                    </div>
                                    <div className="">
                                    <button
    className="text-white bg-[#0890EA] rounded-[5px] w-[142px] h-[30px]"
    onClick={handleUpdate}
>
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
    );
}
