import { Navbar } from "@/components/navbar";
import ProductsCarousel from "@/components/productsCarousel";
import Slogan from "@/components/slogan";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-20"></div>
      <ProductsCarousel/>
      <Slogan />
    </div>
  );
}
