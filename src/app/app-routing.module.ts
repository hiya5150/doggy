import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RandomDogComponent} from './views/random-dog/random-dog.component';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {AboutComponent} from './views/about/about.component';
import {HomeComponent} from './views/home/home.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'random', component: RandomDogComponent},
  {path: 'random/:name', component: RandomDogComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
