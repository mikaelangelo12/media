import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login.component';
import { AuthGuardGuard } from 'src/app/shared/guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [],
    data: { roles: [] }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
