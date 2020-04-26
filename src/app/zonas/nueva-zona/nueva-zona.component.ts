import { Component, OnInit } from '@angular/core';
import {Zona} from '../../zona';

@Component({
  selector: 'app-nueva-zona',
  templateUrl: './nueva-zona.component.html',
  styleUrls: ['./nueva-zona.component.css']
})
export class NuevaZonaComponent implements OnInit {

  public zona: Zona = new Zona();

  constructor() { }

  ngOnInit(): void {
  }

  public guardar(): void {
    console.log('zona:', this.zona);
  }
}
