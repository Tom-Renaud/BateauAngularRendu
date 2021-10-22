import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenericCategoriePageRoutingModule } from './generic-categorie-routing.module';

import { GenericCategoriePage } from './generic-categorie.page';
import { ToolbarComponent } from '../toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenericCategoriePageRoutingModule
  ],
  declarations: [GenericCategoriePage, ToolbarComponent]
})
export class GenericCategoriePageModule { }
