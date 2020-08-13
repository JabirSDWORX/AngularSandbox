import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { DataService } from '../../services/data.service';
import { CarModel } from '../../models/car-model';
import { CarDetailsComponent } from './car-details/car-details.component';
import { ModalComponent } from './modal/modal.component';
import { EndpointsService } from '../../services/endpoints.service';

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

  displayMode = true;

  constructor(
    public dataService: DataService,
    public modalService: BsModalService,
    public endpoint: EndpointsService
  ) { }

  ngOnInit(): void {
    // this.dataService.initStorage(); // not in use
    this.getCars();
  }

  // tslint:disable-next-line: typedef
  getCars(){
    // this.endpoint.getCarList().subscribe(result => {
    //   // tslint:disable-next-line: no-string-literal
    //   this.CarList = result['data'];
    //   this.filterCarList = [...this.CarList];
    //   this.carBrands = this.CarList.map((r) => {
    //     if (!this.carBrands.includes(r.name)){
    //       return r.name;
    //     }
    //   });
    // });

    // same as above
    this.endpoint.request('get', 'getCars').subscribe(result => {
      this.CarList = result.data;
      this.filterCarList = [...this.CarList];
      this.carBrands = this.CarList.map((r) => {
        if (!this.carBrands.includes(r.name)){
          return r.name;
        }
      });
    });
  }

  // tslint:disable-next-line: typedef
  deleteCurrentCar(id){
    this.CarList = this.dataService.deleteCarById(id);
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

  // tslint:disable-next-line: typedef
  // openModal() {
  //   this.modalRef = this.modalService.show(ModalComponent, {class: 'modal-sm'});
  // }

  // tslint:disable-next-line: typedef
  toggleCarDisplay(){
    this.displayMode = !this.displayMode;
  }
}
