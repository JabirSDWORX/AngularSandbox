export class User {
  // tslint:disable-next-line: variable-name
  _id: string;
  role: string;
  username: string;
  password: string;
  email: string;
  // tslint:disable-next-line: variable-name
  first_name: string;
  // tslint:disable-next-line: variable-name
  last_name: string;
  // tslint:disable-next-line: variable-name
  register_date: string;
  // tslint:disable-next-line: variable-name
  user_ref: string;
  // tslint:disable-next-line: typedef
  get fullname(){
    return this.first_name + ' ' + this.last_name;
  }
}

