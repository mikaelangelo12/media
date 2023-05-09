import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss'],
  providers: [DialogService]
})
export class ModalConfirmacaoComponent {
  msg: string = '';
  confirmar:string = '';
  cancelar:string = '';
  ativarBotoes: boolean = false;
  constructor(
    private readonly ref: DynamicDialogRef,
    private readonly config: DynamicDialogConfig,
  ) { }

  ngOnInit() {
    this.msg = this.config.data.msg;
    this.confirmar = this.config.data.confirmar;
    this.cancelar = this.config.data.cancelar;
    this.ativarBotoes = this.config.data.ativarBotoes;
  }

  onClickConfirmar() {
    this.ref.close(true);
  }
  onClickCancelar() {
    this.ref.close(false);
  }
}
