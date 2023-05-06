import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PainelRoutingModule } from './painel-routing.module';
import { ClienteModule } from './cliente/cliente.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PainelRoutingModule,
    ClienteModule
  ]
})
export class PainelModule { }
