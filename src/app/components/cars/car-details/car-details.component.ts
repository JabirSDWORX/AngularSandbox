import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { DataService } from '../../../services/data.service';
import { CarModel } from '../../../models/car-model';
import { EndpointsService } from '../../../services/endpoints.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

  carid = '';

  selectedCar: CarModel = new CarModel();

  carForm: FormGroup;

  formFields = [];

  carDetails: CarModel = new CarModel();

  formLabels;

  constructor(
    public router: ActivatedRoute,
    public dataService: DataService,
    public fBuiler: FormBuilder,
    public endpoint: EndpointsService
  ) {
    this.initCarForm();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: no-string-literal
    this.carid = this.router.snapshot.params['slug'];
    this.selectedCar = this.dataService.getCarById(this.carid);
    this.formFields = Object.keys(this.carForm.controls);
    // console.log('formControls: ', this.carForm.controls);
    // console.log('Object', Object.keys(this.carForm.controls));
    this.getCar();
  }

  // tslint:disable-next-line: typedef
  initCarForm(){
    this.carForm = this.fBuiler.group({
      ref: ['', Validators.required],
      name: ['', Validators.required],
      slug: ['', Validators.required],
      desc_excerpt: ['', Validators.required],
      description: ['', Validators.required],
      date_online: ['', Validators.required],
      date_offline: ['', Validators.required],
      currency: ['', Validators.required],
      contact_phone: ['', Validators.required],
      contact_email: ['', Validators.required],
      body_type: ['', Validators.required],
      engine: ['', Validators.required],
      mileage: ['', Validators.required],
      fuel_type: ['', Validators.required],
      transmission: ['', Validators.required],
      door_count: ['', Validators.required],
      image_car: ['', Validators.required],
      price: ['', Validators.required]
    });
    this.formLabels = {
      body_type: 'Body Type',
      contact_phone: 'Contact Phone',
      desc_excerpt: 'Desc Exceprt',
      fuel_type : 'Fuel Type',
      door_count: 'Door Count',
      image_car: 'Image Car',
      date_online: 'Date Online',
      date_offline: 'Date Offline',
      contact_email: 'Contact Email',
      ref: 'Ref',
      description: 'Description',
      name: 'Name',
      slug: 'Slug',
      currency: 'Currency',
      engine: 'Engine',
      mileage: 'Mileage',
      transmission: 'Transmission',
      price: 'Price'
    };
  }

  // tslint:disable-next-line: typedef
  getLabel(field){
    if (this.formLabels[field]) { return this.formLabels[field]; }

    return field;
  }

  // tslint:disable-next-line: typedef
  updateCar(){
     // console.log('Updated Car: ', this.carForm.value);
    this.dataService.editCar(this.carid, this.carForm.value);
  }

  // tslint:disable-next-line: typedef
  // async getCar(){
  //   this.selectedCar = await this.endpoint.getCarbySlug(this.carid).toPromise<any>();
  //    // console.log('selected car', this.selectedCar);
  // }

  // same as above but async and promise
  // tslint:disable-next-line: typedef
   getCar(){
    this.endpoint.request('get', 'getCarbySlug', this.carid).subscribe(result => {
      console.log('getCar', result);
      this.carDetails = result;
      this.carForm.patchValue(this.carDetails);
    });
   }

  // tslint:disable-next-line: typedef
  editCarbySlug(){
    this.carDetails = this.carForm.value;
    console.log('CarDet', this.carDetails);
    this.endpoint.request('put', 'editCarbySlug', this.carid, this.carDetails).subscribe(result => {
      console.log('EditCar', result);
    }, error => {
      console.log('error: ', error);
    });
  }
}
