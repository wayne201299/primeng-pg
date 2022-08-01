import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
})
export class TreatmentComponent implements OnInit {
  items: MenuItem[];

  home: MenuItem;

  searchForm: FormGroup;

  isSearchPanelExpand = false;

  constructor() {
    this.items = [
      { label: 'Computer' },
      { label: 'Notebook' },
      { label: 'Accessories' },
      { label: 'Backpacks' },
      { label: 'Item' },
    ];

    this.home = { icon: 'pi pi-home' };
    this.searchForm = new FormGroup({
      serialNum: new FormControl(''),
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {}
}
