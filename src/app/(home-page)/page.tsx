import CategoriesCard from "@/components/features/categories/_components/categories-card";
import HeroSection from "@/components/features/home/_components/hero-section";
import ProductCard from "@/components/features/products/_components/product-card";



export default function HomePage() {
  return (
     <div className="min-h-screen w-full bg-[#320241] flex flex-col items-center justify-center p-6">
        <HeroSection/>
        <ProductCard/>
        <CategoriesCard/>
     </div>
  )
}
