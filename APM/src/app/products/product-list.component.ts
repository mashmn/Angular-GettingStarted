import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    //listFilter: string = "cart";

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter=value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];

    products: IProduct[] = [
        {
            "productID": 2,
            "productName": "Cart",
            "productCode": "GG-123",
            "releaseDate": "March 31, 2016",
            "description": "Pull stuff around",
            "price": 12.11,
            "starRating": 4.1,
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRht_Lei15rNKqWHe-_adyTjGKNfj06ObrX5kOutnzYOx_R61K-"
        },
        {
            "productID": 13,
            "productName": "Chicken",
            "productCode": "XX-123",
            "releaseDate": "April 15, 2017",
            "description": "Chicken meat",
            "price": 19.23,
            "starRating": 3.7,
            "imageUrl": "data:image/jpeg;base64,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"
        }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}