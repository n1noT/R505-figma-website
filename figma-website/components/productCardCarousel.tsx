import { useState } from 'react';
import Image from 'next/image';
import Frames from '@/ui/frames';

export default function ProductCardCarousel({ product }) {
    const [clipPathId, setClipPathId] = useState('');

    return (
        <div className="select-none relative w-full h-52 lg:h-card-lg group">
            <Frames frame={product.frame} setClipPathId={setClipPathId} />
            <div className="absolute inset-0 bg-background">
                <Image
                    src={`/products/${product.image}`}
                    layout='fill'
                    className="absolute inset-0 object-cover transition-transform duration-300 ease-in-out aspect-square"
                    style={{ clipPath: `url(#${clipPathId})` }}
                    alt="product"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-30">
                <button className="bg-white text-black py-1 px-4 rounded-full font-black text-xl">
                    {product.name}
                </button>
            </div>
        </div>
    );
}