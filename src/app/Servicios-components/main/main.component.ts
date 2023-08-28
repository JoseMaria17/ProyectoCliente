import { Component} from '@angular/core';
import { ScriptsService } from '../../servicios/scripts.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent {



  constructor(private scriptService: ScriptsService) {
  scriptService.carga(["productos"]);
  }
}








