import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient: HttpClient ) { }

  obtenerArchivoJson(archivo:string){
    return this.httpClient.get("assets/"+ archivo +".json")
  }

}
