import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const LOGIN: any = {
  path: 'login',
  loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  canActivate: []
};

const PAINEL: any = {
  path: 'painel',
  loadChildren: () => import('./modules/painel/painel.module').then(m => m.PainelModule),
  canActivate: []
};


const routes: Routes = [
  LOGIN,
  PAINEL,
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '**', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'painel',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
