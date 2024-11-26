import { Navbar } from "@/components/navbar";
import ProductsCarousel from "@/components/productsCarousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-20"></div>
      <ProductsCarousel/>
      <div className="flex justify-center items-center h-[200rem]">
        <h1 className="text-4xl font-bold">Hello, world!</h1>
      </div>
    </div>
  );
}
