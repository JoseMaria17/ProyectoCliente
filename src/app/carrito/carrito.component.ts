import { Component } from '@angular/core';
import { ScriptsService } from '../servicios/scripts.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  constructor(private scriptService: ScriptsService) {
    scriptService.carga(["carrito"]);
  }
}
