import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-generic-page',
  templateUrl: './generic-page.page.html',
  styleUrls: ['./generic-page.page.scss'],
})
export class GenericPagePage implements OnInit {
  item: {
    name: string,
    image: string
  }
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.item = this.router.getCurrentNavigation().extras.state.item;
        console.log(this.item);
      }
    });

  }

  ngOnInit() {
  }

}
