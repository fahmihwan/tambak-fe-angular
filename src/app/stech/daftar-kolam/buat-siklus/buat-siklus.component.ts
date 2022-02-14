import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSave, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { Siklus } from 'src/app/models/siklus';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { SiklusService } from 'src/app/services/siklus/siklus.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buat-siklus',
  templateUrl: './buat-siklus.component.html',
  styleUrls: ['./buat-siklus.component.css']
})
export class BuatSiklusComponent implements OnInit {
  faSave = faSave;
  constructor(
    private kolamService: KolamService,
    private siklusService: SiklusService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectKolam()
  }


  inputSiklus: Siklus = {
    id: 0,
    kolam_id: 0,
    tgl_tebar: '',
    total_tebar: 0,
    perhitungan: 0,
    spesies_udang: '',
    umur_awal_udang: 0,
    target_sr: 0,
    lama_budidaya: 0,
    note: '',
  };

  selectedKolam: any = [];
  selectKolam() {
    this.kolamService.listKolam().subscribe((e: any) => {
      this.selectedKolam = e.data;

    })
  }

  submitted = false;
  addSiklus() {
    const data = {
      kolam_id: this.inputSiklus.kolam_id,
      tgl_tebar: this.inputSiklus.tgl_tebar,
      total_tebar: this.inputSiklus.total_tebar,
      perhitungan: this.inputSiklus.perhitungan,
      spesies_udang: this.inputSiklus.spesies_udang,
      umur_awal_udang: this.inputSiklus.umur_awal_udang,
      target_sr: this.inputSiklus.target_sr,
      lama_budidaya: this.inputSiklus.lama_budidaya,
      note: this.inputSiklus.note,
    }

    console.log(data)
    this.siklusService.createSiklus(data).subscribe({
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
    })

  }

}
