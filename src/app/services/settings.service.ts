import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // tslint:disable-next-line: variable-name
  private _currentTheme = '';
  public observer: Subject<any> = new Subject();

  constructor() { }

  // tslint:disable-next-line: typedef
  get theme(){
    return this._currentTheme;
  }

  set theme(value){
    this._currentTheme = value;
    this.observer.next(value);
    console.log('setting theme', value);
  }
}
