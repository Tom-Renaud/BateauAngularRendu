import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericPagePageRoutingModule } from './generic-page-routing.module';

import { GenericPagePage } from './generic-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericPagePageRoutingModule
  ],
  declarations: [GenericPagePage]
})
export class GenericPagePageModule {}
