import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'process';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Denuncia } from '../models/denuncia'

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  constructor(private http: HttpClient) { }

  
  getDenuncias(): Observable<Denuncia[]>{
    return this.http.get<Denuncia[]>(environment.apiURL + "/denuncias");
  }

  
  getDenuncia(id: String): Observable<Denuncia>{
    return this.http.get<Denuncia>(environment.apiURL + "/denuncias/getDenuncia/" + id);
  }

  
  addDenuncia(nuevadenuncia: Denuncia): Observable<any>{
    return this.http.post(environment.apiURL + '/denuncias/new', nuevadenuncia);
  }

  
  modificarDenuncia(denunciamodificada: Denuncia, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/denuncias/update/" + id, denunciamodificada);
  }


  eliminarDenuncia(id: String): Observable<any>{
    return this.http.delete<Denuncia>(environment.apiURL + "/denuncias/delete/"+ id);
  }

}
