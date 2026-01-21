import HeroSection from "./home/hero";
import CategoriesSection from "./home/categories";
import ProductsSection from "./home/products";
import { getAllCategories } from "../services/category.service";
import { getAllProduct } from "../services/product.service";


export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProduct()
  ])

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories = {categories}/>
      <ProductsSection products={products}/>
    </main>
  );
}
