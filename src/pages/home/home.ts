import { Component } from '@angular/core';//imports de los componentes de angular para utilizar con el metodo
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DatosPage } from '../datos/datos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {//Exportamos la clase HomePage para crear el objeto lista y los constructores y metodos
  lista:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  	this.lista= [
        { modelo:"Ford Focus", 
         genero:"Turismo",
         puertas:"3",
         imagen:"../../assets/imgs/Focus.jpg", 
         youtube:"JowEs4zrmM4", 
         descripcion:"Nuevo modelo del ford focus, turismo de 5 puertas y grandes prestaciones." },
        
        { modelo:"Ford Fiesta",
         genero:"Turismo", 
         puertas:"5",
         imagen:"../../assets/imgs/Fiesta.jpg", 
         youtube:"GnJRjSrBS-0", 
         descripcion:"Este modelo es una version reducida y moderna del focus." },
        
        { modelo:"Ford Fusion", 
         genero:"Turismo", 
         puertas:"5", 
         imagen:"../../assets/imgs/Fusion.jpg", 
         youtube:"39EJ944MPiI", 
         descripcion:"Modelo entre familiar y deportivo del conocido modelo de ford mondeo." }

    ];
  }
  //Metodo para elegir coche al que pasamos el parametro coche
  elegirCoche(coche){
    this.navCtrl.push(DatosPage, {
      coche: coche
    });
  }
  //Metodo para crear coches
  crearCoche(){
    let prompt = this.alertCtrl.create({
      title: 'Añadir Coche',
      inputs:[
        {
          name: 'modelo',
          placeholder: 'Modelo'
        },
        {
          type: 'number',
          name: 'puertas',
          placeholder: 'Nº de puertas'
        },
        {
          name: 'genero',
          placeholder: 'Genero'
        },
        {
          name: 'imagen',
          placeholder: 'Enlace imagen'
        },
        {
          name: 'youtube',
          placeholder: 'Id del video'
        },
        {
          name: 'descripcion',
          placeholder: 'Descripcion'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Guardar',
          handler: data => {
            this.finalizarCreacion(data);
          }
        }
      ]
    });
    prompt.present();
  }
  //metodo que guarda los datos
  finalizarCreacion(data){
    if (data.modelo!="" && data.puertas!="" && data.genero!="" && data.descripcion!=""){
        this.lista.push(data);
    }

  }

  eliminarCoche(coche){
    const index: number = this.lista.indexOf(coche);
    this.lista.splice(index, 1);
  }
}
