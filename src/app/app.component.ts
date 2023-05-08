import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalConfirmacaoComponent } from './shared/modules/modal-confirmacao/modal-confirmacao.component';
import { LoginObservableService } from './modules/login/service/login-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService, DialogService]
})
export class AppComponent {
  msg: string = 'Desculpe, não é possível processar sua solicitação no momento. Parece que o servidor não está sendo executado corretamente. Certifique-se de que o JSON Server esteja sendo executado corretamente e tente novamente. Você pode iniciar o JSON Server executando o comando "npx json-server --watch db.json" no terminal. peço desculpa pelo inconveniente.'
  subscriptionLogin: Subscription;
  constructor(
    private readonly osService: LoginObservableService, 
    private readonly dialogService: DialogService, 
  ){

    this.subscriptionLogin = this.osService.observableLogin().subscribe((res) =>{

      if(res){
          this.dialogService.open(ModalConfirmacaoComponent, {

            header: `Atenção`,
            width: '400px',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: false,
            closable: false,

            data:{
              msg: this.msg,
              ativarBotoes: false
            }

          });
      }

   });

  }
}
