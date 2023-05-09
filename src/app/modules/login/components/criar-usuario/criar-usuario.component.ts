import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DadosUsuarios } from 'src/app/shared/model/login/login.model';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginObservableService } from '../../service/login-observable.service';

@Component({
  selector: 'app-criar-usuario',
  templateUrl: './criar-usuario.component.html',
  styleUrls: ['./criar-usuario.component.scss']
})
export class CriarUsuarioComponent implements OnInit {
  usuario: string = '';
  senha: string = '';
  usuarioSenha: any = {};
  dadosUsuarios: DadosUsuarios[] = [];  

  constructor(
    private messageService: MessageService,
    private osService: LoginObservableService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.listarUsuario()
  }

  listarUsuario(){
    this.loginService.listarUsuario().subscribe((res)=>{
      this.dadosUsuarios = res;
    })
  }

  voltar(){
    this.osService.nextVoltarUsuario(true)
  }

  validarSeExisteUsuario(){
    return this.dadosUsuarios.find(
      objeto => 
      (objeto.username === this.usuario)
      );
  }

  crairUsuario() {
    if(this.usuario && this.senha){   
      
      if(!this.validarSeExisteUsuario()){
        this.loginService.criarNovoUsuario(this.usuario, this.senha).subscribe((res)=>{
          
          this.messageService.add({severity:'success', summary:`Bem Vindo ${this.usuario}!`, detail:'Usuário criado com sucesso!'});
          
          setTimeout(() => {
            this.osService.nextVoltarUsuario(true)
            this.messageService.clear()
          }, 1000);

        })
      }else{
        this.messageService.add({severity:'warn', summary:`Desculpe!`, sticky: false ,detail:'Suas credenciais já existem. Por favor, escolha outro nome de usuário.'});
      }

    }else if((!this.usuario && !this.senha) || (this.usuario && !this.senha) || (!this.usuario && this.senha)){
      this.messageService.add({severity:'info', summary:`Atenção`, sticky: false ,detail:'Para criar sua conta, por favor, preencha os campos de usuário e senha.'});      
    }
  }
}
