import { Component, Input } from '@angular/core';
import { CONTRATOS } from '../mock-contratos';
import { ContratoCard } from '../models/cards/contrato-card';
import { CommonModule } from '@angular/common';
import { Contrato } from '../models/contrato';
import { RouterModule } from '@angular/router';
import { ContratoDetailComponent } from '../contrato-detail/contrato-detail.component';


@Component({
  selector: 'app-contratos',
  imports: [CommonModule, RouterModule, ContratoDetailComponent],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent {
  @Input() from: string = '';

  contratos = CONTRATOS
  contratosCards: ContratoCard[] = [];

  mostrandoContratoDetail = false;
  contratoAMostrarDetail: Contrato | undefined;

  ngOnInit(): void {
    this.createCards(CONTRATOS);
  }

  createCards = (contratos: Contrato[]): void => {
    for (let i: number = 0; i < contratos.length; i++) {
      this.contratosCards[i] = contratos[i]
    }
  }

  toggleMuestraContratoDetail = (): void => {
    this.mostrandoContratoDetail = !this.mostrandoContratoDetail
  }

  setContratoAMostrar = (contrato: Contrato) => {

    /* si es la primera vez que tocás el botón */
    if (this.contratoAMostrarDetail == undefined) {
      this.contratoAMostrarDetail = contrato;
      this.toggleMuestraContratoDetail();
    } else {
      /* si no es la primera vez, puede ser que */
      /* a) estás clickeando en el mismo contrato que ya se está mostrando */
      if (this.contratoAMostrarDetail.id == contrato.id) {
        this.contratoAMostrarDetail = undefined;
        this.toggleMuestraContratoDetail();
      }
      /* b) caso contrario, solo querés que cambie el contrato que muestra el detalle */
      else {
        this.contratoAMostrarDetail = contrato;
      }
    }



  }

}






/* cards: Card[] = [
  new Card('Card One', 'This is the first card.', 'https://via.placeholder.com/300x150'),
  new Card('Card Two', 'This is the second card.', 'https://via.placeholder.com/300x150'),
  new Card('Card Three', 'This is the third card.', 'https://via.placeholder.com/300x150')
];
*/


