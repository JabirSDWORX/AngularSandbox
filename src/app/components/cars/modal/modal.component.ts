import { Component, OnInit, TemplateRef, Input } from '@angular/core';

import { DataService } from '../../../services/data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CarModel } from 'src/app/models/car-model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  modalRef: BsModalRef;

  message: string;

  carList: CarModel[] = [];

  @Input() car: CarModel;

  constructor(
    public dataService: DataService,
    public modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  declineCarDeletion(): void {
    this.modalRef.hide();
  }

  // tslint:disable-next-line: typedef
  deleteCurrentCar(id) {
    this.carList = this.dataService.deleteCarById(id);
    this.modalRef.hide();
  }

  // tslint:disable-next-line: typedef
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
