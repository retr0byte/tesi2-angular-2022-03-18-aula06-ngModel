import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juros-compostos',
  templateUrl: './juros-compostos.component.html',
  styleUrls: ['./juros-compostos.component.css'],
})
export class JurosCompostosComponent implements OnInit {
  vp: number;
  j: number;
  n: number;
  juros;

  constructor() {}

  ngOnInit() {}

  getJurosCompostos() {
    // let juro: Object = { simples: '', composto: '', periodo: '' };

    for (let i = 0; i < this.n; i++) {
      // juro['simples'] = this.vp * (1 + this.j/100 * i);
      // juro['compostos'] = Math.pow(this.vp * (1 + this.j/100),i);
      // juro['periodo'] = i;

      let simples = this.vp * (1 + (this.j / 100) * i);
      let composto = Math.pow(this.vp * (1 + this.j / 100), i);
      this.juros.push({ simples, composto, periodo: i });
      console.log(this.juros);
      // this.juros.push(juro);
    }
  }
}
