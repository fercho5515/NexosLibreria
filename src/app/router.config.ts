import { Route } from '../../node_modules/@angular/router';

import { HomeComponent } from './home/home.component';
import { AutorComponent} from './home/autor/autor.component';
import { EditorialComponent} from './home/editorial/editorial.component';
import { LibroComponent} from './home/libro/libro.component';
export const RouterConfig: Route[] = [
    {path:'home', component: HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'autor', component: AutorComponent},
    {path:'libro', component: LibroComponent},
    {path:'editorial', component: EditorialComponent},
    {path:'**', redirectTo:'home'},
]