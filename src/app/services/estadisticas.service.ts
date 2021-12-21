import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estadisticas } from '../models/estadisticas'

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http: HttpClient) { }

  
  getEstadisticas(): Observable<Estadisticas[]>{
    return this.http.get<Estadisticas[]>(environment.apiURL + "/estadisticas");
  }


}