import { ClienteService } from './../../../../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
  reqwr = []
  constructor(
    private readonly clienteService: ClienteService
  ){}
  ngOnInit(): void {
    
  }
  listarClientes(){
    this.clienteService.listarClientes().subscribe((response) =>{
      console.log(response)
    })
  }
}
