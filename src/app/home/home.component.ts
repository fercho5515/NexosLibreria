import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opcion: number = 0;
  menu = true;
  dropdownState: boolean = false
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  cambiaPestana () {
    this.opcion=1;
    this.menu=false;
  }

  volver (){
    this.router.navigate(['/home']);
    this.menu = true;
    this.opcion=0;
  }

}
