import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faPlusCircle, faSync, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Sampling } from 'src/app/models/sampling';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { SamplingService } from 'src/app/services/sampling/sampling.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sampling',
  templateUrl: './sampling.component.html',
  styleUrls: ['./sampling.component.css']
})
export class SamplingComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faPen = faPen;
  faTrash = faTrash;
  faSync = faSync;

  inputSampling: Sampling = {
    id: 0,
    kolam_id: 0,
    tgl: '',
    waktu: '',
    berat_udang: 0,
    note: '',
  };
  submitted = false;

  constructor(private kolamService: KolamService,
    private samplingService: SamplingService,
    private router: Router) { }

  ngOnInit(): void {
    this.listKolam();
  }

  public loading = false;
  listDataKolam: any = [];
  listKolam() {
    this.loading = true;
    this.kolamService.listKolam().subscribe((res: any) => {
      this.listDataKolam = res.data;
      this.loading = false;
    })
  }

  namaKolamnya?: any;
  idKolam?: any;
  namaKolam(data: any) {
    this.namaKolamnya = data.nama;
    this.idKolam = data.id;
  }

  //pemberian Pakan
  isiSampling(data: any) {
    if (data.length !== 0) {
      return data.at(-1).berat_udang;
    } else {
      return 0;
    }
  }

  addSampling() {
    const data = {
      kolam_id: this.inputSampling.kolam_id,
      tgl: this.inputSampling.tgl,
      waktu: this.inputSampling.waktu,
      berat_udang: this.inputSampling.berat_udang,
      note: this.inputSampling.note,
    };

    this.samplingService.create(data)
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

  deleteAllSampling(id: any) {
    this.kolamService.showKolam(id).subscribe({
      next: (res: any) => {
        res.data.inputsampling.forEach((element: any) => {
          this.samplingService.deleteSampling(element.id).subscribe((res: any) => {
            this.listKolam()
          });
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data Berhasil Dihapsus',
            showConfirmButton: false,
            timer: 1500
          })
        });
      },
      error: (e) => {
        alert('data gagal di hapus')
        console.error(e)
      }
    })
  }

}
