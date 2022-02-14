import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faPlusCircle, faSync, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Kualitasair } from 'src/app/models/kualitasair';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { KualitasAirService } from 'src/app/services/kualitas-air/kualitas-air.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-kualits-air',
  templateUrl: './kualits-air.component.html',
  styleUrls: ['./kualits-air.component.css']
})
export class KualitsAirComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  faTrash = faTrash;
  faSync = faSync;

  inputKualitasAir: Kualitasair = {
    id: 0,
    kolam_id: 0,
    suhu_kolam: 0,
    tgl: '',
    waktu: '',
    note: '',
  };

  submitted = false;

  constructor(private kualitasAirService: KualitasAirService,
    private kolamService: KolamService,
    private router: Router) { }

  ngOnInit(): void {
    this.listKolam()

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

  //suhu kolam
  suhuKolam(data: any) {
    if (data.length !== 0) {
      return data.at(-1).suhu_kolam
    } else {
      return 0;
    }
  }

  namaKolamnya?: any;
  idKolam?: any;
  namaKolam(data: any) {
    this.namaKolamnya = data.nama;
    this.idKolam = data.id;
  }

  addKualitasAir() {
    const data = {
      kolam_id: this.inputKualitasAir.kolam_id,
      suhu_kolam: this.inputKualitasAir.suhu_kolam,
      tgl: this.inputKualitasAir.tgl,
      waktu: this.inputKualitasAir.waktu,
      note: this.inputKualitasAir.note,
    };
    this.kualitasAirService.create(data)
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

  deleteAllKualitasAir(id: any) {
    this.kolamService.showKolam(id).subscribe({
      next: (res: any) => {
        res.data.inputkualitasair.forEach((element: any) => {
          this.kualitasAirService.deleteKualitasAir(element.id).subscribe(res => {
            this.listKolam();
          })
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
