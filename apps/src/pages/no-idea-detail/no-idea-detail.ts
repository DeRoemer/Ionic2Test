import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the NoIdeaDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-no-idea-detail',
  templateUrl: 'no-idea-detail.html'
})
export class NoIdeaDetailPage {

  public course : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController)
  {
    this.course = this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log(this.course);
  }

  showZgInfo(zg:string , bezeichnung:string)
  {
    let alert = this.alertCtrl.create(
        {
          title: 'Zielgruppe: ' + zg,
          subTitle: bezeichnung,
          buttons: [{
            text: 'OK',
            cssClass: 'phlu-bg-color border-color-light color-light'
          }]
        });
    alert.present();
  }

}
