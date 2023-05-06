import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Clientes } from 'src/app/shared/model/cliente.model';

@Component({
  selector: 'app-detalhe-cliente',
  templateUrl: './detalhe-cliente.component.html',
  styleUrls: ['./detalhe-cliente.component.scss']
})
export class DetalheClienteComponent implements OnInit {
  dadosCliente: Clientes
  constructor(
    private readonly config: DynamicDialogConfig,
  ){}
  ngOnInit(): void {
    
  }
}
