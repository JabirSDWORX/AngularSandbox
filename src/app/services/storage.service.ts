import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // tslint:disable-next-line: typedef
  set(key: string, data: any){
    const str = JSON.stringify(data);
    localStorage.setItem(key, str);
  }

  // tslint:disable-next-line: typedef
  get(key: string){
    const str = localStorage.getItem(key);
    return JSON.parse(str);
  }
}
