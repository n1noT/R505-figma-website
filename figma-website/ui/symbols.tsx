export default function Symbols ({ symbol }) {
    if (symbol == 'star'){
        return(<svg xmlns="http://www.w3.org/2000/svg" width="38" height="37" fill="none"><path fill="#C7B9FF" d="M15.852 0h6.166l-2.055 18.5h-2.056zM22.02 37h-6.167l2.055-18.5h2.056z"/><path fill="#C7B9FF" d="m8.035 33.762-4.36-4.36L18.21 17.772l1.453 1.454z"/><path fill="#C7B9FF" d="m29.837 3.238 4.36 4.36-14.535 11.629-1.453-1.454z"/><path fill="#C7B9FF" d="m3.676 7.599 4.36-4.36 11.628 14.534-1.453 1.454z"/><path fill="#C7B9FF" d="m34.2 29.401-4.361 4.36L18.21 19.228l1.453-1.454z"/><path fill="#C7B9FF" d="M.438 21.583v-6.166l18.5 2.055v2.056zM37.438 15.417v6.166l-18.5-2.055v-2.056z"/></svg>)
    }

    if(symbol == 'zigzag'){
        return(<svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" fill="none"><path fill="#F24E1E" d="M6.41 0h16l14 10-20 14 14 12h-16l-14-12 20-14z"/></svg>)
    }

    if(symbol == 'triangle'){
        return(<svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" fill="none"><path stroke="#0FA958" stroke-width="4.132" d="m18.652 4.687 15.06 26.774H3.592z"/><path fill="#0FA958" d="M23.196 25.263h-9.09L18.651 17z"/></svg>)
    }

    if(symbol == 'rounded'){
        return(<svg xmlns="http://www.w3.org/2000/svg" width="38" height="33" fill="none"><path fill="#F24E1E" d="M.438 4.125V0h37.125v4.125c-8.25 0-14.438 6.188-14.438 12.375s6.188 12.375 14.438 12.375V33H.438v-4.125c8.25 0 14.437-6.187 14.437-12.375S8.688 4.125.438 4.125"/></svg>)
    }

    if(symbol == 'sun'){
        return(<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><path fill="#FFC700" d="M16.935.408h4.132v10.329h-4.132zM16.935 27.263h4.132v10.329h-4.132zM4.134 7.025l2.889-2.889 7.715 7.715-2.889 2.889zM23.129 26.02l2.888-2.888 7.715 7.715-2.888 2.888zM33.735 7.025l-2.888-2.889-7.715 7.715 2.888 2.889zM14.74 26.02l-2.888-2.888-7.716 7.715 2.889 2.889zM.407 21.066v-4.132h10.33v4.132zM27.263 21.065v-4.132h10.329v4.132z"/></svg>)
    }

}