import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { TreatmentComponent } from './treatment/treatment.component';

const routes: Routes = [
  { path: '', component: TreatmentComponent },
  { path: 'treatment', component: TreatmentComponent },
  { path: 'product', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingRoutingModule {}
