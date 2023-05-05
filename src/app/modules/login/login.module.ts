import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


import { LoginComponent } from './page/login.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { CriarUsuarioComponent } from './components/criar-usuario/criar-usuario.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginUsuarioComponent,
    CriarUsuarioComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    
    LoginRoutingModule
  ]
})
export class LoginModule { }
