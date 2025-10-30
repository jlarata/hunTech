import { Component } from '@angular/core';
import { User } from '../models/users/user';
import { CommonModule } from '@angular/common';
import { DESARROLLADORES, GERENTES, INSTITUCIONESEDUCATIVAS } from '../mock-usuarios';
import { RouterModule } from '@angular/router';
import { ContratosComponent } from '../contratos/contratos.component';

@Component({
  selector: 'app-perfil-ger',
  imports: [CommonModule, RouterModule, ContratosComponent],
  templateUrl: './perfil-ger.component.html',
  styleUrl: './perfil-ger.component.css'
})
export class PerfilGerComponent {
  //esta lista no sería usada en prod:
  desarrolladores = DESARROLLADORES
  gerentes = GERENTES
  institucionesEducativas = INSTITUCIONESEDUCATIVAS
  userType = "gerente"
  //esta variable tomaría el dato de cognito y lo enviaría a la bbdd para fetchear
  user: User;

  ngOnInit(): void {
    this.getUsers();
  }

  userDesarrollador = this.desarrolladores[0];
  userGerente = this.gerentes[0];
  userInstitucionEducativa = this.institucionesEducativas[0];

  getUsers() {
    // eventualmente aquí el servicio. console.log(this.usuarios)
  }


}
