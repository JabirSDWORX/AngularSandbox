import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-button-name',
  templateUrl: './button-name.component.html',
  styleUrls: ['./button-name.component.scss']
})
export class ButtonNameComponent implements OnInit {

  constructor(public dummyService: DummyService) { }

  ngOnInit(): void {
  }

}
