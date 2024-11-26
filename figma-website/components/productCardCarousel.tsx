import Image from 'next/image';

export default function ProductCardCarousel({ product }) {
    return (
        <div className='select-none'>
            <Image src={`/products/${product.image}`} width={150} height={100} alt="product"/>
        </div>
    );
}