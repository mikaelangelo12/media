import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem, MessageService, PrimeIcons } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ModalConfirmacaoComponent } from 'src/app/shared/modules/modal-confirmacao/modal-confirmacao.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DialogService]
})
export class HeaderComponent {
  items: MenuItem[] = [];
  usuario = 'usuario'
  storage: Storage | any;
  ref: DynamicDialogRef | any;
  msg: string = 'Você está prestes a sair do nosso portal. \r Tem certeza de que deseja sair?';
  confirmar: string = 'Sair';
  cancelar: string = 'Cancelar';
  tituloPagina: string = '';
  exibirNomeUsuario: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialogService: DialogService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit() {
    this.storage = window.localStorage;
    this.items = [
      {
        label: 'Configuração',
        icon: 'pi pi-spin pi-cog',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Desculpe', detail: 'Á configuração de Usuário ainda não foi desenvolvido. Por favor, tente novamente mais tarde.' });
        }
      },
        {
        label: 'Sair',
        icon: PrimeIcons.EJECT,
        command: () => {
          this.ref = this.dialogService.open(ModalConfirmacaoComponent, {
            header: `Atenção ${this.storage.usuario}`,
            width: '300px',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: false,
            data: {
              msg: this.msg,
              confirmar: this.confirmar,
              cancelar: this.cancelar,
              ativarBotoes: true
            }
          });

          this.ref.onClose.subscribe((product: any) => {
            if (product) {
              this.router.navigate(['/'])
              this.storage.clear()
              this.messageService.add({ severity: 'success', summary: 'Sessão Finalizada', detail: 'Obrigado por usar nossos serviços!' });
            }
          });

        }
      }
    ];



  }

}
