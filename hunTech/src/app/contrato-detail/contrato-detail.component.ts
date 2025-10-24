import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CONTRATOS } from '../mock-contratos';
import { Contrato } from '../models/contrato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrato-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './contrato-detail.component.html',
  styleUrl: './contrato-detail.component.css'
})
export class ContratoDetailComponent {

  constructor(private route: ActivatedRoute) { }
  contratos = CONTRATOS;
  contrato: Contrato;

  ngOnInit(): void {
    this.contrato = this.getContrato()
    console.log(this.contrato)
  }

  getContrato(): Contrato {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const contrato = CONTRATOS.filter(c => c.id == id)
    return contrato[0]

  }
}
