import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.page.html',
  styleUrls: ['./produits.page.scss'],
})
export class ProduitsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onLoadCategorie(category: string) {
    const navigationExtras: NavigationExtras = {
      state: {
        category
      }
    };
    this.router.navigate(['./generic-categorie'], navigationExtras);
  }

}
