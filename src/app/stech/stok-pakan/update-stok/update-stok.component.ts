import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-stok',
  templateUrl: './update-stok.component.html',
  styleUrls: ['./update-stok.component.css']
})
export class UpdateStokComponent implements OnInit {
  faSave = faSave;
  constructor() { }

  ngOnInit(): void {
  }

}
