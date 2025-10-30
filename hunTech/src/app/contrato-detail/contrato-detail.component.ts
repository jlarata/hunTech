import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONTRATOS } from '../mock-contratos';
import { Contrato } from '../models/contrato';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contrato-detail',
  imports: [CommonModule],
  templateUrl: './contrato-detail.component.html',
  styleUrl: './contrato-detail.component.css'
})
export class ContratoDetailComponent {

  @Input() contrato:Contrato;
  @Input() from: string = '';

  constructor(private route: ActivatedRoute) { }

}
