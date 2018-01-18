import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';

@Injectable()
export class ProductService {

  constructor() { }

  getAll(): Product[] {
    return [{
      name: 'Product1',
      description: 'description 1',
      category: Category.Fishing,
      price: 999,
      isAvailable: true,
      ingredients: ['One'],
      equivalents: [' One']
    },
    {
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
