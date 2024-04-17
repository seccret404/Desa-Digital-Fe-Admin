import React from 'react'
import Button from '../../components/ui/button'

export default function CardKapal() {
     return (
          <div className="">
               <div className="bg-white rounded-[10px] w-[288px]">
                    <div className="p-4">
                         <div className="font-medium text-[16px]">
                              Jadwal Penyeberangan Kapal
                         </div>
                         <div className="text-[9px] text-center bg-[#94cfc5] text-[#0D9276] w-[74px] rounded-[5px]">
                              <div className="p-1">
                                   Hari ini, Selasa
                              </div>
                         </div>
                         <div className="">
                              {[...Array(4)].map((_, index) => (
                                   <div key={index} className="bg-[#e9f5f3] rounded-[10px] mt-8">
                                        <div className="p-2">
                                             <div className="font-medium text-[16px]">
                                                  Kapal KM II Sinar Bangun
                                             </div>
                                             <div className="text-[12px] mt-2">
                                                  <div className="flex text-[#0D9276]"><div className="text-[#676A6C]">Berangkat  :</div>  14:00 WIB</div>
                                                  <div className="font-medium">Pelabuhan : Ambarita II</div>
                                             </div>
                                        </div>
                                   </div>
                              ))}
                         </div>
                         <div className="p-6">
                              <hr />
                         </div>
                         <div className="text-[12px]">
                              <Button
                                   width={268} color='white' bgColor='#0890EA' height={38} rounded={ 5}
                              >
                                   Lihat Jadwal Selengkapnya
                              </Button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
