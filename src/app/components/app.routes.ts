import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';



export const ROUTER: Routes=[
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'},
];
