import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  { path: '', component: TreatmentComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
