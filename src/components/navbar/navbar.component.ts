import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: AppComponent = new AppComponent;

  isLoggedIn: boolean = this.user.isLoggedIn

  constructor() { }

  ngOnInit(): void {
  }

}
