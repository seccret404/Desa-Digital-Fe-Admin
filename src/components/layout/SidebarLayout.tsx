import React from 'react'
import Sidebar from '../ui/sidebar'
import { ScrollArea } from '../ui/scroll';
import { Toaster } from '../ui/toaster';
export default function SidebarLayout({
     children,
}: {
     children: React.ReactNode;
}) {
     return (
          <>
               <div className="flex w-full min-h-screen flex-row bg-[#F5F5F5]">
                    <Sidebar />
                    <div className=" ml-4 mr-4 flex-[6]">
                         <ScrollArea className='h-screen pt-4'>
                              {children}
                         </ScrollArea>
                         <Toaster/>
                    </div>
               </div>
          </>
     )
}
