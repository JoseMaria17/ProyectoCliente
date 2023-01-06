import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class WhatsappService {
  url:string='https://api.whatsapp.com/send?phone=3053138872&text=Hola';
  ib:string='%0A';

  constructor() { }

skipLine(sentence:string){
  const urlBase='https://api.whatsapp.com/send?phone=3053138872&text=Hola';
  this.url=urlBase+this.ib+sentence+this.ib;
}

sendHelp(product:string, cantidad:number){
 let inf='Me interesa el servicio '+product+' ¿Tienes mas informacion al respecto?'
  if(cantidad>1){
    inf='Me interesan los siguientes servicios: '+product+' ¿Tienes mas informacion al respecto?'
  }
  this.skipLine(inf)
  return this.url
}
}
