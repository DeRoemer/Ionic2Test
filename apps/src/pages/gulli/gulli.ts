import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Gulli page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-gulli',
  templateUrl: 'gulli.html'
})
export class GulliPage {

  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    this.items =
        [
          {
            name: 'sweet',
            vorname: 'Phil'
          },
          {
            name: 'De',
            vorname: 'Roemer'
          }
        ];

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad GulliPage');
  }

}
