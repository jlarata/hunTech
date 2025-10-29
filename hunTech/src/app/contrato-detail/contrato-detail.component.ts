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
  contrato: Contrato;

  ngOnInit(): void {
    this.contrato = this.setContrato()
  }

  setContrato(): Contrato {
    let contrato: Contrato = new Contrato;
    contrato.id = Number(this.route.snapshot.paramMap.get('id'));
    contrato.tipo = String(this.route.snapshot.paramMap.get('tipo'));
    contrato.titulo = String(this.route.snapshot.paramMap.get('titulo'));
    contrato.descripcion = String(this.route.snapshot.paramMap.get('desc'));
    contrato.start_date = String(this.route.snapshot.paramMap.get('sd'));
    contrato.end_date = String(this.route.snapshot.paramMap.get('ed'));

    return contrato
  }
}
