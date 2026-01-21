export interface Category {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: string;
    updateAt: string;
}

export interface Product {
    _id: string;
    name: string;
    description: string;
    imageUrl: string;
    category: Category;
    stick: number;
    price: number;
    createdAt: string;
    updateAt: string;
}