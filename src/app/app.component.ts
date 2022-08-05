import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'primeng-test';
  sideBarDisplay = false;
  sideBarItems: MenuItem[] = [
    { label: '工作臺', icon: 'pi pi-fw pi-desktop' },
    { label: '今日日程', icon: 'pi pi-fw pi-calendar-plus' },
    { label: '預約', icon: 'pi pi-fw pi-refresh' },
    { label: '會員', icon: 'pi pi-fw pi-user' },
    { label: '醫療紀錄管理', icon: 'pi pi-fw pi-refresh' },
    { label: 'EC醫生簡介', icon: 'pi pi-fw pi-refresh' },
    { label: '配藥', icon: 'pi pi-fw pi-refresh' },
    { label: '帳單', icon: 'pi pi-fw pi-credit-card' },
    { label: '銷數Redeem', icon: 'pi pi-fw pi-refresh' },
    { label: '財務', icon: 'pi pi-fw pi-refresh' },
    { label: '倉庫管理', icon: 'pi pi-fw pi-home' },
    {
      label: '報告及數據分析',
      icon: 'pi pi-fw pi-chart-bar',
      routerLink: 'report',
    },
    {
      label: '設定',
      icon: 'pi pi-fw pi-cog',
      routerLink: 'setting',
      items: [
        {
          label: '項目設置',
          items: [
            { label: '療程', routerLink: 'setting/treatment' },
            { label: 'Product', routerLink: 'setting/product' },
            { label: '格仔' },
            { label: 'Package' },
            { label: '分類設置', routerLink: 'setting/category' },
          ],
        },
      ],
    },
  ];
  searchValue = '';
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];
  selectedCity = '';
  constructor() {}
}
