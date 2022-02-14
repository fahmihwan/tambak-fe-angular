
import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { faBookOpen, faChartBar, faChartLine, faLeaf, faPen, faTable, faTrash } from '@fortawesome/free-solid-svg-icons';
import { StokPakanService } from 'src/app/services/stok-pakan/stok-pakan.service';




@Component({
  selector: 'app-stok-pakan',
  templateUrl: './stok-pakan.component.html',
  styleUrls: ['./stok-pakan.component.css']
})
export class StokPakanComponent implements OnInit {

  constructor(private stokService: StokPakanService) {

  }

  faPen = faPen;
  faTrash = faTrash;
  ngOnInit(): void {
    this.listStokPakan()

  }

  totalSemuaStokPakan?: number = 0;
  listPakan: any = [];
  public loading = false;
  listStokPakan() {
    this.loading = true;
    this.stokService.listStokPakan().subscribe((e: any) => {
      this.listPakan = e.data;
      e.data.forEach((element: any) => {
        this.totalSemuaStokPakan += element.total_berat;
      });
      this.loading = false;

    })
  }







}
