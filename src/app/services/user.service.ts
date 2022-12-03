import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  login(data: any) {
    return this.http.post<any>('https://localhost:44309/api/User/login', data);
  }

 insert(data:any, headers:any) {
   return this.http.post<any>('https://localhost:44309/api/User/insert', data);
    }
}

