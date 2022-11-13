import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../model/User";
import {Question} from "../model/Question";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient : HttpClient) { }

  public getQuestions(id : string, active : boolean){
    let params = new HttpParams()
      .set('id', id)
      .set('active', active.toString())
    return this.httpClient.get("api/getQuestions", {params: params});
  }

  createUser(question : Question){
    return this.httpClient.post("api/saveUser", question);
  }
}
