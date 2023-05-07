import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/shared/services/login.service';
import { LoginObservableService } from '../../service/login-observable.service';
import { DadosUsuarios } from 'src/app/shared/model/login/login.model';
import { AuthService } from 'src/app/shared/services/auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss'],
  providers: [MessageService]
})
export class LoginUsuarioComponent {
  usuario: string = '';
  senha: string = '';
  usuarioSenha: any = {};
  dadosUsuarios: DadosUsuarios[] = [];
  
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private osService: LoginObservableService,
    private loginService: LoginService,
    private messageService: MessageService,
  ){}

  ngOnInit(): void {
    this.usuarioSenha = {
      username: this.usuario,
      password: this.senha,
    }
    this.listarUsuario()
  }

  listarUsuario(){
    this.loginService.listarUsuario().subscribe((response)=>{
      this.dadosUsuarios = response;
    })
  }

  voltarUsuario(){
    this.osService.nextCriarUsuario(true)
  }

  dadosUsuario(){
    this.usuarioSenha = {
      username: this.usuario,
      password: this.senha,
    }
  }

  validarSeExisteUsuario(){
    return this.dadosUsuarios.find(
      objeto => 
      (objeto.username === this.usuarioSenha.username) &&
      (objeto.password === this.usuarioSenha.password)
      );
  }

  salvarDadoUsuarioMemoria(){
    const daddosUsuarios: any = this.dadosUsuarios.filter(entidade => entidade.username === this.usuarioSenha.username)
    localStorage.setItem('usuario', daddosUsuarios[0].username);
  }

  acessaPainel(){
    this.dadosUsuario()
    if(this.validarSeExisteUsuario()){ 
           
      this.messageService.add({severity:'success', summary:`Bem Vindo ${this.usuario}!`, detail:'Parabéns! Suas credenciais foram verificadas com sucesso. Você agora está logado em sua conta.'});
      this.salvarDadoUsuarioMemoria()
      setTimeout(() => {
        localStorage.setItem('loggedIn', 'true');
        this.authService.login(this.usuarioSenha.username, this.usuarioSenha.password)
        this.router.navigate(['/painel'])
        this.messageService.clear();
      }, 1000);

    }else{
      this.messageService.add({severity:'error', summary:`Desculpe`, sticky: true ,detail:'suas credenciais estão incorretas. \n Verifique se você digitou corretamente seu nome de usuário e senha e tente novamente.'});
    }

  }
  
}
