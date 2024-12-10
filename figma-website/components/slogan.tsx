import Symbols from "@/ui/symbols";

export default function Slogan() { 
    return (
        <div className="flex justify-center items-center pt-40 p-96 pb-16 bg-white w-full group">
            <div className="font-bold text-black text-7xl flex flex-wrap justify-center items-center">
                <span className="group-hover:opacity-50 px-2"> Figma's </span> 
                <Symbols symbol="star"/> 
                <span className="group-hover:opacity-50 px-2"> Collection </span> 
                <Symbols symbol="rounded"/> 
                <span className="group-hover:opacity-50 px-2"> Of </span> 
                <span className="group-hover:!opacity-100 underline px-2"> Layers </span> 
                <Symbols symbol="zigzag"/> 
                <span className="group-hover:opacity-50 px-2"> And </span> 
                <Symbols symbol="triangle"/> 
                <span className="group-hover:!opacity-100 underline px-2"> Components </span> 
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
    );
}