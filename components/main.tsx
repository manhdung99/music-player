import React from 'react'
import Link from 'next/link';
import MainHead from './mainHead';
import MainFooter from './mainFooter';
import MainContent from './mainContent';
export default function Main() {
    return (
        <div className='pb-[120px]'>
            <MainHead />
            <MainContent />
            <MainFooter />
        </div>
        
    )
}
