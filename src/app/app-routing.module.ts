import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelloWorldComponent} from './components/hello-world/hello-world.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarDetailsComponent } from './components/cars/car-details/car-details.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: 'hello', component: HelloWorldComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'car/:slug', component: CarDetailsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
