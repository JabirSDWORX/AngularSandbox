import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  name = 'Whatever name';

  constructor() { }

  // tslint:disable-next-line: typedef
  changeName(name){
    this.name = name;
  }
}
