import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenericPagePage } from './generic-page.page';

const routes: Routes = [
  {
    path: '',
    component: GenericPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenericPagePageRoutingModule {}
