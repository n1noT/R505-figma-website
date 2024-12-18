"use client";

import { Button } from '@/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@/utils/utils';
import { useState, useEffect } from 'react';

export function Navbar({ menuOpen, setMenuOpen }) {
    const [background, setBackground] = useState('bg-white');
    const [hidden, setHidden] = useState(false);
    const scroll = useScrollPosition();
    const [lastPosition, setLastPosition] = useState(0);
    const [searchHidden, setSearchHidden] = useState(true);


    useEffect(() => {
        if (scroll > 1) {
            setBackground('bg-white');
        } else {
            setBackground('bg-none');
        }
        if (scroll > lastPosition) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }
        setLastPosition(scroll);
    }, [scroll]);

    return (
        <nav className={`flex flex-col justify-between items-center fixed w-full z-50 ${background} transition-transform duration-300 ${hidden ? '-translate-y-full' : ''}`}>
            <div className={`flex gap-4 justify-start items-center w-full ${searchHidden ? 'hidden' : ''}`}>
                <input type="text" placeholder="Search" className='w-full h-10 text-3xl border-b-4 border-black px-16 py-8 font-bold' />
            </div>
            <div className='flex justify-between items-center p-2 md:px-9 md:py-6 w-full'>
                <ul className='gap-2 md:gap-4 justify-start items-center w-full flex flex-row'>
                    <li className='hidden md:flex'>
                        <Link href="/">
                            <Button variant="primary" size="small">Shop</Button>
                        </Link>
                    </li>
                    <li className='hidden md:flex'>
                        <Link href="/">
                            <Button variant="primary" size="small">About</Button>
                        </Link>
                    </li>
                    <li className='flex md:hidden rounded-full p-2 border-2 border-black w-min'>
                        <button onClick={() => setMenuOpen(!menuOpen)} className='focus:outline-none'>
                            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
                            </svg>
                        </button>
                    </li>
                    <li onClick={() => setSearchHidden(!searchHidden)} className='w-12'>
                        <Image src="/icon-search.static.svg" alt="Search" width={24} height={24} className='md:ml-4 cursor-pointer' />
                    </li>
                </ul>




                <div className='lg:w-96'>
                    <Image src="/logo-full.static.svg" alt="Logo" width={100} height={50} className='w-full h-full' />
                </div>
                <ul className='flex gap-4 justify-end items-center w-full '>
                    <li>
                        <Link href="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="w-6 h-6"
                                viewBox="0 0 24 24">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 1.5c-2.575 0-4.49 1.593-4.49 5.747s1.664 4.985 1.954 5.27c.267.358.267.855 0 1.213-.238.245-4.544 1.116-6.115 2.723a4.647 4.647 0 0 0-1.665 2.915c-.069.293-.135 1.14-.181 1.88-.043.67.434 1.252 1.443 1.252h18.118c.491 0 1.477-.573 1.435-1.237-.047-.743-.113-1.6-.183-1.895a4.645 4.645 0 0 0-1.664-2.887c-1.572-1.621-5.878-2.493-6.116-2.724a1.019 1.019 0 0 1 0-1.212c.29-.286 1.955-1.103 1.955-5.27 0-4.168-1.85-5.775-4.49-5.775Z">
                                </path>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Button variant="primary" size="small" className={"flex gap-2"}><span className='hidden md:flex'>Cart</span>0</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}