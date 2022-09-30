import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/services/auth.service';


declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModal: any;
  user: AppComponent = new AppComponent;
  isLoggedIn: boolean = this.user.isLoggedIn;
  

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  logIn(){
    this.isLoggedIn = true;
    this.router.navigate(['/home']);
  }

  openModal(){
    this.router.navigate(['/login/register']);
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }

  closeAndRegister(){
    this.auth.registerUser();
    this.closeModal();
  }



}
