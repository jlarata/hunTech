import { Component } from '@angular/core';
import { CONTRATOS } from '../mock-contratos';
import { ContratoCard } from '../models/cards/contrato-card';
import { CommonModule } from '@angular/common';
import { Contrato } from '../models/contrato';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contratos',
  imports: [CommonModule, RouterModule],
  templateUrl: './contratos.component.html',
  styleUrl: './contratos.component.css'
})
export class ContratosComponent {
  contratos = CONTRATOS
  contratosCards:ContratoCard[] = [];

  ngOnInit(): void {
    this.createCards(CONTRATOS);
  }

  createCards = (contratos: Contrato[]) : void => {
    for (let i: number = 0; i<contratos.length; i++) {
    this.contratosCards[i] = contratos[i]
    }
  }

  } 
  





  /* cards: Card[] = [
    new Card('Card One', 'This is the first card.', 'https://via.placeholder.com/300x150'),
    new Card('Card Two', 'This is the second card.', 'https://via.placeholder.com/300x150'),
    new Card('Card Three', 'This is the third card.', 'https://via.placeholder.com/300x150')
  ];
 */


