import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceipiesPageRoutingModule } from './receipies-routing.module';

import { ReceipiesPage } from './receipies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceipiesPageRoutingModule
  ],
  declarations: [ReceipiesPage]
})
export class ReceipiesPageModule {}
