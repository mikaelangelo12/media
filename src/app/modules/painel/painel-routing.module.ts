import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/page/cliente.component';
import { AuthGuardGuard } from 'src/app/shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    canActivate: [AuthGuardGuard],
    data: { roles: [] }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
