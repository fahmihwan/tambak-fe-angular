import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faPlusCircle, faSync, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Panen } from 'src/app/models/panen';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { PanenService } from 'src/app/services/panen/panen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panen',
  templateUrl: './panen.component.html',
  styleUrls: ['./panen.component.css']
})
export class PanenComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  faTrash = faTrash;
  faSync = faSync;

  inputPanen: Panen = {
    id: 0,
    siklus_id: 0,
    tgl: '',
    total: 0,
    jml_udang: 0,
    harga_jual: 0,
    status: '',
    note: '',
  };
  submitted = false;

  constructor(
    private kolamService: KolamService,
    private panenService: PanenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listKolam()
  }


  selectedSiklus?: any;
  selectedKolam(id: number) {
    this.kolamService.showKolam(id).subscribe((res: any) => {
      this.selectedSiklus = res.data.sikluses
      console.log(this.selectedSiklus);
    })

  }




  namaKolamnya?: any;
  namaKolam(data: any) {
    this.namaKolamnya = data.nama;

  }

  //Panen
  siklus?: any;
  panens?: any;

  isiPanen(data: any): any {
    data.forEach((siklus: any) => {
      if (siklus.panens.length !== 0) {
        this.panens = siklus.panens.at(-1).jml_udang;
        return 1;
      } else {
        this.panens = 0;
        return 0;
      }
    });
  }



  listDataPanen: any = [];
  dataSiklues: any = [];
  public loading = false;
  listKolam() {
    this.loading = true;
    this.kolamService.listKolam().subscribe((res: any) => {
      this.listDataPanen = res.data;
      this.loading = false;

    })
  }

  addPanen() {
    const data = {
      siklus_id: this.inputPanen.siklus_id,
      tgl: this.inputPanen.tgl,
      total: this.inputPanen.total,
      jml_udang: this.inputPanen.jml_udang,
      harga_jual: this.inputPanen.harga_jual,
      status: this.inputPanen.status,
      note: this.inputPanen.note,
    };


    this.panenService.createPanen(data)
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
          this.listKolam()
          // this.router.navigate(['/stech/daftar-kolam']); // navigate to other page
        },
        error: (e) => console.error(e)
      });
  }


}


