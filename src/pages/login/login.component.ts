import { RegisterComponent } from './../register/register.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from 'src/models/user';
import { ClientMessage } from 'src/models/client-message';
import { UserService } from 'src/services/user.service';


declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModal: any;
  app: AppComponent = new AppComponent;
  isLoggedIn: boolean = this.app.isLoggedIn;
  username: string = '';
  password: string = '';
  loginErrMsg: string = '';
  user: User = new User(0, ``, ``, 0, []);
  clientMessage: ClientMessage = new ClientMessage('');
  registrationForm!: FormGroup;

 
  

  constructor(private router: Router, private auth: AuthService,
     private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void { 
    this.registrationForm = this.fb.group({
    username: [``, Validators.required, Validators.minLength(6)],
    password: [``, Validators.required, Validators.minLength(6)],
  });
  
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
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
    this.formModal.show();
  }

  closeModal(){
    console.log('clicked');
    this.router.navigate(['/login']);
    this.formModal.hide();
  }

  registerUser() {
    this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully Registered ${data.username}`,
      error => this.clientMessage.message = `Something went wrong: Error ${error}`
    )

  }

  closeAndRegister(){
    console.log('clicked');
    this.registerUser();
    console.log('registering');
    this.closeModal();
  }



}
