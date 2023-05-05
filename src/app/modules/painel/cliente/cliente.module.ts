import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ClienteComponent } from './page/cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { FiltrarClientesComponent } from './components/filtrar-clientes/filtrar-clientes.component';



@NgModule({
  declarations: [
    ClienteComponent,
    ListarClientesComponent,
    FiltrarClientesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class ClienteModule { }
