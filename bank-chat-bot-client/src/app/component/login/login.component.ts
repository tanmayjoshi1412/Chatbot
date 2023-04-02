import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {T} from "@angular/cdk/keycodes";
import {User} from "../../model/User";
import {LoginServiceService} from "../../service/login-service.service";
import {error} from "@angular/compiler/src/util";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | undefined;
  loggedinUser: any;
  username = '';
  password = '';
  invalidLogin = false;
  @Input() error: string | null | undefined;

  constructor(private builder: FormBuilder,
              private loginService: LoginServiceService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.createloginForm();
  }

  createloginForm() {
    this.loginForm = this.builder.group({
      emailId: new FormControl(),
      accessKey: new FormControl()
    })
  }

  login() {
    var user: User = this.loginForm?.value

    this.loginService.login(user).subscribe(user => {
        this.loggedinUser = user;
        this.userService.setUserData(user);
        sessionStorage.setItem("userData",JSON.stringify(user));
        this.router.navigate(['/userDetails']);
      }, error => {
        console.log("error", error)
      }, () => {

      }
    )
  }


  createUser() {
    this.router.navigate(['/createUser']);
  }
}
