# Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Functionality
- show initial list of products.
- navigation to individual product
- Navigate to cart
- add/remove products from/to cart
- navigate to order page.
- router active link

# Admin
- Lazy loading
- Guarded by guard (always pass);
- Add a product

## Problems solved
Lazy loaded modules not sharing instances of services.
Example: If added products on Admin, they are not visible in products list (different instances of ProductService)https://angular.io/guide/singleton-services#forroot