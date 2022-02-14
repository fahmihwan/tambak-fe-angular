import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { stok_pakan } from 'src/app/models/stok_pakan';
import { StokPakanService } from 'src/app/services/stok-pakan/stok-pakan.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-input-stok',
  templateUrl: './input-stok.component.html',
  styleUrls: ['./input-stok.component.css']
})
export class InputStokComponent implements OnInit {
  faSave = faSave;
  constructor(
    private stokPakanService: StokPakanService,
    private router: Router) { }

  ngOnInit(): void {
  }

  inputStokPakan: stok_pakan = {
    id: 0,
    nama: '',
    total_berat: 0,
    harga: 0,
    tgl_beli: '',
    tgl_expired: '',
    note: '',
  }
  submitted = false;
  addPakan() {
    const data = {
      nama: this.inputStokPakan.nama,
      total_berat: this.inputStokPakan.total_berat,
      harga: this.inputStokPakan.harga,
      tgl_beli: this.inputStokPakan.tgl_beli,
      tgl_expired: this.inputStokPakan.tgl_expired,
      note: this.inputStokPakan.note,
    }

    this.stokPakanService.create(data)
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
          this.router.navigate(['/stech/stok-pakan/persediaan-pakan'])
        },
        error: (e) => console.error(e)
      });

  }

}
