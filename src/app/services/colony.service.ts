import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Colony } from '../models/colony'

@Injectable({
  providedIn: 'root'
})
export class ColonyService {

  constructor(private http: HttpClient) { }


  getColonies(): Observable<Colony[]>{
    return this.http.get<Colony[]>(environment.apiURL + "/colonies");
  }


  getColony(id: String): Observable<Colony>{
    return this.http.get<Colony>(environment.apiURL + "/colonies/getColony/" + id);
  }


  addColony(newColony: Colony): Observable<any>{
    return this.http.post(environment.apiURL + '/colonies/new/' + localStorage.getItem("userEmail"), newColony);
  }


  modifyColony(colonyModified: Colony, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/colonies/update/" + id + "/" + localStorage.getItem("userEmail"), colonyModified);
  }


  deleteColony(colonyModified : Colony, id: String): Observable<any>{
    return this.http.delete<Colony>(environment.apiURL + "/colonies/delete/"+ id + "/" + localStorage.getItem("userEmail"));
  }

  getNumberColonies(): Observable<any>{
    return this.http.get<Number>(environment.apiURL + 'colonies/getNumber')
  }
}
