import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntradaTextoComponent } from './entrada-texto/entrada-texto.component';
import { EntradaVideoComponent } from './entrada-video/entrada-video.component';
import { EntradaVozComponent } from './entrada-voz/entrada-voz.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';

const routes: Routes = [
  { path: 'eventos', component: EventosComponent },
  { path: 'palestrantes', component: PalestrantesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'entrada-video', component: EntradaVideoComponent },
  { path: 'entrada-texto', component: EntradaTextoComponent },
  { path: 'entrada-voz', component: EntradaVozComponent },
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
