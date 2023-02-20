import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  valor: string;
  position: number;
  data: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    valor: 'Hydrogen',
    data: new Date(Date.now()).toLocaleDateString(),
  },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  displayedColumns: string[] = ['position', 'valor', 'data'];
  dataSource = ELEMENT_DATA;
  getValue() {
    return this.activatedRoute.snapshot.paramMap.get('name');
  }
}
