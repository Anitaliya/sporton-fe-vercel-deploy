import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import Link from "next/link";

const ProductList = [
    {
        name: "Sporton Hyperfast Shoes",
        category: "running",
        price: 329000,
        imgUrl: "shoes1.png"
    },
    {
        name: "Sporton Rackets Tennis",
        category: "tennis",
        price: 450000,
        imgUrl: "racket.png"
    },
    {
        name: "Sporton Running Shoes",
        category: "running",
        price: 450000,
        imgUrl: "tshirt1.png"
    },
    {
        name: "Sporton Running Shoes",
        category: "running",
        price: 450000,
        imgUrl: "shoes2.png"
    },
    {
        name: "Sporton Running Shoes",
        category: "running",
        price: 450000,
        imgUrl: "shoes3.png"
    },
    {
        name: "Sporton Running Shoes",
        category: "running",
        price: 450000,
        imgUrl: "tshirt2.png"
    },
    {
        name: "Sporton Running Shoes",
        category: "running",
        price: 450000,
        imgUrl: "shoes4.png"
    },
    {
        name: "Sporton Running Shoes",
        category: "running",
        price: 450000,
        imgUrl: "racket2.png"
    }
];

const ProductsSection = () => {
    return (
        <section id="products-section" className="container mx-auto mt-32 mb-52">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">OUR </span>PRODUCTS
            </h2>

            <div className="grid grid-cols-4 gap-6">
                {ProductList.map((product, index) => (
                    <Link href={`/product/${product.name}`} key={index} className="block h-full">
                        <div className="flex flex-col h-full">
                            <div className="bg-primary-light h-[260px] w-full flex items-center justify-center">
                                <Image
                                    src={`/images/products/${product.imgUrl}`}
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
