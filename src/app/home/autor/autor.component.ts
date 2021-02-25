import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {
  autores : any;
  url = "http://localhost:8085/api";
  urlPost = "http://localhost:8085/api/autor";
  formAutor: FormGroup;
  vista: boolean= false;
  frm: any;
  vistaFacturas : boolean= false;
  ordenesCompletas: any;
  detalle: any;
  respose: any;
  
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    this.formAutor = this.fb.group({
      'strNomCompleto': ['', Validators.required],
      'dateNacimiento': [''],
      'strCiudad': ['', Validators.minLength(3)],
      'strEmail': ['', Validators.email],
    })
  }

  ngOnInit(): void {
    this.vista=false;
    this.httpClient.get([this.url,"autor"].join('/'))
    .subscribe( data=>{
      this.autores = data;
      console.log("===>"+data);
    },
    error => {
      console.error(error);
    }) ;
  }

  volver (){
    this.router.navigate(['/home']);
  }

  guardarAutor(){
    let  autor = {
      strNomCompleto: this.formAutor.controls.strNomCompleto.value,
      dateNacimiento: this.formAutor.controls.dateNacimiento.value,
      strEmail: this.formAutor.controls.strEmail.value,
      strCiudad: this.formAutor.controls.strCiudad.value
    }
    console.log(autor);
    this.httpClient.post<any>(this.urlPost, autor).subscribe(data=>{
      this.respose = data;
      alert("Guardardo con exito");
      this.volver();
    },
    error => {
      alert("Error")
      console.error(error);
    })
  }

}
