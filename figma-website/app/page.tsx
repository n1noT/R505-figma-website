import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import ProductsCarousel from "@/components/productsCarousel";
import Shop from "@/components/shop";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="h-20"></div>
      <ProductsCarousel/>
      <Shop />
      <Footer />
    </div>
  );
}
