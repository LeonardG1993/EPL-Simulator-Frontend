import { Router } from '@angular/router';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientMessage } from 'src/models/client-message';
import { User } from 'src/models/user';
import { UserService } from 'src/services/user.service';

declare var window: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable()
export class RegisterComponent implements OnInit {
  formModal: any;
  user: User = new User(0, ``, ``, 0, []);
  clientMessage: ClientMessage = new ClientMessage('');
  registrationForm!: FormGroup;
  warningTextMessage : string = '';


  constructor(private fb: FormBuilder, private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: [``, [Validators.required, Validators.minLength(6)]],
      password: [``, [Validators.required, Validators.minLength(6)]],
    });
    
      this.formModal = new window.bootstrap.Modal(
        document.getElementById('exampleModal')
      );

      this.formModal.show();
  }

  get getUsername(){
    return this.registrationForm.get('username');
  }

  get getPassword() {
    return this.registrationForm.get('password');
  }

  registerUser() {
    this.userService.registerUser(this.user)
    .subscribe(
      data => this.clientMessage.message = `Successfully Registered ${data.username}`,
      error => this.clientMessage.message = `Something went wrong: Error ${error}`
    )

  }

  closeModal(){
    console.log('clicked');
    this.router.navigate(['/login']);
    this.formModal.hide();
  }

  closeAndRegister(){
    if(this.registrationForm.get('username')?.value === ''){
      this.warningTextMessage = 'Please enter a username'
    } else if (this.registrationForm.get('password')?.value === ''){
      this.warningTextMessage = 'Please enter a password'
    } else{
      console.log('clicked');
    this.registerUser();
    console.log('registering');
    this.closeModal();
    }
    
  }

  openModal(){
    this.formModal.show();
  }

  // closer() {
  //   window.addEventLister(
  //     'click',
  //   (event: { target: { closest: (arg0: string) => any; }; })=> {
  //     if (!event.target.closest(".modal"))
  //     {
  //       this.closeModal()
  //     }
  //   })
  //   this.router.navigate(['/login']);

  // }
  

  

}
