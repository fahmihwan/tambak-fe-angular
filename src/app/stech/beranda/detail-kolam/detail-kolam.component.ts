import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faInfoCircle, faPen, faThumbsDown, faTrash } from '@fortawesome/free-solid-svg-icons';
import { KolamService } from 'src/app/services/kolam/kolam.service';
import { PakanService } from 'src/app/services/pakan/pakan.service';
import { SamplingService } from 'src/app/services/sampling/sampling.service';

@Component({
  selector: 'app-detail-kolam',
  templateUrl: './detail-kolam.component.html',
  styleUrls: ['./detail-kolam.component.css']
})
export class DetailKolamComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash;
  faInfoCircle = faInfoCircle;
  constructor(
    private pakanApi: PakanService,
    private kolamApi: KolamService,
    private samplingApi: SamplingService,
    private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    const idKolam = this.route.snapshot.params['id'];
    this.listDetail(idKolam);

  }

  dataDetail: any;
  listDetail(idKolam: any) {
    this.kolamApi.showKolam(idKolam).subscribe(res => {
      this.dataDetail = res;
      console.log(this.dataDetail)
    })
  }

  modalPanen: any;
  modalInfoPanen(data: any) {
    this.modalPanen = data.panens;
  }


}
