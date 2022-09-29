import { Component, OnInit } from '@angular/core';


declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModal: any;

  constructor() { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModal')
    );
  }

  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }



}
