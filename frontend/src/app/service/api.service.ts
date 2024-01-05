import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url:string = "http://localhost:8084/cart";
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>(this.url);
   }
}
