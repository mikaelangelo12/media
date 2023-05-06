import { Component, OnInit } from '@angular/core';
import { ClientesObservableService } from '../../service/clientes-obsevable.service';

@Component({
  selector: 'app-filtrar-clientes',
  templateUrl: './filtrar-clientes.component.html',
  styleUrls: ['./filtrar-clientes.component.scss']
})
export class FiltrarClientesComponent implements OnInit {
  constructor(
    private readonly osObservable: ClientesObservableService,
  ){}
  ngOnInit(): void {
    
  }
}
