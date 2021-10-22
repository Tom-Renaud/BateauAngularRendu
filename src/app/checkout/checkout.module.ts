import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    CheckoutPageRoutingModule
  ],
  declarations: [CheckoutPage, ToolbarComponent]
})
export class CheckoutPageModule { }
