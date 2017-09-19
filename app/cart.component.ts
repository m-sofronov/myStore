import { Component, OnInit } from '@angular/core';

@Component ({
	selector: 'my-cart';
	templateUrl: `app/cart.component.html`;
	styleUrls: [`app/cart.component.css`]
})

export class CartComponent implements OnInit {
	phones: Phone[];
    selectedPone: Phone;

	constructor() { }

	 ngOnInit() {
	 }

	count: number=0;
    increase() : void {
        this.count++;
    }
}