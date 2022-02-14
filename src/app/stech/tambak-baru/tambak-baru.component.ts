import { compilePipeFromMetadata, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowAltCircleLeft, faArrowLeft, faArrowRight, faSave, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { data } from 'jquery';


import { Kolam } from 'src/app/models/kolam';
import { Tambak } from 'src/app/models/tambak';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { TambakService } from 'src/app/services/tambak/tambak.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tambak-baru',
  templateUrl: './tambak-baru.component.html',
  styleUrls: ['./tambak-baru.component.css']
})
export class TambakBaruComponent implements OnInit {
  faSave = faSave;
  // faArrowLeft= faArrowLeft;
  faArrowAltCircleLeft = faArrowAltCircleLeft
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor(
    private tambakService: TambakService,
    private router: Router) { }


  ngOnInit(): void {


  }

  inputTambak: Tambak = {
    id: 0,
    nama: '',
    negara: '',
    alamat: '',
    jumlah_kolam: 0,
    zona_waktu: '',
    nama_awal_kolam: '',
    luas: 0,
  }

  isDisabledTambak = false;
  isDisabledKolam = true;
  disabledTambak() {
    this.isDisabledTambak = !this.isDisabledTambak;
    this.isDisabledKolam = !this.isDisabledKolam;
  }

  submitted = false;
  addTambak() {
    const dataTambak = {
      nama: this.inputTambak.nama,
      negara: this.inputTambak.negara,
      alamat: this.inputTambak.alamat,
      zona_waktu: this.inputTambak.zona_waktu,
      jumlah_kolam: 0,
      nama_awal_kolam: this.inputTambak.nama_awal_kolam,
      luas: this.inputTambak.luas,
    }

    this.tambakService.create(dataTambak).subscribe({
      next: (res) => {
        this.submitted = true;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Data Berhasil Ditambahkan',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/stech/berand']); // navigate to other page
      },
      error: (e) => console.error(e)
    })








    // let dataIdTambak: any = []
    // const lastIdKolam = new Promise((resolve: any) => {
    //   this.tambakService.create(dataTambak).subscribe((e: any) => {
    //     console.log('data sukses')
    //   })

    //   this.tambakService.getTambak().subscribe((e: any) => {
    //     e.data.forEach((data: any) => {
    //       dataIdTambak.push(data.id)
    //     })
    //     resolve(dataIdTambak.at(-1))
    //   })
    // })

    // lastIdKolam.then(() => {
    //   console.log(lastIdKolam)
    // })

  }



}
