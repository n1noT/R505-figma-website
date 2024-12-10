"use client";

import { Button } from '@/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollPosition } from '@/utils/utils';
import { useState, useEffect } from 'react';

export function Navbar() {
    const [background, setBackground] = useState('bg-white');
    const [hidden, setHidden] = useState(false);
    const scroll = useScrollPosition();
    const [lastPosition, setLastPosition] = useState(0);

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
        <nav className={`flex justify-between items-center px-9 fixed py-6 w-full z-50 ${background} transition-transform duration-300 ${hidden ? '-translate-y-full' : ''}` }>
            <ul className='flex gap-4 justify-start items-center w-full'>
                <li>
                    <Link href="/">
                        <Button variant="primary" size="small">Shop</Button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <Button variant="primary" size="small">About</Button>
                    </Link>
                </li>
                <li>
                    <Image src="/icon-search.static.svg" alt="Search" width={24} height={24} className='ml-4'/>
                </li>
            </ul>
            <div className='lg:w-96'>
                <Image src="/logo-full.static.svg" alt="Logo" width={100} height={50} className='w-full h-full'/>
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
                        <Button variant="primary" size="small">Bag</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}