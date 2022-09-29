import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = url;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient, private router: Router) { }

  login (username: string, password: string): Observable<any> {
    const payload = {username, password}

    return this.http.post<any>(url + '/login', payload, { observe: 'response' })
  }

  logout(): void{
    this.router.navigate(['/']);
  }






}
