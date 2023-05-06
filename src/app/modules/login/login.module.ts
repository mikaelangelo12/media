import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';


import { LoginComponent } from './page/login.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { CriarUsuarioComponent } from './components/criar-usuario/criar-usuario.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginUsuarioComponent,
    CriarUsuarioComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MessagesModule,
    LoginRoutingModule,
    MessagesModule,
    ToastModule
  ]
})
export class LoginModule { }
