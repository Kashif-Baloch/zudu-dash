import React from 'react'

const Header = ({ title }: { title: string }) => {
    return (
        <div className='w-full flex items-center justify-between border-y-[#D1D5DB] border-y-[1px] p-[14px]'>
            <div className='flex items-center justify-start gap-2'>
                <h2 className='text-[#262E39] font-[700] text-[24px] leading-[32px]'>
                    {title}
                </h2>
            </div>
            <div className='size-[40px] aspect-square shrink-0 border-[1px] border-[#D1D5DB] cursor-pointer rounded-[8px] flex items-center justify-center hover:bg-gray-100 transition-all'>
                <img src="https://randomuser.me/portraits/men/20.jpg" alt='Dummy Image' className='w-full max-w-[30px] aspect-square shrink-0 rounded-[8px]' />
            </div>
        </div>
    )
}

export default Header
