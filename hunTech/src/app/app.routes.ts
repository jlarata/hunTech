import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
  { path: 'proyectos', loadComponent: () => import('./proyectos/proyectos.component').then(m => m.ProyectosComponent) },
  { path: 'contratos', loadComponent: () => import('./contratos/contratos.component').then(m => m.ContratosComponent) },
  { path: 'contrato-detail/:id/:tipo/:titulo/:desc/:sd/:ed', loadComponent: () => import('./contrato-detail/contrato-detail.component').then(m => m.ContratoDetailComponent) },
  { path: 'perfil', loadComponent: () => import('./perfil/perfil.component').then(m => m.PerfilComponent) },

  { path: '**', redirectTo:'' }
];

