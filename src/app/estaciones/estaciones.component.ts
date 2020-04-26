import {Component, OnInit} from '@angular/core';
import {Estacion} from './estacion';
import {EstacionesService} from './estaciones.service';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {

  public estaciones: Estacion[] = [];

  constructor(
    private estacionesService: EstacionesService
  ) {
  }

  ngOnInit(): void {
    this.estacionesService.getEstaciones().subscribe((response) => {
      this.estaciones = response;
    });
  }
}
