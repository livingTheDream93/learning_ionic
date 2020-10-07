import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipiePage } from './receipie.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipiePageRoutingModule {}
