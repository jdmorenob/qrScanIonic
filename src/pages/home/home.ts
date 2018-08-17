import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

//Components
import { ToastController } from 'ionic-angular';

//Plugins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor( private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  scan(){
  	console.log("Scanning...");
  	this.barcodeScanner.scan().then( (barcodeData) => {
    	//Success! Barcode data is here 
      console.log('result: ', barcodeData.text);
      console.log('format: ', barcodeData.format); 
      console.log('cancelado: ', barcodeData.cancelled); 
  	}, (err) => {
  	    console.error('Error:', err);
  	    this.mostrarError('Error: ' + err);
  	});
  }

  mostrarError(mensaje:string){
  	let toast = this.toastCtrl.create({
	    message: mensaje,
	    duration: 2500,
	    position: 'top'
	  });
  	toast.present();
  }

}
