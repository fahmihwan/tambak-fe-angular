import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BerandaComponent } from './beranda/beranda.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailKolamComponent } from './detail-kolam/detail-kolam.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  { path: '', component: BerandaComponent },
  { path: 'detail-kolam/:id', component: DetailKolamComponent },
]

@NgModule({
  declarations: [
    BerandaComponent,
    DetailKolamComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    MatProgressBarModule
  ]
})
export class BerandaModule { }
