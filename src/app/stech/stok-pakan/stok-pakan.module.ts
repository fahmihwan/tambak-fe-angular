import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputStokComponent } from './input-stok/input-stok.component';
import { UpdateStokComponent } from './update-stok/update-stok.component';
import { RouterModule, Routes } from '@angular/router';
import { StokPakanComponent } from './stok-pakan/stok-pakan.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




const routes: Routes = [
  {
    path: 'persediaan-pakan',
    component: StokPakanComponent
  },
  {
    path: 'input-stok',
    component: InputStokComponent
  },
  {
    path: 'update-stok',
    component: UpdateStokComponent
  }
]
@NgModule({
  declarations: [
    StokPakanComponent,
    InputStokComponent,
    UpdateStokComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,



  ]
})
export class StokPakanModule { }
