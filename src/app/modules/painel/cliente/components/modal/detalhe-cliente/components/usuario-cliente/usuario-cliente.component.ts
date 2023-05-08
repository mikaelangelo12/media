import { Component, Input } from '@angular/core';
import { Clientes } from 'src/app/shared/model/painel/cliente/cliente.model';

@Component({
  selector: 'app-usuario-cliente',
  templateUrl: './usuario-cliente.component.html',
  styleUrls: ['./usuario-cliente.component.scss']
})
export class UsuarioClienteComponent {
 @Input() cliente: Clientes| any;
}
