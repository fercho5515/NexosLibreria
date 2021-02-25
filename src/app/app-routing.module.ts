import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutorComponent} from './home/autor/autor.component';
import { LibroComponent} from './home/libro/libro.component';
import { EditorialComponent} from './home/editorial/editorial.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'home',component: HomeComponent},
  {path: 'autor', component:AutorComponent},
  {path: 'libro', component:LibroComponent},
  {path: 'editorial', component:EditorialComponent},
  {path: '**',component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
