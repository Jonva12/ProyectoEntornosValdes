import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'datos.html',
})
export class DatosPage {

	coche:any;
	url:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.coche = navParams.get('coche');
  	this.url="https://www.youtube.com/embed/"+this.coche.youtube;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }
}
