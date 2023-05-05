import { clientes } from 'src/app/shared/model/cliente.model';
import { ClienteService } from './../../../../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss']
})
export class ListarClientesComponent implements OnInit {
  clientes: clientes[] = [];
  loading: boolean = false;
  constructor(
    private readonly clienteService: ClienteService
  ){}
  ngOnInit(): void {
    this.listarClientes()
  }
  listarClientes(){
    this.clienteService.listarClientes().pipe(finalize(() =>{
      this.loading = false;
    })).subscribe((response) =>{
      this.loading = true;
      this.clientes = response
    })
  }
}
