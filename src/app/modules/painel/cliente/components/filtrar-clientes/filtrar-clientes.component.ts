import { Component, OnInit } from '@angular/core';
import { ClientesObservableService } from '../../service/clientes-obsevable.service';
import { Filtro } from 'src/app/shared/model/painel/cliente/filtro-cliente.model';

@Component({
  selector: 'app-filtrar-clientes',
  templateUrl: './filtrar-clientes.component.html',
  styleUrls: ['./filtrar-clientes.component.scss']
})
export class FiltrarClientesComponent implements OnInit {
  filtro = new Filtro();

  constructor(
    private readonly osObservable: ClientesObservableService,
  ){}

  ngOnInit(): void {    

  }

  dadosNomeCliente(){
    this.osObservable.nextCliente(this.filtro)
  }
}
