import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path:'',
    loadChildren: ()=> import('./auth/auth.module').then(mod=>mod.AuthModule),
  },
  {
    path:'stech',
    loadChildren: ()=> import('./stech/stech.module').then(mod => mod.StechModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
