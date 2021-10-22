import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/CartService';
import { Produit } from '../models/Produit';

interface ObjetProduit {
  id?: Produit;
}

interface ObjetCart {
  byId: ObjetProduit;
  allIds: number[];
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})

export class CheckoutPage implements OnInit {
  cart: ObjetCart;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }


  formatTotalPerUnit(produit: Produit) {
    return `${produit.count}x${produit.price}€ : ${produit.count * produit.price}€`;
  }

  addProduit(produit: Produit) {
    this.cartService.addProduit(produit);
    this.cart = this.cartService.cart;
  }

  delProduit(produit: Produit) {
    this.cartService.delProduit(produit);
    this.cart = this.cartService.cart;
  }

  getTotal() {
    return this.cartService.getTotal();
  }

}
