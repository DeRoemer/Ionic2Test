import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { NoIdeaDetailPage } from '../no-idea-detail/no-idea-detail';

/*
  Generated class for the NoIdea page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-no-idea',
  templateUrl: 'no-idea.html'
})
export class NoIdeaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data) {
    console.log(data);
    console.log(data.data);
  }

  openItem(item:any) {
    this.navCtrl.push(NoIdeaDetailPage , {item} )
    //console.log(item);
  }

}
