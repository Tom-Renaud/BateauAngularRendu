import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurant1 =
    {
      name: 'Bistrot des gascons',
      image: 'assets/images/desGascons.png'
    };
  restaurant2 =
    {
      name: "les fous de l'île",
      image: 'assets/images/fousDeLIle.png'
    };
  restaurant3 =
    {
      name: 'Bistrot Landais',
      image: 'assets/images/bistrotLandais.png'
    };
  restaurant4 =
    {
      name: 'Villa 9-trois',
      image: 'assets/images/villa9Trois.png'
    };
  restaurant5 = {
    name: "Bistrot du Sommelier",
    image: 'assets/images/duSommelier.png'
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
