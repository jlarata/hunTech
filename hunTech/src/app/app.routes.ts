import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContratosComponent } from './contratos/contratos.component';
import { PerfilComponent } from './perfil/perfil.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'contratos', component:ContratosComponent },
  { path: 'perfil', component:PerfilComponent }
];
