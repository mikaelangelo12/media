import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { LoadingModule } from '../comum/loading/loading.module';
import { PainelModule } from '../modules/painel/painel.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    PainelModule,
    LoadingModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],  
  exports: [LayoutComponent]
})
export class LayoutModule { }
