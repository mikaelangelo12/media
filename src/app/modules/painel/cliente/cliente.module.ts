import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TableModule } from 'primeng/table';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';

import { ClienteComponent } from './page/cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { FiltrarClientesComponent } from './components/filtrar-clientes/filtrar-clientes.component';
import { DetalheClienteComponent } from './components/modal/detalhe-cliente/detalhe-cliente.component';
import { GoogleMapsComponent } from './components/modal/detalhe-cliente/components/google-maps/google-maps.component';
import { UsuarioClienteComponent } from './components/modal/detalhe-cliente/components/usuario-cliente/usuario-cliente.component';



@NgModule({
  declarations: [
    ClienteComponent,
    ListarClientesComponent,
    FiltrarClientesComponent,
    DetalheClienteComponent,
    GoogleMapsComponent,
    UsuarioClienteComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    TableModule,
    AvatarModule,
    DividerModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANEJoyhzr3ZHni9JydB9grU6zr6jY-yPI'
    })
  ],
  entryComponents: [
    DetalheClienteComponent,
    GoogleMapsComponent
  ],
  providers: [  
   
  ]
})
export class ClienteModule { }
