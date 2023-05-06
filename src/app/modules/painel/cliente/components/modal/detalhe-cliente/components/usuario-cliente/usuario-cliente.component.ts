import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-usuario-cliente',
  templateUrl: './usuario-cliente.component.html',
  styleUrls: ['./usuario-cliente.component.scss']
})
export class UsuarioClienteComponent {
 @Input() cliente: any;
}
