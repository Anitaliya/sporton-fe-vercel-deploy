"use client"

import { Product } from "@/app/types";
import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/app/lib/api";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductsProps = {
    products: Product[]
}

const ProductsSection = ({products}: TProductsProps) => {
    const {addItem} = useCartStore();

    const handleAddtoCart = (e: React.MouseEvent, product:Product) => {
        e.preventDefault();
        e.stopPropagation();
        addItem(product);
    }

    return (
        <section id="products-section" className="container mx-auto mt-32 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">OUR </span>PRODUCTS
            </h2>

            <div className="grid grid-cols-4 gap-5">
                {products.map((product) => (
                    <Link 
                        href={`/product/${product._id}`} 
                        key={product._id} 
                        className="block h-full"
                    >
                        <div className="flex flex-col h-full">
                            <div className="relative bg-primary-light h-[260px] w-full flex items-center justify-center">
                                <Image
                                    src={getImageUrl(product.imageUrl)}
                                    alt={product.name}
                                    width={220}
                                    height={220}
                                    className="object-contain"
                                />
                                <Button className="w-10 h-10 p-2! absolute top-3 right-3" onClick={(e) => handleAddtoCart(e, product)}>
                                    <FiPlus size={24}/>
                                </Button>
                            </div>

                            <h3 className="font-medium text-lg mt-3">
                                {product.name}
                            </h3>

                            <div className="flex justify-between text-sm text-gray-500 mt-auto">
                                <div>{product.category.name}</div>
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
