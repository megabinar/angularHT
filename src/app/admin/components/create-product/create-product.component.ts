import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../products';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  onCreate(i: string) {
    this.productService.add(i);
    this.router.navigate(['admin', 'products']);
  }
}
