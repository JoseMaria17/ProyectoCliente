import { Component, OnInit } from '@angular/core';
/* import { CarritoService } from 'src/app/servicios/carrito.service'; */
import { CookieService } from 'ngx-cookie-service';
//import * as data from '../assets/servicios.json';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { WhatsappService } from 'src/app/servicios/whatsapp.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

Servicios:any[]=[];
Carrito:any[]=[];
toltal:number=0;
idCarrito:String='';
url: string | undefined;
title!: string;


constructor(private cookie:CookieService, private service: ServicioService, private whatsapp: WhatsappService){}
  ngOnInit(): void {
    /* this.Servicios= */
     this.service.obtenerArchivoJson('servicios').subscribe((response:any)=>{
      this.Servicios=response;
      this.idCarrito =this.cookie.get('carrito')

      var splitted = this.idCarrito.split(",", 3);
      splitted.forEach(id_elemto => {
        this.AgregarCarrito(Number(id_elemto))
      });

     })
  

}


helpInformation(){
let solicitud=''
this.Carrito.forEach(element => {
solicitud=solicitud+','+element.nombre
});

this.whatsapp.sendHelp(solicitud, this.Carrito.length)
this.url=this.whatsapp.url
}


AgregarCarrito(id:any){
    let index = this.Servicios.findIndex(x => x.id === id);
    let indexC = this.Carrito.findIndex(x => x.id === id);

  if(indexC===-1){
      if(this.Carrito.length==0){
        this.cookie.set('carrito',id);
      }else{
        this.cookie.set('carrito', this.idCarrito +','+id);
      }
      this.Carrito.push({
        'id':this.Servicios[index].id,
        'img':this.Servicios[index].img,
        'nombre':this.Servicios[index].titulo,
        'precio':this.Servicios[index].precio_d,
         cantidad:1
         });

    }/* else{
      this.Carrito[indexC].cantidad=this.Carrito[indexC].cantidad+1
    }*/
    this.toltal=this.toltal+this.Servicios[index].precio_d;

  }

  borrarCurso(id:any){

    let indexC = this.Carrito.findIndex(x => x.id === id);
    this.toltal=this.toltal-(this.Carrito[indexC].precio*this.Carrito[indexC].cantidad);
    this.Carrito.splice(indexC,1)

  }

  vaciarCarrito(){
    this.Carrito=[];
    this.toltal=0;
    this.cookie.set('carrito','');
  }

 }


