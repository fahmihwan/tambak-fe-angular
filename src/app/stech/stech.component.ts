import { Component, OnInit } from '@angular/core';
import { faConciergeBell, faCookieBite, faHome, faPlusCircle, faTable, faTint, faVials } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stech',
  templateUrl: './stech.component.html',
  styleUrls: ['./stech.component.css']
})
export class StechComponent implements OnInit {
  // font awesome
  faHome = faHome;
  faTable= faTable;
  faPlusCircle=faPlusCircle;
  faCookieBite= faCookieBite;
  faTint = faTint;
  faVials= faVials;
  faConciergeBell= faConciergeBell;

  constructor() { }

  ngOnInit(): void {
    //  Toggle the side navigation
     const sidebarToggle = document.body.querySelector('#sidebarToggle');
     if (sidebarToggle) {
        //  Uncomment Below to persist sidebar toggle between refreshes
        //  if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //      document.body.classList.toggle('sb-sidenav-toggled');
        //  }
         sidebarToggle.addEventListener('click', event => {
             event.preventDefault();
             document.body.classList.toggle('sb-sidenav-toggled');
            //  localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
         });
     }
  }


}
