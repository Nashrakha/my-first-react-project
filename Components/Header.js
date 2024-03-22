import React from 'react';
import Link from 'next/link';
const Header = () => {
    return (
        <div className="h-20 bg-green-500 flex items-center justify-between">
            <h2>Logo</h2>
            <div className='flex gap-5'>
                <Link href="/About">About</Link >
                <Link href="/Courses">Courses</Link >
            </div>
        </div>
    )
}

export default Header