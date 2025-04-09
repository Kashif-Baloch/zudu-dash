"use client"

import { PanelRight } from 'lucide-react'
import React from 'react'
import { useSidebar } from '../ui/sidebar'

const Header = ({ title }: { title: string }) => {
    const { toggleSidebar } = useSidebar()
    return (
        <div className='w-full flex items-center justify-between border-y-[#D1D5DB] border-y-[1px] p-[14px]'>
            <div className='flex items-center justify-start gap-2'>
                <h2 className='text-[#262E39] font-[700] text-[24px] leading-[32px]'>
                    {title}
                </h2>
            </div>
            <div className='flex items-center justify-end gap-2'>
                <button
                    onClick={toggleSidebar}
                    className="aspect-square size-[40px] border rounded-md group-data-[collapsible=icon]:opacity-0 p-1.5 hover:bg-muted flex items-center justify-center"
                >
                    <PanelRight className="h-5 w-5" />
                </button>
                <div className='size-[40px] aspect-square shrink-0 border-[1px] border-[#D1D5DB] cursor-pointer rounded-[8px] flex items-center justify-center hover:bg-gray-100 transition-all'>

                    <img src="https://randomuser.me/portraits/men/20.jpg" alt='Dummy Image' className='w-full max-w-[30px] aspect-square shrink-0 rounded-[8px]' />
                </div>
            </div>

        </div>
    )
}

export default Header
