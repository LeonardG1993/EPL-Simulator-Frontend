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

  set setUsername(username: string){
     this.user.username = username
  }

  get getPassword() {
    return this.registrationForm.get('password');
  }

  set setPassword(password: string){
    this.user.password = password
 }

  registerUser() {
    
    this.user.username = this.registrationForm.get('username')?.value;
    this.user.password = this.registrationForm.get('password')?.value;
    
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
    console.log(this.registrationForm.get('username')?.value);
    console.log(this.registrationForm.get('password')?.value);
    if(this.registrationForm.get('username')?.value === ''){
      this.warningTextMessage = 'Please enter a username'
    } else if (this.registrationForm.get('password')?.value === ''){
      this.warningTextMessage = 'Please enter a password'
    } else if (this.registrationForm.get('username')?.value.length < 6){
      this.warningTextMessage = 'Username must be at least 6 characters'
    } else if (this.registrationForm.get('password')?.value.length < 6){
      this.warningTextMessage = 'Password must be at least 6 characters'
    } else {
      console.log(this.registrationForm.get('username')?.value);
      console.log(this.registrationForm.get('password')?.value);
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
