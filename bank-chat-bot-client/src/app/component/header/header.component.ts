import { Component, OnInit } from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedinUser: User;
  sessionStorage1= sessionStorage;
  parser = JSON.parse

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loggedinUser = JSON.parse(<string>sessionStorage.getItem("userData"));
  }

  logout() {
    sessionStorage.removeItem("userData")
    this.router.navigate(['/login']);
  }

  getUserDetails(){
    return JSON.parse(<string>sessionStorage.getItem("userData"));
  }
}
