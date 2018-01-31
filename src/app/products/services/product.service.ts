import { Injectable } from '@angular/core';
import { ProductItem, Category } from '../models/product';

@Injectable()
export class ProductService {

  constructor() { }

  getAll(): ProductItem[] {
    return [{
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
  }
}
