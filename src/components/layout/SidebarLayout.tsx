import React from 'react'
import Sidebar from '../ui/sidebar'
import { ScrollArea } from '../ui/scroll';

export default function SidebarLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <>
               <div className="flex w-full min-h-screen flex-row bg-[#40A2E3]">
                    <Sidebar />
                    <div className=" ml-1 flex-[6]">
                         <ScrollArea className='h-screen pt-4'>
                              {children}
                         </ScrollArea>
                    </div>
               </div>
          </>
     )
}
