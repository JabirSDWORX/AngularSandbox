import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public storage: StorageService
  ) { }

  cars = [
    {
      // tslint:disable-next-line: object-literal-key-quotes
      '_id': '5db57675ddb3ad0d6139bd1a',
      // tslint:disable-next-line: object-literal-key-quotes
      'ref': '26411',
      // tslint:disable-next-line: object-literal-key-quotes
      'slug': 'Mitsubishi-ASX',
      // tslint:disable-next-line: object-literal-key-quotes
      'name': 'Mitsubishi ASX',
      // tslint:disable-next-line: object-literal-key-quotes
      'body_type': 'SUV',
      // tslint:disable-next-line: object-literal-key-quotes
      'engine': '1590cc',
      // tslint:disable-next-line: object-literal-key-quotes
      'mileage': 'N/A',
      // tslint:disable-next-line: object-literal-key-quotes
      'fuel_type': 'Petrol',
      // tslint:disable-next-line: object-literal-key-quotes
      'transmission': 'Manual',
      // tslint:disable-next-line: object-literal-key-quotes
      'door_count': '5',
      // tslint:disable-next-line: object-literal-key-quotes
      'image_car': 'https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/image/iol/2018/09/07/16937570/IOLmot16aug18_ASX_b-1.jpg',
      // tslint:disable-next-line: object-literal-key-quotes
      'price': 1085000,
      // tslint:disable-next-line: object-literal-key-quotes
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
      // tslint:disable-next-line: object-literal-key-quotes
      'desc_excerpt': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
      // tslint:disable-next-line: object-literal-key-quotes
      'date_online': '2019-10-01',
      // tslint:disable-next-line: object-literal-key-quotes
      'date_offline': '2019-12-01',
      // tslint:disable-next-line: object-literal-key-quotes
      'currency': 'MUR',
      // tslint:disable-next-line: object-literal-key-quotes
      'contact_phone': '7697757656',
      // tslint:disable-next-line: object-literal-key-quotes
      'contact_email': 'info@yahoo.fr'
    },
    {
      // tslint:disable-next-line: object-literal-key-quotes
      '_id': '5db71ebdc685060017250b5f',
      // tslint:disable-next-line: object-literal-key-quotes
      'ref': 'MER326473',
      // tslint:disable-next-line: object-literal-key-quotes
      'name': 'MERCEDES BENZ',
      // tslint:disable-next-line: object-literal-key-quotes
      'body_type': 'N/A',
      // tslint:disable-next-line: object-literal-key-quotes
      'engine': '6.2 L',
      // tslint:disable-next-line: object-literal-key-quotes
      'mileage': '58 225',
      // tslint:disable-next-line: object-literal-key-quotes
      'fuel_type': 'Gasoline',
      // tslint:disable-next-line: object-literal-key-quotes
      'transmission': 'AT',
      // tslint:disable-next-line: object-literal-key-quotes
      'door_count': '5',
      // tslint:disable-next-line: object-literal-key-quotes
      'image_car': 'https://res.cloudinary.com/djzskjmzy/image/upload/v1572281815/sm9zrtqyh30rgvbzpqnr.jpg',
      // tslint:disable-next-line: object-literal-key-quotes
      'price': 26567423,
      // tslint:disable-next-line: object-literal-key-quotes
      'slug': 'MERCEDES-BENZ',
      // tslint:disable-next-line: object-literal-key-quotes
      'description': 'For more information and photos, please send us inquiry, or contact us.',
      // tslint:disable-next-line: object-literal-key-quotes
      'desc_excerpt': 'For more information and photos, please send us inquiry...',
      // tslint:disable-next-line: object-literal-key-quotes
      'date_online': '2019-10-01',
      // tslint:disable-next-line: object-literal-key-quotes
      'date_offline': '2020-02-02',
      // tslint:disable-next-line: object-literal-key-quotes
      'currency': 'MUR',
      // tslint:disable-next-line: object-literal-key-quotes
      'contact_phone': '3781596436',
      // tslint:disable-next-line: object-literal-key-quotes
      'contact_email': 'merdz@gmail.com',
    },
    {
      // tslint:disable-next-line: object-literal-key-quotes
      '_id': '5f1d2a81cd48360017d8faea',
      // tslint:disable-next-line: object-literal-key-quotes
      'ref': '30990',
      // tslint:disable-next-line: object-literal-key-quotes
      'name': 'A4 Allroad (8KH, B8) ',
      // tslint:disable-next-line: object-literal-key-quotes
      'body_type': '2.0 TFSI quattro',
      // tslint:disable-next-line: object-literal-key-quotes
      'engine': 'AUDI',
      // tslint:disable-next-line: object-literal-key-quotes
      'mileage': '575',
      // tslint:disable-next-line: object-literal-key-quotes
      'fuel_type': 'Petrol',
      // tslint:disable-next-line: object-literal-key-quotes
      'transmission': 'Direct Injection',
      // tslint:disable-next-line: object-literal-key-quotes
      'door_count': '4',
      // tslint:disable-next-line: object-literal-key-quotes
      'image_car': 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/audi-a4-allroad-uk-2017-web-2501.jpg',
      // tslint:disable-next-line: object-literal-key-quotes
      'price': 133364567,
      // tslint:disable-next-line: object-literal-key-quotes
      'slug': 'A4-Allroad-(8KH,-B8)-',
      // tslint:disable-next-line: object-literal-key-quotes
      'description': 'The 7-pin electrical kit for theAUDI A4 Allroad is produced by the manufacturer Trail-Tec.\n\nIf possible you can turn off parking assistance of your AUDI A4 Allroad with a push on a dashboard button.',
      // tslint:disable-next-line: object-literal-key-quotes
      'desc_excerpt': 'The 7-pin electrical kit for theAUDI A4 Allro...',
      // tslint:disable-next-line: object-literal-key-quotes
      'date_online': '26/07/2019',
      // tslint:disable-next-line: object-literal-key-quotes
      'date_offline': '26/08/2020',
      // tslint:disable-next-line: object-literal-key-quotes
      'currency': 'MUR',
      // tslint:disable-next-line: object-literal-key-quotes
      'contact_phone': '53687543',
      // tslint:disable-next-line: object-literal-key-quotes
      'contact_email': 'bilkiss@yopmail.com',
    }
  ];

  // tslint:disable-next-line: typedef
  getCarById(id) {
    return this.cars.find(x => x._id === id);
  }

  // tslint:disable-next-line: typedef
  deleteCarById(id){
    const newCarlist = this.cars.filter( x => x._id !== id);
    this.cars = newCarlist;

    return newCarlist;
  }

  // tslint:disable-next-line: typedef
  // get cars(){
  //   return this.storage.get('cars');
  // }

  // set cars(value){
  //   this.storage.set('cars', value);
  // }

  // tslint:disable-next-line: typedef
  editCar(carId, carData){
    // tslint:disable-next-line: prefer-const
    let carList = this.storage.get('cars');
    let index = 0;

    carList.forEach((x, i) => {
      if (x._id === carId){
        index = i;
      }
    });

    carList[index].name = carData.name;
    carList[index].description = carData.description;

    this.storage.set('cars', carList);
  }
}
