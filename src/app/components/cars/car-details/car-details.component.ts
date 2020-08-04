import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../services/data.service';
import { CarModel } from '../../../models/car-model';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  carid = '';
  selectedCar: CarModel = new CarModel();

  constructor(
    public router: ActivatedRoute,
    public dataService: DataService

  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.carid = this.router.snapshot.params['id'];
    this.selectedCar = this.dataService.getCarById(this.carid);
    console.log('selectedCar: ', this.selectedCar);
  }

}
