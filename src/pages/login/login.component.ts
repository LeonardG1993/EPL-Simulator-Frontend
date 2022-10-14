import { NavbarComponent } from 'src/components/navbar/navbar.component';
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
  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  loginErrMsg: string = '';
  form = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private auth: AuthService,
    private register: RegisterComponent) { }

  ngOnInit(): void { 
    
  }

  logIn(){
    console.log(this.form.username);
    console.log(this.form.password);
    
    this.username = this.form.username
    this.password = this.form.password

    if(!this.username.trim() || !this.password.trim()) {
      this.loginErrMsg = 'Failed Login';
      return;
    }
    
    this.auth.login(this.username, this.password)
    .subscribe(
      (response) => {
        console.log(response)   
        this.loginOrNot(response) 
      }, 
      () => {
        this.loginErrMsg = 'Login Failed'
      }
    )

  }

  openModal(){
    this.router.navigate(['/register']);
  }

  loginOrNot(response: any){
    if (!response){
      this.router.navigate(['/login']);
      this.username = ''
      this.password = ''
      return;
      
    } else if (response){
      console.log(response)
      console.log(this.isLoggedIn);
      
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      this.router.navigate(['/home']);
      return;
    }    
  }
}

