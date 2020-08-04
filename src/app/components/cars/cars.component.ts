import { Component, OnInit, TemplateRef } from '@angular/core';

import { DataService } from '../../services/data.service';
import { CarModel } from '../../models/car-model';
import { CarDetailsComponent } from './car-details/car-details.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  CarList: CarModel[] = [];

  filterCarList: CarModel[] = [];

  searchInput = '';

  carBrands = [];

  modalRef: BsModalRef;

  message: string;

  constructor(
    public dataService: DataService,
    public modalService: BsModalService
  ) { }

  ngOnInit(): void {
    // this.dataService.initStorage(); // not in use
    this.getCars();
    // this.carBrands = [...new Set(this.CarList.map(r => r.name))];  Same as below (shorter form)
    this.carBrands = this.CarList.map((r) => {
      if (!this.carBrands.includes(r.name)){
        return r.name;
      }
    });
    console.log(this.carBrands);
  }

  // tslint:disable-next-line: typedef
  getCars(){
    this.CarList = this.dataService.cars;
    this.filterCarList = [...this.CarList];
    console.log('carList: ', this.CarList);
  }

  // tslint:disable-next-line: typedef
  deleteCurrentCar(id){
    this.CarList = this.dataService.deleteCarById(id);
    this.modalRef.hide();
    this.getCars();
  }

  // tslint:disable-next-line: typedef
  searchCar(){
    console.log(this.searchInput);
    this.searchInput = this.searchInput.toLowerCase();
    this.filterCarList = this.CarList.filter(x => x.name.toLowerCase()
          .includes(this.searchInput));
  }

  // tslint:disable-next-line: typedef
  clearSearch(){
    this.filterCarList = this.CarList;
    this.searchInput = '';
  }

  // tslint:disable-next-line: typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  // Modal Decline
  declineCarDeletion(): void {
    this.modalRef.hide();
  }
}
