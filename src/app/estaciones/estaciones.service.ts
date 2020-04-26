import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Estacion} from './estacion';
import {environment} from '../../environments/environment';

@Injectable()
export class EstacionesService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getEstaciones(): Observable<Estacion[]> {
    return this.http.get<Estacion[]>(environment.url + 'estaciones');
  }
}
