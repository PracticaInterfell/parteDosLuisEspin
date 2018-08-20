import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

/*
  Generated class for the BookingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookingProvider {

  private url: String = 'https://dev.tuten.cl:443/TutenREST/rest/user/';
  
  constructor(public http: HttpClient) {
    console.log('Hello BookingProvider Provider');
  }

  getBookings(obj: any, email: string): Observable<any> {
    let httpOptions: any = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'adminemail': obj.email,
        'token': obj.sessionTokenBck,
        'app': 'APP_BCK'
      })
    };
    return this.http.get<any>(this.url + email + "/bookings?current=true", httpOptions);
  }

}
