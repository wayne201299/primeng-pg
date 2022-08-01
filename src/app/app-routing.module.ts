import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './pages/report/report.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'setting',
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('src/app/pages/setting/setting.module').then(
        (m) => m.SettingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
