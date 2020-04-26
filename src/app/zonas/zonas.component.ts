import {Component, OnInit} from '@angular/core';
import {Zona} from '../zona';
import {ZonasService} from './zonas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.css']
})
export class ZonasComponent implements OnInit{

  public zonas: Zona[] = [];

  constructor(
    private zonasService: ZonasService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.zonasService.getZonas().subscribe( (response) => {
      this.zonas = response;
    });
  }

  nuevaZona(): void {
    this.router.navigateByUrl('nueva-zona');
  }
}
