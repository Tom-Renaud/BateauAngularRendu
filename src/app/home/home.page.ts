import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor(private router: Router) { }

  goToProduits() {
    this.router.navigate(['/produits']);
  }
  goToBateaux() {
    this.router.navigate(['/bateaux']);
  }
  goToRestaurants() {
    this.router.navigate(['/restaurants']);
  }
  goToRecettes() {
    this.router.navigate(['/recettes']);
  }
  goToContact() {
    this.router.navigate(['/contact']);
  }

}
