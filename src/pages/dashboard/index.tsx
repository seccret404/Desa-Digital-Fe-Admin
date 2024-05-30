import SidebarLayout from '../../components/layout/SidebarLayout';
import { useEffect, useState } from 'react';
import { getCurrentDateTime } from './dateTime';
import {
     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { PendudukDesa } from '../../interfaces/penduduk';
import { getDusun, getPenduduk } from '../../services/desaServices';
import { Dusun } from '../../interfaces/dusun';

interface DateTime {
     dateString: string;
     timeString: string;
}

export default function Dashboard() {
     const [, setIsLoggedIn] = useState(false);
     const [dateTime, setDateTime] = useState<DateTime>(getCurrentDateTime());
     const [, setPenduduk] = useState<PendudukDesa[]>([]);
     const [totalDusun, setTotalDusun] = useState<number>(0);
     const [totalPopulation, setTotalPopulation] = useState<number>(0);
     const [totalUniqueKK, setTotalUniqueKK] = useState<number>(0);
     const [chartData, setChartData] = useState<{ month: string; population: number; }[]>([]);
     const [, setDusun] = useState<Dusun[]>([]);


     useEffect(() => {
          async function fetchDusun() {
               try {
                    const data = await getDusun();
                    setDusun(data);

                    const totalDusun = data.length;
                    setTotalDusun(totalDusun);
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
     useEffect(() => {
          const intervalId = setInterval(() => {
               setDateTime(getCurrentDateTime());
          }, 1000);

          return () => clearInterval(intervalId);
     }, []);

     useEffect(() => {
          async function fetchPenduduk() {
               try {
                    const data = await getPenduduk();
                    setPenduduk(data);

                    const currentYear = new Date().getFullYear();
                    const filteredData = data.filter(p => new Date(p.tanggal_lahir).getFullYear() === currentYear);

                    const uniqueKK = new Set(filteredData.map((p) => p.no_kk)).size;
                    const totalPop = data.length;


                    setTotalUniqueKK(uniqueKK);
                    setTotalPopulation(totalPop);

                    const monthlyData = Array(12).fill(0).map((_, index) => {
                         const monthPopulation = filteredData.filter(p => new Date(p.tanggal_lahir).getMonth() === index).length;
                         return {
                              month: new Date(currentYear, index).toLocaleString('default', { month: 'short' }),
                              population: monthPopulation
                         };
                    });

                    setChartData(monthlyData);

               } catch (error) {
                    if (error instanceof Error) {
                         console.error('error:', error.message);
                    } else {
                         console.error('An unexpected error occurred:', error);
                    }
               }
          }
          fetchPenduduk();
     }, []);

     return (
          <SidebarLayout setIsLoggedIn={setIsLoggedIn}>
               <div className="text-[18px] font-medium">
                    Dashboard
               </div>
               <div className="bg-[#ffffff] rounded-[8px]">
                    <div className="p-4 flex justify-between">
                         <div className="">
                              <div className="text-[16px] font-bold">
                                   Selamat Datang Dihalaman Admin Desa Digital !
                              </div>
                              <div className="text-[#616161] text-[12px]">
                                   Lakukan update informasi desa hari ini!
                              </div>
                         </div>
                         <div className="">
                              <div className="text-center font-medium">
                                   {dateTime.dateString}
                              </div>
                              <div className="text-end text-[#]">
                                   {dateTime.timeString}
                              </div>
                         </div>
                    </div>
               </div>
               <div className="bg-[#ffffff] rounded-[8px] mt-4">
                    <div className="p-4 flex justify-between items-center">
                         <div className="">
                              <div className="text-[16px] font-bold">Total Penduduk</div>
                              <div className="text-center text-[#146ADC] font-medium text-[20px] mt-2">{totalPopulation} Jiwa</div>
                         </div>
                         <div className="h-12 border border-gray-300 mx-4"></div>
                         <div className="">
                              <div className="text-[16px] font-bold">Total Dusun</div>
                              <div className="text-center mt-2 text-[#146ADC] font-medium text-[20px]">{totalDusun} Dusun</div>
                         </div>
                         <div className="h-12 border border-gray-300 mx-4"></div>
                         <div className="">
                              <div className="text-[16px] font-bold">Total Keluarga</div>
                              <div className="text-center mt-2 text-[#146ADC] font-medium text-[20px]">{totalUniqueKK} Keluarga</div>
                         </div>
                    </div>
               </div>
               <div className="bg-[#ffffff] mt-4">
                    <div className="p-4">
                         <div className="">
                              <div className="text-center font-medium text-[16px]">Pertumbuhan Penduduk Tahun 2024</div>
                              <ResponsiveContainer width="100%" height={200}>
                                   <LineChart
                                        data={chartData}
                                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                   >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="population" stroke="#8884d8" fill="#8884d8" />
                                   </LineChart>
                              </ResponsiveContainer>
                         </div>
                    </div>
               </div>
               <div className="bg-[#ffffff] mt-4">
                    <div className="p-4">

                    </div>
               </div>
          </SidebarLayout>
     );
}
