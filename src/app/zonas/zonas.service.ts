import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Zona} from '../zona';
import {environment} from '../../environments/environment';

@Injectable()
export class ZonasService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getZonas(): Observable<Zona[]> {
    return this.http.get<Zona[]>(environment.url + 'zonas');
  }
}
