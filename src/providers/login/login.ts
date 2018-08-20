import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginProvider {

  private url: String = 'https://dev.tuten.cl:443/TutenREST/rest/user/';

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  mLogIn(obj: any): Observable<any> {
    let httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'email': obj.email,
        'password': obj.password,
        'app': obj.app
      })
    };
    return this.http.put<any>(this.url+ obj.email,obj,httpOptions);
  }

}
