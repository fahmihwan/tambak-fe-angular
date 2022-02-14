import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCloudDownloadAlt, faEye, faPen, faPlusCircle, faSmog, faTemperatureHigh, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-daftar-kolam',
  templateUrl: './daftar-kolam.component.html',
  styleUrls: ['./daftar-kolam.component.css']
})
export class DaftarKolamComponent implements OnInit {
  // fontawesome
  faSmog = faSmog;
  faPlusCircle = faPlusCircle;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faTemperatureHigh = faTemperatureHigh;
  faEye = faEye;
  faPen = faPen;

  constructor(private kolamService: KolamService, private router: Router) { }
  public loading = false;
  ngOnInit(): void {
    this.listKolam();

  }


  //suhu kolam
  suhuKolam(data: any) {
    if (data.length !== 0) {
      return data.at(-1).suhu_kolam
    } else {
      return 0;
    }
  }

  idKolam?: any;
  namaKolamnya?: any;
  namaKolam(data: any) {
    this.namaKolamnya = data.nama;
    this.idKolam = data.id;
  }


  listDataKolam: any = [];
  listKolam() {
    this.loading = true;
    this.kolamService.listKolam().subscribe((res: any) => {
      this.listDataKolam = res.data;
      this.loading = false;

    })

  }




  deleteKolam(id: any) {
    this.kolamService.deleteKolam(id)
      .subscribe({
        next: (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Data Berhasil Dihapsus',
            showConfirmButton: false,
            timer: 1500
          })
          this.listKolam();
        },
        error: (e) => console.error(e)
      });
  }






}
