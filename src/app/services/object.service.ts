import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Object } from '../models/object'

@Injectable({
  providedIn: 'root'
})
export class ObjectService {

  constructor(private http: HttpClient) { }


  getObjects(): Observable<Object[]>{
    return this.http.get<Object[]>(environment.apiURL + "/objects");
  }


  getObject(id: String): Observable<Object>{
    return this.http.get<Object>(environment.apiURL + "/objects/getObject/" + id);
  }


  addObject(newObject: Object): Observable<any>{
    return this.http.post(environment.apiURL + '/objects/new/' + localStorage.getItem("userEmail"), newObject);
  }


  modifyObject(objectModified: Object, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/objects/update/" + id + "/" + localStorage.getItem("userEmail"), objectModified);
  }


  deleteObject(objectModified: Object, id: String): Observable<any>{
    return this.http.delete<Object>(environment.apiURL + "/objects/delete/"+ id + "/" + localStorage.getItem("userEmail"));
  }

  getNumberObjects(): Observable<any>{
    return this.http.get<Number>(environment.apiURL + 'objects/getNumber')
  }
}
