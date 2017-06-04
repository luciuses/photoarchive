import { Component, OnInit } from '@angular/core';
import {LoginService} from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
title = 'Please enter yor credentials:';
name = 'noname';
password = '';
constructor(private loginService: LoginService) {
}

  login() {
    if(this.loginService.login()){
      this.title = 'Hello '+this.name+"!";
    }else{
      this.title = 'Login is failed, please try again!';
    };
  }

  ngOnInit() {
  }
}
