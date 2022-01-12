import React from 'react'
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight,faSearch } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/fontawesome-free-regular";
export default function Main() {


  const ArrowLeft = faArrowLeft as IconProp;
  const ArrowRight = faArrowRight as IconProp;
  const Search = faSearch as IconProp;

    return (
        <div className='py-[20px] '>
            <div className='flex text-white items-center'>
            <span className='mx-[24px] cursor-pointer'><FontAwesomeIcon icon={ArrowLeft} className='w-[24px] h-[24px]' /></span>
            <span className='cursor-pointer'><FontAwesomeIcon icon={ArrowRight} className='w-[24px] h-[24px]' /></span>
            <div className='flex items-center relative ml-[24px]'>
                <span className='absolute left-[8px]'><FontAwesomeIcon icon={Search} className='w-[18px] h-[18px]'/></span>
                <input className='w-[540px] h-[40px] bg-[#2f2739] px-[40px] rounded-[20px] outline-0' placeholder='Nhập tên bài hát, nghệ sĩ hoặc MV...' />
            </div>
            </div>
            <div>

            </div>
        </div>
    )
}
