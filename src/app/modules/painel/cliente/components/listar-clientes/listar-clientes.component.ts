import { Clientes } from 'src/app/shared/model/cliente.model';
import { ClienteService } from './../../../../../shared/services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { DetalheClienteComponent } from '../modal/detalhe-cliente/detalhe-cliente.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
  providers: [DialogService]
})
export class ListarClientesComponent implements OnInit {
  clientes: Clientes[] = [];
  loading: boolean = false;
  constructor(
    private readonly dialogService: DialogService,     
    private readonly ref: DynamicDialogRef,
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

  listarDetalhes(clientes: any){
    this.dialogService.open(DetalheClienteComponent, {
      header: `${clientes.name}`,
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data:{
        clientes: clientes
      }
    });
  }
}
