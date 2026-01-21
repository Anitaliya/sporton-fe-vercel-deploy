import { Product } from "@/app/types";
import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";

type TProductsProps = {
    products: Product[]
}

const ProductsSection = ({products}: TProductsProps) => {
    return (
        <section id="products-section" className="container mx-auto mt-32 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">OUR </span>PRODUCTS
            </h2>

            <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                    <Link href={`/product/${product.name}`} key={product.name} className="block h-full">
                        <div className="flex flex-col h-full">
                            <div className="bg-primary-light h-[260px] w-full flex items-center justify-center">
                                <Image
                                    src={getImageUrl(product)}
                                    alt={product.name}
                                    width={220}
                                    height={220}
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="font-medium text-lg mt-3">
                                {product.name}
                            </h3>

                            <div className="flex justify-between text-sm text-gray-500 mt-auto">
                                <div>{product.category}</div>
                                <div className="font-medium text-primary">{priceFormatter(product.price)}</div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default ProductsSection;
