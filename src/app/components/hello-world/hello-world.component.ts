import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {

  constructor(
    public dummy: DummyService
  ) { }

  ngOnInit(): void {
  }
}
