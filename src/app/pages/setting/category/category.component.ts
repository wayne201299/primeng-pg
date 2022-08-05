import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/core/service/base.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  treatmentDialogOpen = false;
  catagorys = [];
  constructor(private baseService: BaseService) {}

  ngOnInit(): void {
    this.baseService
      .get('category')
      .subscribe((resp) => (this.catagorys = resp));
  }

  showTreatmentDialog() {
    this.treatmentDialogOpen = !this.treatmentDialogOpen;
  }
}
