import { Component } from '@angular/core';
import { LoginObservableService } from '../service/login-observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  storage: Storage | any;
  subscriptionCriarUsuario: Subscription
  subscriptionVoltarUsuario: Subscription
  criarUsuario: boolean = false;
  voltarUsuario: boolean = false;
  exbirFormularioCriarUsuario: boolean = false;
  exbirFormularioVoltarUsuario: boolean = false;

  constructor(private osService: LoginObservableService){
    this.subscriptionCriarUsuario = this.osService.observableCriarUsuario().subscribe((res) =>{
       this.criarUsuario = res;
       this.exibirFormularioLogin();
    });
    this.subscriptionVoltarUsuario = this.osService.observableVoltarUsuario().subscribe((res) =>{
      this.voltarUsuario = res;
      this.exibirFormularioLogin();
    })
  }
  ngOnInit(): void {
    this.storage = window.localStorage;
    this.storage.clear()
    this.exbirFormularioCriarUsuario = true;
  }
  exibirFormularioLogin(){
    if(this.criarUsuario){       
      this.exbirFormularioCriarUsuario = false;
      this.exbirFormularioVoltarUsuario = this.criarUsuario;
      this.criarUsuario = false;  
    }else if(this.voltarUsuario){
      this.exbirFormularioCriarUsuario = this.voltarUsuario;
      this.exbirFormularioVoltarUsuario = false;
      this.voltarUsuario = false;
    }
  }
}
