import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./component/login/login.component";
import {CreateUserComponent} from "./component/create-user/create-user.component";
import {UserDetailsComponent} from "./component/user-details/user-details.component";

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full' },
  {path : 'login', component : LoginComponent },
  {path : 'createUser', component : CreateUserComponent },
  {path : 'userDetails', component : UserDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
