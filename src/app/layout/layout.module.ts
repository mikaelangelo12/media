import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { LoadingModule } from '../comum/loading/loading.module';
import { PainelModule } from '../modules/painel/painel.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ModalConfirmacaoComponent } from '../shared/modules/modal-confirmacao/modal-confirmacao.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent,
    ModalConfirmacaoComponent
  ],
  imports: [
    CommonModule,
    PainelModule,
    LoadingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ToastModule,
    MessagesModule,
    DividerModule,
    AvatarModule,
    OverlayPanelModule,
    RippleModule,
    MenuModule,
    DynamicDialogModule,
    ButtonModule
  ],   
  entryComponents: [
    ModalConfirmacaoComponent
  ], 
  exports: [LayoutComponent]
})
export class LayoutModule { }
