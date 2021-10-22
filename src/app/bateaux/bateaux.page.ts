import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.page.html',
  styleUrls: ['./bateaux.page.scss'],
})
export class BateauxPage implements OnInit {
  bateau1 =
    {
      name: 'De La Brise',
      image: 'assets/images/deLaBrise.png'
    };
  bateau2 =
    {
      name: 'Saphir',
      image: 'assets/images/saphir.png'
    };
  bateau3 =
    {
      name: 'Gast Micher',
      image: 'assets/images/gastMicher.png'
    };
  bateau4 =
    {
      name: 'Aquilon',
      image: 'assets/images/aquilon.png'
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
