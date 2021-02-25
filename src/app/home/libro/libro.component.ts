import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { Router } from '../../../../node_modules/@angular/router';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libros : any;
  url = "http://localhost:8085/api";
  urlPost = "http://localhost:8085/api/libro";
  formLibro: FormGroup;
  vista: boolean= false;
  frm: any;
  vistaFacturas : boolean= false;
  autores: any;
  editoriales: any;
  respose: any;
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private fb: FormBuilder,
  ) { 
    this.formLibro = this.fb.group({
      'strTitulo': ['', Validators.required],
      'strGenero': ['', Validators.required],
      'intNumPag': ['', Validators.required],
      'intAnio': ['', Validators.required,],
      'editorial': [''],
      'autor': ['', Validators.required]
      
    })
  }

  ngOnInit(): void {
    this.vista=false;
    this.httpClient.get([this.url,"autor"].join('/'))
    .subscribe( data=>{
      this.autores = data;
    },
    error => {
      console.error(error);
    });

    this.httpClient.get([this.url,"editorial"].join('/'))
    .subscribe( data=>{
      this.editoriales = data;
    },
    error => {
      console.error(error);
    }) ;

  }

  volver (){
    this.router.navigate(['/home']);
  }

  guardarLibro(){
    let  libro = {
      strTitulo: this.formLibro.controls.strTitulo.value,
      intAnio: this.formLibro.controls.intAnio.value,
      strGenero: this.formLibro.controls.strGenero.value,
      intNumPag: this.formLibro.controls.intNumPag.value,
      editorial: {
        id: this.formLibro.controls.editorial.value
      },
      autor:{
        id:this.formLibro.controls.autor.value
      }
    }
    console.log(libro);
    this.httpClient.post<any>(this.urlPost, libro).subscribe(data=>{
      this.respose = data;
      alert("Guardardo con exito");
      this.volver();
    },
    error => {
      alert("Error:"+error.error.message)
      console.error(error);
    })
  }

}
