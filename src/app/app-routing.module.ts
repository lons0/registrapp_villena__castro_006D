import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard';
import { NoingresadoGuard } from './guards/noingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),canActivate:[NoingresadoGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),canActivate:[NoingresadoGuard]
  },
  {
    path: 'lista-prof',
    loadChildren: () => import('./pages/lista-prof/lista-prof.module').then( m => m.ListaProfPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'qr-prof',
    loadChildren: () => import('./pages/qr-prof/qr-prof.module').then( m => m.QrProfPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'feriado',
    loadChildren: () => import('./pages/feriado/feriado.module').then( m => m.FeriadoPageModule),canActivate:[IngresadoGuard]
  },
  {
    path: 'user-prof',
    loadChildren: () => import('./pages/user-prof/user-prof.module').then( m => m.UserProfPageModule),canActivate:[IngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
