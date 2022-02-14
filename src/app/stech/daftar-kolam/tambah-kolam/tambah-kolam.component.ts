import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Kolam } from 'src/app/models/kolam';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { TambakService } from 'src/app/services/tambak/tambak.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tambah-kolam',
  templateUrl: './tambah-kolam.component.html',
  styleUrls: ['./tambah-kolam.component.css']
})
export class TambahKolamComponent implements OnInit {



  kolam: Kolam =
    {
      id: 0,
      tambak_id: 0,
      nama: '',
      luas: 0,
      sikluses: '',
      tambak: '',
      inputsampling: '',
      inputkualitasair: '',
      inputpakan: '',
    }


  submitted = false;

  constructor(
    private tambakService: TambakService,
    private kolamService: KolamService,
    private router: Router,
    private fb: FormBuilder

  ) { }



  ngOnInit(): void {
    this.getNamaTambak()
  }

  numberKolam:any = 1;
  jumlahKolam: any[] = [
    {
      id: 0,
      tambak_id: 0,
      nama: '',
      luas: 0,
      sikluses: '',
      tambak: '',
      inputsampling: '',
      inputkualitasair: '',
      inputpakan: '',
    }
  ];
  plus() {
    this.numberKolam++
    this.jumlahKolam.push({
      id: 0,
      tambak_id: 0,
      nama: '',
      luas: 0,
      sikluses: '',
      tambak: '',
      inputsampling: '',
      inputkualitasair: '',
      inputpakan: '',
    })
  }
  minus() {
    this.numberKolam--;
    if(this.jumlahKolam.length <= 1){
      alert('jumlah kolam minimal 1')
    }else{
      this.jumlahKolam.splice(0, 1)
    }

  }

  tambak: any = [];


  dataTambak: any = [];
  getNamaTambak() {
    this.tambakService.getTambak().subscribe((e: any) => {
      this.dataTambak = e.data;
    })
  }

  addKolam() {
    const data = {
      tambak_id: this.kolam.tambak_id,
      nama: this.kolam.nama,
      luas: this.kolam.luas,
    };

    this.kolamService.create(data)
      .subscribe({
        next: (res) => {
          this.submitted = true;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data Berhasil Ditambahkan',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/stech/daftar-kolam']); // navigate to other page
        },
        error: (e) => console.error(e)
      });
  }


}






