import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  // tslint:disable-next-line: variable-name
  base_url = 'https://test-marketplace-api.herokuapp.com/api/';

  constructor(
    public http: HttpClient
  ) { }

  endpoint: any = {
    getCars: `${this.base_url}car/list`,
    getCarbySlug: (slug) => `${this.base_url}car/${slug}`,
    editCarbySlug: (slug) => `${this.base_url}car/edit/${slug}`,
    login: `${this.base_url}user/signin`
  };

  // tslint:disable-next-line: typedef
  // getCarList() {
  //   return this.http.get('https://test-marketplace-api.herokuapp.com/api/car/list');
  // }

  // tslint:disable-next-line: typedef
  getCarbySlug(slug: string) {
    return this.http.get(`https://test-marketplace-api.herokuapp.com/api/car/${slug}`);
  }

  // tslint:disable-next-line: typedef
  request(method: string, url: endpointType, urlParameter: string = null, requestBody = null) {
    const newUrl = urlParameter == null ? this.endpoint[url] : this.endpoint[url](urlParameter);
    return requestBody == null ? this.http[method](newUrl) : this.http[method](newUrl, requestBody);
  }
}

export type endpointType  = 'getCars' | 'getCarbySlug' | 'editCarbySlug' | 'login';
