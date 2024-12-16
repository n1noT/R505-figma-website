import Link from "next/link";

export default function Footer() {
    const colors = [
        'bg-red-500',
        'bg-yellow-500',
        'bg-green-500',
        'bg-blue-500',
        'bg-indigo-500',
        'bg-purple-500',
        'bg-pink-500'
    ];

    const randomColor = Math.floor(Math.random() * colors.length)

    return (
        <footer className={`flex justify-center items-center p-12 w-full ${colors[randomColor]} flex-col gap-4 relative overflow-hidden`}>
            <div className="flex justify-center gap-8 ">
                <svg className="" width="250" height="274" viewBox="0 0 250 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50 0C22.3858 0 0 22.3858 0 50V87C0 114.614 22.3858 137 50 137C22.3858 137 0 159.386 0 187V224C0 251.614 22.3858 274 50 274H200C227.614 274 250 251.614 250 224V187C250 159.386 227.614 137 200 137C227.614 137 250 114.614 250 87V50C250 22.3858 227.614 0 200 0H50Z" fill="#0FA958"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M103.559 53.9999H99.3094V34.7466H91.3662V31.1182H111.633V34.7466H103.559V53.9999ZM119.172 53.9999H114.923V31.1182H119.172V40.3689H129.894V31.1182H134.144V53.9999H129.894V44.03H119.172V53.9999ZM140.077 53.9999H156.879V50.3715H144.327V43.9973H153.741V40.4016H144.327V34.7466H156.879V31.1182H140.077V53.9999ZM89.1055 236.43C89.1055 240.352 86.1963 243.49 79.9855 243.49C74.1343 243.49 70.9636 240.418 70.0156 236.757L74.0363 235.22C74.6573 237.639 76.4552 239.96 80.0509 239.96C83.2543 239.96 84.6926 238.587 84.6926 236.724C84.6926 235.089 83.5485 234.043 80.77 233.553L77.8608 233.063C73.8075 232.376 71.1597 230.48 71.1597 226.394C71.1597 222.701 74.2651 219.628 79.7567 219.628C85.2483 219.628 87.9614 222.635 88.844 225.414L84.8887 226.95C84.2677 225.087 82.8294 223.158 79.6259 223.158C76.7494 223.158 75.5072 224.564 75.5072 226.198C75.5072 227.767 76.6186 228.65 78.7434 229.042L81.718 229.565C86.0655 230.284 89.1055 232.474 89.1055 236.43ZM102.59 243H98.3409V223.747H90.3977V220.118H110.664V223.747H102.59V243ZM123.52 243.49C130.744 243.49 135.419 238.554 135.419 231.592C135.419 224.662 130.679 219.628 123.52 219.628C116.329 219.628 111.622 224.662 111.622 231.592C111.622 238.554 116.296 243.49 123.52 243.49ZM123.52 239.862C118.846 239.862 116.067 236.332 116.067 231.592C116.067 226.787 118.846 223.256 123.52 223.256C128.194 223.256 130.94 226.787 130.94 231.592C130.94 236.332 128.194 239.862 123.52 239.862ZM144.125 243H139.875V220.118H150.531C155.369 220.118 158.18 222.668 158.18 226.231C158.18 230.088 155.369 231.984 152.493 232.507C155.402 232.867 156.971 234.272 157.527 237.41L158.573 243H153.996L153.212 237.77C152.787 234.991 151.447 233.978 148.505 233.978H144.125V243ZM144.125 223.747V230.415H149.78C152.035 230.415 153.735 229.369 153.735 227.081C153.735 224.793 152.035 223.747 149.78 223.747H144.125ZM163.114 243H179.916V239.372H167.364V232.997H176.778V229.402H167.364V223.747H179.916V220.118H163.114V243ZM115.124 86.1377L115.124 90.3872H124.211V100.651H127.872V90.3872H134.377V103.299H138.006L138.006 86.1377H115.124ZM115.124 107.047V111.296H138.006V107.047H115.124ZM118.687 134.13C117.118 133.248 114.634 131.221 114.634 126.547C114.634 120.467 119.014 115.727 126.5 115.727C133.397 115.727 138.496 120.924 138.496 127.56C138.496 133.607 135.195 136.941 131.566 138.151L129.997 134.032C132.71 133.084 134.835 131.221 134.835 127.527C134.835 123.507 131.86 120.172 126.532 120.172C121.237 120.172 118.262 123.343 118.262 127.397C118.262 131.515 120.779 133.575 123.035 133.803V126.187H126.696V138.053H115.124V134.13H118.687ZM115.124 142.991V147.24H125.584H134.149L115.124 154.17V157.701L134.149 164.663H125.584H115.124V168.913H138.006V162.179L126.042 157.799C123.002 156.687 122.054 156.328 121.4 156.066C121.989 155.805 123.002 155.412 126.042 154.334L138.006 149.953V142.991H115.124ZM115.124 194.986V190.279L120.779 188.35V178.707L115.124 176.713L115.124 172.137L138.006 180.799V186.454L115.124 194.986ZM129.932 181.943L124.407 179.982V187.075L129.964 185.179L134.574 183.545C133.957 183.339 133.18 183.07 131.899 182.625C131.346 182.433 130.7 182.209 129.932 181.943Z" fill="black"></path>
                </svg>
                <ul className="flex gap-8 ">
                    <li>
                        <p className="text-4xl w-min font-bold text-wrap">
                            OBJECTS THAT INSPIRE.
                        </p>
                    </li>

                    <li>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link href={"/"} className="font-bold hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="font-bold hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="font-bold hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="font-bold hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="max-w-80">
                        <p className="text-wrap">This site is powered by  Harper + Scott, a Certified B-Corporation. For more information read Harper + Scott's CSR policy.</p>
                    </li>
                </ul>
            </div>

            <ul className="flex gap-4">
                <li>
                    <Link href={"/"} className="hover:underline text-3xl">
                        FIGMA
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:underline text-3xl">
                        TWITTER
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:underline text-3xl">
                        INSTAGRAM
                    </Link>
                </li>
                <li>
                    <Link href={"/"} className="hover:underline text-3xl">
                        FACEBOOK
                    </Link>
                </li>
            </ul>
            <p className="absolute bottom-0 text-4xl animate-bandeau uppercase font-bold">Figma's marvelously considered collection of objects for our time on</p>
            <p className="absolute bottom-0 text-4xl animate-bandeau-follower uppercase font-bold">Figma's marvelously considered collection of objects for our time on</p>
        </footer>
    )

}