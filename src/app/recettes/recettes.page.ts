import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  recette1 =
    {
      name: 'Homard en chaud-froid',
      image: 'assets/images/homardRecette.png'
    };
  recette2 =
    {
      name: 'Noix de Saint-Jacques flambées au cognac',
      image: 'assets/images/saintJacques.png'
    };
  recette3 =
    {
      name: 'Bar rôti en laurier frais',
      image: 'assets/images/barRecette.png'
    };
  recette4 =
    {
      name: 'Tourteau linguine',
      image: 'assets/images/poulpe.png'
    };
  recette5 =
    {
      name: 'Recette XYZ',
      image: 'assets/images/poulpe.png'
    }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onLoadAppareil(item: { name: string, image: string }) {
    let NavigationExtras: NavigationExtras = {
      state: {
        item: item
      }
    };
    this.router.navigate(['./generic-page'], NavigationExtras);
  }
  goToContact() {
    this.router.navigate(['/contact']);
  }

}
