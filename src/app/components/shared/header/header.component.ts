import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../services/settings.service';
import { EndpointsService } from '../../../services/endpoints.service';
import { StorageService } from '../../../services/storage.service';
import { User } from '../../../models/user.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  themeColor = 'light';
  loginForm: FormGroup;
  inputPasswordType = 'password';
  showLoginForm = true;
  userDetails: User = new User();

  constructor(
    public setting: SettingsService,
    public formBuild: FormBuilder,
    public endpoint: EndpointsService,
    public storage: StorageService
  ) {
    this.loginForm = this.formBuild.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.setting.observer.subscribe(x => {
      this.themeColor = x;
      console.log('Color is ', this.themeColor);
    });
    this.checkStorageToken();
    this.userDetails = this.storage.get('user');
  }

  // tslint:disable-next-line: typedef
  login(){
    console.log('Email and Password', this.loginForm.value);

    this.endpoint.request('post', 'login', null, this.loginForm.value).subscribe( response => {

      if (response){
        console.log('ResponseToken', response.token);
        // tslint:disable-next-line: no-string-literal
        this.storage.set('token', response['token']);
        // tslint:disable-next-line: no-string-literal
        this.storage.set('user', response['user']);
        // tslint:disable-next-line: no-string-literal
        this.userDetails = response['user'];
        this.showLoginForm = false;
        // console.log('Response', response);
      }
    });
  }

  // tslint:disable-next-line: typedef
  viewToggle(){
    this.inputPasswordType = ( this.inputPasswordType === 'password' ) ? 'text' :  'password';
  }

  // tslint:disable-next-line: typedef
  checkStorageToken(){
    this.showLoginForm = (this.storage.get('token')) ? false : true;
  }

  // tslint:disable-next-line: typedef
  logOut(){
    this.showLoginForm = true;
    this.storage.remove('token');
    this.storage.remove('user');
  }
}
