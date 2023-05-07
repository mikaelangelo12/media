import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Clientes, Geo, } from 'src/app/shared/model/painel/cliente/cliente.model';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.scss']
})
export class DetalheClienteComponent implements OnInit {
  dadosCliente: Clientes | any
  geoLocalizacao: Geo | any
  constructor(
    private readonly config: DynamicDialogConfig,
  ){}
  ngOnInit(): void {
    this.dadosCliente = this.config.data.clientes
    this.geoLocalizacao = this.dadosCliente.address.geo
  }
}
