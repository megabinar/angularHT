import { Component, OnInit, Input, Output } from '@angular/core';
import { Category } from '../category';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../../styles.fix.css', './product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: Category;
  @Input() isAvailable: boolean;
  @Input() ingredients: string[];
  @Input() equivalents: string[];

  @Output() buy = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
}
