import { Address, Clientes } from 'src/app/shared/model/painel/cliente/cliente.model';
import { ClienteService } from './../../../../../shared/services/cliente.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import { DetalheClienteComponent } from '../modal/detalhe-cliente/detalhe-cliente.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ClientesObservableService } from '../../service/clientes-obsevable.service';
import { Filtro } from 'src/app/shared/model/painel/cliente/filtro-cliente.model';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
  providers: [DialogService]
})
export class ListarClientesComponent implements OnInit, OnDestroy {
  filtro: Filtro | any;
  clientes: Clientes[] = [];
  listaClientes: Clientes[] | any;
  loading: boolean = false;
  subscriptionCliente: Subscription;

  constructor(
    private readonly dialogService: DialogService,
    private readonly osObservable: ClientesObservableService,
    private readonly clienteService: ClienteService
  ) {
    this.subscriptionCliente = this.osObservable.observableCliente().subscribe((filtro: Filtro) => {
      this.filtro = filtro
      if (filtro) {
        this.filtrarClientes()
      } else {
        this.listaClientes = this.clientes;
      }
    })
  }

  ngOnInit(): void {
    this.listarClientes()
  }

  ngOnDestroy(): void {
    this.subscriptionCliente.unsubscribe();
  }

  listarClientes() {
    this.clienteService.listarClientes().pipe(finalize(() => {
      this.loading = false;
    })).subscribe((response) => {
      this.loading = true;
      this.clientes = response;
      this.listaClientes = this.clientes;
    })
  }

  listarDetalhes(clientes: any) {
    this.dialogService.open(DetalheClienteComponent, {
      header: `${clientes.name}`,
      width: '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      data: {
        clientes: clientes
      }
    });
  }

  filtrarClientes() {
    this.listaClientes = this.clientes.filter((listaCliente: Clientes | any) =>    
    (this.filtro.nomeCliente == '' || listaCliente.name.toLowerCase().includes(this.filtro.nomeCliente.toLowerCase())) &&
    (this.filtro.emailCliente == '' || listaCliente.email.toLowerCase().includes(this.filtro.emailCliente.toLowerCase())) &&
    (this.filtro.cidadeCliente == '' || listaCliente.address.city.toLowerCase().includes(this.filtro.cidadeCliente.toLowerCase())) &&
    (this.filtro.empresaCliente == '' || listaCliente.company.name.toLowerCase().includes(this.filtro.empresaCliente.toLowerCase()))
    )
  }
}