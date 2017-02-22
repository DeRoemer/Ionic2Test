import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()

export class Data {

  data: any[];
  loaddata: any;

  constructor(private http: Http) {
    this.data =         [
      {
        id: 0,
        name: 'sweet',
        vorname: 'Phil'
      },
      {
        id: 1,
        name: 'De',
        vorname: 'Roemer'
      },
      {
        id: 2,
        name: 'De',
        vorname: 'Fritzel'
      }
    ];
  }
  public load(){

    return new Promise(resolve =>
        {
          this.http.get("https://portal.phlu.ch/phlu.portal/evento/getAppWbCoursesCoursedata")
              .map(res => res.json())
              .subscribe(data =>
                {
                  this.loaddata = data;
                  resolve(this.loaddata);
                  console.log(this.loaddata);
                });
        });
  }

  public message: any = "Hello World!";

  setMessage(message)
  {
    this.message = message;
  }

}
