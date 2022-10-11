import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  app: AppComponent = new AppComponent;
  isLoggedIn: boolean = this.app.isLoggedIn;
  username: string = '';
  password: string = '';
  loginErrMsg: string = '';

  constructor(private router: Router, private auth: AuthService,
    private register: RegisterComponent) { }

  ngOnInit(): void { 
    
  }

  logIn(){

    if(!this.username.trim() || !this.password.trim()) {
      this.loginErrMsg = 'Failed Login';
      return;
    }
    this.auth.login(this.username, this.password)
    .subscribe(
      (response)=> {
        console.log(response)
      }
    )
    this.isLoggedIn = true;
    
    this.router.navigate(['/home']);
  }

  openModal(){
    this.router.navigate(['/register']);
  }



}
