import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sandbox';
  name = 'Jabir';

  num1: number;
  num2: number;
  operation: string;
  result: number = 0;


  // tslint:disable-next-line: typedeftest
  calculate(){
    alert(this.num1);
    alert(this.num2);
    this.result = this.num1 + this.num2;
  }
}
