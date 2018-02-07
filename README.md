# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Functionality
- show hard-coded list of products.
- add/remove products from/to cart

## What used where (to mark home task as done)
* CartService modified according to requirements
* Added LocalStorageService
* Added ConfigOptionsService (using LocalStorageService)
* Added ConstantsService (registered using token and useValue)
* Added GeneratorService (registered using token and factory)
* Services injected as Optional
* appClickToFill directive applied to root and changes color of target using Renderer2
* scroll is visible

Q:
```javascript
@NgModule({
  imports: [
    CommonModule,
    // CartModule //TODO Наверное подключается в appModule потому что, не совсем понял
  ],
  exports: [ProductListComponent],
  declarations: [ProductComponent, ProductListComponent],
  providers: [ProductService]
})
export class ProductsModule { }
```