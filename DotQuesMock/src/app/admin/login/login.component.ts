import { Component, OnInit } from '@angular/core';
import { Login} from '../models/login.model';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
   
  }

  onLoginSubmit(){
    debugger;
    if(this.loginForm.value.email='raghava' && this.loginForm.value.password == 'welcome'){
      console.log('success');
    }else{
      this.loginForm.invalid;
    }
  }

}
