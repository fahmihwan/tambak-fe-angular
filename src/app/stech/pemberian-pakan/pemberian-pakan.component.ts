import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faPlusCircle, faSync, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Pakan } from 'src/app/models/pakan';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { PakanService } from 'src/app/services/pakan/pakan.service';
import { StokPakanService } from 'src/app/services/stok-pakan/stok-pakan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pemberian-pakan',
  templateUrl: './pemberian-pakan.component.html',
  styleUrls: ['./pemberian-pakan.component.css']
})
export class PemberianPakanComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  faTrash = faTrash;
  faSync = faSync;

  inputPakan: Pakan = {
    id: 0,
    kolam_id: 0,
    nama: '',
    stok_pakan_id: 0,
    tgl: '',
    waktu: '',
    jumlah: 0,
    note: '',
    stokpakan: '',
  };

  submitted = false;

  constructor(private kolamService: KolamService,
    private stokPakan: StokPakanService,
    private pakanService: PakanService,
    private router: Router) { }

  ngOnInit(): void {
    this.listKolam();
    this.selectStokPakan();
    // this.deleteAllPakan();
  }

  //pemberian Pakan
  beratPakan(data: any) {
    if (data.length !== 0) {
      return data.at(-1).jumlah
    } else {
      return 0;
    }
  }

  public loading = false;
  listDataKolam: any = [];
  listKolam() {
    this.loading = true;
    this.kolamService.listKolam().subscribe((res: any) => {
      this.listDataKolam = res.data;
      this.loading = false
    })
  }

  namaKolamnya?: any;
  idKolam?: any;
  namaKolam(data: any) {
    this.namaKolamnya = data.nama;
    this.idKolam = data.id;
  }

  selectDataStokPakan?: any;
  selectStokPakan() {
    this.stokPakan.listStokPakan().subscribe((res: any) => {
      this.selectDataStokPakan = res.data;
    })
  }


  addPemberianPakan() {
    const data = {
      kolam_id: this.inputPakan.kolam_id,
      nama: this.inputPakan.nama,
      stok_pakan_id: this.inputPakan.stok_pakan_id,
      tgl: this.inputPakan.tgl,
      waktu: this.inputPakan.waktu,
      jumlah: this.inputPakan.jumlah,
      note: this.inputPakan.note,
    };
    this.pakanService.create(data)
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
          this.listKolam();
        },
        error: (e) => console.error(e)
      });
  }

  deleteAllPakan(id: any) {
    this.kolamService.showKolam(id).subscribe({
      next: (res: any) => {
        res.data.inputpakan.forEach((element: any) => {
          this.pakanService.deleteAllPakan(element.id).subscribe((res) => {
            this.listKolam()
          });
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Berhasil Dihapsus',
          showConfirmButton: false,
          timer: 1500
        })
      },
      error: (e) => {
        alert('data gagal di hapus')
        console.error(e)
      }
    })

  }



}
