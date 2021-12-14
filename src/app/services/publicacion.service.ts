import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Publicacion } from '../models/publicacion'

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private http: HttpClient) { }

  
  getPublicaciones(): Observable<Publicacion[]>{
    return this.http.get<Publicacion[]>(environment.apiURL + "/publicaciones");
  }

  
  getPublicacion(id: String): Observable<Publicacion>{
    return this.http.get<Publicacion>(environment.apiURL + "/publicaciones/getPublicacion/" + id);
  }
  
  addPublicacion(nuevaPublicacion: Publicacion): Observable<any>{
    return this.http.post(environment.apiURL + '/publicaciones/new', nuevaPublicacion);
  }

  
  modificarPublicacion(publicacionmodificada: Publicacion, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/publicaciones/update/" + id, publicacionmodificada);
  }


  eliminarPublicacion(id: String): Observable<any>{
    return this.http.delete<Publicacion>(environment.apiURL + "/publicaciones/delete/"+ id);
  }


}