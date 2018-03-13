import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductItem, Category } from '../models/product';

let id_gen = 1000;

@Injectable()
export class ProductPromiseService {
  private readonly productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http
      .get<ProductItem[]>(this.productsUrl)
      .toPromise()
      .catch(this.handleError);
  }

  get(id: number) {
    return this.http
      .get<ProductItem>(this.productsUrl + '/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  add(name: string) {
    const itm = {
      id: id_gen++,
      name, category: Category.Fishing,
      description: 'desc',
      price: 1,
      isAvailable: true,
      equivalents: [],
      ingredients: []
    };

    return this.http.post(this.productsUrl, itm)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
