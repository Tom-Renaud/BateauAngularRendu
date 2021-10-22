import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericCategoriePage } from './generic-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: GenericCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericCategoriePageRoutingModule {}
