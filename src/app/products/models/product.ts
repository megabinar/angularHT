
export enum Category {
    Fishing,
    Weapon
}

export interface ProductItem {
    id: number;
    name: string;
    description?: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    ingredients?: string[];
    equivalents?: string[];
}
