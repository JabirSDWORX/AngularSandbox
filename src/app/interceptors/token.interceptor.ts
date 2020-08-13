import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public storage: StorageService) {}

  skipUrl = ['signin'];

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('inside interceptor');
    let intercept = true;
    for (const url of this.skipUrl){
      if (request.url.includes(url)){
        intercept = false;
      }
    }

    if (!this.storage.get('token')){
      intercept = false;
    }

    if (intercept){
      request = request.clone({
        setHeaders: {Authorization: this.storage.get('token')}
      });
    }
    return next.handle(request);
  }
}
