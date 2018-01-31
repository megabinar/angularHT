import {
  Component, OnInit, Input, Output, ViewChild,
  Renderer2, AfterViewInit, ElementRef
} from '@angular/core';
import { ProductItem } from '../../models/product';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../../../../styles.fix.css', './product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {
  @Input() product: ProductItem;
  @Output() buy = new EventEmitter<any>();
  @ViewChild('available', { read: ElementRef }) availableEl: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (this.product.isAvailable) {
      this.toggleClass(true);
    }
  }

  private toggleClass(even: boolean) {
    this.renderer.setStyle(this.availableEl.nativeElement, 'color', even ? 'red' : 'blue');
    setTimeout(() => this.toggleClass(!even), 500);
  }
}
