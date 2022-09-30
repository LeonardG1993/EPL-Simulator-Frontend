import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { ClientMessage } from 'src/models/client-message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = url;
  clientMessage: ClientMessage = new ClientMessage('');
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };
  private userService: UserService = new UserService(this.http);

  user: User = new User(0, ``, ``, 0, []);
  registrationForm = this.fb.group({
    username: [``, Validators.required, Validators.minLength(6)],
    password: [``, Validators.required, Validators.minLength(6)],
  });

  constructor(private http: HttpClient,
    private router: Router, 
    private fb: FormBuilder) { }

  login (username: string, password: string): Observable<any> {
    const payload = {username, password}

    return this.http.post<any>(url + '/login', payload, { observe: 'response' })
  }

  logout(): void{
    this.router.navigate(['/']);
  }

  registerUser() {
    this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully Registered ${data.username}`,
      error => this.clientMessage.message = `Something went wrong: Error ${error}`
    )

  }






}
