import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cat } from '../models/cat'

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }


  getCats(): Observable<Cat[]>{
    return this.http.get<Cat[]>(environment.apiURL + "/cats");
  }


  getCat(id: String): Observable<Cat>{
    return this.http.get<Cat>(environment.apiURL + "/cats/getCat/" + id);
  }


  addCat(newCat: Cat): Observable<any>{
    return this.http.post(environment.apiURL + '/cats/new/' + localStorage.getItem("userEmail"), newCat);
  }


  modifyCat(catModified: Cat, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/cats/update/" + id + "/" + localStorage.getItem("userEmail"), catModified);
  }


  deleteCat(catModified: Cat, id: String): Observable<any>{
    return this.http.delete<Cat>(environment.apiURL + "/cats/delete/"+ id + "/" + localStorage.getItem("userEmail"));
  }

  getNumberCats(): Observable<any>{
    return this.http.get<Number>(environment.apiURL + 'cats/getNumber')
  }
}
