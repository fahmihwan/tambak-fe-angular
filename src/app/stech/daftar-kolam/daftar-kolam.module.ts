import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuatSiklusComponent } from './buat-siklus/buat-siklus.component';
import { DaftarKolamComponent } from './daftar-kolam/daftar-kolam.component';
import { TambahKolamComponent } from './tambah-kolam/tambah-kolam.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  { path: '', component: DaftarKolamComponent },
  { path: 'tambah-kolam', component: TambahKolamComponent },
  { path: 'mulai-siklus', component: BuatSiklusComponent },
]

@NgModule({
  declarations: [
    BuatSiklusComponent,
    DaftarKolamComponent,
    TambahKolamComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule

  ]
})
export class DaftarKolamModule { }
