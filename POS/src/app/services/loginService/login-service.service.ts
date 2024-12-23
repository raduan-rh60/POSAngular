import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShopData} from "../../pages/company/users/users.component";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl: string = "http://localhost:8080/api/user/login";

  constructor(private http: HttpClient) {  }

  loginDataToken(username:string,password:string):any {
  const param = new HttpParams().set("username", username).set("password", password);
  return this.http.post(this.baseUrl, param);
  }

  usershowing():Observable<ShopData[]> {
    return this.http.get<ShopData[]>(`${this.baseUrl}/data`);
}
}
