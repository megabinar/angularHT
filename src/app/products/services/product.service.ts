import { Injectable } from '@angular/core';
import { ProductItem, Category } from '../models/product';

let id = 3;

@Injectable()
export class ProductService {
  private items: ProductItem[] = [{
    id: 1,
    name: 'Product1',
    description: 'description 1',
    category: Category.Fishing,
    price: 999,
    isAvailable: true,
    ingredients: ['One'],
    equivalents: [' One']
  },
  {
    id: 2,
    name: 'Product2',
    description: 'description 2',
    category: Category.Fishing,
    price: 777,
    isAvailable: false,
    ingredients: ['One'],
    equivalents: [' One']
  }];

  constructor() { }

  getAll(): ProductItem[] {
    return this.items;
  }

  add(name: string) {
    this.items.push({
      id: id++,
      name, category: Category.Fishing,
      description: 'desc',
      price: 1,
      isAvailable: true,
      equivalents: [],
      ingredients: []
    });

  }
}
