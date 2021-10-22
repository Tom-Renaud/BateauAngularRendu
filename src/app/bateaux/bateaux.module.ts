import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauxPageRoutingModule } from './bateaux-routing.module';

import { BateauxPage } from './bateaux.page';
import { InfoContactComponent } from '../infocontact/infocontact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauxPageRoutingModule
  ],
  declarations: [BateauxPage, InfoContactComponent]
})
export class BateauxPageModule { }
