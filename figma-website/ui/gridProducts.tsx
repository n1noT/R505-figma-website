function Card ({product}) {
    return (
        <li>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
        </li>
    )
}


export default function GridProducts ({data}) {
    return (
        <ul>
            {data.map((product, index) => (
                <Card key={index} product={product} />
            ))}
        </ul>
    )
}