import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';

const routes: Routes = [
  { path: 'hello', component: HelloWorldComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'car/:id', component: CarDetailsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
