import { Produit } from '../models/Produit';
import { Injectable } from '@angular/core';


interface ObjetProduit {
  id?: Produit;
}

interface ObjetCart {
  byId: ObjetProduit;
  allIds: number[];
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: ObjetCart;

  constructor() {
    this.cart = { byId: {}, allIds: [] };
  }

  addProduit(produit: Produit) {
    const { byId, allIds } = this.cart;
    if (byId[produit.id] === undefined) {
      produit.count = 1;
      byId[produit.id] = produit;
      allIds.push(produit.id);
      this.cart = { byId: { ...byId }, allIds: [...allIds] };
    } else {
      const p = byId[produit.id];
      p.count++;
      this.cart.byId = { ...this.cart.byId, [p.id]: p };
    }
  }

  delProduit(produit: Produit) {
    const { byId, allIds } = this.cart;
    if (byId[produit.id] !== undefined) {
      const p = byId[produit.id];
      p.count--;
      if (p.count === 0) {
        const newAllIds = allIds.filter(item => item !== p.id);
        delete byId[produit.id];
        this.cart = { byId: { ...byId }, allIds: newAllIds };
      } else {
        this.cart = { byId: { ...byId, [p.id]: p }, allIds: [...allIds] };
      }
    }
  }

  getTotal() {
    const { byId, allIds } = this.cart;
    let total = 0;
    for (const id of allIds) {
      total += byId[id].price * byId[id].count;
    }
    return total;
  }

  setCart(cart: ObjetCart) {
    this.cart = cart;
  }
}
