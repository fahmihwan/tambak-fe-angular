import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StechComponent } from './stech.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { KualitsAirComponent } from './kualits-air/kualits-air.component';
import { TambakBaruComponent } from './tambak-baru/tambak-baru.component';
import { PemberianPakanComponent } from './pemberian-pakan/pemberian-pakan.component';
import { SamplingComponent } from './sampling/sampling.component';
import { PanenComponent } from './panen/panen.component';

import { FormsModule } from '@angular/forms';

// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
  {
    path: '',
    component: StechComponent,
    children: [
      // { path: 'beranda', component: BerandaComponent },
      { path: 'beranda', loadChildren: () => import('./beranda/beranda.module').then(mod => mod.BerandaModule) },
      { path: 'daftar-kolam', loadChildren: () => import('./daftar-kolam/daftar-kolam.module').then(mod => mod.DaftarKolamModule) },
      { path: 'tambak-baru', component: TambakBaruComponent },
      { path: 'pemberian-pakan', component: PemberianPakanComponent },
      { path: 'kualitas-air', component: KualitsAirComponent },
      { path: 'panen', component: PanenComponent },
      { path: 'stok-pakan', loadChildren: () => import('./stok-pakan/stok-pakan.module').then(mod => mod.StokPakanModule) },
      { path: 'sampling', component: SamplingComponent },
      { path: 'laporan', loadChildren: () => import('./laporan/laporan.module').then(mod => mod.LaporanModule) },
    ]
  }
]


@NgModule({
  declarations: [
    StechComponent,
    KualitsAirComponent,
    TambakBaruComponent,
    PemberianPakanComponent,
    SamplingComponent,
    PanenComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    MatProgressBarModule
  ],
  bootstrap: [StechComponent]
})
export class StechModule { }
