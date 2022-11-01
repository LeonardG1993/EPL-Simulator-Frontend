import { LoginComponent } from 'src/pages/login/login.component';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isLoggedIn: boolean = this.logIn.isLoggedIn

  constructor(private logIn: LoginComponent) { }

  ngOnInit(): void {
  }

  logOut(){
    return this.isLoggedIn = false  
  }
  

}
