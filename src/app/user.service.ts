import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //inject HttpClient obj
  constructor(private hc:HttpClient) { }

  //create user
  createUser(userObj):Observable<any>{
    return this.hc.post("/user/createuser",userObj)
  }

  //login user
  loginUser(credObj):Observable<any>{
    return this.hc.post("/user/login",credObj)
  }

  //get user by username
  getUser(username):Observable<any>{
    return this.hc.get(`/user/getuser/${username}`)
  }
}
