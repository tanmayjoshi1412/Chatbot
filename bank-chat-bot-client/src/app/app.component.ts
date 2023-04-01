import { Component } from '@angular/core';
import {UserService} from "./service/user.service";
import {QuestionService} from "./service/question.service";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RJFC BANK';
  userData: any;

  ngOnInit(): void {
    this.userService.userLogin$.subscribe(user => {
      this.userData = this.userService.getLoggedinUserData();
    })
  }


  constructor(private userService: UserService) {
    debugger

    this.userService.userLogin$.subscribe(user => {
      this.userData = this.userService.getLoggedinUserData();
    })
  }




}
