import { Component, OnInit } from '@angular/core';
import { faCloudDownloadAlt, faEye, faPen, faPlusCircle, faSmog, faTemperatureHigh, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { KolamService } from 'src/app/services/kolam/kolam.service';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.component.html',
  styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {
  faSmog = faSmog;
  faPlusCircle = faPlusCircle;
  faCloudDownloadAlt = faCloudDownloadAlt;
  faTemperatureHigh = faTemperatureHigh;
  faEye = faEye;
  faPen = faPen;


  constructor(private kolamService: KolamService) { }

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

  // temperature
  temperature(data: any): any {
    if (data.length !== 0) {
      let result = data.at(-1).suhu_kolam - data[0].suhu_kolam
      if (result > 0) {
        return "+" + result.toFixed(3);
      }
      return result.toFixed(3);
    } else {
      return 0;
    }
  }

  lamaBudidaya?: number;
  umurBudidaya(data: any): any {
    if (data.sikluses.length !== 0) {
      let i = 0;
      while (data.sikluses[i]) {
        this.lamaBudidaya = data.sikluses[i].lama_budidaya
        i++;
      }
      return this.lamaBudidaya
    } else {
      return 0;
    }
  }


  public loading = false;
  listData: any = [];
  listKolam() {
    this.loading = true
    this.kolamService.listKolam().subscribe(res => {
      this.listData = res;
      this.loading = false;
    })
  }

  namaKolamnya?: any;
  namaKolam(data: any) {
    this.namaKolamnya = data.nama;
  }


}
