import { Injectable } from '@angular/core';
import { User } from '../model/User'
import {Subject} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userLogin = new Subject<any>();
  userLogin$ = this.userLogin.asObservable();

  constructor(private httpClient : HttpClient) { }

  userData : User = new User();
  private _masterData : any = {};


  setUserData(userData : any){
      this.userData = userData;
      this.userLogin.next(userData);

  }

  public getUserData(userName : string){
    let params = new HttpParams()
      .set('userName', userName)
    return this.httpClient.get("api/getUserData", {params: params});
  }

  createUser(userData : User){
    return this.httpClient.post("api/saveUser", userData);
  }
}
