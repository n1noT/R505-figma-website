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
                imageHover: "2_de7d7d8a-e69f-4750-b838-202d3cd14f1f_600x.png",
                frame: "picked-retangle",
                name: "Chunky Glyph Tee",
                price: "10"
            },
            {
                image: "20240619_Figma_Store_4883_600x.jpg",
                imageHover: "6_66589f2d-bd3c-4c29-92f5-9254ece2e008_600x.png",
                frame: "hourglass",
                name: "Doodle Tee",
                price: "20"
            },
            {
                image: "20240619_Figma_Store_5395_600x.jpg",
                imageHover: "8_b3284f05-f387-4258-8f05-6a8489e73017_600x.png",
                frame: "octogon",
                name: "Local Styles Crewneck",
                price: "30"
            },
            {
                image: "20240619_Figma_Store_4812_1000x.jpg",
                imageHover: "13_47fe8b71-9cce-4e30-8fd6-bc9c79dc581b_600x.png",
                frame: "octogon",
                name: "Inkblot Tee",
                price: "1"
            },
            
        ],
        components: [
            {
                image: "20240619_Figma_Store_4764_be63c001-0c88-468c-9a18-59aff3703031_600x.jpg",
                imageHover: "5_1200x.png",
                frame: "square",
                name: "Tidy Up Crewneck",
                price : "40"
            },
            {
                image: "20240619_Figma_Store_4506_600x.jpg",
                imageHover: "18_d58ad7a2-49bf-40ff-8852-388fb4aae89c_600x.png",
                frame: "hourglass",
                name: "Coach Jacket",
                price: "50"
            },
            {
                image: "20240619_Figma_Store_4699_315ebfd9-ee39-4870-bbf5-4600a9eab645_1000x.jpg",
                imageHover: "17_600x.png",
                frame: "octogon",
                name: "Elevated Workflows Tee",
                price: "6"
            },
            {
                image: "20240619_Figma_Store_5283_1200x.jpg",
                imageHover: "15_3829d11d-d5e8-4999-9b77-271ce6eb81d0_600x.png",
                frame: "octogon",
                name: "Hug Contents Tee",
                price: "7"
            },
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
            <div className="flex justify-center items-center pt-16 p-8 pb-8 lg:pt-40 lg:p-96 lg:pb-16 bg-white w-full group">
                <div className="font-bold text-black text-lg md:text-7xl flex flex-wrap justify-center items-center">
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"} `}> Figma's </span> 
                    <Symbols symbol="star"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> Collection </span>
                    <Symbols symbol="rounded"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> Of </span> 
                    <button className={`group-hover:opacity-100 underline px-2 ${activeLayers ? "opacity-100" : "!opacity-50"}`} name="layers" onClick={handleMenu}> Layers </button> 
                    <Symbols symbol="zigzag"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> And </span> 
                    <Symbols symbol="triangle"/> 
                    <button className={`group-hover:opacity-100 underline px-2 ${activeComponents ? "opacity-100" : "!opacity-50"}`} name="components" onClick={handleMenu}> Components </button> 
                    <Symbols symbol="sun"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> For </span> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> you </span> 
                    <Symbols symbol="zigzag"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> and </span> 
                    <Symbols symbol="rounded"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> your </span> 
                    <Symbols symbol="triangle"/> 
                    <span className={`group-hover:opacity-50 px-2 ${activeLayers ? "opacity-100" : "!opacity-50"} ${activeComponents ? "opacity-100" : "!opacity-50"}`}> friends </span>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-8 md:py-24 bg-white w-full gap-12">
                {activeLayers ? <GridProducts data={data.layers} /> : <></>}
                {activeComponents ? <GridProducts data={data.components} /> : <></>}
            </div>
        </section>
    );
}