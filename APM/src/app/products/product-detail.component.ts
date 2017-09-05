import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage: string;
  pageTitle: string = 'Product Detail';
  products: IProduct[] = [];
  product: IProduct;
  fProducts: IProduct[];

  constructor(private _route: ActivatedRoute, 
              private _router: Router,
              private _productService: ProductService) { }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  fetchProduct(id): void {
    for (let k in this.products) {
      this.product = this.products[this.products.indexOf(id)];
      
    }
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this._productService.getProducts()
        .subscribe(products => {
           {
            this.products = products; 
            this.fProducts = this.products;            
          }
        }, error => this.errorMessage = <any>error);
    this.fProducts = this.products;   
  }
    // this.product =     {
    //   "productId": id,
    //   "productName": "Leaf Rake",
    //   "productCode": "GDN-0011",
    //   "releaseDate": "March 19, 2016",
    //   "description": "Leaf rake with 48-inch wooden handle.",
    //   "price": 19.95,
    //   "starRating": 3.2,
    //   "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // }
 
}
