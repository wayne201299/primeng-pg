import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreatmentComponent } from './treatment/treatment.component';
import { ProductComponent } from './product/product.component';
import { SettingRoutingModule } from './setting-routing.module';
import { PrimengModule } from 'src/app/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TreatmentComponent, ProductComponent],
  imports: [CommonModule, SettingRoutingModule, PrimengModule, SharedModule],
})
export class SettingModule {}
