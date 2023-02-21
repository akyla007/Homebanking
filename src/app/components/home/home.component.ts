import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  valor: number;
  data: string;
}

let ELEMENT_DATA: PeriodicElement[] = [];
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
  value = 0;

  addValue() {
    this.conta += this.value;
    this.dataSource = [
      ...this.dataSource,
      {
        valor: this.value,
        data: new Date(Date.now()).toLocaleDateString(),
      },
    ];
  }

  extractValue() {
    if (this.conta - this.value < 0) {
      return alert(`Valor de retirada não deve ser maior que ${this.conta}`);
    } else {
      this.conta -= this.value;
      this.dataSource = [
        ...this.dataSource,
        {
          valor: -this.value,
          data: new Date(Date.now()).toLocaleDateString(),
        },
      ];
      return '';
    }
  }

  valueVerify() {
    if (this.value <= 0) {
      return true;
    } else {
      return false;
    }
  }

  getValue() {
    return this.activatedRoute.snapshot.paramMap.get('name');
  }
}
