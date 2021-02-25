import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from 'node_modules/@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterConfig } from './router.config';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { CantidadOrdenPipe } from './cantidad-orden.pipe';
import { TotalOrdenPipe } from './total-orden.pipe';
import { AutorComponent } from './home/autor/autor.component';
import { LibroComponent } from './home/libro/libro.component';
import { EditorialComponent } from './home/editorial/editorial.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CantidadOrdenPipe,
    TotalOrdenPipe,
    AutorComponent,
    LibroComponent,
    EditorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
