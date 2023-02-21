import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  valor: number;
  data: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {
    valor: 0,
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
  displayedColumns: string[] = ['valor', 'data'];
  dataSource = ELEMENT_DATA;
  conta = 0;
  value = '';

  addValue() {
    this.conta += parseInt(this.value);
    this.dataSource = [
      ...this.dataSource,
      {
        valor: parseInt(this.value),
        data: new Date(Date.now()).toLocaleDateString(),
      },
    ];
  }

  extractValue() {
    this.conta -= parseInt(this.value);
    this.dataSource = [
      ...this.dataSource,
      {
        valor: parseInt(this.value),
        data: new Date(Date.now()).toLocaleDateString(),
      },
    ];
  }

  valueVerify() {
    if (parseInt(this.value) < 0) {
      return true;
    } else {
      return false;
    }
  }

  getValue() {
    return this.activatedRoute.snapshot.paramMap.get('name');
  }
}
