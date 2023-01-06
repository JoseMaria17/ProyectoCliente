import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  constructor(private cookie:CookieService) { }
  Servicios:any[]=[];
  Carrito:any[]=[];
  toltal:number=0;
  idCarrito:String='';

  ngOnInit(): void {

  }

  iniciarCarrito(){
    this.idCarrito =this.cookie.get('carrito')
    var splitted = this.idCarrito.split(",", 3);
    splitted.forEach(id_elemto => {
      this.AgregarCarrito(Number(id_elemto))
    });

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

    }else{
      this.Carrito[indexC].cantidad=this.Carrito[indexC].cantidad+1
    }
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

 /*  mas(id:any){
    let indexC = this.Carrito.findIndex(x => x.id === id);
    this.Carrito[indexC].cantidad=this.Carrito[indexC].cantidad+1
    this.toltal=this.toltal+this.Carrito[indexC].precio;

  }
 */
  /* menos(id:any){
    let indexC = this.Carrito.findIndex(x => x.id === id);
    this.toltal=this.toltal-this.Carrito[indexC].precio;
    if(this.Carrito[indexC].cantidad==1){
      this.Carrito.splice(indexC,1)
    }else{
      this.Carrito[indexC].cantidad=this.Carrito[indexC].cantidad-1

    }

  } */

  getCarrito(){
    return this.Carrito
  }

  getServicios(){
    return this.Servicios
  }

  /*setCarrito(carritos: any[]){
    this.datos.push(carritos)
  }*/
}
