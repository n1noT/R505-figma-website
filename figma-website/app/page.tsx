"use client";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ProductsCarousel from "@/components/productsCarousel";
import Shop from "@/components/shop";
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {menuOpen && (
        <div className='md:hidden fixed bg-white w-full h-full top-16 left-0 flex flex-col gap-16 justify-start items-start py-20 px-4 z-40'>
          <ul className='flex flex-col gap-6 w-full text-5xl font-bold'>
            <li className='cursor-pointer'>
              <Link href="/">
                Shop
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link href="/"
              >
                About
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 font-bold ">
                            <li>
                                <Link href={"/"} className="hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
        </div>
      )}
      <div className="h-20"></div>
      <ProductsCarousel />
      <Shop />
      <Footer />
    </div>
  );
}
