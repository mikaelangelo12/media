import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading.component';
import { BlockUIModule } from 'primeng/blockui';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';

@NgModule({
    declarations: [
      LoadingComponent
    ],
    exports: [
      LoadingComponent
    ],
    imports: [
      CommonModule,
      MatProgressSpinnerModule,
      BlockUIModule
    ],    
    providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }]
})
export class LoadingModule { }
