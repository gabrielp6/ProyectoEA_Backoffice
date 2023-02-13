import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(environment.apiURL + "/users");
  }


  getUser(id: String): Observable<User>{
    return this.http.get<User>(environment.apiURL + "/users/getUser/" + id);
  }


  async addUser(newUser: User): Promise<Observable<any>>{
    return await this.http.post(environment.apiURL + '/users/new/' + localStorage.getItem("userEmail"), newUser);
  }


  modifyUser(userModified: User, id: String): Observable<any>{
    this.getUsers();
    return this.http.put(environment.apiURL + "/users/update/" + id, userModified);
  }


  async deleteUser(userModified: User, id: String): Promise<Observable<any>>{
    return this.http.delete(environment.apiURL + "/users/delete/"+ id + "/" + localStorage.getItem("userEmail"));
  }

  getNumberUsers(): Observable<any>{
    return this.http.get<Number>(environment.apiURL + 'users/getNumber')
  }

  login(user: User): Observable<any>{
    return this.http.post(environment.apiURL + "/users/login/", user);
  }

  addPermission(userModified: User, id: String): Observable<any>{
    return this.http.put(environment.apiURL + "/users/addPermission/" + id + "/" + localStorage.getItem("userEmail"), userModified);
  }

}
