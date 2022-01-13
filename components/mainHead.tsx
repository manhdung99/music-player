import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight,faSearch,faUser,faCog,faUpload } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export default function MainHead() {

    return (
        <div className='py-[20px] flex justify-between '>
            <div className='flex text-white items-center'>
            <span className='mx-[24px]  hover:opacity-80'><Link href ='/'><a><FontAwesomeIcon icon={faArrowLeft} className='w-[24px] h-[24px]' /></a></Link></span>
            <span className=' hover:opacity-80'><Link href ='/'><a><FontAwesomeIcon icon={faArrowRight} className='w-[24px] h-[24px]' /></a></Link></span>
            <div className='flex items-center relative ml-[24px]'>
                <span className='absolute left-[8px]'><FontAwesomeIcon icon={faSearch} className='w-[18px] h-[18px]'/></span>
                <input className='w-[540px] h-[40px] bg-[#2f2739] px-[40px] rounded-[20px] outline-0' placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...' />
            </div>
            </div>
            <div className='flex mr-[24px] text-white items-center'>
            <span className='p-[10px] mx-[5px] bg-[#2f2739] rounded-[50%] hover:opacity-80'><Link href ='/'><a><FontAwesomeIcon icon={faUpload} className='w-[20px] h-[20px] ' /></a></Link></span>
            <span className='p-[10px] mx-[5px] bg-[#2f2739] rounded-[50%] hover:opacity-80'><Link href ='/'><a><FontAwesomeIcon icon={faCog} className='w-[20px] h-[20px] ' /></a></Link></span>
            <span className='p-[10px] mx-[5px] bg-[#ced5e3] rounded-[50%] hover:opacity-80'><Link href ='/'><a><FontAwesomeIcon icon={faUser} className='w-[20px] h-[20px] ' /></a></Link></span>
            </div>
        </div>
    )
}
