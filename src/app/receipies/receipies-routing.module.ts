import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipiesPage } from './receipies.page';

const routes: Routes = [
  {
    path: '',
    component: ReceipiesPage
  },
  {
    path: ':receipieId',
    loadChildren: () => import('./receipie/receipie.module').then( m => m.ReceipiePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipiesPageRoutingModule {}
