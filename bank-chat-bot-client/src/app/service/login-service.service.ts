import { Injectable } from '@angular/core';
import {User} from "../model/User";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private userService : UserService,
              private httpClient : HttpClient,
              private route: Router) { }

  login(userData : User){
    return this.httpClient.post("api/login", userData);
  }


}
