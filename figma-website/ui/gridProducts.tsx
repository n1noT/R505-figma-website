import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import Image from 'next/image'

function Card ({product}) {

    const pattern = [
        'pattern-15_88cf9118-251e-47a8-8f98-e26b2a6f1128_600x',
        'pattern-26_600x',
        'pattern-102_600x',
        'pattern-18_2cef7fa4-ff64-4889-b023-f63a9a79d8f9_600x',
        'pattern-91_1200x'
    ]

    const random = Math.floor(Math.random() * pattern.length)

    console.log(product.imageHover);
    return (
        <li className='group flex flex-col gap-2'>
            <div className="rounded-3xl h-96 w-64 relative overflow-hidden group-hover:border-4 border-black">
                <Image src={`/products/${product.imageHover}`} alt={product.name} layout="fill" className='absolute inset-0 object- hidden group-hover:flex z-20'/>
                <Image src={`/patterns/${pattern[random]}.png`} alt={product.name} layout="fill" className='absolute inset-0 object- hidden group-hover:flex z-10 '/>
                <Image src={`/products/${product.image}`} alt={product.name} layout="fill" className='absolute inset-0 object-cover group-hover:hidden'/>
            </div>
            <div className='flex justify-between'>
                <h2 className='text-black font-black text-xl max-w-40'>{product.name}</h2>
                <p className='text-black text-2xl'>${product.price}</p>
            </div>
        </li>
    )
}


export default function GridProducts ({data}) {
    return (
        <ul className='grid lg:grid-cols-4 gap-8'>
            {data.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </ul>
    )
}