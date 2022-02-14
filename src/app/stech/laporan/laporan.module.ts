import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaporanKolamComponent } from './laporan-kolam/laporan-kolam.component';
import { LaporanStokPakanComponent } from './laporan-stok-pakan/laporan-stok-pakan.component';
import { RouterModule, Routes } from '@angular/router';


const router:Routes =[
    { path: 'laporan-kolam', component: LaporanKolamComponent },
  { path: 'laporan-stok-pakan', component: LaporanStokPakanComponent },
]

@NgModule({
  declarations: [
    LaporanKolamComponent,
    LaporanStokPakanComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class LaporanModule { }
