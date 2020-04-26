import {Component} from '@angular/core';
import {Zona} from "./zona";
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // ...
  items: NbMenuItem[] = [
    {
      title: 'Zonas',
      link: 'zonas'
    },
    {
      title: 'Estaciones',
      link: 'estaciones'
    }
  ];


}
