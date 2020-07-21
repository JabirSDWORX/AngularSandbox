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
  // tslint:disable-next-line: no-inferrable-types
  result: number = 0;

  // tslint:disable-next-line: typedef
  calculate(){
    // alert(this.num1);
    // alert(this.num2);

    switch (this.operation){
      case '-': {
        this.result = this.num1 - this.num2;
        break;
      }
      case '*': {
        this.result = this.num1 * this.num2;
        break;
      }
      case '/': {
        this.result = this.num1 / this.num2;
        break;
      }
      default: {
        this.result = this.num1 + this.num2;
        break;
      }
    }
  }
}
