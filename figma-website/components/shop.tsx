"use client";

import Symbols from "@/ui/symbols";
import { useState } from "react";
import GridProducts from "@/ui/gridProducts";

export default function Shop() { 
    const [activeLayers, setActiveLayers] = useState(true);
    const [activeComponents, setActiveComponents] = useState(true);

    const data = {
        layers : [
            {
                image: "20240619_Figma_Store_4914_600x.jpg",
                frame: "picked-retangle",
                name: "Product 1"
            },
            {
                image: "20240619_Figma_Store_4883_600x.jpg",
                imageHover: "20240619_Figma_Store_4812_1000x.jpg",
                frame: "hourglass",
                name: "Product 2"
            },
            {
                image: "20240619_Figma_Store_4812_1000x.jpg",
                imageHover: "20240619_Figma_Store_4883_600x.jpg",
                frame: "octogon",
                name: "Product 3"
            }
        ],
        components: [
            {
                image: "20240619_Figma_Store_4764_be63c001-0c88-468c-9a18-59aff3703031_600x.jpg",
                frame: "square",
                name: "Product 4"
            },
            {
                image: "20240619_Figma_Store_4506_600x.jpg",
                frame: "hourglass",
                name: "Product 5"
            },
            {
                image: "20240619_Figma_Store_4699_315ebfd9-ee39-4870-bbf5-4600a9eab645_1000x.jpg",
                frame: "octogon",
                name: "Product 7"
            }
        ]
    }

    const handleMenu = (e) => {
        const targetName = e.target.getAttribute("name");

        if(targetName === "layers") {
            setActiveLayers(true);
            setActiveComponents(false);
        }
        if(targetName === "components") {
            setActiveComponents(true);
            setActiveLayers(false);
        }
    }
       
    return (
        <section>
            <div className="flex justify-center items-center pt-40 p-96 pb-16 bg-white w-full group">
                <div className="font-bold text-black text-7xl flex flex-wrap justify-center items-center">
                    <span className="group-hover:opacity-50 px-2"> Figma's </span> 
                    <Symbols symbol="star"/> 
                    <span className="group-hover:opacity-50 px-2"> Collection </span>
                    <Symbols symbol="rounded"/> 
                    <span className="group-hover:opacity-50 px-2"> Of </span> 
                    <button className={`group-hover:opacity-100 underline px-2 ${activeLayers ? "opacity-100" : "!opacity-50"}`} name="layers" onClick={handleMenu}> Layers </button> 
                    <Symbols symbol="zigzag"/> 
                    <span className="group-hover:opacity-50 px-2"> And </span> 
                    <Symbols symbol="triangle"/> 
                    <button className={`group-hover:opacity-100 underline px-2 ${activeComponents ? "opacity-100" : "!opacity-50"}`} name="components" onClick={handleMenu}> Components </button> 
                    <Symbols symbol="sun"/> 
                    <span className="group-hover:opacity-50 px-2"> For </span> 
                    <span className="group-hover:opacity-50 px-2"> you </span> 
                    <Symbols symbol="zigzag"/> 
                    <span className="group-hover:opacity-50 px-2"> and </span> 
                    <Symbols symbol="rounded"/> 
                    <span className="group-hover:opacity-50 px-2"> your </span> 
                    <Symbols symbol="triangle"/> 
                    <span className="group-hover:opacity-50 px-2"> friends </span>
                </div>
            </div>

    
            {activeLayers ? <GridProducts data={data.layers} /> : <></>}
            {activeComponents ? <GridProducts data={data.components} /> : <></>}
        </section>
    );
}