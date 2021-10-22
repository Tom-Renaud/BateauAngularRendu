import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from '../services/ProduitsService';
import { Produit } from '../models/Produit';
import { CartService } from '../services/CartService';

@Component({
  selector: 'app-generic-categorie',
  templateUrl: './generic-categorie.page.html',
  styleUrls: ['./generic-categorie.page.scss'],
})
export class GenericCategoriePage implements OnInit {

  category: number;
  produits: Produit[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private produitsService: ProduitsService,
    private cartService: CartService,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.category = this.router.getCurrentNavigation().extras.state.category;
        console.log(this.category);
      }
    });
  }

  addProductToCart(produit: Produit) {
    this.cartService.addProduit(produit);
  }


  ngOnInit() {
    if (this.category !== 3) {
      this.produits = this.produitsService.produits.filter(item => item.category === this.category);
    } else {
      this.produits = this.produitsService.produits.filter(item => item.discount > 0);
    }
  }
}
