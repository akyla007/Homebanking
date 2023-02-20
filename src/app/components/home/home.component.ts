import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  data: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', data: new Date(Date.now()).toLocaleDateString() },
  { position: 2, name: 'Helium', data: new Date(Date.now()).toLocaleDateString() },
  { position: 3, name: 'Lithium', data: new Date(Date.now()).toLocaleDateString() },
  { position: 4, name: 'Beryllium', data: new Date(Date.now()).toLocaleDateString() },
  { position: 5, name: 'Boron', data: new Date(Date.now()).toLocaleDateString() },
  { position: 6, name: 'Carbon', data: new Date(Date.now()).toLocaleDateString() },
  { position: 7, name: 'Nitrogen', data: new Date(Date.now()).toLocaleDateString() },
  { position: 8, name: 'Oxygen', data: new Date(Date.now()).toLocaleDateString() },
  { position: 9, name: 'Fluorine', data: new Date(Date.now()).toLocaleDateString() },
  { position: 10, name: 'Neon', data: new Date(Date.now()).toLocaleDateString() },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  displayedColumns: string[] = ['position', 'name', 'data'];
  dataSource = ELEMENT_DATA;
  getValue() {
    return this.activatedRoute.snapshot.paramMap.get('name');
  }
}
